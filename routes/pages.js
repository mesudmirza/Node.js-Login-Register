const express  = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

router.get('/', (req, res) => {
    res.render('home', {
        title: 'home'
    })
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'register',
    })
})


router.get('/login', (req, res) => {
    res.render('login', {
        title: 'login',
    })
})

router.get('/dashboard', auth, (req, res) => {
    res.render('dashboard', {
        title: 'dashboard'
    })
})

module.exports = router

