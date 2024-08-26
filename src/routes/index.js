const router =  require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/login', (req, res) => {
    res.send('inicio de sesion')
})

module.exports = router;