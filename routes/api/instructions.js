const express = require('express');
const router = express.Router();
const instructionsCtrl = require('../../controllers/instructions')

router.post('/recipes/:id/instructions', instructionsCtrl.create)
router.delete('/instructions/:id', instructionsCtrl.deleteStep)

module.exports = router;