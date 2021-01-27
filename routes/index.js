const router = require('express')
const { model } = require('mongoose')

router.request('./api', require('.itemRoutes'))

module.exports = router
