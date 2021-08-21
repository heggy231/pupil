'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Mentors', [
      {
        firstName: 'Annie',
        lastName: 'Easley',
        email: 'ajeasley@nasa.gov',
        type: "hard skills",
        skills: "software development",
        about: "dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus",
        createdAt: new Date(),
        updatedAt: new Date()
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
},
{
      firstName: 'Ashley',
      lastName: 'Johnson',
      email: 'ashleyjohnsonMD@gmail.com',
      type: "soft skills, life skills",
      skills: "time management, leadership, parenting",
      about: "dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus",
      createdAt: new Date(),
      updatedAt: new Date()
},
{
      firstName: 'Jellene',
      lastName: 'Evans',
      email: 'evansjellene@gmail.com',
      type: "hard skills",
      skills: "cybersecurity, penetration testing, ethical hacking, software development",
      about: "dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus",
      createdAt: new Date(),
      updatedAt: new Date()
},
{
      firstName: 'Rodney',
      lastName: 'Okolie',
      email: 'okolier@gmail.com',
      type: "life skills",
      skills: "leadership",
      about: "dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus",
      createdAt: new Date(),
      updatedAt: new Date()
},
{
      firstName: 'Peter',
      lastName: 'Mannter',
      email: 'philster21@gmail.com',
      type: "hard skills",
      skills: "photography, adobe photoshop",
      about: "dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus",
      createdAt: new Date(),
      updatedAt: new Date()
},
{
      firstName: 'Shaneil',
      lastName: 'Bayle',
      email: 'Bayles@gmail.com',
      type: "life skills, soft skills",
      skills: "counseling, people skills,",
      about: "dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus",
      createdAt: new Date(),
      updatedAt: new Date()
},

  ], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mentors', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
