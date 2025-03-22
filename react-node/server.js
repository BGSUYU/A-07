import express from 'express'
import cors from 'cors'
import AIchat from './AIchat.js'
import {insert} from './db.js'

const server = express();
const PORT = 20000;

server.use(cors());

server.use(express.json());

// server.use((req, res, next) => {
//     if (req.body && req.body.message) {
//         req.message = req.body.message; // 将 message 附加到 req 对象
//     }
//     next();
// });

server.post('/api/submit',async (req,res)=>{
    const {content} = req.body;
    console.log(`Received data: Message = ${content}`);
    res.json({ message: `${await AIchat(content)}` });
    // console.log(req.message)
})

server.post('/api/submitdata',async(req,res)=>{
    const {data} = req.body;
    console.log(`Received data: Success = ${data}`)
    await insert(data)
})
// server.get(('/api/data', async (req, res) => {
//     if (!req.message) {
//         return res.status(400).json({ error: 'No message available' });
//     }
//     const data = { message: req.message };
//     console.log(data)
//     res.json(data);
// }))

server.use(express.json());

server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}/`)
})