const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to my  <b> User </b>')
})

router.get('/random', (req, res) => {
    res.send('Welcome to my user <b>  Random </b>')
})
router.get('/all', (req, res) => {
    res.send('Welcome to my user <b>  All Users </b> ')
})
router.get('/save', (req, res) => {
    res.send('Welcome to my user <b>  Save </b> ')
})
router.get('/update', (req, res) => {
    res.send('Welcome to my user <b>  Update </b>')
})
router.get('/bulk-update', (req, res) => {
    res.send('Welcome to my user <b> Bulk-update </b>')
})
router.get('/delete', (req, res) => {
    res.send('Welcome to my user <b> Delete </b>')
})

module.exports = router;

