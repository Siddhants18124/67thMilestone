import { EventType, IEvent } from "../types";
import {
  technicalEvents,
  heroevent,
  culturalEvents,
  mgmtEvents,
} from "./generate_data";

const techEvents = technicalEvents;
const heroEvents = heroevent;

export const Events: Record<EventType, Record<string, IEvent>> = {
  technical: {},
  hero: {},
  cultural: {},
  management: {},
};

techEvents.forEach((event) => {
  Events[event.eventType][event.eventId] = event;
});

mgmtEvents.forEach((event) => {
  Events[event.eventType][event.eventId] = event;
});

culturalEvents.forEach((event) => {
  Events[event.eventType][event.eventId] = event;
});

heroEvents.forEach((event) => {
  Events[event.eventType][event.eventId] = event;
});
