// Update with your config settings.

export default {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "nextjs"
  },
  migrations: {
    directory: __dirname + "/migrations"
  },
  seeds: {
    directory: __dirname + "/seeds"
  }
};
