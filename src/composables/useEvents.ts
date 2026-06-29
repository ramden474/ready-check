import { ref } from "vue";

import type { Event } from "@/types/event";

const events: Event[] = [
  {
    id: 1,
    name: "Vue Conference",
    datetime: new Date("2026-07-10T09:00:00"),
    participants: [
      {
        firstName: "Arnaud",
        lastName: "Girardin",
        email: "arnaud@paragonfaction.com",
      },
    ],
  },
  {
    id: 2,
    name: "Tech Meetup",
    datetime: new Date("2026-07-10T10:00:00"),
    participants: [
      {
        firstName: "Arnaud",
        lastName: "Girardin",
        email: "arnaud@paragonfaction.com",
      },
    ],
  },
  {
    id: 3,
    name: "Hackathon",
    datetime: new Date("2026-07-10T11:00:00"),
    participants: [
      {
        firstName: "Arnaud",
        lastName: "Girardin",
        email: "arnaud@paragonfaction.com",
      },
    ],
  },
];

export function useEvents() {
  const data = ref<Event[]>(events);
  const loading = ref(false);
  const error = ref<string | null>(null);

  return { data, loading, error };
}
