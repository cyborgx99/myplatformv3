import asyncHandler from '../middleware/asyncHandler.js';
import Lesson from '../models/Lesson.js';

// @desc  Create new lesson in db (if it doesn't exist) and save notes or find lesson and update notes
// @route POST /api/v1/lesson/save-notes
// @access Private
export const lessonSaveUpdateNotes = asyncHandler(async (req, res, next) => {
  // we expect lessonName, privateNotes and / or sharedNotes from req.body

  // check if lesson exists
  let findLesson = await Lesson.findOne({ lessonName: req.body.lessonName });

  if (findLesson) {
    // update if found
    findLesson = await Lesson.findOneAndUpdate(
      { lessonName: req.body.lessonName },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    return res.status(200).json({
      success: true,
      data: findLesson,
    });
  }
  // create new if not found
  const lesson = await Lesson.create(req.body);
  res.status(201).json({
    success: true,
    data: lesson,
  });
});

// @desc Get all lesson notes
// @route GET /api/v1/lesson/get-notes/:lessonName
// @access Private
export const getCurrentLessonData = asyncHandler(async (req, res, next) => {
  // check if lesson exists
  console.log('Get Current Lesson Data');
  const foundLesson = await Lesson.findOne({
    lessonName: req.body.lessonName,
  });
  res.status(200).json({
    success: true,
    data: foundLesson,
  });
});

// @desc  Create new lesson in db (if it doesn't exist) and save page data or find lesson and update page data
// @route POST /api/v1/lesson/save-pages
// @access Private
export const lessonSaveUpdatePages = asyncHandler(async (req, res, next) => {
  // We expect lessonName: String, pages: { pageQuestion: String, pageQuestionData: String}

  // Check if lesson exists
  let findLesson = await Lesson.findOne({ lessonName: req.body.lessonName });

  if (!findLesson) {
    // Create and return new if not found
    const lesson = await Lesson.create(req.body);
    return res.status(201).json({
      success: true,
      data: lesson,
    });
  } else {
    // Check if a (unique) question is alredy in the array. If it isn't, add it.
    if (
      findLesson.pages
        .map((page) => page.pageQuestion)
        .indexOf(req.body.pages.pageQuestion) === -1
    ) {
      findLesson.pages.push(req.body.pages);
      await findLesson.save();

      return res.status(200).json({
        success: true,
        data: findLesson,
      });
    } else {
      // Rare case (we should not update anything unless the original lesson asset has been changed)
      //Update if pageQuestion is already in the db
      findLesson = await Lesson.findOneAndUpdate(
        {
          lessonName: req.body.lessonName,
          'pages.pageQuestion': req.body.pages.pageQuestion,
        },
        {
          'pages.$.pageQuestionData': req.body.pages.pageQuestionData,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      return res.status(200).json({
        success: true,
        data: findLesson,
      });
    }
  }
});
