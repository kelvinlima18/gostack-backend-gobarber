/* Arquivo de conexão do Sequelize com o Postgress */

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

/* timestamps: Garante a criação do createat e updatedat */
/* underscored e underscoredAll: Criam a nomenclatura das 
tabelas separas pelo "-" */
