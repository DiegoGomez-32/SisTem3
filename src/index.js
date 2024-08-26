const express = require('express')

//Configuraciones
const app = express()
app.set('port', process.env.port || 3000);

//Rutas
app.use(require('./routes/index'));

//Servidor
app.listen(app.get('port'), () => {
  console.log(`Example app listening on port`, app.get('port'))
})