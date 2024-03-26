'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Doctors', [{
      nama: "Rachel Purnawati",
      spesialis: "Sp. Kandungan & Kebidanan",
      alamatPraktek: "Kpg. Nangka No. 537",
      telepon: "0670 6773 6359",
      email: "kawaca66@laksmiwati.web.id",
      jadwal: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: "Sakura Kayla Namaga",
      spesialis: "Sp. Kulit & Kelamin",
      alamatPraktek: "Gg. Baja No. 100",
      telepon: "0588 8438 608",
      email: "narpati.mahfud@yahoo.com",
      jadwal: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: "Cahyono Irnanto Siregar",
      spesialis: "Sp. THT",
      alamatPraktek: "Jl. Raden No. 418",
      telepon: "(+62) 24 0909 780",
      email: "januar.putri@maryadi.asia",
      jadwal: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: "budi juliantari",
      spesialis: "Sp. Ortopedi",
      alamatPraktek: "Jl. Anggrek No.399",
      telepon: "0852 4922 8843",
      email: "budijuliantari@gmail.com",
      jadwal: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: "Hartono",
      spesialis: "Sp. Gigi",
      alamatPraktek: "Jl. Melati No.3",
      telepon: "0852 1444 4432",
      email: "hartono@gmail.com",
      jadwal: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: "Ni Kadek ayu",
      spesialis: "Sp. Penyakit Dalam",
      alamatPraktek: "Jl. Mawar No.99",
      telepon: "0852 5392 4343",
      email: "ni.kadek@gmail.com",
      jadwal: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: "Sukmawati",
      spesialis: "Sp. Mata",
      alamatPraktek: "Jl. Edelweis No.03",
      telepon: "0852 3889 9883",
      email: "sukmawati@gmail.com",
      jadwal: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: "James Axelsen Siregar",
      spesialis: "Sp. Anak",
      alamatPraktek: "Jl. Tulip No.09",
      telepon: "0811 4922 2294",
      email: "axelsen.james@gmail.com",
      jadwal: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: "novara xerneas",
      spesialis: "Sp. Bedah",
      alamatPraktek: "Jl. Anggrek Hitam No.09",
      telepon: "0811 4821 2294",
      email: "novara.xerneas@gmail.com",
      jadwal: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: "James Axelsen Siregar",
      spesialis: "Sp. Anak",
      alamatPraktek: "Jl. Tulip No.09",
      telepon: "0811 4922 2294",
      email: "axelsen.james@gmail.com",
      jadwal: "",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
