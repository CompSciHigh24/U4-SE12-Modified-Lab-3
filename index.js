const express = require("express");
const app = express();

const store = {
  items: [
    {
      name: "Healing Potion",
      cost: 50,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15HkNNlZmtldJJyY8ZyLt_6C2ljExDEfh1pwAwLcbgdLLOY8e-FOGn_huYW6kWAgOlP4&usqp=CAU"
    },
    {
      name: "Mana Elixir",
      cost: 75,
      image: "https://www.shutterstock.com/image-vector/pixel-art-potion-retro-8bit-260nw-2358757125.jpg"
    },
    {
      name: "Elven Bread",
      cost: 25,
      image: "https://www.shutterstock.com/image-vector/pixel-art-illustration-bread-pixelated-600nw-2467440875.jpg"
    },
    {
      name: "Phoenix Feather",
      cost: 200,
      image: "https://www.shutterstock.com/image-vector/pixel-art-feather-pen-icon-260nw-2367380105.jpg"
    }
  ]
};

// 1. Set up your folders and move your files into the right place

// 2. Set up static middleware


// 3. Set the view engine to EJS


// 4. Set up the router for / to send back menu.ejs with the items array



app.listen(3000, ()=>{
  console.log("Server started")
});
