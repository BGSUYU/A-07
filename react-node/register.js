// import { register } from "module";
import {bcrypt} from 'bcryptjs'
import {insertusermessage} from './db.js'
export default async function register(username, password) {
    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return;
        }
        await insertusermessage(username, hash)
    })
}