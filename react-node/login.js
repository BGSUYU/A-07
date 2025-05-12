import {checkusermessage} from './db.js'
import {bcrypt} from 'bcryptjs'
import {jwt} from 'jsonwebtoken'

export async function login(username,password){
    try{
        const usermessage = checkusermessage(username)
        const isMatch = await bcrypt.compare(password, usermessage.password);
        if(isMatch){
            console.log('登录成功');
            // return true;
        }
        else{
            console.log('密码错误');
            return false;
        }
         const token = jwt.sign({userId:usermessage.id,username: usermessage.username}, 'your_secret_key', { expiresIn: '24h' });
         return token;
    }
    catch(err){
        console.error('登录失败',err);
    }
}