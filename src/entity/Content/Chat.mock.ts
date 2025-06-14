import { Chat } from "./Chat";

export const mockChat: Chat = {
  answer:
    "Princess Anna Mikhaylovna secures the promise of her son’s transfer to the Guards. She uses **persistent insistence** and **emotional appeals** (leveraging her late father’s memory) to push her point, exemplifying an old-school tactic of relentless determination and leveraging personal connections.",
  sources: [
    {
      content:
        "Princess Anna Mikhaylovna secures the promise of her son’s transfer to the Guards. She uses persistent insistence and emotional appeals (leveraging her late father’s memory) to push her point, exemplifying an old-school tactic of relentless determination and leveraging personal connections.",
      source: "https://example.com/source1",
      page: 1,
      score: 0.95,
    },
    {
      content:
        "The scene highlights the **importance of personal connections** in achieving goals, as Anna Mikhaylovna’s relationship with Prince Vasili plays a crucial role in her success.",
      source: "https://example.com/source2",
      page: 2,
      score: 0.9,
    },
  ],
  elapsed: 120,
};

export const mockChats: Chat[] = [mockChat, mockChat, mockChat];
