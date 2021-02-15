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
export const getLessonNotes = asyncHandler(async (req, res, next) => {
  // check if lesson exists
  console.log('getnotes');
  const foundLesson = await Lesson.findOne({
    lessonName: req.body.lessonName,
  });
  const notes = {
    sharedNotes: foundLesson.sharedNotes || '',
    privateNotes: foundLesson.privateNotes || '',
  };
  res.status(200).json({
    success: true,
    data: notes,
  });
});

// @desc  Create new lesson in db (if it doesn't exist) and save page data or find lesson and update page data
// @route POST /api/v1/lesson/save-pages
// @access Private
export const lessonSaveUpdatePages = asyncHandler(async (req, res, next) => {
  // we expect lessonName, pages: { pageQuestion: String, pageQuestionData: String}

  // check if lesson exists
  let findLesson = await Lesson.findOne({ lessonName: req.body.lessonName });

  if (!findLesson) {
    // create and return new if not found
    const lesson = await Lesson.create(req.body);
    return res.status(201).json({
      success: true,
      data: lesson,
    });
  } else {
    //try to update if pageQuestion is already in the db
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

    if (findLesson !== null) {
      // if it's not null, it has been found and updated, so we return it.
      return res.status(200).json({
        success: true,
        data: findLesson,
      });
    } else {
      // pageQuestion is not in the db, so we add it to the array and return it.
      findLesson = await Lesson.findOneAndUpdate(
        {
          lessonName: req.body.lessonName,
        },
        {
          $push: { pages: req.body.pages },
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
