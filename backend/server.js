import express from 'express';


const port=process.env.PORT || 3000;

const app=express();
app.get('/jokes' , (req , res)=>{
   res.json(jokes);
});

app.get('/' , (req , res)=>{
   console.log('Meow');
});

app.listen(port,()=>{
    console.log(`listening on ${port}`);
}); 

let jokes=[
    {
      "type": "general",
      "setup": "What do you call a dad that has fallen through the ice?",
      "punchline": "A Popsicle.",
      "id": 198
    },
    {
      "type": "general",
      "setup": "What did the fish say when it swam into a wall?",
      "punchline": "Damn!",
      "id": 172
    },
    {
      "type": "general",
      "setup": "How do you find Will Smith in the snow?",
      "punchline": "Look for fresh prints.",
      "id": 121
    },
    {
      "type": "general",
      "setup": "Why are football stadiums so cool?",
      "punchline": "Because every seat has a fan in it.",
      "id": 404
    },
    {
      "type": "general",
      "setup": "Why did the fireman wear red, white, and blue suspenders?",
      "punchline": "To hold his pants up.",
      "id": 323
    },
    {
      "type": "general",
      "setup": "Who is the coolest Doctor in the hospital?",
      "punchline": "The hip Doctor!",
      "id": 297
    },
    {
      "type": "programming",
      "setup": "Lady: How do I spread love in this cruel world?",
      "punchline": "Random Dude: [...💘]",
      "id": 58
    },
    {
      "type": "general",
      "setup": "How can you tell a vampire has a cold?",
      "punchline": "They start coffin.",
      "id": 113
    },
    {
      "type": "general",
      "setup": "Can February march?",
      "punchline": "No, but April may.",
      "id": 81
    },
    {
      "type": "general",
      "setup": "What are the strongest days of the week?",
      "punchline": "Saturday and Sunday...the rest are weekdays.",
      "id": 154
    }
  ]