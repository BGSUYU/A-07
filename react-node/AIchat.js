import ollama from 'ollama';

export default async function AIchat(content) {
        // const content = await crawler_article();
        const response = await ollama.chat({
            model: 'deepseek-r1:1.5b',
            messages: [
                {
                    role: 'user', 
                    content: content
                }
            ],
        })
        return response.message.content
        // console.log(response.message.content)
    }