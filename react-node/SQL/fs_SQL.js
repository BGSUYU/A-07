import fs from 'fs/promises';

export default async function read_SQL_File(sqlFile) {
    try{
        const sql = await fs.readFile(sqlFile, 'utf-8');
        console.log('读取文件成功',sql);
        return sql;
    }
    catch(err){
        console.error('读取文件出错',err);
    }
}