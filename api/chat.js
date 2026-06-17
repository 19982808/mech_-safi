export default async function handler(req,res){

if(req.method!=="POST"){
return res.status(405).json({
error:"Method not allowed"
});
}


try{

const {messages,system}=req.body;


const result=await fetch(
"https://api.groq.com/openai/v1/chat/completions",
{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":
`Bearer ${process.env.GROQ_API_KEY}`
},

body:JSON.stringify({

model:"llama-3.3-70b-versatile",

messages:[
{
role:"system",
content:system
},
...messages
],

temperature:0.7,
max_tokens:800

})

});


const data=await result.json();


return res.status(200).json(data);


}catch(e){

return res.status(500).json({
error:e.message
});

}

}
