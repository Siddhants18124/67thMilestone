type PersonOfContact = {
  name: string;
  position: string;
  contact: string;
  mailId: string;
};

type IEvent = {
  eventType: "cultural" | "technical" | "mgmt" | "hero";
  name: string;
  rules: string[];
  registerLink: string;
  pocs: PersonOfContact[];
};
