import PlayerSchema, { Player } from "../model/Player"

export const initPlayers = () => {
  PlayerSchema.insertMany<Player>([
    {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890"
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      phoneNumber: "987-654-3210"
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      phoneNumber: "555-123-4567"
    },
    {
      firstName: "Sarah",
      lastName: "Brown",
      phoneNumber: "888-999-0000"
    },
    {
      firstName: "David",
      lastName: "Lee",
      phoneNumber: "777-333-2222"
    },
    {
      firstName: "Emily",
      lastName: "Wilson",
      phoneNumber: "444-666-8888"
    },
    {
      firstName: "Michael",
      lastName: "Clark",
      phoneNumber: "333-111-2222"
    },
    {
      firstName: "Linda",
      lastName: "Hall",
      phoneNumber: "222-555-7777"
    },
    {
      firstName: "James",
      lastName: "Davis",
      phoneNumber: "999-777-5555"
    },
    {
      firstName: "Jennifer",
      lastName: "Adams",
      phoneNumber: "666-444-3333"
    },
    {
      firstName: "Daniel",
      lastName: "Moore",
      phoneNumber: "111-222-3333"
    },
    {
      firstName: "Karen",
      lastName: "White",
      phoneNumber: "555-777-8888"
    },
    {
      firstName: "Richard",
      lastName: "Harris",
      phoneNumber: "444-555-6666"
    },
    {
      firstName: "Susan",
      lastName: "Martin",
      phoneNumber: "888-444-2222"
    },
    {
      firstName: "Matthew",
      lastName: "Wilson",
      phoneNumber: "333-555-7777"
    },
    {
      firstName: "Laura",
      lastName: "Anderson",
      phoneNumber: "222-333-4444"
    },
    {
      firstName: "Brian",
      lastName: "Roberts",
      phoneNumber: "777-888-9999"
    },
    {
      firstName: "Catherine",
      lastName: "Turner",
      phoneNumber: "999-888-7777"
    },
    {
      firstName: "Kevin",
      lastName: "Parker",
      phoneNumber: "666-999-5555"
    }
  ])
}