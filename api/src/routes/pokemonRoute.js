const { Router } = require('express');
const router = Router();

router
.get("/")
.get("/:id")
.get("/name")
.post("/")


module.exports = router;