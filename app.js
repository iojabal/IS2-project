const express = require("express")
// const 

const app = express();



app.get("/", (req, res) => {
    res.json({"message": "API funcionando tranquilamente"});
})

app.delete('/estudiantes/:codigo', (req, res) => {
    console.log("sa elemenado el codigo");
})


app.listen(8000, () => {
    console.log("Servidor corriendo");
})