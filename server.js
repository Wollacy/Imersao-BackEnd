import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante",
        imagem: "https://source.unsplash.com/random/300x200/?nature",
    },
    {
        id: 3,
        descricao: "Cachorro fofo",
        imagem: "https://place.dog/300/200",
    },
    {
        id: 4,
        descricao: "Comida deliciosa",
        imagem: "https://loremflickr.com/300/200/food",
    },
    {
        id: 5,
        descricao: "Citação inspiradora",
        imagem: "https://picsum.photos/300/200?grayscale",
    }
];

const app = express();
app.use(express.json());

app.listen(3000,() => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});
