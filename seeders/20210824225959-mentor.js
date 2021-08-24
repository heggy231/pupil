"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Mentors",
      [
        {
          firstName: "Annie",
          lastName: "Easley",
          email: "ajeasley@nasa.gov",
          type: "hard skills",
          skills: "software development",
          about:
            "dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Patrick',
          lastName: 'White',
          email: 'whiteetuk@protonmail.com',
          type: "soft skills",
          skills: "public speaking, communication, relationships",
          about: "dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Mentors", null, {});
  },
};