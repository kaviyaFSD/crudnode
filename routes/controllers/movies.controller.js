import Movie from "../models/movie.model.js";


export const MovieIndex = async(req,res) => {
    try{
       const movies = await Movie.find()
       res.json(movies)
    }
    catch (error){
        res.status(500).json({message: error.message})
    }
};

export const MovieCreate = async (req,res) => {
    //   id,title,description
    //   crerate movie info

    // validate data
   const newMovie = new Movie ({
        title: req.body.title,
        desc : req.body.desc,
    });
    // sucess or error
    try{
  const movie = await newMovie.save()
  return res.status(200).json(movie)
}
catch(error){
    return res.status(400).json({message: error.message})
}

   
};

export const MovieDetail = async(req,res) => {
    try{
        const movie = await  Movie.findById(req.params.id)
  
        if(movie == null){
          return res.status(404).json({message: "cannot found movie"})
        }
        else{
          res.json(movie)
        }
      }
      catch(error){
             return res.status(500).json({message: error.message});
      }
}

export const MovieUpdate =async (req,res) => {
    
};

export const MovieDelete = (req,res) => {
    res.send("delete movie list")
}

console.log('Resolved path:', new URL('../Models/movie.model.js', import.meta.url).pathname);


