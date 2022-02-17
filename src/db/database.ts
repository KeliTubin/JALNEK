import { createConnection } from 'typeorm'
import path from 'path';
// import { config } from 'process';
// import bunyan, { stdSerializers } from 'bunyan';
import { Stream } from 'stream';
import { serialize } from 'v8';

const stream = new Stream(); 

// const logger = bunyan.createLogger({
//   name: "database",
//   serializers: bunyan.stdSerializers,
//   stream: process.stdout
// });

export async function openDatabaseConnection(){

// ESIMESE KOOLIPÄEVA TUNNIS TEGIME NII JA TEISEL KOOLIPÄEVAL LIIKUS SEE ormconfig faili
    // await closeDatabaseConnection();
    // const options: ConnectionOptions ={
    //     type: 'mysql', 
    //     host: 'localhost',
    //     port: 3306,
    //     username: 'root',
    //     password: 'Keli',
    //     database: 'blog',
    //     entities:['src'],
    //     synchronize: true
    // };

    // const conn = await createConnection(options);
    // const conn = await createConnection(options);
    // if(!conn.isConnected){
    //     throw new Error('Connection to database failed');
    // }
    // return conn;

    // const conn = await createConnection({
    //     type: "mysql",
    //     entities: [path.resolve(__dirname, '..', 'entities/*{.ts,.js}')],
    //     host: config.host,
    //     port: config.port,
    //     database: "blog",
    //     username: config.username,
    //     password: config.password,
    //     synchronize: true
    //   });
    //   if (!conn.isConnected) {
    //     throw new Error('Connection to database failed');
    //   }
    
    //   logger.info('Database connected: ', conn.isConnected);
    // return conn;
};
