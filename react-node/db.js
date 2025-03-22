import mysql2, { createConnection } from 'mysql2'
import fs_SQL from './SQL/fs_SQL.js'

const db = mysql2.createPool({
    connectionLimit:10,
    host: 'localhost',
    user: 'root',
    password: '535462',
    database: 'A07',
    port: 3307
});

async function getConnection(){
    return new Promise((resolve, reject) => {
        db.getConnection((err, connection) => {
            if(err) {
                console.log(err,'获取连接失败');
                reject(err);
            }
            else{
                console.log('成功在数据池获取连接');
                resolve(connection);
            }
        });
    });
}

export async function insert(data){
    try{
        const connect = await getConnection();
        // console.log('成功在数据池获取连接');
        const sql_insert = await fs_SQL('./SQL/INSERT.sql');

        // console.log(sql_insert);
        connect.query(sql_insert,[data.name,data.testnum,data.phonenum,data.email],(err, result) => {
            if(err){
                console.log(err,'插入失败');
            }
            else{
                console.log(result);
                console.log('插入成功');
            }
        });
        connect.release();
    }
    catch(err){
        console.error('插入失败',err);
    }
}
