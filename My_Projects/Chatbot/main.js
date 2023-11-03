import color from "colors"
import readlineSync from "readline-sync"
import OpenAI from "openai"
const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function main(){
    console.log(color.bold.yellow("Welcome To Chatbot System"));
    console.log(color.bold.yellow("Feel Free to ask anything"));
    UserName=readlineSync.question("Hello!. Please Tell Your Name : "); 
    var MyBuddy=readlineSync.question("Please Give Your Bot a Name: "); 
    const chatHistory = []; // Store conversation history 
    while (true) { const userInput = readlineSync.question(color.yellow(UserName+': '));
    try { 
        const messages = chatHistory.map(([role, content]) => ({ role, content, })); // Add latest user input 
        messages.push({role:"system",content:"You are a helpufull programmer.You help with writing  programs and debugging it"},
        { role: 'user', content: userInput });
        const completion = await openai.createChatCompletion({ model: 'gpt-3.5-turbo', messages: messages, }); // Get completion text/content 
        const completionText = completion.data.choices[0].message.content; 
        console.log(color.green("BOT: "+completionText))
        if (userInput.toLowerCase() == 'exit') { 
            console.log(color.green(MyBuddy+': ') + completionText); 
            return; 
        } 
        chatHistory.push(['user', userInput]); 
        chatHistory.push(['assistant', completionText]); 
        } 
        catch (error) { console.error(color.red(error)); } } 
    }
