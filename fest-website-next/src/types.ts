import { StaticImageData } from "next/image";
import { Url } from "url";

export type PersonOfContact = {
  name: string;
  position: string;
  contact: string;
  mailId: string;
  image: StaticImageData;
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
  customLink?: boolean;
  name: string;
  rules: string[];
  registerLink: string;
  pocs: PersonOfContact[];
  image: StaticImageData;
  desc: string;
};
