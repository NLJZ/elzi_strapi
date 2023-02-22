module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env('DATABASE_PORT'),
      database: env('DATABASE_DB'),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PW'),
      ssl: false // I haven’t tried it with ssl enabled
    },
    debug: false,
  },
});