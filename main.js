import express from "express";
import movieRoutes from "./routes/movies.routes.js"
import connectDB from "./lib/db.js";


const app = express ();
const PORT = 6969;

// data understanding middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// connetdb
connectDB()

app.get('/',(req,res) => {
     res.json({msg: "hello std!!"});

});

// middleware
// client----middleware-----server
app.use('/movies', movieRoutes)


app.listen(PORT, ()=>{
    console.log(`the server is running at http://localhost:${PORT}`);
    
})
// principle
// dry ---don't repeat
// kiss ----keep it simple,stupid