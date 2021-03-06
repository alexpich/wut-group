exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("groups")
    .del()
    .then(() => {
      return knex("groups").del();
    })
    .then((categories, users) => {
      return knex("groups").insert([
        {
          user_id: 1, // Alex
          category_id: 8,
          group_name: "626 Boba Friends",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/v1599784447/wut-group/default.jpg",
        },
        {
          user_id: 2, // Frodo
          category_id: 1,
          group_name: "Hiking Group 101",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/v1599784447/wut-group/default.jpg",
        },
        {
          user_id: 3, // Bilbo
          category_id: 8,
          group_name: "Los Angeles Fishing Group",
          image_url:
            "https://res.cloudinary.com/bpeach/image/upload/v1599784447/wut-group/default.jpg",
        },
      ]);
    });
};
