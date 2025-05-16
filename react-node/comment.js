//数据库的调用（存储评论信息）（在db.js中进行修改使用数据库）
//响应前端（返回评论信息）

import { SaveComment, getComment } from "./db.js";

export async function Insertcomment(comment) {
    const Comment = comment;
    console.log(Comment);
    await SaveComment(Comment);
}

export async function getCommentMessage() {
    const Comment = await getComment();
    return {
        statusCode: 200,
        body: JSON.stringify({
            data: Comment,
            message: "获取评论成功",
            success: true,
        }),
    };
}