import { EventType, IEvent } from "../types";
import { generateFakeData } from "./generate_data";
import { technicalEvents } from "./generate_data";

const techEvents = technicalEvents;
const mgmtEvents = generateFakeData("management");
const culturalEvents = generateFakeData("cultural");
const heroEvents = generateFakeData("hero");

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
