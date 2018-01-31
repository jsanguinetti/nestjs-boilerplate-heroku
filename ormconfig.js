console.log(__dirname);
const env = require('dotenv')
env.config()

module.exports = {
  type: "postgres",
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  url: process.env.TYPEORM_URL,
  migrations: ['src/migration/*.ts'],
  cli: {
    migrationsDir: 'src/migration'
  }
}
