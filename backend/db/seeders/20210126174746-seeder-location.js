"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Locations",
      [
        {
          city: "New York City",
          state: "NY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Los Angeles",
          state: "CA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Chicago",
          state: "IL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Houston",
          state: "TX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Phoenix",
          state: "AZ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Philadelphia",
          state: "PA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "San Antonio",
          state: "TX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "San Diego",
          state: "CA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "San Jose",
          state: "CA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Austin",
          state: "TX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Fort Worth",
          state: "TX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Jacksonville",
          state: "FL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Columbus",
          state: "OH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Charlotte",
          state: "NC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Indianapolis",
          state: "IN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "San Francisco",
          state: "CA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Seattle",
          state: "WA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Denver",
          state: "CO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Boston",
          state: "MA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "El Paso",
          state: "TX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Nashville",
          state: "TN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Detroit",
          state: "MI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Oklahoma City",
          state: "OK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Las Vegas",
          state: "NV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Portland",
          state: "OR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Memphis",
          state: "TN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Louisville",
          state: "KY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Milwaukee",
          state: "WI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Baltimore",
          state: "MD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Albuquerque",
          state: "NM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tucson",
          state: "AZ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Fresno",
          state: "CA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Atlanta",
          state: "GA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Sacramento",
          state: "CA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Mesa",
          state: "AZ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Kansas City",
          state: "MO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Omaha",
          state: "NE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Raleigh",
          state: "NC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Miami",
          state: "FL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Longbeach",
          state: "CA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Colorado Springs",
          state: "CO",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Virginia Beach",
          state: "VA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Minneapolis",
          state: "MN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Oakland",
          state: "CA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tampa",
          state: "FL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Tulsa",
          state: "OK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Arlington",
          state: "TX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Wichita",
          state: "KS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "New Orleans",
          state: "LA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Locations", null, {});
  },
};
