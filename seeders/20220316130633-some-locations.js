"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "locations",
      [
        {
          name: "Rome",
          image:
            "https://cdn.images.express.co.uk/img/dynamic/78/590x/Coronavirus-latest-italy-coronvirus-death-toll-1252550.jpg?r=1583947170248",
          dislikes: 10,
          description: "Rome is an amazing place with many great history ",
          latitude: 41.902782,
          longtitude: 12.496366,
          experience: "We met with this guy named Fabio, he is horrible",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("locations", null, {});
  },
};
