const movies=[
    {name:'3 idiots',genre:'comedy',year:'2000'},
    {name:'3 idiots',genre:'comedy',year:'2000'},
    {name:'3 idiots',genre:'comedy',year:'2000'},
    {name:'3 idiots',genre:'comedy',year:'2000'},
    {name:'3 idiots',genre:'comedy',year:'2000'},
    {name:'3 idiots',genre:'comedy',year:'2000'},


]

const resolvers = { 
    listMovies: () => {
    return movies
},
addMovie:(args)=>{
    return {
        name:args.name,
        genre:args.genre
    }

}
};

module.exports=resolvers