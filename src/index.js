import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listing on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection Error", err);
  });

app.get("/",(req,res)=>{
    res.send("Home Page")
})
// app.get("/about",(req,res)=>{
//     res.send("About Page")
// })
