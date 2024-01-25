import { EventType, IEvent } from "../types";
import { generateFakeData } from "./generate_data";

const techEvents = generateFakeData("technical");
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
