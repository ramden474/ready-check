export interface Event {
  id: number;
  name: string;
  datetime: Date;
  participants: Participant[];
}

export interface Participant {
  firstName: string;
  lastName: string;
  email: string;
}
