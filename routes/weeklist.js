const express = require('express')
const {addWeekList, deleteWeekList, getAllWeekList} = require('../controllers/weeklist')
const isAuthenticated = require('../middleware/auth')
const checkDay = require('../middleware/checkDay')
const router = express.Router()

router.get('/all-weeklist', isAuthenticated, getAllWeekList)
router.post('/create-weeklist',isAuthenticated, addWeekList)
router.get('/delete-weeklist/:id',isAuthenticated,async (req, res, next) => {
    await checkDay(req, res, next, 'you can not delete weeklist after 24 hours');
}, deleteWeekList)

module.exports = router