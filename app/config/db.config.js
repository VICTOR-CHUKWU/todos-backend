module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "postgres",
  // DB: process.env.NODE_ENV === "test" ? "todos-test" : "todos",
  DB: "todos",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
