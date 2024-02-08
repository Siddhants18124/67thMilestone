export type PersonOfContact = {
  name: string;
  position: string;
  contact: string;
  mailId: string;
  image: string;
};

export type EventType =
  | "cultural"
  | "technical"
  | "management"
  | "hero"
  | "gaming";

export type IEventCard = {
  eventType: EventType;
  name: string;
  eventId: string;
};

export type IEvent = {
  eventId: string;
  eventType: "cultural" | "technical" | "management" | "hero" | "gaming";
  name: string;
  rules: string[];
  registerLink: string;
  pocs: PersonOfContact[];
  image: string;
  desc: string;
};
