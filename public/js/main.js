//import { config } from "d:/GrammerApp/node_modules/dotenv/lib/main";
//import OpenAI from "d:/GrammerApp/node_modules/openai/index";
// async function get_API() {
//     await config();
//     const apiKey = process.env.API_KEY;
//     return apiKey;
// }


document.addEventListener('DOMContentLoaded', function() {
const container=document.querySelector(".container");
const chatbox=document.getElementById("chatcontainer");
const copyB=document.getElementById("copy");


const bod=document.getElementById("body");
var precmode=document.getElementById("PreciseB");
var creatmode=document.getElementById("creativeB");
var exptmode=document.getElementById("expertB");
var frndmode=document.getElementById("FriendlyB");
var sendbutt=document.getElementById("submit");
var textbox=document.getElementById("usertextbox");

async function responsemsg(respmsg){
    var msgElem=document.createElement("div");
    msgElem.innerHTML="<span>Bot: </span><span>"+respmsg+"</span>";
    chatbox.appendChild(msgElem);
    
    msgElem.style.textAlign="left";
    msgElem.style.margin="10px";
    msgElem.style.color="Black";
    if(precmode.checked){
        //chatbox.style.backgroundColor="#ccddff";
        msgElem.style.backgroundColor="#ccddff";
    }
    else if(creatmode.checked){
        msgElem.style.background="#ffccb3";
    }
    else if(frndmode.checked){
        msgElem.style.background="#ccff99";
    }
    else if(exptmode.checked){
        msgElem.style.background="#ccfff2";
    }
    copyB.addEventListener("click",function(){
        copyToClipboard(respmsg);
    });
    

}


async function giveresponse(msg,x) {
    const chathistory = [];
    var messages = chathistory.map(([role, content]) => ({ role, content }));
    
    if(x==='1'){
        messages.push(
            { role: "system", content: "You are an English assistant be Precise with the English ,Should reframe with a good English" },
            { role: "user", content: msg }
        );
        console.log("In Precise Mode");
        //msgElem.style.backgroundColor="#ccddff";
    }
    else if(x==="2"){
        messages.push(
            { role: "system", content: "You are an English assistant.Be Creative with the sentences give Inspirations and be good." },
            { role: "user", content: msg }
        );
        console.log("In Creative Mode");
        //msgElem.style.background="#ffccb3";
    }
    else if(x==="3"){
        messages.push(
            { role: "system", content: "You are an English assistant. Reframe the sentence with Friendly and polite english." },
            { role: "user", content: msg }
        );
        console.log("In Friendly Mode");
        //msgElem.style.background="#ccff99";
    }
    else if(x==="4"){
        messages.push(
            { role: "system", content: "You are an English assistant. Reframe the sentence with better Expert level English" },
            { role: "user", content: msg }
        );
        console.log("In Expert Mode");
        //msgElem.style.background="#ccfff2";
    }
    else{
        messages.push(
            { role: "system", content: "You are an English assistant. Reframe the sentence if it's wrong or make it better." },
            { role: "user", content: msg }
        );
    }


    const apiKey =""; //await get_API(); 
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ model: 'gpt-3.5-turbo', messages: messages })
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const completion = await response.json();
        const completionText = completion.choices[0].message.content;
        responsemsg(completionText); // Change this line to call the response function
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function sendresult(usermessage){
    var msgElem=document.createElement('div');
    msgElem.innerHTML="<span>You: </span><span>"+usermessage+"</span>";
    chatbox.appendChild(msgElem);
    msgElem.style.textAlign="right";
    msgElem.style.margin="10px";
    msgElem.style.color="green";
    
    
}
function copyToClipboard(cmsg){
    var copyText=cmsg;
    navigator.clipboard.writeText(copyText);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText;

}


sendbutt.addEventListener('click',function(e){
        var usermessage=textbox.value;
        var x;
        if(precmode.checked){
            //chatbox.style.backgroundColor="#ccddff";
            x="1";
        }
        else if(creatmode.checked){
            //chatbox.style.background="#ffccb3";
            x='2';
        }
        else if(frndmode.checked){
            //container.style.background="#ccff99";
            x="3";
        }
        else if(exptmode.checked){
            //container.style.background="#ccfff2";
            x="4";
        }
        else{
            //container.style.background="blanchedalmond";
            x="0";
        }
            if((usermessage)==""){
                window.alert("Enter Your Message");
        
            }
            else{
                textbox.value="";
                sendresult(usermessage);
                giveresponse(usermessage,x);

            }
            
    });
});
