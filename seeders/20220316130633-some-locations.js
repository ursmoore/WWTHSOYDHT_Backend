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
        {
          name: "France Vacation",
          image:
            "https://i.pinimg.com/originals/ce/71/ea/ce71ea1993504d68c1316c4473184784.jpg",
          dislikes: 15,
          description: "France is alright place",
          latitude: 48.8584,
          longtitude: 2.2945,
          experience: "There was this guy that attacked us with bag3uete",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("locations", null, {});
  },
};
