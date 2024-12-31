// import { Schema, Movie } from "mongoose";

// const Schema = new Schema({
//     title:stringify,
//     desc:string,
// });


// // create modal 
// const Movie = model("movie",Schema)
// export default Movie; 
import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Define the schema
const movieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true , unique: true},
});

// Create the model
const Movie = model("Movie", movieSchema);

export default Movie;
