exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'Resource 1' },
        { name: 'Resource 2' },
        { name: 'Resource 3' }
      ]);
    });
};
