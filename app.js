const express = require("express");
const app = express();
const PORT = 3000;
//send bisa membuat data dalam berbagai data, seperti html
//json itu membuat atau menampilkan data dalam bentuk data json
let movies = [
    {id: 1, title: "KUG", year: 2021},
    {id: 2, title: "KUD", year: 2021},
    {id: 3, title: "00.00", year: 2021}
]

app.use(express.json())

app.get("/", (req, res) => {
  res.json("hai aku dellila");
});

//get all movie
app.get("/movie", (req, res) => {
    res.json(movies)
})

//delete
//splice(index keberapa, jumlah yg dihapus)
//indexOf(value & index yg kita pilih)
//find(melakukan pencarian dalam data aray f object)
//parseInt(mengubah data string kedalam number dan mengembalikannya dalam bentuk bilangan bulat dan jika tidak ada maka akan dikembalikan NaN)

app.delete("/movie/:id", (req, res) => {
    let movie = movies.find(item => item.id === parseInt(req.params.id)) 
    
    if(movie){
        movies.splice(movies.indexOf(movie), 1)
        res.json("success")
    }
})

//put
//splice(posisi dimana kita ingin melakukan perubahan atau menghapus, jumlah, perubahan yg yang dilakukan)
app.put("/movie/:id", (req, res) => {
    let movie = movies.find(item => item.id === parseInt(req.params.id))

    if(movie){
        let update = {
            id: movie.id,
            title: req.body.title,
            year: req.body.year
        }
        movies.splice(movies.indexOf(movie), 1, update)
        res.json("updated success")
    }else{
        res.json("404")
    }
})

//get movie by id
app.get("/movie/:id", (req, res) =>{
    const {id} = req.params

    let movie = movies.find(item => item.id == id)
    if(movie){
        res.json(movie)
    }else{
        res.json("movie not found")
    }
})
//adding movie
app.post("/movie", (req, res) => {
    let movie = req.body

    movies.push(movie)

    res.json("success added new movie")
})
app.listen(PORT, () => {
  console.log("percobaan pertamaa yang tampil di " + PORT);
});
