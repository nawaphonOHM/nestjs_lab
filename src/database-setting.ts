import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces';

export const databaseSetting: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass1234',
  database: 'postgres',
  synchronize: true,
  schema: 'public',
  entities: [__dirname + '/enties/*.{ts,js}'],
};
