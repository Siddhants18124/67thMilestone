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
  thinktank,
  talkshow,
  quiz,
  debate,
  storytelling,
  fashion,
  drawing,
  drawing2,
  singin,
  band,
  grpdance,
  solodance,
  mobdanc,
  strytl2,
  pac,
  pac2,
  hacked,
  roborac,
  arldrn,
  lnfol,
  robwar,
  robsoc,
  basketball,
  archery,
  tablet,
  lawnt,
  Chess,
  Pool,
  Badminton,
  football,
  volley,
  cricket,
  kabadi,
  gm1,
  gm2,
  gm3,
  gm4,
  gm5,
  dlft,
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
  thinktank,
  talkshow,
  quiz,
  debate,
  storytelling,
  fashion,
  drawing,
  drawing2,
  singin,
  band,
  grpdance,
  solodance,
  mobdanc,
  strytl2,
  pac,
  pac2,
  hacked,
  roborac,
  arldrn,
  lnfol,
  robwar,
  robsoc,
  gm1,
  gm2,
  gm3,
  gm4,
  dlft,
  gm5,
];

const heroes = [
  cricket,
  basketball,
  Badminton,
  Pool,
  football,
  archery,
  tablet,
  lawnt,
  volley,
  Chess,
  kabadi,
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
      "https://docs.google.com/document/d/1Sa-MalX5Rr4FpY9oXc7-jsczY_03By_X/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Kadumbari Mohan",
        contact: "737921659",
        mailId: "kadumbari.mohan.23mb@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Yash Singh",
        contact: "9891113426",
        mailId: "yash.singh.22mb@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[12],
    registerLink: "/",
    desc: "Get ready for a fun team challenge! Teams of three will have just an hour to create something cool from everyday items. But here's the catch: they also need to pitch their invention with financial plans and marketing strategies.",
  },
  {
    eventId: "Management-2",
    eventType: "management",
    name: `BIZZYBASH`,
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/116Ww78Ls-uB2I7AilsGEkLV9KxTpqz4Z/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Yash Mittal",
        contact: "807722118",
        mailId: "yash.mittal.22mb@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Aradhna",
        contact: "9772423816",
        mailId: "aradhana.gupta.22bb@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[13],
    registerLink: "/",
    desc: "Join us at the highly anticipated BizzyBash - Bash for Business Brilliance event on March 1st 2024, from 10:00 AM to 12:30 PM, at the prestigious auditorium venue. This dynamic gathering will feature three distinguished speakers sharing their insights on entrepreneurship, providing attendees with valuable perspectives on navigating the business landscape. What sets BizzyBash apart is its interactive element, as we invite audience members to actively participate by sharing their views and ideas on entrepreneurship. A unique aspect of this engagement is the opportunity for attendees to contribute their thoughts through write up and speaking, which will be assessed for their innovative and impactful nature. To add an exciting incentive, we have allocated prize money for the best contributions, with the first-place winner receiving Rs.5000, the second-place winner earning Rs. 3000, and the third-place recipient receiving Rs. 2000. Don't miss this chance to immerse yourself in a wealth of entrepreneurial knowledge and potentially take home a substantial prize for your innovative ideas.",
  },
  {
    eventId: "Management-3",
    eventType: "management",
    name: "Whitty Whirlwind Quiz",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1tUR7Jex_MGJfyYFdhKwQbqaxKbDLf-A1/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Aaditya Vikram Agrawal",
        contact: "8305720200",
        mailId: "aadityavikram.agrawal.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Prashant Kumar",
        contact: "7042841795",
        mailId: "prashant.kumar.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[14],
    registerLink: "/",
    desc: "Join the quiz adventure with five challenging levels for teams of three! Easy trivia kicks off the journey, followed by tougher questions, a Wheel of Fortune twist, and an auction showdown. ",
  },
  {
    eventId: "Management-4",
    eventType: "management",
    name: "Flipside Showdown",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1azcW3AnOMtr_YZm9jLGSfwOXium1WMbn/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Aaditya Vikram Agrawal",
        contact: "8305720200",
        mailId: "aadityavikram.agrawal.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Prashant Kumar",
        contact: "7042841795",
        mailId: "prashant.kumar.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[15],
    registerLink: "/",
    desc: "Join the quiz adventure with five challenging levels for teams of three! Easy trivia kicks off the journey, followed by tougher questions, a Wheel of Fortune twist, and an auction showdown. ",
  },
  {
    eventId: "Management-5",
    eventType: "management",
    name: "flash fiction",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1foUrSn1p7mG23CJFaF7XU8izOcI0-NaZ/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Aaditya Vikram Agrawal",
        contact: "8305720200",
        mailId: "aadityavikram.agrawal.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Ananya Nair",
        contact: "9811356355",
        mailId: "ananya.nair.22bbl@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[16],
    registerLink: "/",
    desc: "Get set for the story challenge! Topics arrive 5 mins before the event, giving you 4 mins to craft your tale and 1 min to dazzle us. Emails fly as the prior speaker starts. Judging? Authenticity, Fluency, and Oratory Skills!",
  },
];

const culturalEvents: IEvent[] = [
  {
    eventId: "Cultural-4",
    eventType: "cultural",
    name: "FASHION CRAVE",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1k1CFUVEtjRNO_PSwG10jgn5QNxyQw-2O/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Khushi Satsangi",
        contact: "9319788533",
        mailId: "khushi.satsangi.22bb@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Pranav Raj",
        contact: "8303841168",
        mailId: "pranav.raj.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[17],
    registerLink: "/",
    desc: `Attend the "Fashion Crave," the hippest collegiate fashion event, and join in on the fun! The event this year is expected to surpass the previous one in awesomeness. Prepare for spectacular attires, incredible dances, and a theme that will set your team apart. Embrace your imagination, as uniqueness is crucial! `,
  },

  {
    eventId: "Cultural-6",
    eventType: "cultural",
    name: "Fine Arts Marathon",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1kCS5-fHd7RtJup7uSchGnZ6XXdFEURKe/edit?usp=drive_link&ouid=113133812686016347322&rtpof=true&sd=true",
    ],
    pocs: [
      {
        name: "Rishit Abhilash",
        contact: "9999330695",
        mailId: "rishit.abhilash.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Zahra",
        contact: "8423302281",
        mailId: "zahra.rakhshan.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[18],
    registerLink: "/",
    desc: `From life-like drawings to imaginative bursts, artists push beyond in this two-part showcase. This contest explores diverse artistic expression, using "Openness" as a springboard for interpretations beyond the visible. It celebrates the blank canvas as a world of boundless creative potential.`,
  },
  {
    eventId: "Cultural-7",
    eventType: "cultural",
    name: "Fluidise",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1kCS5-fHd7RtJup7uSchGnZ6XXdFEURKe/edit?usp=drive_link&ouid=113133812686016347322&rtpof=true&sd=true",
    ],
    pocs: [
      {
        name: "Rishit Abhilash",
        contact: "9999330695",
        mailId: "rishit.abhilash.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Zahra",
        contact: "8423302281",
        mailId: "zahra.rakhshan.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[19],
    registerLink: "/",
    desc: `Unleash your creativity! Pour vibrant colors, inks, and pigments to create mesmerizing, unique masterpieces. Each swirl is a dance of color and chance, exploring the beauty of art and gravity. Immerse yourself in this captivating journey of boundless artistic expression.`,
  },
  {
    eventId: "Cultural-8",
    eventType: "cultural",
    name: "Symphony",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1EwraCDih4F5aWo3e7s4pNtgOSfYxSX5lkcMQARS_bM0/edit?usp=sharing",
    ],
    pocs: [
      {
        name: "Manasava Nagar",
        contact: "9599056932",
        mailId: "manasava.nagar.22mb@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Parth Kulshreshtha",
        contact: "9760384538",
        mailId: "parth.kulshreshtha.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[20],
    registerLink: "https://forms.gle/Nk6AZyDtHzpHYqKM8",
    customLink: true,
    desc: `Your chance to shine! Join our solo singing competition and
    show off your unique voice. From soulful tunes to powerful
    performances, be the star and compete for the title of the next
    singing sensation. Don't miss out on your moment in the
    spotlight`,
  },
  {
    eventId: "Cultural-9",
    eventType: "cultural",
    name: "Battle Of Bands",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1PN2zYCcj-d1KGNbCEglnlfE7W9wa1IEPDs3ZOT_SNmc/edit?usp=sharing",
    ],
    pocs: [
      {
        name: "Manasava Nagar",
        contact: "9599056932",
        mailId: "manasava.nagar.22mb@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Parth Kulshreshtha",
        contact: "9760384538",
        mailId: "parth.kulshreshtha.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[21],
    registerLink: "/",
    desc: `The War of Bands is a vibrant musical battleground where
    diverse genres collide. Bands from various styles compete,
    creating a dynamic and electrifying atmosphere. Get ready for
    an epic clash of melodies as musicians vie for the title of
    ultimate sonic champion.
    `,
  },
  {
    eventId: "Cultural-10",
    eventType: "cultural",
    name: "Beat the Street",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1VbjdCJiUjAkIFFX6NgqeBEfZ6dHtlLkNQ2WtKxchzIc/edit?usp=sharing",
    ],
    pocs: [
      {
        name: "Ashi Jain",
        contact: "8800439787",
        mailId: "ashi.jain.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Sheena Mittal",
        contact: "8307045704",
        mailId: "sheena.mittal.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[22],
    registerLink: "https://forms.gle/5BZdTHZSvAA2ajis8",
    customLink: true,
    desc: `Get ready to witness a spectacular fusion of talent, rhythm, and
    creativity as we present "Beat the Streets," an electrifying dance
    competition that promises to set the stage ablaze! This
    prestigious event is a celebration of the diverse dance culture
    that thrives within the college and university communities,
    bringing together the most dynamic dance crews to showcase
    their extraordinary skills.`,
  },
  {
    eventId: "Cultural-11",
    eventType: "cultural",
    name: "Rhythm Blaze",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1Dmv7nVFhBb706lZ-W4y7XPuVi02-5w4wKIs5S8uHgaw/edit?usp=sharing",
    ],
    pocs: [
      {
        name: "Ashi Jain",
        contact: "8800439787",
        mailId: "ashi.jain.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Sheena Mittal",
        contact: "8307045704",
        mailId: "sheena.mittal.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[23],
    registerLink: "https://forms.gle/KDTETXLv4kHSrpJc7",
    customLink: true,
    desc: `Prepare to embark on a breathtaking journey through the
    mesmerizing realms of dance as we present the Rhythm Blaze
    Solo Dance Competition! This spellbinding event transcends the
    ordinary, inviting passionate dancers from colleges and
    universities to ignite the stage with their dance narratives,
    creating a symphony of movement and expression.
    `,
  },
  {
    eventId: "Cultural-12",
    eventType: "cultural",
    name: "UDGHOSH",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
    ],
    pocs: [
      {
        name: "Tejendra",
        contact: "9518893196",
        mailId: "tejender.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Shradha",
        contact: "6284766202",
        mailId: "shradha.aggarwal.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[24],
    registerLink: "/",
    desc: `A theatrical competition in which teams from several colleges portray and narrate a tale on the topic of "Happiness" through an act developed by each university. A stage for students to use their acting abilities to express their opinions, feelings, and problems concerning the LGBTQ+ community.`,
  },
  {
    eventId: "Cultural-13",
    eventType: "cultural",
    name: "Monologue",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/1jqc1rr4aQCQzGqxW-Ygn4CQaLP996Tpm/edit?usp=drive_link&ouid=113133812686016347322&rtpof=true&sd=true",
    ],
    pocs: [
      {
        name: "Tejendra",
        contact: "9518893196",
        mailId: "tejender.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Shradha",
        contact: "6284766202",
        mailId: "shradha.aggarwal.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[25],
    registerLink: "/",
    desc: `Get ready to ignite your passion for storytelling and spread ‘Enthusiasmo’ because it's time for the Monologue Competition on Happiness! Dive into the world of laughter, tears, and everything in between as we celebrate the quest for joy through the power of monologues. Join us for an exhilarating journey. Let's make memories and spread positivity together!`,
  },
  {
    eventId: "Cultural-14",
    eventType: "cultural",
    name: "CINEMATIC CHRONICLES",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all technical requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all technical setups to address any issues beforehand. Do not download from malicious sources.",
      "https://docs.google.com/document/d/1deEH_BfRntRvtfPDixcjqAi8zjFN3i8H/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Sanskar Gupta",
        contact: "9111676592",
        mailId: "sanskar.gupta.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Akshay Sathyapal",
        contact: "9037078896",
        mailId: "akshay.sathyapal.22bll@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[26],
    registerLink: "/",
    desc: `"Capture the Fest: Cinematic Chronicles" is a video contest capturing our college's vibe. Show off the fun, unforgettable moments, and unique experiences. Don't miss this chance to join an exciting competition celebrating creativity and seizing the moment at 67th Milestone and Hero’s Challenge!`,
  },
  {
    eventId: "Cultural-15",
    eventType: "cultural",
    name: "SnapQuest",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all technical requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all technical setups to address any issues beforehand. Do not download from malicious sources.",
      "https://docs.google.com/document/d/1uofOLUrcyEllX54c2P2ldHob2YU4DMAh/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Sanskar Gupta",
        contact: "9111676592",
        mailId: "sanskar.gupta.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Katreddi Rohith",
        contact: "7396430918",
        mailId: "katreddi.rohith.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[27],
    registerLink: "/",
    desc: `Join 'SnapQuest: Frame Frenzy' at 67th Milestone and Hero’s Challenge! Show your quick thinking and creativity. Capture the essence of topics and tell visual stories. Don't miss the chance to shine and capture the magic!But it's not just about snapping pictures—it's about immersing yourself in the moment, uncovering hidden gems, and breathing life into your photographs with your creative flair.
    `,
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
      "The competition features league and knockout stages",
      "League matches are 15 overs, while semifinals and finals are 20 overs.",
      "All matches are on turf with a white ball. Spikes are not permitted. ",
      "Players must report 30 minutes before their match.",
    ],
    pocs: [
      {
        name: "PRASHANT",
        contact: "+91 6388782716",
        mailId: "prashant.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],

    image: heroes[0],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "",
  },
  {
    eventId: "sport-2",
    eventType: "hero",
    name: "BASKETBALL",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "The competition consists of league and knockout stages.",
    ],
    pocs: [
      {
        name: "DHRUV",
        contact: "+91 8290217400",
        mailId: "dhruv.aagiwal.21bbl@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: heroes[1],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "",
  },
  {
    eventId: "sport-3",
    eventType: "hero",
    name: "BADMINTON",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "The competition includes singles and doubles events.",
      "Players can participate in both.",
      "Matches will be in a league format followed by knockout rounds.",
      "Each match is best of three sets, 15 points each.",
      "Plastic Yonex Mavis 350/500 shuttles will be used.",
      "Only non-marking shoes allowed.",
    ],
    pocs: [
      {
        name: "PRIYANSH",
        contact: "+91 956087259",
        mailId: "priyansh.jain.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: heroes[2],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "",
  },
  {
    eventId: "sport-4",
    eventType: "hero",
    name: "POOL",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "Team event involves league and knockout stages, featuring 2 singles matches and 1 doubles match.",
    ],
    pocs: [
      {
        name: "KRISHNA",
        contact: "+91 9129707168",
        mailId: "", // need to update
        position: "",
        image: Poc1,
      },
    ],
    image: heroes[3],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "",
  },
  {
    eventId: "sport-5",
    eventType: "hero",
    name: "FOOTBALL",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "The competition structure comprises league and knockout stages. Match timings differ for each stage.",
      "During the league stage, matches are scheduled for 30 minutes, followed by a 10-minute break, and then another 30 minutes. In the semifinals and final, matches extend to 35 minutes, followed by a 10-minute break, and another 35 minutes of play.",
    ],
    pocs: [
      {
        name: "LAKSHYA",
        contact: "+91 9182304665",
        mailId: "lakshya.bindal.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: heroes[4],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "",
  },
  {
    eventId: "sport-6",
    eventType: "hero",
    name: "ARCHERY",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "Team event includes league and knockout stages with three boys and three girls competing in each single event.",
    ],
    pocs: [
      {
        name: "APOORV",
        contact: "+91 8750975992",
        mailId: "", // need to update
        position: "",
        image: Poc1,
      },
    ],
    image: heroes[5],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "",
  },
  {
    eventId: "sport-7",
    eventType: "hero",
    name: "KABADDI",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "The competition is indoors on mats with an 85 kg weight limit. Matches consist of two halves, each lasting 20 minutes.",
    ],
    pocs: [
      {
        name: "ASHISH",
        contact: "+91 9983667925",
        mailId: "", // need to update
        position: "",
        image: Poc1,
      },
    ],
    image: heroes[10],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "",
  },
  {
    eventId: "sport-8",
    eventType: "hero",
    name: "TABLE TENNIS",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "Competition - League/Knock out 5 Singles| A-X B-Y C-Z A-Y B-X 2 Players can repeat",
    ],
    pocs: [
      {
        name: "JAIDEEP",
        contact: "+91 8688896662",
        mailId: "kodati.jaideep.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: heroes[6],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "",
  },
  {
    eventId: "sport-9",
    eventType: "hero",
    name: "LAWN TENNIS",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "Players can participate in singles, doubles, or singles matches. Each set involves two players, and individuals are allowed to repeat.",
    ],
    pocs: [
      {
        name: "ARADHANA",
        contact: "+91 9772423816",
        mailId: "aradhana.gupta.22bba@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: heroes[7],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "",
  },
  {
    eventId: "sport-10",
    eventType: "hero",
    name: "VOLLEYBALL",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "Competition features league and knockout stages with matches played as best of 3 sets, each set comprising 25 points.",
    ],
    pocs: [
      {
        name: "ABHAY",
        contact: "+91 7533952330",
        mailId: "abhay.varma.22mb@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: heroes[8],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "",
  },
  {
    eventId: "sport-11",
    eventType: "hero",
    name: "CHESS",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "Matches last one hour with a 10-minute overtime for league and knockout stages.",
    ],
    pocs: [
      {
        name: "LAKSHAY",
        contact: "+91 9896548214",
        mailId: "lakshay.yadav.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: heroes[9],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfzgSFwChTbo7mmqQ0QyQOqWG4znznsjc_bUGDwH7R2kmcgcw/viewform?usp=sf_link",
    desc: "",
  },
];

const gamingEvent: IEvent[] = [
  {
    eventId: "Cultural-1",
    eventType: "cultural",
    name: "BUZZ 4.0",
    rules: [
      "Treat performers, guests, speakers and fellow participants with respect and professionalism. Abusing, using foul language of any form or physical abuse is strictly prohibited.",
      "Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during any event or performance on stage,outside or in general is not allowed and will result in disqualification.",
      "https://docs.google.com/document/d/14qNZb-jZqvQRVFcmEhK9Pzp_9eXpR9p5/edit?usp=drive_link&ouid=113133812686016347322&rtpof=true&sd=true",
    ],
    pocs: [
      {
        name: "Khushi Satsangi",
        contact: "9319788533",
        mailId: "khushi.satsangi.22bb@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Pranav Raj",
        contact: "8303841168",
        mailId: "pranav.raj.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[34],
    registerLink: "/",
    desc: `Get pumped for Buzz 4.0 if you're into team fun and competition! This event will get you hyped with games like Tug of War and Squid Game-inspired challenges. It's all about excitement, strategy, and a bit of friendly competition. Don't miss it's going to be a blast!
      This electrifying event is tailor-made for those who thrive on team camaraderie, pulse-pounding challenges, and the sweet taste of victory.`,
  },
  {
    eventId: "Gaming-2",
    eventType: "gaming",
    name: "Valorant",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all gaming requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all gaming setups to address any issues beforehand. Do not download from malicious sources.",
      "https://docs.google.com/document/d/1tOysSvqxYJziAlRmBGmYPl0lRrqeSxvW/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Anushka Pandey",
        contact: "7219257203",
        mailId: "anushka.pandey.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "G V Manasa",
        contact: "7674048645",
        mailId: "manasag.v.22bbl@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[35],
    registerLink: "/",
    desc: "Teams of 5 will be going head to head in a fierce game. A captivating soundtrack, introduced a mysterious storyline that leaves players on the edge of their seats.The game will be streamed live on youtube. The map pool will be decided on the basis of a coin flip.",
  },
  {
    eventId: "Gaming-3",
    eventType: "gaming",
    name: "BGMI",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all gaming requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all gaming setups to address any issues beforehand. Do not download from malicious sources.",
      "https://docs.google.com/document/d/1pH4T7PxZVDADpKqWeRMv-I-Z0vOtDM5e/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Anushka Pandey",
        contact: "7219257203",
        mailId: "anushka.pandey.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "G V Manasa",
        contact: "7674048645",
        mailId: "manasag.v.22bbl@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[36],
    registerLink: "/",
    desc: "Prepare for the ultimate thrill as BattleGrounds Mobile India (BGMI) hosts an enormous event - a gaming spectacle unlike any other! We're excited to encourage you to participate in the forthcoming BGMI event, which offers nonstop action and the opportunity to exhibit your abilities on the battlefield.",
  },
  {
    eventId: "Gaming-4",
    eventType: "gaming",
    name: "Catch Me If You Can",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all gaming requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all gaming setups to address any issues beforehand. Do not download from malicious sources.",
      "https://docs.google.com/document/d/1wKCsp25KdKekbIc9Uh-HCjh7CEBYGwiD/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Anushka Pandey",
        contact: "7219257203",
        mailId: "anushka.pandey.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Jesselynn Mazel",
        contact: "7995268885",
        mailId: "",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[37],
    registerLink: "/",
    desc: "As you play the nostalgic game of Tag (Pakdum Pakdai) and let go of your childhood memories, dust off your shoes. Put on your sneakers and get ready to run, regardless of whether you're an experienced tag player or just seeking some thrill!",
  },
  {
    eventId: "Gaming-5",
    eventType: "gaming",
    name: "Deadlift Competition",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all gaming requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all gaming setups to address any issues beforehand. Do not download from malicious sources.",
      "https://docs.google.com/document/d/1F0Pf7wMpKsfqroGx7GgC5bvLmohjfuOc/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Harddit Bedi",
        contact: "9892475169",
        mailId: "harddit.bedi.21bbl@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Muskaan Tayal",
        contact: "9650209094 ",
        mailId: "muskaan.tayal.22mb@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[38],
    registerLink: "/",
    desc: `The allure of surrendering or taking it easy on yourself during training can be strong. The journey may be lengthy and demanding, tiring and protracted. The term "deadlift" evokes intense sensations of lifting heavy weights and feeling the lightness afterward: The more you stack the more you gain!`,
  },
  {
    eventId: "Gaming-6",
    eventType: "gaming",
    name: "Boxing Competition",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all gaming requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all gaming setups to address any issues beforehand. Do not download from malicious sources.",
    ],
    pocs: [
      {
        name: "Harddit Bedi",
        contact: "9892475169",
        mailId: "harddit.bedi.21bbl@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Muskaan Tayal",
        contact: "9650209094 ",
        mailId: "muskaan.tayal.22mb@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[39],
    registerLink: "/",
    desc: "An event of will, power and determination. An inter college boxing competition where students go against each other to crown a final champion of the ring.",
  },
];

const technicalEvents: IEvent[] = [
  {
    eventId: "Technical-1",
    eventType: "technical",
    name: "Hacked - 2.0",
    rules: [
      "Each team should have 2-4 members. If you wish to submit solo, you can, but you will not be eligible for winning the hackathon still, you will be eligible for participation prizes.",
      "Teams can of course gain advice and support from organizers, volunteers, sponsors, and others.",
      "All work on a project should be done at the hackathon.",
      "https://docs.google.com/document/d/1AiSdvIynAf9KNbuIZ1iI0Kz3tjpdP49V/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Dhruv Goel",
        contact: "+91 7838531201",
        mailId: "dhruv.goel.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Aditya Rastogi",
        contact: "+91 8826427240",
        mailId: "aditiya.rastogi.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],

    image: dummyImages[28],
    registerLink: "/",
    desc: "Welcome to Hacked2.0! This premier technical hackathon at the 67th Milestone invites engineers, developers, and tech enthusiasts nationwide. Join us for 24 hours of innovation, collaboration, and networking. Unleash your ingenuity and push boundaries in the ever-evolving tech industry. Don't miss out on this opportunity to hack your way to greatness!",
  },
  {
    eventId: "Technical-2",
    eventType: "technical",
    name: "Robo Race",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all technical requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all technical setups to address any issues beforehand. Do not download from malicious sources.",
      "https://docs.google.com/document/d/1zjgc2A2-X-9ZuxpgkFipf_l2zURLNqKP/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Vardaan ",
        contact: "+91 9957563656",
        mailId: "vardaan.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "ketan thakur  ",
        contact: "8448721488",
        mailId: "ketan.thakur.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[29],
    registerLink: "/",
    desc: "Teams clash, robots race through an obstacle course. Speed and agility are key, as bots dodge penalties and defy gravity. The fastest, most balanced bot, built by the cleverest team, claims victory! ",
  },
  {
    eventId: "Technical-3",
    eventType: "technical",
    name: "Aerial Drones",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all technical requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all technical setups to address any issues beforehand. Do not download from malicious sources.",
      "https://drive.google.com/file/d/1TeTmNiIexLTJQapGFjMMiv75oX2AB6QY/view",
    ],
    pocs: [
      {
        name: "Anirudh Dattu",
        contact: "9246571596",
        mailId: "anirudh.dattu.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "ketan thakur  ",
        contact: "8448721488",
        mailId: "ketan.thakur.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[30],
    registerLink: "/",
    desc: "Aerial acrobatics meet engineering marvel! Drones zip through an obstacle course, pushing the limits of design and pilot reflexes. Witness the adrenaline-fueled essence of technology in action. ",
  },
  {
    eventId: "Technical-4",
    eventType: "technical",
    name: "Line Follower",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all technical requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all technical setups to address any issues beforehand. Do not download from malicious sources.",
      "https://docs.google.com/document/d/1oos8p08uLVquLhQJp1kUlE788BjkbA8g/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Anirudh Dattu",
        contact: "9246571596",
        mailId: "anirudh.dattu.22cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "ketan thakur  ",
        contact: "8448721488",
        mailId: "ketan.thakur.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[31],
    registerLink: "/",
    desc: "Black line, high stakes! This event isn't just about speed, but robotic precision. Line Follower robots rely on lightning-fast calculations to navigate, showing the awe-inspiring complexity hidden within their simple task. ",
  },
  {
    eventId: "Technical-5",
    eventType: "technical",
    name: "Robo Wars",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all technical requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all technical setups to address any issues beforehand. Do not download from malicious sources.",
    ],
    pocs: [
      {
        name: "Supriya ",
        contact: "74488 89093",
        mailId: "supriya.s.21mec@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "Ridit jain",
        contact: "9560410184",
        mailId: "ridit.jain.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[32],
    registerLink: "/",
    desc: "This flagship event by the Robotics Club tests robots' mettle, pushing them to their limits. It showcases the power of collaboration between the Robotics and Automobile Clubs, merging their expertise in agility, strength, and design to create mighty contenders.",
  },
  {
    eventId: "Technical-6",
    eventType: "technical",
    name: "Robo Soccer",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all technical requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all technical setups to address any issues beforehand. Do not download from malicious sources.",
      "https://docs.google.com/document/d/1trSEUEEG5-Ubs-Vjtzl8kLgUEjv5pPO7/edit?usp=drive_link",
    ],
    pocs: [
      {
        name: "Raghav Sobti",
        contact: "85914 99393",
        mailId: "raghavraj.sobti.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
      {
        name: "ketan thakur  ",
        contact: "8448721488",
        mailId: "ketan.thakur.21cse@bmu.edu.in",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[33],
    registerLink: "/",
    desc: "One bot, two passions: Football gets futuristic with teams battling for 5 goals. It's offense AND defense, with every move crucial. Robotics and Automobile Club expertise collide, showcasing tech harmony in action. This event showcases the seamless harmony between cutting-edge technology and athletic competition.",
  },
];

export { technicalEvents, heroevent, mgmtEvents, culturalEvents, gamingEvent };

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
