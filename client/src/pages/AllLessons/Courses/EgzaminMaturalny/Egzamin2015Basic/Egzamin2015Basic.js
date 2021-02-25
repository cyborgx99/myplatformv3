import React, { useEffect } from 'react';
import AudioPlayer from '../../../../../components/LessonComponents/AudioPlayer/AudioPlayer';
import List from '../../../../../components/LessonComponents/List/List';
import Table from '../../../../../components/LessonComponents/Table/Table';
import { egzamin2015BasicAssetsJSON } from './Egzamin2015BasicAssets';

const Egzamin2015Basic = ({ page, socket, roomId, setTotalPages }) => {
  useEffect(() => {
    setTotalPages({
      p: [1, 2, 3, 4, 5],
      hw: [1, 2],
    });
    // eslint-disable-next-line
  }, []);

  const assets = JSON.parse(egzamin2015BasicAssetsJSON);

  return (
    <>
      {page === 'page1' && (
        <>
          <List listData={assets.page1.listData.data} />
          <br />
          <AudioPlayer
            socket={socket}
            eventPlay={'play1'}
            eventChange={'change1'}
            source={assets.page1.audioSrc}
          />
        </>
      )}

      {page === 'page2' && (
        <>
          <h3>
            Usłyszysz dwukrotnie wywiad z uczestniczką konkursu. Zaznacz znakiem
            X, które zdania są zgodne z treścią nagrania (T – True), a które nie
            (F – False).
          </h3>
          <br />
          <AudioPlayer
            socket={socket}
            eventPlay={'play1'}
            eventChange={'change1'}
            source={assets.page2.audioSrc}
          />
          <Table
            socket={socket}
            roomId={roomId}
            page={page}
            tableHead={assets.page2.tableData.tableHead}
            tableRowData={assets.page2.tableData.tableRowData}
            tableOptions={assets.page2.tableData.tableOptions}
          />
        </>
      )}

      {page === 'page3' && (
        <>
          <h3>
            Usłyszysz dwukrotnie cztery wypowiedzi, które łączy temat emocji. Do
            każdej wypowiedzi (2.1.–2.4.) dopasuj odpowiadające jej zdanie
            (A–E). Wpisz rozwiązania do tabeli. Uwaga: jedno zdanie zostało
            podane dodatkowo i nie pasuje do żadnej wypowiedzi.
          </h3>
          <br />
          <div>
            <h4>Audio 1</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play3'}
              eventChange={'change3'}
              source={assets.page3.audioSrc1}
            />
            <h4>Audio 2</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play4'}
              eventChange={'change4'}
              source={assets.page3.audioSrc2}
            />
            <h4>Audio 3</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play4'}
              eventChange={'change4'}
              source={assets.page3.audioSrc3}
            />
            <h4>Audio 4</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play4'}
              eventChange={'change4'}
              source={assets.page3.audioSrc4}
            />
          </div>

          <List listData={assets.page3.listData.data} />
          <Table
            socket={socket}
            roomId={roomId}
            page={page}
            tableHead={assets.page3.tableData.tableHead}
            tableRowData={assets.page3.tableData.tableRowData}
            tableOptions={assets.page3.tableData.tableOptions}
          />
        </>
      )}
      {page === 'page4' && (
        <>
          <h3>
            Usłyszysz dwukrotnie sześć tekstów. Z podanych odpowiedzi wybierz
            właściwą, zgodną z treścią nagrania. Zakreśl jedną z liter: A, B
            albo C.
          </h3>
          <br />

          <div className='margin'>
            <h4>Tekst 1.</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play1'}
              eventChange={'change1'}
              source={assets.page4.audioSrc1}
            />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={assets.page4.tableData.tableHead}
              tableRowData={assets.page4.tableData.tableRowData1}
              tableOptions={assets.page4.tableData.tableOptions}
            />
            <List
              listData={assets.page4.listData.data1}
              listHeading={assets.page4.listData.heading}
            />
            <br />
            <h4>Tekst 2.</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play2'}
              eventChange={'change2'}
              source={assets.page4.audioSrc2}
            />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={assets.page4.tableData.tableHead}
              tableRowData={assets.page4.tableData.tableRowData2}
              tableOptions={assets.page4.tableData.tableOptions}
            />
            <List
              listData={assets.page4.listData.data2}
              listHeading={assets.page4.listData.heading}
            />
            <br />
            <h4>Tekst 3.</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play3'}
              eventChange={'change3'}
              source={assets.page4.audioSrc3}
            />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={assets.page4.tableData.tableHead}
              tableRowData={assets.page4.tableData.tableRowData3}
              tableOptions={assets.page4.tableData.tableOptions}
            />
            <List
              listData={assets.page4.listData.data3}
              listHeading={assets.page4.listData.heading}
            />
            <br />
            <h4>Tekst 4.</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play4'}
              eventChange={'change4'}
              source={assets.page4.audioSrc4}
            />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={assets.page4.tableData.tableHead}
              tableRowData={assets.page4.tableData.tableRowData4}
              tableOptions={assets.page4.tableData.tableOptions}
            />
            <List
              listData={assets.page4.listData.data4}
              listHeading={assets.page4.listData.heading}
            />
            <br />
            <h4>Tekst 5.</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play5'}
              eventChange={'change5'}
              source={assets.page4.audioSrc5}
            />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={assets.page4.tableData.tableHead}
              tableRowData={assets.page4.tableData.tableRowData5}
              tableOptions={assets.page4.tableData.tableOptions}
            />
            <List
              listData={assets.page4.listData.data5}
              listHeading={assets.page4.listData.heading}
            />
            <br />
            <h4>Tekst 6.</h4>
            <AudioPlayer
              socket={socket}
              eventPlay={'play6'}
              eventChange={'change6'}
              source={assets.page4.audioSrc6}
            />
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={assets.page4.tableData.tableHead}
              tableRowData={assets.page4.tableData.tableRowData6}
              tableOptions={assets.page4.tableData.tableOptions}
            />
            <List
              listData={assets.page4.listData.data6}
              listHeading={assets.page4.listData.heading}
            />
          </div>
        </>
      )}
      {page === 'page5' && (
        <>
          <h3>
            Przeczytaj tekst. Dobierz właściwy nagłówek (A–F) do każdej części
            tekstu (4.1.–4.4.). Wpisz odpowiednią literę w każdą kratkę. Uwaga:
            dwa nagłówki zostały podane dodatkowo i nie pasują do żadnej części
            tekstu.
          </h3>
          <br />
          <List listData={assets.page5.listData.data} />
          <br />
          <h3>{assets.page5.paragraphs.heading} </h3>
          <div>
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={assets.page5.tableData.tableHead}
              tableRowData={assets.page5.tableData.tableRowData1}
              tableOptions={assets.page5.tableData.tableOptions}
            />
            {assets.page5.paragraphs.p1}
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={assets.page5.tableData.tableHead}
              tableRowData={assets.page5.tableData.tableRowData2}
              tableOptions={assets.page5.tableData.tableOptions}
            />
            {assets.page5.paragraphs.p2}
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={assets.page5.tableData.tableHead}
              tableRowData={assets.page5.tableData.tableRowData3}
              tableOptions={assets.page5.tableData.tableOptions}
            />
            {assets.page5.paragraphs.p3}
            <Table
              socket={socket}
              roomId={roomId}
              page={page}
              tableHead={assets.page5.tableData.tableHead}
              tableRowData={assets.page5.tableData.tableRowData4}
              tableOptions={assets.page5.tableData.tableOptions}
            />
            {assets.page5.paragraphs.p4}
          </div>
        </>
      )}
    </>
  );
};

export default Egzamin2015Basic;
