import express from 'express';
// import {Connection, ConnectionOptions, createConnection} from 'typeorm'
const App = express();
App.use(express.json());

// export async function openDatabaseConnection(){
// async function openDatabaseConnection(){
//     await closeDatabaseConnection();
//     const options: ConnectionOptions ={
//         type: 'mysql', 
//         host: 'localhost',
//         port: 3306,
//         username: 'root',
//         password: 'Keli',
//         database: 'blog'
//     };

//     // const conn = await createConnection(options);
//     const conn = await createConnection(options);
//     if(!conn.isConnected){
//         throw new Error('Connection to database failed');
//     }
//     return conn;
// };
// openDatabaseConnection()

App.get('/users', async (req, res) =>{});
App.get('/',(req, res)=>{
    res.json({message: 'Hello'});
});

export = App;