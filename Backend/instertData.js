// insertLargeData.js
import mongoose from "mongoose";

const uri = 'mongodb+srv://namdevprabal:prabal$321@book-store-cluster.ug9cuwg.mongodb.net/?retryWrites=true&w=majority&appName=Book-store-cluster';

mongoose.connect(uri).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const bookSchema = new mongoose.Schema({
  author: String,
  country: String,
  imageLink: String,
  free: Boolean,
  language: String,
  link: String,
  pages: Number,
  title: String,
  year: Number
});

const Book = mongoose.model('Book', bookSchema);

// Example large dataset
const books = [
    {
        author: "Unknown",
        country: "India/Iran/Iraq/Egypt/Tajikistan",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453022/book-store/one-thousand-and-one-nights_tawet4.jpg",
        free:false,
        language: "Arabic",
        link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
        pages: 288,
        title: "One Thousand and One Nights",
        year: 1200
      },
      
      {
        author: "Unknown",
        country: "Iceland",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453022/book-store/njals-saga_fpmzzx.jpg",
        free:true,
        language: "Old Norse",
        link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga",
        pages: 384,
        title: "Njall's Saga",
        year: 1350
      },
      
      {
        author: "Jane Austen",
        country: "United Kingdom",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453041/book-store/pride-and-prejudice_rcbugv.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
        pages: 226,
        title: "Pride and Prejudice",
        year: 1813
      },
      
      {
        author: "Honor de Balzac",
        country: "France",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452996/book-store/le-pere-goriot_xxghb7.jpg",
        free:true,
        language: "French",
        link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot",
        pages: 443,
        title: "Le Pre Goriot",
        year: 1835
      },
      
      {
        author: "Samuel Beckett",
        country: "Republic of Ireland",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453016/book-store/molloy-malone-dies-the-unnamable_je6z5p.jpg",
        free:true,
        language: "French, English",
        link: "https://en.wikipedia.org/wiki/Molloy_(novel)",
        pages: 256,
        title: "Molloy, Malone Dies, The Unnamable, the trilogy",
        year: 1952
      },
      {
      author: "Giovanni Boccaccio",
       country: "Italy",
      imageLnk: "",
            free:false,
        language: "Italian",
        link: "https://en.wikipedia.org/wiki/The_Decameron",
        pages: 1024,
        title: "The Decameron",
        year: 1351
      },
      
      {
        author: "Jorge Luis Borges",
        country: "Argentina",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452980/book-store/ficciones_gzamwa.jpg",
        free:false,
        language: "Spanish",
        link: "https://en.wikipedia.org/wiki/Ficciones",
        pages: 224,
        title: "Ficciones",
        year: 1965
      },
      
      
      {
        author: "Albert Camus",
        country: "Algeria, French Empire",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452997/book-store/l-etranger_reeq67.jpg",
        free:false,
        language: "French",
        link: "https://en.wikipedia.org/wiki/The_Stranger_(novel)",
        pages: 185,
        title: "The Stranger",
        year: 1942
      },
      
      {
        author: "Paul Celan",
        country: "Romania, France",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453035/book-store/poems-paul-celan_zhmddi.jpg",
        free:false,
        language: "German",
        link: "",
        pages: 320,
        title: "Poems",
        year: 1952
      },
      
      {
        author: "Miguel de Cervantes",
        country: "Spain",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452986/book-store/don-quijote-de-la-mancha_vfe6vn.jpg",
        free:false,
        language: "Spanish",
        link: "https://en.wikipedia.org/wiki/Don_Quixote",
        pages: 1056,
        title: "Don Quijote De La Mancha",
        year: 1610
      },
      {
        author: "Geoffrey Chaucer",
        country: "England",
        imageLink: "",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/The_Canterbury_Tales",
        pages: 544,
        title: "The Canterbury Tales",
        year: 1450
      },
      
      {
        author: "Anton Chekhov",
        country: "Russia",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453047/book-store/stories-of-anton-chekhov_tvtsjv.jpg",
        free:false,
        language: "Russian",
        link: "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov",
        pages: 194,
        title: "Stories",
        year: 1886
      },
      
      {
        author: "Joseph Conrad",
        country: "United Kingdom",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453022/book-store/nostromo_t0oule.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Nostromo",
        pages: 320,
        title: "Nostromo",
        year: 1904
      },
      
      {
        author: "Charles Dickens",
        country: "United Kingdom",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452980/book-store/great-expectations_qhfooe.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Great_Expectations",
        pages: 194,
        title: "Great Expectations",
        year: 1861
      },
      
      {
        author: "Denis Diderot",
        country: "France",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452991/book-store/jacques-the-fatalist_okp1p4.jpg",
        free:false,
        language: "French",
        link: "https://en.wikipedia.org/wiki/Jacques_the_Fatalist",
        pages: 596,
        title: "Jacques the Fatalist",
        year: 1796
      },
      
      {
        author: "Alfred Berlin",
        country: "Germany",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452969/book-store/berlin-alexanderplatz_bvcqjf.jpg",
        free:false,
        language: "German",
        link: "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz",
        pages: 600,
        title: "Berlin Alexanderplatz",
        year: 1929
      },
      
      {
        author: "Fyodor Dostoevsky",
        country: "Russia",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452974/book-store/crime-and-punishment_dt9qhe.jpg",
        free:false,
        language: "Russian",
        link: "https://en.wikipedia.org/wiki/Crime_and_Punishment",
        pages: 551,
        title: "Crime and Punishment",
        year: 1866
      },
      {
        author: "Fyodor Dostoevsky",
        country: "Russia",
        imageLink: "",
        free: false,
        language: "Russian",
        link: "https://en.wikipedia.org/wiki/The_Idiot",
        pages: 656,
        title: "The Idiot",
        year: 1869
      },
      
      {
        author: "Fyodor Dostoevsky",
        country: "Russia",
        imageLink: "",
        free:false,
        language: "Russian",
        link: "https://en.wikipedia.org/wiki/The_Brothers_Karamazov",
        pages: 824,
        title: "The Brothers Karamazov",
        year: 1880
      },
      
      {
        author: "George Eliot",
        country: "United Kingdom",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453010/book-store/middlemarch_eoipxe.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Middlemarch",
        pages: 800,
        title: "Middlemarch",
        year: 1871
      },
      
      {
        author: "Ralph Ellison",
        country: "United States",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452990/book-store/invisible-man_otwngw.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Invisible_Man",
        pages: 581,
        title: "Invisible Man",
        year: 1952
      },
      
      {
        author: "Euripides",
        country: "Greece",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453002/book-store/medea_pqswvr.jpg",
        free:false,
        language: "Greek",
        link: "https://en.wikipedia.org/wiki/Medea_(play)",
        pages: 104,
        title: "Medea",
        year: -431
      },
      
      {
        author: "Gustave Flaubert",
        country: "France",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453002/book-store/madame-bovary_p9kkyo.jpg",
        free:false,
        language: "French",
        link: "https://en.wikipedia.org/wiki/Madame_Bovary",
        pages: 528,
        title: "Madame Bovary",
        year: 1857
      },
      
      {
        author: "Gustave Flaubert",
        country: "France",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452996/book-store/l-education-sentimentale_lmue1m.jpg  ",
        free:false,
        language: "French",
        link: "https://en.wikipedia.org/wiki/Sentimental_Education",
        pages: 606,
        title: "Sentimental Education",
        year: 1869
      },
      
      {
        author: "Federico Gypsy Lorca",
        country: "Spain",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452982/book-store/gypsy-ballads_loscnw.jpg",
        free:false,
        language: "Spanish",
        link: "https://en.wikipedia.org/wiki/Gypsy_Ballads",
        pages: 218,
        title: "Gypsy Ballads",
        year: 1928
      },
      
      {
        author: "Gabriel Garca Mrquez",
        country: "Colombia",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453022/book-store/one-hundred-years-of-solitude_nu43cx.jpg",
        free:false,
        language: "Spanish",
        link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude",
        pages: 417,
        title: "One Hundred Years of Solitude",
        year: 1967
      },
      
      {
        author: "Gabriel Garca Mrquez",
        country: "Colombia",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453002/book-store/love-in-the-time-of-cholera_nngvt6.jpg",
        free:false,
        language: "Spanish",
        link: "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera",
        pages: 368,
        title: "Love in the Time of Cholera",
        year: 1985
      },
      
      {
        author: "Johann Wolfgang von Goethe",
        country: "Saxe-Weimar",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452979/book-store/faust_ttaaen.jpg",
        free:false,
        language: "German",
        link: "https://en.wikipedia.org/wiki/Goethe%27s_Faust",
        pages: 158,
        title: "Faust",
        year: 1832
      },
      
      {
        author: "Nikolai Gogol",
        country: "Russia",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452973/book-store/dead-souls_m3lonn.jpg",
        free:false,
        language: "Russian",
        link: "https://en.wikipedia.org/wiki/Dead_Souls",
        pages: 432,
        title: "Dead Souls",
        year: 1842
      },
      
      {
        author: "Knut Hamsun",
        country: "Norway",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452985/book-store/hunger_n5lgt2.jpg",
        free:false,
        language: "Norwegian",
        link: "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)",
        pages: 176,
        title: "Hunger",
        year: 1890
      },
      
      {
        author: "Franz Kafka",
        country: "Czechoslovakia",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453049/book-store/stories-of-franz-kafka_qxreqz.jpg",
        free:false,
        language: "German",
        link: "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories",
        pages: 488,
        title: "Stories",
        year: 1924
      },
      {
        author: "Franz Kafka",
        country: "Czechoslovakia",
        imageLink: "",
        free: false,
        language: "German",
        link: "https://en.wikipedia.org/wiki/The_Trial",
        pages: 160,
        title: "The Trial",
        year: 1925
      },
      
      
      {
        author: "D. H. Lawrence",
        country: "United Kingdom",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453041/book-store/sons-and-lovers_xe2m1h.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Sons_and_Lovers",
        pages: 432,
        title: "Sons and Lovers",
        year: 1913
      },
      
      {
        author: "Halldr Laxness",
        country: "Iceland",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452985/book-store/independent-people_q3apdl.jpg",
        free:false,
        language: "Icelandic",
        link: "https://en.wikipedia.org/wiki/Independent_People",
        pages: 470,
        title: "Independent People",
        year: 1934
      },
      
      {
        author: "Giacomo Leopardi",
        country: "Italy",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453034/book-store/poems-giacomo-leopardi_q13agl.jpg",
        free:false,
        language: "Italian",
        link: "",
        pages: 184,
        title: "Poems",
        year: 1818
      },
      
      
      {
        author: "Astrid Lindgren",
        country: "Sweden",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453033/book-store/pippi-longstocking_tfy764.jpg",
        free:false,
        language: "Swedish",
        link: "https://en.wikipedia.org/wiki/Pippi_Longstocking",
        pages: 160,
        title: "Pippi Longstocking",
        year: 1945
      },
      
      {
        author: "Lu Xun",
        country: "China",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452972/book-store/diary-of-a-madman_v9k7vu.jpg",
        free:false,
        language: "Chinese",
        link: "https://en.wikipedia.org/wiki/A_Madman%27s_Diary",
        pages: 389,
        title: "Diary of a Madman",
        year: 1918
      },
      
      {
        author: "Naguib Mahfouz",
        country: "Egypt",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452969/book-store/children-of-gebelawi_cxfqim.jpg",
        free:false,
        language: "Arabic",
        link: "https://en.wikipedia.org/wiki/Children_of_Gebelawi",
        pages: 355,
        title: "Children of Gebelawi",
        year: 1959
      },
      
      {
        author: "Thomas Mann",
        country: "Germany",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452969/book-store/buddenbrooks_ajvtox.jpg",
        free:false,
        language: "German",
        link: "https://en.wikipedia.org/wiki/Buddenbrooks",
        pages: 736,
        title: "Buddenbrooks",
        year: 1901
      },
      
      
      
      {
        author: "Michel de Montaigne",
        country: "France",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452975/book-store/essais_bfyuev.jpg",
        free:false,
        language: "French",
        link: "https://en.wikipedia.org/wiki/Essays_(Montaigne)",
        pages: 404,
        title: "Essays",
        year: 1595
      },
      
      {
        author: "Elsa Morante",
        country: "Italy",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452985/book-store/history_kz5ipe.jpg",
        free:false,
        language: "Italian",
        link: "https://en.wikipedia.org/wiki/History_(novel)",
        pages: 600,
        title: "History",
        year: 1974
      },
      
      {
        author: "Toni Morrison",
        country: "United States",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452969/book-store/beloved_gv3eai.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Beloved_(novel)",
        pages: 321,
        title: "Beloved",
        year: 1987
      },
     
      
      
      {
        author: "Vladimir Nabokov",
        country: "Russia/United States",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453001/book-store/lolita_g2npio.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Lolita",
        pages: 317,
        title: "Lolita",
        year: 1955
      },
      
      {
        author: "George Orwell",
        country: "United Kingdom",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453017/book-store/nineteen-eighty-four_iiwdsb.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
        pages: 272,
        title: "Nineteen Eighty-Four",
        year: 1949
      },
      
      {
        author: "Fernando Pessoa",
        country: "Portugal",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721454640/book-store/the-book-of-disquiet_rj2qmo.jpg",
        free:false,
        language: "Portuguese",
        link: "https://en.wikipedia.org/wiki/The_Book_of_Disquiet",
        pages: 272,
        title: "The Book of Disquiet",
        year: 1928
      },
      
      {
        author: "Edgar Allan Poe",
        country: "United States",
        imageLink: "  https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453054/book-store/tales-and-poems-of-edgar-allan-poe_db2u5p.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales",
        pages: 842,
        title: "Tales",
        year: 1950
      },
      
      {
        author: "Franois Rabelais",
        country: "France",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452980/book-store/gargantua-and-pantagruel_zgnrh6.jpg",
        free:false,
        language: "French",
        link: "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel",
        pages: 623,
        title: "Gargantua and Pantagruel",
        year: 1533
      },
      
      {
    
        author: "Juan Rulfo",
        country: "Mexico",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453028/book-store/pedro-paramo_nrzkom.jpg",
        free:false,
        language: "Spanish",
        link: "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo",
        pages: 124,
        title: "Pedro Pramo",
        year: 1955
      },
      
      
      {
        author: "Salman Rushdie",
        country: "United Kingdom, India",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453011/book-store/midnights-children_yuoddt.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Midnight%27s_Children",
        pages: 536,
        title: "Midnight's Children",
        year: 1981
      },
      
      {
        author: "Saadi",
        country: "Persia, Persian Empire",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452969/book-store/bostan_jwnyto.jpg",
        free:false,
        language: "Persian",
        link: "https://en.wikipedia.org/wiki/Bustan_(book)",
        pages: 298,
        title: "Bostan",
        year: 1257
      },
      
      {
        author: "Tayeb Salih",
        country: "Sudan",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453041/book-store/season-of-migration-to-the-north_mmblz9.jpg",
        free:false,
        language: "Arabic",
        link: "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North",
        pages: 139,
        title: "Season of Migration to the North",
        year: 1966
      },
      {
        author: "Jos Saramago",
        country: "Portugal",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452969/book-store/blindness_envhye.jpg",
        free:false,
        language: "Portuguese",
        link: "https://en.wikipedia.org/wiki/Blindness_(novel)",
        pages: 352,
        title: "Blindness",
        year: 1995
      },
      
      {
        author: "William Shakespeare",
        country: "England",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452985/book-store/hamlet_n0b4ya.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Hamlet",
        pages: 432,
        title: "Hamlet",
        year: 1603
      },
      
      {
        author: "William Shakespeare",
        country: "England",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452991/book-store/king-lear_ibjteb.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/King_Lear",
        pages: 384,
        title: "King Lear",
        year: 1608
      },
      
      {
        author: "William Shakespeare",
        country: "England",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453029/book-store/othello_sczi2d.jpg ",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Othello",
        pages: 314,
        title: "Othello",
        year: 1609
      },
      
      {
        author: "Sophocles",
        country: "Greece",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453022/book-store/oedipus-the-king_vthuvk.jpg",
        free:false,
        language: "Greek",
        link: "https://en.wikipedia.org/wiki/Oedipus_the_King",
        pages: 88,
        title: "Oedipus the King",
        year: -430
      },
      
      {
        author: "Stendhal",
        country: "France",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452997/book-store/le-rouge-et-le-noir_agujoz.jpg",
        free:false,
        language: "French",
        link: "https://en.wikipedia.org/wiki/The_Red_and_the_Black",
        pages: 576,
        title: "The Red and the Black",
        year: 1830
      },
      
      
      {
        author: "Italo Svevo",
        country: "Italy",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452972/book-store/confessions-of-zeno_neulxn.jpg",
        free:false,
        language: "Italian",
        link: "https://en.wikipedia.org/wiki/Zeno%27s_Conscience",
        pages: 412,
        title: "Confessions of Zeno",
        year: 1923
      },
      
      {
        author: "Jonathan Swift",
        country: "Ireland",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452980/book-store/gullivers-travels_edmt16.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Gulliver%27s_Travels",
        pages: 178,
        title: "Gulliver's Travels",
        year: 1726
      },
      
      
      {
        author: "Leo Tolstoy",
        country: "Russia",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452968/book-store/anna-karenina_ymuzsh.jpg",
        free:false,
        language: "Russian",
        link: "https://en.wikipedia.org/wiki/Anna_Karenina",
        pages: 864,
        title: "Anna Karenina",
        year: 1877
      },
      
      {
        author: "Valmiki",
        country: "India",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453041/book-store/ramayana_dilqgf.jpg",
        free:false,
        language: "Sanskrit",
        link: "https://en.wikipedia.org/wiki/Ramayana",
        pages: 152,
        title: "Ramayana",
        year: -450
      },
    
      {
        author: "Virgil",
        country: "Roman Empire",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453056/book-store/the-aeneid_sbvdvz.jpg",
        free:false,
        language: "Classical Latin",
        link: "https://en.wikipedia.org/wiki/Aeneid",
        pages: 442,
        title: "The Aeneid",
        year: -23
      },
      
      
      {
        author: "Walt Whitman",
        country: "United States",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721452991/book-store/leaves-of-grass_gsskn3.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Leaves_of_Grass",
        pages: 152,
        title: "Leaves of Grass",
        year: 1855
      },
      
      {
        author: "Virginia Woolf",
        country: "United Kingdom",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453016/book-store/mrs-dalloway_frciof.jpg",
        free:false,
        language: "English",
        link: "https://en.wikipedia.org/wiki/Mrs_Dalloway",
        pages: 216,
        title: "Mrs Dalloway",
        year: 1925
      },
      
      
      {
        author: "Marguerite Yourcenar",
        country: "France/Belgium",
        imageLink: "https://res.cloudinary.com/brokecodecloudinary/image/upload/v1721453005/book-store/memoirs-of-hadrian_bf5xeo.jpg",
        free:false,
        language: "French",
        link: "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian",
        pages: 408,
        title: "Memoirs of Hadrian",
        year: 1951
      }
    
];

const insertLargeData = async () => {
  try {
    await Book.insertMany(books);
    console.log('Data inserted successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error inserting data:', err);
    mongoose.connection.close();
  }
};

insertLargeData();
