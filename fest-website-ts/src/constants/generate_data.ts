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
