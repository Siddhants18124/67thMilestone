import { EventType, IEvent, PersonOfContact } from "../types";

import {
  CulturalEvent1,
  CulturalEvent10,
  CulturalEvent11,
  CulturalEvent12,
  CulturalEvent2,
  CulturalEvent3,
  CulturalEvent4,
  CulturalEvent5,
  CulturalEvent6,
  CulturalEvent7,
  CulturalEvent8,
  CulturalEvent9,
  Poc1,
  Poc2,
} from "../assets";

const dummyImages = [
  CulturalEvent1,
  CulturalEvent2,
  CulturalEvent3,
  CulturalEvent4,
  CulturalEvent5,
  CulturalEvent6,
  CulturalEvent7,
  CulturalEvent8,
  CulturalEvent9,
  CulturalEvent10,
  CulturalEvent11,
  CulturalEvent12,
];

const dummyPocs: PersonOfContact[] = [
  {
    name: "John Doe",
    mailId: "john@doe.com",
    contact: "+91 xxxx-xxx-xxx",
    position: "Head",
    image: Poc1,
  },
  {
    name: "Jane Doe",
    mailId: "jane@doe.com",
    contact: "+91 xxxx-xxx-xxx",
    position: "Head",
    image: Poc2,
  },
];
const mgmtEvents: IEvent[] = [
  {
    eventId: "Management-1",
    eventType: "management",
    name: "THINK TANK",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: "Get ready for a fun team challenge! Teams of three will have just an hour to create something cool from everyday items. But here's the catch: they also need to pitch their invention with financial plans and marketing strategies.",
  },
  {
    eventId: "Management-2",
    eventType: "management",
    name: "TALK SHOW",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: "Get hyped for a talk show featuring top social entrepreneurs and a case study competition on Unstop. Hear inspiring stories and brainstorm solutions for real issues. Let's unleash our creativity and drive positive change!",
  },
  {
    eventId: "Management-3",
    eventType: "management",
    name: "TALK SHOW",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "/"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: "Get hyped for a talk show featuring top social entrepreneurs and a case study competition on Unstop. Hear inspiring stories and brainstorm solutions for real issues. Let's unleash our creativity and drive positive change!",
  },
  {
    eventId: "Management-4",
    eventType: "management",
    name: "Quiz Game",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1azcW3AnOMtr_YZm9jLGSfwOXium1WMbn/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: "Join the quiz adventure with five challenging levels for teams of three! Easy trivia kicks off the journey, followed by tougher questions, a Wheel of Fortune twist, and an auction showdown. ",
  },
  {
    eventId: "Management-5",
    eventType: "management",
    name: "Turn coat (Debate)",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: "Join the quiz adventure with five challenging levels for teams of three! Easy trivia kicks off the journey, followed by tougher questions, a Wheel of Fortune twist, and an auction showdown. ",
  },
  {
    eventId: "Management-6",
    eventType: "management",
    name: "flash fiction (story writing)",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: "Get set for the story challenge! Topics arrive 5 mins before the event, giving you 4 mins to craft your tale and 1 min to dazzle us. Emails fly as the prior speaker starts. Judging? Authenticity, Fluency, and Oratory Skills!",
  },
];

const culturalEvents: IEvent[] = [
  {
    eventId: "Cultural-1",
    eventType: "cultural",
    name: "PLANTATION DRIVE",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: "Start the event with a quick walk to get everyone excited! Then, we'll plant trees on campus. We want to teach people about protecting nature and using eco-friendly ways. By planting together, we'll make the world greener and stronger. Let's grow a better future!",
  },
  {
    eventId: "Cultural-2",
    eventType: "cultural",
    name: "TRASH TO TREASURE",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: "Come join our fun contest where you can turn old stuff into awesome art! If you're a SAVERA Kid, we'll give you materials to create something amazing with your imagination. Try to finish your masterpiece before time runs out. The best ideas that turn trash into treasure win cool prizes.",
  },

  {
    eventId: "Cultural-3",
    eventType: "cultural",
    name: "TRASH TO TREASURE",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: "Start the event with a quick walk to get everyone excited! Then, we'll plant trees on campus. We want to teach people about protecting nature and using eco-friendly ways. By planting together, we'll make the world greener and stronger. Let's grow a better future!",
  },
  {
    eventId: "Cultural-4",
    eventType: "cultural",
    name: "LET IT GROW 2.0",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: `“Let It Grow" is a special event where we mix caring for the environment with being together. Students get balloons filled with seeds and helium. Together, we release them, making a magical moment and helping plants grow. It's a fun way to learn about nature and feel closer as a community.`,
  },
  {
    eventId: "Cultural-5",
    eventType: "cultural",
    name: "FASHION CRAVE",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: `Attend the "Fashion Crave," the hippest collegiate fashion event, and join in on the fun! The event this year is expected to surpass the previous one in awesomeness. Prepare for spectacular attires, incredible dances, and a theme that will set your team apart. Embrace your imagination, as uniqueness is crucial! `,
  },
  {
    eventId: "Cultural-6",
    eventType: "cultural",
    name: "BUZZ 4.0",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: `Get pumped for Buzz 4.0 if you're into team fun and competition! This event will get you hyped with games like Tug of War and Squid Game-inspired challenges. It's all about excitement, strategy, and a bit of friendly competition. Don't miss it's going to be a blast!
    This electrifying event is tailor-made for those who thrive on team camaraderie, pulse-pounding challenges, and the sweet taste of victory.`,
  },
  {
    eventId: "Cultural-7",
    eventType: "cultural",
    name: "Fine Arts Marathon",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: `From life-like drawings to imaginative bursts, artists push beyond in this two-part showcase. This contest explores diverse artistic expression, using "Openness" as a springboard for interpretations beyond the visible. It celebrates the blank canvas as a world of boundless creative potential.`,
  },
  {
    eventId: "Cultural-8",
    eventType: "cultural",
    name: "Fluidise",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: `Unleash your creativity! Pour vibrant colors, inks, and pigments to create mesmerizing, unique masterpieces. Each swirl is a dance of color and chance, exploring the beauty of art and gravity. Immerse yourself in this captivating journey of boundless artistic expression.`,
  },
  {
    eventId: "Cultural-9",
    eventType: "cultural",
    name: "Symphony - Solo Singing Competition",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: `Your chance to shine! Join our solo singing competition and
    show off your unique voice. From soulful tunes to powerful
    performances, be the star and compete for the title of the next
    singing sensation. Don't miss out on your moment in the
    spotlight`,
  },
  {
    eventId: "Cultural-10",
    eventType: "cultural",
    name: "Sonic Showdown - The War of Bands",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: `The War of Bands is a vibrant musical battleground where
    diverse genres collide. Bands from various styles compete,
    creating a dynamic and electrifying atmosphere. Get ready for
    an epic clash of melodies as musicians vie for the title of
    ultimate sonic champion.
    `,
  },
  {
    eventId: "Cultural-11",
    eventType: "cultural",
    name: "Beat the Street - Group Dance Competition",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: `Get ready to witness a spectacular fusion of talent, rhythm, and
    creativity as we present "Beat the Streets," an electrifying dance
    competition that promises to set the stage ablaze! This
    prestigious event is a celebration of the diverse dance culture
    that thrives within the college and university communities,
    bringing together the most dynamic dance crews to showcase
    their extraordinary skills.
    
    `,
  },
  {
    eventId: "Cultural-12",
    eventType: "cultural",
    name: "Rhythm Blaze - Solo Dance Competition",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: `Prepare to embark on a breathtaking journey through the
    mesmerizing realms of dance as we present the Rhythm Blaze
    Solo Dance Competition! This spellbinding event transcends the
    ordinary, inviting passionate dancers from colleges and
    universities to ignite the stage with their dance narratives,
    creating a symphony of movement and expression.
    `,
  },
  {
    eventId: "Cultural-13",
    eventType: "cultural",
    name: "STAGE PLAY",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: `A theatrical competition in which teams from several colleges portray and narrate a tale on the topic of "Happiness" through an act developed by each university. A stage for students to use their acting abilities to express their opinions, feelings, and problems concerning the LGBTQ+ community.
    `,
  },
  {
    eventId: "Cultural-14",
    eventType: "cultural",
    name: "Monologue",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "/",
    desc: `Get ready to ignite your passion for storytelling and spread ‘Enthusiasmo’ because it's time for the Monologue Competition on Happiness! Dive into the world of laughter, tears, and everything in between as we celebrate the quest for joy through the power of monologues. Join us for an exhilarating journey. Let's make memories and spread positivity together!`,
  },
];

const heroevent: IEvent[] = [
  {
    eventId: "sport-1",
    eventType: "hero",
    name: "CRICKET",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    eventId: "sport-2",
    eventType: "hero",
    name: "BASKETBALL",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    eventId: "sport-3",
    eventType: "hero",
    name: "BADMINTON",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    eventId: "sport-4",
    eventType: "hero",
    name: "POOL",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    eventId: "sport-5",
    eventType: "hero",
    name: "FOOTBALL",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    eventId: "sport-6",
    eventType: "hero",
    name: "ARCHERY",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    eventId: "sport-7",
    eventType: "hero",
    name: "KABADDI",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    eventId: "sport-8",
    eventType: "hero",
    name: "TABLE TENNIS",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    eventId: "sport-9",
    eventType: "hero",
    name: "LAWN TENNIS",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    eventId: "sport-10",
    eventType: "hero",
    name: "VOLLEYBALL",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    eventId: "sport-11",
    eventType: "hero",
    name: "CHESS",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit"
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
];

export const generateFakeData = (eventType: EventType) => {
  return [...new Array<IEvent>(12)].map((_, idx) => {
    return {
      name: `Event ${idx + 1}`,
      eventType,
      pocs: dummyPocs,
      eventId: `${eventType}-${idx}`,
      rules: [
        "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
        "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      ],
      registerLink: "https://google.com",
      image: dummyImages[idx],
      desc: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    } satisfies IEvent;
  });
};
