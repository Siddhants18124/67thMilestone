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

const technicalEvents: IEvent[] = [
  {
    eventId: "Technical-1",
    eventType: "technical",
    name: "Hacked",
    rules: [
      "Each team should have 2-4 members. If you wish to submit solo, you can, but you will not be eligible for winning the hackathon still, you will be eligible for participation prizes.",
      "Teams can of course gain advice and support from organizers, volunteers, sponsors, and others.",
      "All work on a project should be done at the hackathon.",
    ],
    pocs: dummyPocs,
    image: dummyImages[0],
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
    ],
    pocs: [
      {
        name: "Anirudh Dattu",
        contact: "9246571696",
        mailId: "",
        position: "",
        image: Poc1,
      },
      {
        name: "Vardaan ",
        contact: "9957563656",
        mailId: "",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[1],
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
    ],
    pocs: [
      {
        name: "Anirudh Dattu",
        contact: "9246571696",
        mailId: "",
        position: "",
        image: Poc1,
      },
      {
        name: "Vardaan ",
        contact: "9957563656",
        mailId: "",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[2],
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
    ],
    pocs: [
      {
        name: "Anirudh Dattu",
        contact: "9246571696",
        mailId: "",
        position: "",
        image: Poc1,
      },
      {
        name: "Vardaan ",
        contact: "9957563656",
        mailId: "",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[3],
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
        name: "Anirudh Dattu",
        contact: "9246571696",
        mailId: "",
        position: "",
        image: Poc1,
      },
      {
        name: "Vardaan ",
        contact: "9957563656",
        mailId: "",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[4],
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
    ],
    pocs: [
      {
        name: "Anirudh Dattu",
        contact: "9246571696",
        mailId: "",
        position: "",
        image: Poc1,
      },
      {
        name: "Vardaan ",
        contact: "9957563656",
        mailId: "",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[5],
    registerLink: "/",
    desc: "One bot, two passions: Football gets futuristic with teams battling for 5 goals. It's offense AND defense, with every move crucial. Robotics and Automobile Club expertise collide, showcasing tech harmony in action. This event showcases the seamless harmony between cutting-edge technology and athletic competition.",
  },
  {
    eventId: "Technical-7",
    eventType: "technical",
    name: "Valorant",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all technical requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all technical setups to address any issues beforehand. Do not download from malicious sources.",
    ],
    pocs: [
      {
        name: "Anushka Pandey",
        contact: "7219257203",
        mailId: "",
        position: "",
        image: Poc1,
      },
      {
        name: "G V Manasa",
        contact: "7674048645",
        mailId: "",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[6],
    registerLink: "/",
    desc: "Teams of 5 will be going head to head in a fierce game. A captivating soundtrack, introduced a mysterious storyline that leaves players on the edge of their seats.The game will be streamed live on youtube. The map pool will be decided on the basis of a coin flip.",
  },
  {
    eventId: "Technical-8",
    eventType: "technical",
    name: "BGMI",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all technical requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all technical setups to address any issues beforehand. Do not download from malicious sources.",
    ],
    pocs: [
      {
        name: "Anushka Pandey",
        contact: "7219257203",
        mailId: "",
        position: "",
        image: Poc1,
      },
      {
        name: "G V Manasa",
        contact: "7674048645",
        mailId: "",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[7],
    registerLink: "/",
    desc: "Prepare for the ultimate thrill as BattleGrounds Mobile India (BGMI) hosts an enormous event - a gaming spectacle unlike any other! We're excited to encourage you to participate in the forthcoming BGMI event, which offers nonstop action and the opportunity to exhibit your abilities on the battlefield.",
  },
  {
    eventId: "Technical-9",
    eventType: "technical",
    name: "Game Of Tag",
    rules: [
      "Address intellectual property rights and ownership of any work created during the event. Clearly communicate ownership rights and any licensing agreements associated with participant(your) submissions. No form of plagiarism is allowed.",
      "Ensure that all technical requirements for the event, such as equipment, software, and applications are arranged well in advance. Test all technical setups to address any issues beforehand. Do not download from malicious sources.",
    ],
    pocs: [
      {
        name: "Anushka Pandey",
        contact: "7219257203",
        mailId: "",
        position: "",
        image: Poc1,
      },
      {
        name: "G V Manasa",
        contact: "7674048645",
        mailId: "",
        position: "",
        image: Poc1,
      },
    ],
    image: dummyImages[8],
    registerLink: "/",
    desc: "As you play the nostalgic game of Tag (Pakdum Pakdai) and let go of your childhood memories, dust off your shoes. Put on your sneakers and get ready to run, regardless of whether you're an experienced tag player or just seeking some thrill!",
  },
];

export { technicalEvents };

export const generateFakeData = (eventType: EventType) => {
  return [...new Array<IEvent>(12)].map((_, idx) => {
    return {
      name: `Event ${idx + 1}`,
      eventType,
      pocs: dummyPocs,
      eventId: `${eventType}-${idx}`,
      rules: [
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
