/* export async function GET(request: Request) {

const nounsAnimals = [
{ id:1, category: "Animals", grammarType: "Common Noun", text: "a dog"}, 
{ id:2, category: "Animals", grammarType: "Common Noun", text: "a cat"}, 
{ id:3, category: "Animals", grammarType: "Common Noun", text: "a bird"}, 
{ id:4, category: "Animals", grammarType: "Common Noun", text: "a lion"}, 
{ id:5, category: "Animals", grammarType: "Common Noun", text: "a tiger"}, 
{ id:6, category: "Animals", grammarType: "Common Noun", text: "an elephant"}, 
{ id:7, category: "Animals", grammarType: "Common Noun", text: "a giraffe"}, 
{ id:8, category: "Animals", grammarType: "Common Noun", text: "a rabbit"}, 
{ id:9, category: "Animals", grammarType: "Common Noun", text: "a frog"},
{ id:10, category: "Animals", grammarType: "Common Noun", text: "a horse"}, 
{ id:11, category: "Animals", grammarType: "Common Noun", text: "a cow"}, 
{ id:12, category: "Animals", grammarType: "Common Noun", text: "a goat"}, 
{ id:13, category: "Animals", grammarType: "Common Noun", text: "a pig"}, 
{ id:14, category: "Animals", grammarType: "Common Noun", text: "a chicken"}, 
{ id:15, category: "Animals", grammarType: "Common Noun", text: "a duck"}, 
{ id:16, category: "Animals", grammarType: "Common Noun", text: "a whale"}, 
{ id:17, category: "Animals", grammarType: "Common Noun", text: "a dolphin"}, 
{ id:18, category: "Animals", grammarType: "Common Noun", text: "an owl"}, 
{ id:19, category: "Animals", grammarType: "Common Noun", text: "an eagle"}, 
{ id:20, category: "Animals", grammarType: "Common Noun", text: "a shark"}  
  ];
return new Response(JSON.stringify(nounsAnimals),
{
  status: 200,
  headers: { 'Content-Type': 'application/json'}
});
}

export async function POST(request: Request) {

  const body = await request.json();
  const { text } = body;

  const newAnimal = { text};
  return new Response(JSON.stringify(newAnimal),{
    status: 201,
    headers: { 'Content-Type': 'application/json'}
  })
} */