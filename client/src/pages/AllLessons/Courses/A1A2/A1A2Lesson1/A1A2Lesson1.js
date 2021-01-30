import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import Notes from '../../../../../components/LessonComponents/Notes/Notes';
import LessonNavigation from '../../../../../components/LessonComponents/LessonNavigation/LessonNavigation';
import VideoCall from '../../../../../components/LessonComponents/VideoCall/VideoCall';
import A1A2Lesson1Pages from './A1A2Lesson1Pages';
import socket from '../../../../../components/LessonComponents/socketInit';
import InputWdropArea from '../../../../../components/LessonComponents/Input/InputWdropArea';
import PictureGallery from '../../../../../components/LessonComponents/PictureGallery/PictureGallery';

const A1A2Lesson1 = () => {
  const [page, setPage] = useState('page1');
  const { path } = useRouteMatch();
  const params = useParams();
  const roomId = `${path.split(':')[0]}${params.studentId}`;

  useEffect(() => {
    socket.emit('joinRoom', roomId);
    // eslint-disable-next-line
  }, []);

  const pages = {
    ls: 6,
    hw: 4,
  };

  const answers = ['ffs', 'tnt'];

  const answ = {
    a1: [`I don't know123`, 'I do not know1', `I dunno123`],
    a2: ['2'],
    a3: ['3'],
    a4: ['4'],
    a5: ['5'],
    a6: ['6'],
    a7: ['7'],
    a8: ['8'],
    a9: ['9'],
    a10: ['10'],
    a11: ['11'],
    a12: ['11'],
  };

  const P1Pictures = {
    p1:
      'https://res.cloudinary.com/cyborgx999/image/upload/v1603229695/sayprivet/lesson1/home_uudgrj.jpg',
    p2:
      'https://res.cloudinary.com/cyborgx999/image/upload/v1601729986/sayprivet/lesson1/1_6_o49tea.jpg',
    p3:
      'https://res.cloudinary.com/cyborgx999/image/upload/v1601729986/sayprivet/lesson1/1_7_cm9b8y.jpg',
    p4:
      'https://res.cloudinary.com/cyborgx999/image/upload/v1601729986/sayprivet/lesson1/1_5_r0dpoq.jpg',
    p5:
      'https://res.cloudinary.com/cyborgx999/image/upload/v1601729986/sayprivet/lesson1/1_4_klwwhk.jpg',
    p6:
      'https://res.cloudinary.com/cyborgx999/image/upload/v1601729986/sayprivet/lesson1/1_10_fqdghm.jpg',
    p7:
      'https://res.cloudinary.com/cyborgx999/image/upload/v1601729986/sayprivet/lesson1/1_9_jkvfzz.jpg',
    p8:
      'https://res.cloudinary.com/cyborgx999/image/upload/v1601729986/sayprivet/lesson1/1_8_xmg6yr.jpg',
    p9:
      'https://res.cloudinary.com/cyborgx999/image/upload/v1601729986/sayprivet/lesson1/1_3_jtu5us.jpg',
    p10:
      'https://res.cloudinary.com/cyborgx999/image/upload/v1601729986/sayprivet/lesson1/1_11_ntumzv.jpg',
    p11:
      'https://res.cloudinary.com/cyborgx999/image/upload/v1603229694/sayprivet/lesson1/relax_q641sb.jpg',
    p12:
      'https://res.cloudinary.com/cyborgx999/image/upload/v1601729986/sayprivet/lesson1/1_2_kpwyoe.jpg',
  };

  return (
    <div>
      <LessonNavigation
        socket={socket}
        eventName='pageChange'
        page={page}
        pages={pages}
        setPage={setPage}
      />
      <Notes socket={socket} eventName='notes' />
      <A1A2Lesson1Pages socket={socket} page={page} />
      <VideoCall roomId={roomId} />
      <PictureGallery pictures={P1Pictures} answers={answ} />
    </div>
  );
};

export default A1A2Lesson1;
