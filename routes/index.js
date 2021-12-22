const { Router } = require('express')

const router = Router();

router.use("/", require("./todo.route"))

module.exports = router;