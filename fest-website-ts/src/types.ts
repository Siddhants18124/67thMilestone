export type PersonOfContact = {
  name: string;
  position: string;
  contact: string;
  mailId: string;
};

export type EventType = "cultural" | "technical" | "management" | "hero";

export type IEventCard = {
  eventType: EventType;
  name: string;
  eventId: string;
};

export type IEvent = {
  eventId: string;
  eventType: "cultural" | "technical" | "management" | "hero";
  name: string;
  rules: string[];
  registerLink: string;
  pocs: PersonOfContact[];
  image: string;
};
