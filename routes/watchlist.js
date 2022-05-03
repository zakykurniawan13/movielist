const express = require('express')
const router = express.Router()

router.post('/addBookmark', addBookmark)
router.get('/getBookmark/:id', getBookmark)
router.update('/deleteBookmark/:id', deleteBookmark)