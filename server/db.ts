import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT),
  },
);
