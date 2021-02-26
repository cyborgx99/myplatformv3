export const egzamin2015BasicAssets = {
  page1: {
    listData: {
      heading: 'Instrukcja dla zdającego',
      data: [
        {
          li:
            'Sprawdź, czy arkusz egzaminacyjny zawiera 13 stron (zadania 1–10). Ewentualny brak zgłoś przewodniczącemu zespołu nadzorującego egzamin.',
        },
        { li: 'Teksty do zadań od 1. do 3. zostaną odtworzone z płyty CD.' },
        {
          li:
            'Pisz czytelnie. Używaj długopisu/pióra tylko z czarnym tuszem/atramentem',
        },
        { li: 'Nie używaj korektora, a błędne zapisy wyraźnie przekreśl.' },
        { li: 'Pamiętaj, że zapisy w brudnopisie nie będą oceniane.' },
        {
          li:
            'Na tej stronie oraz na karcie odpowiedzi wpisz swój numer PESEL i przyklej naklejkę z kodem.',
        },
        {
          li:
            'Zaznaczając odpowiedzi w części karty przeznaczonej dla zdającego, zamaluj pola do tego przeznaczone. Błędne zaznaczenie otocz kółkiem i zaznacz właściwe.',
        },
        { li: 'Tylko odpowiedzi zaznaczone na karcie będą oceniane.' },
        {
          li:
            'Nie wpisuj żadnych znaków w części przeznaczonej dla egzaminatora.',
        },
      ],
    },
    audioSrc:
      'https://res.cloudinary.com/cyborgx999/video/upload/v1603472600/sayprivet/Egzamin/LEsson1/Page1/2018_basic_level_Introduction_i2naet.mp3',
  },
  page2: {
    instruction:
      'Usłyszysz dwukrotnie wywiad z uczestniczką konkursu. Zaznacz znakiem X, które zdania są zgodne z treścią nagrania (T – True), a które nie (F – False).',
    audioSrc:
      'https://res.cloudinary.com/cyborgx999/video/upload/v1606344410/sayprivet/Egzamin/Egzamin%202015%20Basic/2015_Basic_Zadanie_1_0-5_mmqye7.mp3',
    tableData: {
      tableHead: ['', '', 'True', 'False'],
      tableOptions: ['', 'X'],
      tableRowData: [
        [
          { text: '1.1' },
          {
            text:
              'This is the second time Cindy has won a spelling competition',
          },
          { ans: ['*'], eventName: 'table1' },
          { ans: ['X'], eventName: 'table2' },
        ],
        [
          { text: '1.2' },
          {
            text:
              'This year the competition words were easier than Cindy expected.',
          },
          { ans: ['X'], eventName: 'table3' },
          { ans: ['*'], eventName: 'table4' },
        ],
        [
          { text: '1.3' },
          {
            text:
              'Cindy studied for 10 hours at the weekend just before the competition',
          },
          { ans: ['*'], eventName: 'table5' },
          { ans: ['X'], eventName: 'table6' },
        ],
        [
          { text: '1.4' },
          {
            text:
              'Cindy learned the words for the competition without her father’s help.',
          },
          { ans: ['X'], eventName: 'table7' },
          { ans: ['*'], eventName: 'table8' },
        ],
        [
          { text: '1.5' },
          {
            text:
              'Cindy’s teacher asked her to check her friends’ essays for spelling mistakes.',
          },
          { ans: ['*'], eventName: 'table9' },
          { ans: ['X'], eventName: 'table10' },
        ],
      ],
    },
  },
  page3: {
    instruction:
      'Usłyszysz dwukrotnie cztery wypowiedzi, które łączy temat emocji. Do każdej wypowiedzi (2.1.–2.4.) dopasuj odpowiadające jej zdanie (A–E). Wpisz rozwiązania do tabeli. Uwaga: jedno zdanie zostało podane dodatkowo i nie pasuje do żadnej wypowiedzi.',
    audioSrc1:
      'https://res.cloudinary.com/cyborgx999/video/upload/v1614264461/sayprivet/Egzamin/Egzamin%202015%20Basic/2015_Basic_Zadanie_2_part_1_luubq5.mp3',
    audioSrc2:
      'https://res.cloudinary.com/cyborgx999/video/upload/v1614264461/sayprivet/Egzamin/Egzamin%202015%20Basic/2015_Basic_Zadanie_2_part_2_djsjap.mp3',
    audioSrc3:
      'https://res.cloudinary.com/cyborgx999/video/upload/v1614264461/sayprivet/Egzamin/Egzamin%202015%20Basic/2015_Basic_Zadanie_2_part_3_eaznpp.mp3',
    audioSrc4:
      'https://res.cloudinary.com/cyborgx999/video/upload/v1614264461/sayprivet/Egzamin/Egzamin%202015%20Basic/2015_Basic_Zadanie_2_part_4_esanb5.mp3',
    tableData: {
      tableHead: ['2.1', '2.2', '2.3', '2.4'],
      tableOptions: ['', 'A', 'B', 'C', 'D', 'E'],
      tableRowData: [
        [
          { ans: ['C'], eventName: 'table1' },
          { ans: ['E'], eventName: 'table2' },
          { ans: ['B'], eventName: 'table3' },
          { ans: ['A'], eventName: 'table4' },
        ],
      ],
    },
    listData: {
      heading: 'This person',
      data: [
        { li: 'A. complains about noise on holiday.' },
        { li: 'B. gives advice on how to deal with noise.' },
        { li: 'C. speaks to a noisy neighbour.' },
        { li: 'D. apologizes for making noise.' },
        { li: 'E. talks about some research on noise.' },
      ],
    },
  },
  page4: {
    instruction:
      'Usłyszysz dwukrotnie sześć tekstów. Z podanych odpowiedzi wybierz właściwą, zgodną z treścią nagrania. Zakreśl jedną z liter: A, B albo C.',
    audioSrc1:
      'https://res.cloudinary.com/cyborgx999/video/upload/v1606344409/sayprivet/Egzamin/Egzamin%202015%20Basic/2015_Basic_Zadanie_3.1_thcqv7.mp3',
    audioSrc2:
      'https://res.cloudinary.com/cyborgx999/video/upload/v1606344409/sayprivet/Egzamin/Egzamin%202015%20Basic/2015_Basic_Zadanie_3.2_yssaf8.mp3',
    audioSrc3:
      'https://res.cloudinary.com/cyborgx999/video/upload/v1606344409/sayprivet/Egzamin/Egzamin%202015%20Basic/2015_Basic_Zadanie_3.3_gxofhl.mp3',
    audioSrc4:
      'https://res.cloudinary.com/cyborgx999/video/upload/v1606344409/sayprivet/Egzamin/Egzamin%202015%20Basic/2015_Basic_Zadanie_3.4_zbpelv.mp3',
    audioSrc5:
      'https://res.cloudinary.com/cyborgx999/video/upload/v1606344409/sayprivet/Egzamin/Egzamin%202015%20Basic/2015_Basic_Zadanie_3.5_gw7duo.mp3',
    audioSrc6:
      'https://res.cloudinary.com/cyborgx999/video/upload/v1606344409/sayprivet/Egzamin/Egzamin%202015%20Basic/2015_Basic_Zadanie_3.6_c0bk16.mp3',
    tableData: {
      tableHead: ['', ''],
      tableOptions: ['', 'A', 'B', 'C'],
      tableRowData1: [
        [
          {
            text:
              '3.1. The announcement about the Group Fitness Programme includes information about',
          },
          { ans: ['C'], eventName: 'table1' },
        ],
      ],
      tableRowData2: [
        [
          {
            text:
              '3.2. The woman gives directions to someone who wants to get to',
          },
          { ans: ['A'], eventName: 'table2' },
        ],
      ],
      tableRowData3: [
        [
          { text: '3.3. Tim suggests that Kate should' },
          { ans: ['C'], eventName: 'table3' },
        ],
      ],
      tableRowData4: [
        [
          { text: '3.4. The conversation takes place' },
          { ans: ['B'], eventName: 'table4' },
        ],
      ],
      tableRowData5: [
        [
          { text: '3.5. What are the speakers doing?' },
          { ans: ['C'], eventName: 'table5' },
        ],
      ],
      tableRowData6: [
        [
          { text: '3.6. The bear got into the car when Ben Tyler' },
          { ans: ['A'], eventName: 'table6' },
        ],
      ],
    },
    listData: {
      heading: '',
      data1: [
        { li: 'A. the weekly cost of the programme.' },
        { li: 'B. the types of exercises on offer.' },
        { li: 'C. the trainers’ experience.' },
      ],
      data2: [
        { li: 'A. a shopping centre.' },
        { li: 'B. a petrol station.' },
        { li: 'C. a health club.' },
      ],
      data3: [
        { li: 'A. show Tim’s presentation to her parents.' },
        { li: 'B. ask her parents to measure the room.' },
        { li: 'C. prepare some information for her parents.' },
      ],
      data4: [
        { li: 'A. at an airport.' },
        { li: 'B. at a hotel reception.' },
        { li: 'C. in a tourist information centre.' },
      ],
      data5: [
        { li: 'A. decorating their living room with roses' },
        { li: 'B. buying roses in a flower shop' },
        { li: 'C. planting roses in the garden' },
      ],
      data6: [
        { li: 'A. was sleeping.' },
        { li: 'B. was visiting a zoo.' },
        { li: 'C. was having a meal.' },
      ],
    },
  },
  page5: {
    instruction:
      'Przeczytaj tekst. Dobierz właściwy nagłówek (A–F) do każdej części tekstu (4.1.–4.4.). Wpisz odpowiednią literę w każdą kratkę. Uwaga: dwa nagłówki zostały podane dodatkowo i nie pasują do żadnej części  tekstu.',
    listData: {
      heading: '',
      data: [
        { li: 'A. CONSTRUCTION PROCESS' },
        { li: 'B. WHY SO MANY SKYSCRAPERS ARE BUILT' },
        { li: 'C. ARGUMENTS FOR AND AGAINST' },
        { li: 'D. WHAT CAN BE FOUND INSIDE' },
        { li: 'E. SHAPE AND LOCATION' },
        { li: 'F. THE CHANGING APPEARANCE OF THE BUILDING' },
      ],
    },
    paragraphs: {
      heading: 'THE SHARD',
      p1:
        'The Shard, a famous skyscraper in London, was completed in 2012. Like many large projects in London, it was quite controversial. People complained that the skyscraper would block the view from famous London landmarks: the Tower of London and St. Paul’s Cathedral. But the authorities said the tower would become another icon for the city and it would cause no harm to the visual panorama of London.',
      p2:
        'The building is in the form of a pyramid and it is the largest structure in Europe. The glass tower has 72 floors and it looks like a rocket ready to be launched into space at any moment. The skyscraper stands in the heart of London, on the south bank of the river Thames near Tower Bridge.',
      p3:
        'The building is covered with the so-called ‘extra white’ glass. It reflects the sky more than most traditional skyscrapers. That’s why it looks different from season to season and at different times of the day. In certain weather conditions you might have the impression that the upper levels of the building are missing.',
      p4:
        'The Shard is owned almost completely by the State of Qatar and the owners decided that the building should serve many functions. There are offices, luxury apartments, restaurants and a five-star hotel. Many people say that it will soon become one of the main tourist attractions in London.',
    },
    tableData: {
      tableHead: ['', ''],
      tableOptions: ['', 'A', 'B', 'C', 'D', 'E', 'F'],
      tableRowData1: [[{ text: '4.1' }, { ans: ['C'], eventName: 'table1' }]],
      tableRowData2: [[{ text: '4.2' }, { ans: ['E'], eventName: 'table2' }]],
      tableRowData3: [[{ text: '4.3' }, { ans: ['F'], eventName: 'table3' }]],
      tableRowData4: [[{ text: '4.4' }, { ans: ['D'], eventName: 'table4' }]],
    },
  },
  page6: {
    instruction:
      'Zadanie 5. (0–3) Przeczytaj trzy teksty związane z zegarami. Z podanych odpowiedzi wybierz właściwą, zgodną z treścią tekstu. Zakreśl jedną z liter: A, B albo C.',
    listData: {
      heading: '',
      data1: [
        { li: 'A. encourages teenagers to take part in a competition.' },
        { li: 'B. gives teenagers instructions on preparing a meal.' },
        { li: 'C. invites teenagers to have dinner in the White House.' },
      ],
      data2: [
        { li: 'A. liked to prepare meals with the kids.' },
        { li: 'B. spent too much money on food.' },
        { li: 'C. made food the kids enjoyed.' },
      ],
      data3: [
        { li: 'A. changing bad eating habits.' },
        { li: 'B. documenting one’s meals.' },
        { li: 'C. preparing food in an artistic way.' },
      ],
    },
    paragraphs: {
      heading1: 'GET COOKING!',
      p1:
        'Are you good at preparing healthy meals? Would you like to visit the White House? If you answered “yes” to both questions, then you should enter the Healthy Lunchtime Challenge. The contest invites teens aged 14 to 18 from across the country to come up with lunch recipes that are both tasty and healthy. The authors of the best recipes, one from each state, will be invited to meet the chef who prepares the President’s meals in the White House. The winner will also have the opportunity to run a restaurant in Washington for a day. It’s a great chance for you! Send the application today!',
      heading2: 'THE COOK',
      p2:
        'Ora loved cooking. She preferred to be alone in the kitchen and made it clear that the meals she cooked for our family were her business, and nobody else’s. Grandmother hated her. “The woman is ruining you,” she told our Mother. But the bills were no larger, which our Mother knew well. “The kids will be sick,” Grandmother remarked severely. But we were healthier than ever. We watched every plate Ora served and exclaimed in delight, “It smells so nice! How tasty it is!” “The kids’ table manners are getting worse,” Grandmother observed. And that was true if you believed, as she was taught to believe, that food should be consumed without any sign of joy.',
      heading3: 'AN ARTIST’S IDEA',
      p3:
        'David Meldrum, a graphic designer, has painted every meal he’s consumed for a year. His project shows cuisine ranging from fast food delivered in plastic trays to his mother’s homemade dishes. Mr. Meldrum used acrylic paints, watercolours, pen and ink to make the pictures, which also include everything he drank with his food. And the result is a shockingly honest portrait of his eating habits, with 1360 cups of coffee and hundreds of chocolate bars.',
    },
    tableData: {
      tableHead: ['', ''],
      tableOptions: ['', 'A', 'B', 'C'],
      tableRowData1: [
        [
          { text: '5.1. The author of the text' },
          { ans: ['A'], eventName: 'table1' },
        ],
      ],
      tableRowData2: [
        [
          { text: '5.2. From the text, we learn that Ora' },
          { ans: ['C'], eventName: 'table2' },
        ],
      ],
      tableRowData3: [
        [
          { text: '5.3. The text describes an unusual way of' },
          { ans: ['B'], eventName: 'table3' },
        ],
      ],
    },
  },
  page7: {
    instruction:
      'Przeczytaj tekst. Z podanych odpowiedzi wybierz właściwą, zgodną z treścią tekstu. Zakreśl jedną z liter: A, B, C albo D.',
    listData: {
      heading: '',
      data1: [
        { li: 'A. was impressed by a documentary about this country.' },
        { li: 'B. needed inspiration for his new film.' },
        { li: 'C. wanted to open a film studio there.' },
        { li: 'D. was invited to take part in a film.' },
      ],
      data2: [
        { li: 'A. used special effects too often.' },
        { li: 'B. presented the story better than J.R.R. Tolkien.' },
        { li: 'C. managed to recreate J.R.R. Tolkien’s world.' },
        { li: 'D. created a different atmosphere than in the books.' },
      ],
      data3: [
        { li: 'A. It was his third trip to the country.' },
        { li: 'B. Peter Jackson showed him round Wellington.' },
        { li: 'C. He spent some time exploring the countryside.' },
        { li: 'D. He had to stay there longer than three months.' },
      ],
      data4: [
        { li: 'A. They serve delicious seafood there.' },
        { li: 'B. It is located in the city centre.' },
        { li: 'C. Their hot chocolate is the best.' },
        { li: 'D. Not many tourists know about it.' },
      ],
      data5: [
        { li: 'A. describes his favourite place in New Zealand.' },
        { li: 'B. encourages readers to visit New Zealand.' },
        { li: 'C. gives advice on how to travel safely in New Zealand.' },
        { li: 'D. recommends the best guidebook for a trip to New Zealand.' },
      ],
    },
    paragraphs: {
      heading1: 'MY VISIT TO NEW ZEALAND',
      subheading: 'by Royd Tolkien, the great-grandson of J.R.R. Tolkien',
      p1:
        'I fell in love with New Zealand on my first visit in 2003. New Line Cinema called to offer me a small role in The Lord of the Rings, a film based on my great-grandfather’s novel. Of course, I accepted. I was excited to see what was happening behind the scenes. Watching how such a film is created, how the scenes are shot and put together, was so inspirational that when I returned to Britain, I decided to get involved in film production.',
      p2:
        'I watched the final version of The Lord of the Rings on screen a few months later. It was amazing to see how my great-grandfather’s ideas were shown in the film and what amazing special effects were used. What Peter Jackson and all the cast did with his books is beyond words. The team presented brilliantly that special atmosphere achieved by my great-grandfather. The effect is so powerful, as if New Zealand had been lifted straight from the pages of his books.',
      p3:
        'Since that first trip in 2003 I’ve been obsessed with that country. I’ve been back six times and tried to use every opportunity to experience different aspects of life there. The last time I went there to work on my own film and I was lucky enough to stay for three whole months. Although I spent most of the time in Peter Jackson’s wonderful film centre in Wellington, I also had the chance to travel out of town. The landscapes were amazing wherever I went fishing, swimming or climbing.',
      p4:
        'When I’m travelling, local cuisine is always part of the experience for me. New Zealand has a lot to offer in this respect but if I had to choose just one place, it would be the Chocolate Fish Café in Shelly Bay. The location on the seashore is an advantage but that’s not what makes the place crowded with tourists every weekend. They come here for the impossibly good coffee and a great selection of fresh barbecued octopus, fish, crabs and oysters, tastier than anywhere else in the area. But despite the name, chocolate is not their speciality. For desserts you’d better go somewhere else.',
      p5:
        'In my opinion, New Zealand has something for everybody. Tourists can bungee-jump off a bridge, ride a jet boat down a river, sunbathe on its beautiful beaches or walk in its glorious mountains. If you love nature, don’t hesitate. Do it with or without a guidebook, but do it all, or you’ll miss the best adventure of your life.',
    },
    tableData: {
      tableHead: ['', ''],
      tableOptions: ['', 'A', 'B', 'C', 'D'],
      tableRowData1: [
        [
          { text: '6.1. Royd Tolkien first went to New Zealand because he' },
          { ans: ['D'], eventName: 'table1' },
        ],
      ],
      tableRowData2: [
        [
          { text: '6.2. In Royd’s opinion, Peter Jackson and his team' },
          { ans: ['C'], eventName: 'table2' },
        ],
      ],
      tableRowData3: [
        [
          {
            text: '6.3. Which is TRUE about Royd’s last visit to New Zealand?',
          },
          { ans: ['C'], eventName: 'table3' },
        ],
      ],
      tableRowData4: [
        [
          { text: '6.4. Why does Royd recommend the Chocolate Fish Café?' },
          { ans: ['A'], eventName: 'table4' },
        ],
      ],
      tableRowData5: [
        [
          { text: '6.5. In the last paragraph, the author' },
          { ans: ['B'], eventName: 'table5' },
        ],
      ],
    },
  },
  page8: {
    instruction:
      'Przeczytaj tekst, z którego usunięto trzy zdania. Wpisz w każdą lukę (7.1.–7.3.) literę, którą oznaczono brakujące zdanie (A–E), tak aby otrzymać spójny i logiczny tekst. Uwaga: dwa zdania zostały podane dodatkowo i nie pasują do żadnej luki.',
    textheading: 'EMBARRASSING MEETING',
    listData: {
      heading: '',
      data1: [
        { li: 'A. I didn’t have any so I started to apologize to him.' },
        { li: 'B. I replied that the ending was totally disappointing.' },
        {
          li:
            'C. I had never read a science fiction book with such a boring beginning.',
        },
        {
          li:
            'D. When I finally whispered it, he wrote something on the first page.',
        },
        {
          li:
            'E. As an enthusiastic reader, I always try to find well-priced bestsellers.',
        },
      ],
    },
    textData: {
      options: ['', 'A', 'B', 'C', 'D'],
      data: [
        {
          before:
            'In 1983, my friend Haig took me to a meeting with Star Trek film stars. The chance to meet them all was a great joy for him. For me, the biggest attraction was the book stalls in the entrance hall.',
          taskNum: '7.1',
          ans: ['E'],
          after: 'you like to walk?',
        },
        {
          before:
            'So, while Haig was trying to get some autographs, I browsed the shelves for some bargains.\n        One of the booksellers had Asimov’s latest book. Although I’d already read it, the price was attractive and I decided to buy it. I told the bookseller, however, that it wasn’t Asimov’s best work. At this very moment, an elderly man joined us. He asked me why I felt this way.',
          taskNum: '7.2',
          ans: ['B'],
          after: 'I want to sit?',
        },
        {
          before:
            'To prove it, I intended to open the book on the last page. And then I saw the photo of the author on the cover and got a shock. I realized that I’d just told one of the best science fiction writers that his book wasn’t very good.\n        I stood speechless with the book still in my hand. The writer took it and said, “What’s your name?”',
          taskNum: '7.3',
          ans: ['D'],
          after:
            'His short dedication said: “To Jack, I hope my next book will meet your expectations. All the best, Isaac Asimov.”',
        },
      ],
    },
  },
  page9: {
    instruction:
      'Przeczytaj tekst. Z podanych odpowiedzi wybierz właściwą, tak aby otrzymać logiczny i gramatycznie poprawny tekst. Zakreśl jedną z liter: A, B albo C.',
    textheading: 'SWEDISH ICE HOTEL',
    listData: {
      heading: '',
      data1: [
        { li: '8.1' },
        { li: 'A. most' },
        { li: 'B. all' },
        { li: 'C. each' },
      ],
      data2: [
        { li: '8.2' },
        { li: 'A. were told' },
        { li: 'B. told' },
        { li: 'C. were telling' },
      ],
      data3: [
        { li: '8.3' },
        { li: 'A. give' },
        { li: 'B. catch' },
        { li: 'C. bring' },
      ],
      data4: [
        { li: '8.4' },
        { li: 'A. because' },
        { li: 'B. although' },
        { li: 'C. so' },
      ],
      data5: [
        { li: '8.5' },
        { li: 'A. went off' },
        { li: 'B. broke up' },
        { li: 'C. took on' },
      ],
    },
    textData: {
      options: ['', 'A', 'B', 'C'],
      data: [
        {
          before:
            'The Ice Hotel, which is located in the northern Swedish town of Jukkasjärvi, is rebuilt at the beginning of every winter. It is constructed of ice blocks. Everything, including',
          taskNum: '8.1',
          ans: ['B'],
          after: 'the furniture and kitchen appliances, is made of ice.',
        },
        {
          before: 'This year, however, the owners of the hotel',
          taskNum: '8.2',
          ans: ['A'],
          after: '',
        },
        {
          before:
            'by the town hall’s architect they could not continue construction because there was not even one fire detector included in their plans. The hotel management were surprised but they agreed that in the hotel there were things that could easily',
          taskNum: '8.3',
          ans: ['B'],
          after: '',
        },
        {
          before:
            'fire, like pillows, sleeping bags or reindeer skins. “To us the most important concern is the safety of our clients,',
          taskNum: '8.4',
          ans: ['C'],
          after:
            'we will do our best to install the device as soon as possible,” Beatrice Karlsson said at a press conference last week.',
        },
        {
          before:
            'Surprisingly, when the fire detector was finally installed yesterday, the alarm',
          taskNum: '8.5',
          ans: ['A'],
          after:
            'unexpectedly, making so much noise that it even frightened the reindeer gathered near the hotel.',
        },
      ],
    },
  },
  page10: {
    instruction:
      'W zadaniach 9.1.–9.5. spośród podanych odpowiedzi (A–C) wybierz tę, która najlepiej oddaje sens wyróżnionego zdania lub jego fragmentu. Zakreśl jedną z liter: A, B albo C.',
    listData: {
      heading: '',
      data1: [
        { li: 'A. You can’t give me all the details.' },
        { li: 'B. You mustn’t give me all the details.' },
        { li: 'C. You don’t have to give me all the details.' },
      ],
      data2: [
        { li: 'A. get to.' },
        { li: 'B. take off.' },
        { li: 'C. go on.' },
      ],
      data3: [
        { li: 'A. I’m waiting to get your answer.' },
        { li: 'B. I’d like to send you my answer.' },
        { li: 'C. I’ll be happy to answer your questions.' },
      ],
      data4: [
        { li: 'A. ate Mary’s breakfast.' },
        { li: 'B. made breakfast for Mary.' },
        { li: 'C. brought breakfast from Mary.' },
      ],
      data5: [
        { li: 'A. Why don’t you want to work abroad?' },
        { li: 'B. What’s your view on working abroad?' },
        { li: 'C. Do you know someone who is working abroad?' },
      ],
    },
    tableData: {
      tableHead: ['', ''],
      tableOptions: ['', 'A', 'B', 'C'],
      tableRowData1: [
        [
          {
            text: '9.1. It’s not necessary for you to give me all the details.',
          },
          { ans: ['C'], eventName: 'table1' },
        ],
      ],
      tableRowData2: [
        [
          { text: '9.2. They hope to reach the airport in twenty minutes.' },
          { ans: ['A'], eventName: 'table2' },
        ],
      ],
      tableRowData3: [
        [
          { text: '9.3. I’m looking forward to your answer.' },
          { ans: ['A'], eventName: 'table3' },
        ],
      ],
      tableRowData4: [
        [
          { text: '9.4. Who prepared Mary’s breakfast?' },
          { ans: ['B'], eventName: 'table4' },
        ],
      ],
      tableRowData5: [
        [
          { text: '9.5. What do you think of working abroad?' },
          { ans: ['B'], eventName: 'table5' },
        ],
      ],
    },
  },
};
