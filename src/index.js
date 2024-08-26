const express = require('express')

//Configuraciones
const app = express()
const port = 3000

//Rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})