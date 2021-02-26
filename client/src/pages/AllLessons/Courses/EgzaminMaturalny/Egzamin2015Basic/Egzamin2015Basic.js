import React, { useEffect } from 'react';
import AudioPlayer from '../../../../../components/LessonComponents/AudioPlayer/AudioPlayer';
import TextWithGaps from '../../../../../components/LessonComponents/Exercise/TextWithGaps';
import List from '../../../../../components/LessonComponents/List/List';
import Table from '../../../../../components/LessonComponents/Table/Table';
import { egzamin2015BasicAssets } from './Egzamin2015BasicAssets';

const Egzamin2015Basic = ({ page, socket, roomId, setTotalPages }) => {
  useEffect(() => {
    setTotalPages({
      p: [
        'Intro',
        'Listening 1',
        'Listening 2',
        'Listening 3',
        'Reading 1',
        'Reading 2',
        'Reading 3',
        'Reading 4',
        'Reading 5',
        'Test 1',
      ],
      hw: ['', ''],
    });
    // eslint-disable-next-line
  }, []);

  const {
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
    page10,
  } = egzamin2015BasicAssets;

  return (
    <>
      {page === 'page1' && (
        <>
          <List
            listData={page1.listData.data}
            listHeading={page1.listData.heading}
          />
          <br />
          <AudioPlayer
            socket={socket}
            eventPlay={'play1'}
            eventChange={'change1'}
            source={page1.audioSrc}
          />
        </>
      )}
      {page === 'page2' && (
        <>
          <h3>{page2.instruction}</h3>
          <br />
          <AudioPlayer
            socket={socket}
            eventPlay={'play1'}
            eventChange={'change1'}
            source={page2.audioSrc}
          />
          <Table
            socket={socket}
            roomId={roomId}
            page={page}
            tableHead={page2.tableData.tableHead}
            tableRowData={page2.tableData.tableRowData}
            tableOptions={page2.tableData.tableOptions}
          />
        </>
      )}
      {page === 'page3' && (
        <>
          <h3>{page3.instruction}</h3>
          <br />
          <div>
            <h4>Audio 1</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play3'}
              eventChange={'change3'}
              source={page3.audioSrc1}
            />
            <h4>Audio 2</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play4'}
              eventChange={'change4'}
              source={page3.audioSrc2}
            />
            <h4>Audio 3</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play4'}
              eventChange={'change4'}
              source={page3.audioSrc3}
            />
            <h4>Audio 4</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play4'}
              eventChange={'change4'}
              source={page3.audioSrc4}
            />
          </div>
          <List listData={page3.listData.data} />
          <Table
            socket={socket}
            roomId={roomId}
            page={page}
            tableHead={page3.tableData.tableHead}
            tableRowData={page3.tableData.tableRowData}
            tableOptions={page3.tableData.tableOptions}
          />
        </>
      )}
      {page === 'page4' && (
        <>
          <h3>{page4.instruction}</h3>
          <br />
          <div className='margin'>
            <h4>Tekst 1.</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play1'}
              eventChange={'change1'}
              source={page4.audioSrc1}
            />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page4.tableData.tableHead}
              tableRowData={page4.tableData.tableRowData1}
              tableOptions={page4.tableData.tableOptions}
            />
            <List
              listData={page4.listData.data1}
              listHeading={page4.listData.heading}
            />
            <br />
            <h4>Tekst 2.</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play2'}
              eventChange={'change2'}
              source={page4.audioSrc2}
            />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page4.tableData.tableHead}
              tableRowData={page4.tableData.tableRowData2}
              tableOptions={page4.tableData.tableOptions}
            />
            <List
              listData={page4.listData.data2}
              listHeading={page4.listData.heading}
            />
            <br />
            <h4>Tekst 3.</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play3'}
              eventChange={'change3'}
              source={page4.audioSrc3}
            />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page4.tableData.tableHead}
              tableRowData={page4.tableData.tableRowData3}
              tableOptions={page4.tableData.tableOptions}
            />
            <List
              listData={page4.listData.data3}
              listHeading={page4.listData.heading}
            />
            <br />
            <h4>Tekst 4.</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play4'}
              eventChange={'change4'}
              source={page4.audioSrc4}
            />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page4.tableData.tableHead}
              tableRowData={page4.tableData.tableRowData4}
              tableOptions={page4.tableData.tableOptions}
            />
            <List
              listData={page4.listData.data4}
              listHeading={page4.listData.heading}
            />
            <br />
            <h4>Tekst 5.</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play5'}
              eventChange={'change5'}
              source={page4.audioSrc5}
            />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page4.tableData.tableHead}
              tableRowData={page4.tableData.tableRowData5}
              tableOptions={page4.tableData.tableOptions}
            />
            <List
              listData={page4.listData.data5}
              listHeading={page4.listData.heading}
            />
            <br />
            <h4>Tekst 6.</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play6'}
              eventChange={'change6'}
              source={page4.audioSrc6}
            />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page4.tableData.tableHead}
              tableRowData={page4.tableData.tableRowData6}
              tableOptions={page4.tableData.tableOptions}
            />
            <List
              listData={page4.listData.data6}
              listHeading={page4.listData.heading}
            />
          </div>
        </>
      )}
      {page === 'page5' && (
        <>
          <h3>{page5.instruction}</h3>
          <br />
          <List listData={page5.listData.data} />
          <br />
          <h3>{page5.paragraphs.heading} </h3>
          <div>
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page5.tableData.tableHead}
              tableRowData={page5.tableData.tableRowData1}
              tableOptions={page5.tableData.tableOptions}
            />
            <p>{page5.paragraphs.p1}</p>
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page5.tableData.tableHead}
              tableRowData={page5.tableData.tableRowData2}
              tableOptions={page5.tableData.tableOptions}
            />
            <p>{page5.paragraphs.p2}</p>
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page5.tableData.tableHead}
              tableRowData={page5.tableData.tableRowData3}
              tableOptions={page5.tableData.tableOptions}
            />
            <p>{page5.paragraphs.p3}</p>
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page5.tableData.tableHead}
              tableRowData={page5.tableData.tableRowData4}
              tableOptions={page5.tableData.tableOptions}
            />
            <p>{page5.paragraphs.p4}</p>
          </div>
        </>
      )}
      {page === 'page6' && (
        <>
          <h3>{page6.instruction}</h3>
          <br />
          <h3>Tekst 1.</h3>
          <h3>{page6.paragraphs.heading1} </h3>
          <div>
            <p>{page6.paragraphs.p1}</p>
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page6.tableData.tableHead}
              tableRowData={page6.tableData.tableRowData1}
              tableOptions={page6.tableData.tableOptions}
            />
            <List listData={page6.listData.data1} />
            <br />
          </div>
          <h3>Tekst 2.</h3>
          <h3>{page6.paragraphs.heading2} </h3>
          <div>
            <p>{page6.paragraphs.p2}</p>
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page6.tableData.tableHead}
              tableRowData={page6.tableData.tableRowData2}
              tableOptions={page6.tableData.tableOptions}
            />
            <List listData={page6.listData.data2} />
            <br />
          </div>
          <h3>Tekst 3.</h3>
          <h3>{page6.paragraphs.heading3} </h3>
          <div>
            <p>{page6.paragraphs.p3}</p>
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page6.tableData.tableHead}
              tableRowData={page6.tableData.tableRowData3}
              tableOptions={page6.tableData.tableOptions}
            />
            <List listData={page6.listData.data3} />
            <br />
          </div>
        </>
      )}
      {page === 'page7' && (
        <>
          <h3>{page7.instruction}</h3>
          <h3>{page7.paragraphs.heading1} </h3>
          <i>
            <p> {page7.paragraphs.subheading} </p>
          </i>
          <div>
            <p>{page7.paragraphs.p1}</p>
            <p>{page7.paragraphs.p2}</p>
            <p>{page7.paragraphs.p3}</p>
            <p>{page7.paragraphs.p4}</p>
            <p>{page7.paragraphs.p5}</p>
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page7.tableData.tableHead}
              tableRowData={page7.tableData.tableRowData1}
              tableOptions={page7.tableData.tableOptions}
            />
            <List listData={page7.listData.data1} />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page7.tableData.tableHead}
              tableRowData={page7.tableData.tableRowData2}
              tableOptions={page7.tableData.tableOptions}
            />
            <List listData={page7.listData.data2} />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page7.tableData.tableHead}
              tableRowData={page7.tableData.tableRowData3}
              tableOptions={page7.tableData.tableOptions}
            />
            <List listData={page7.listData.data3} />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page7.tableData.tableHead}
              tableRowData={page7.tableData.tableRowData4}
              tableOptions={page7.tableData.tableOptions}
            />
            <List listData={page7.listData.data4} />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page7.tableData.tableHead}
              tableRowData={page7.tableData.tableRowData5}
              tableOptions={page7.tableData.tableOptions}
            />
            <List listData={page7.listData.data5} />
          </div>
        </>
      )}
      {page === 'page8' && (
        <>
          <h3>{page8.instruction}</h3>
          <br />
          <h3>{page8.textheading}</h3>
          <TextWithGaps
            socket={socket}
            roomId={roomId}
            page={page}
            TextWithGapsOptions={page8.textData.options}
            TextWithGapsData={page8.textData.data}
          />
        </>
      )}
      {page === 'page9' && (
        <>
          <h3>{page9.instruction}</h3>
          <br />
          <h3>{page9.textheading}</h3>
          <TextWithGaps
            socket={socket}
            roomId={roomId}
            page={page}
            TextWithGapsOptions={page9.textData.options}
            TextWithGapsData={page9.textData.data}
          />
          <div className='flex-row'>
            <List listData={page9.listData.data1} />
            <List listData={page9.listData.data2} />
            <List listData={page9.listData.data3} />
            <List listData={page9.listData.data4} />
            <List listData={page9.listData.data5} />
          </div>
        </>
      )}
      {page === 'page10' && (
        <>
          <h3>{page10.instruction}</h3>
          <br />
          <div className='flex-column'>
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page10.tableData.tableHead}
              tableRowData={page10.tableData.tableRowData1}
              tableOptions={page10.tableData.tableOptions}
            />
            <List listData={page10.listData.data1} />
            <br />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page10.tableData.tableHead}
              tableRowData={page10.tableData.tableRowData2}
              tableOptions={page10.tableData.tableOptions}
            />
            <List listData={page10.listData.data2} />
            <br />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page10.tableData.tableHead}
              tableRowData={page10.tableData.tableRowData3}
              tableOptions={page10.tableData.tableOptions}
            />
            <List listData={page10.listData.data3} />
            <br />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page10.tableData.tableHead}
              tableRowData={page10.tableData.tableRowData4}
              tableOptions={page10.tableData.tableOptions}
            />
            <List listData={page10.listData.data4} />
            <br />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={page10.tableData.tableHead}
              tableRowData={page10.tableData.tableRowData5}
              tableOptions={page10.tableData.tableOptions}
            />
            <List listData={page10.listData.data5} />
          </div>
        </>
      )}
    </>
  );
};

export default Egzamin2015Basic;
