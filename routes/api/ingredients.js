const express = require('express');
const router = express.Router();
const ingredientsCtrl = require('../../controllers/ingredients')

router.post('/recipes/:id/ingredients', ingredientsCtrl.create)
router.delete('/ingredients/:id', ingredientsCtrl.deleteIngredient)

module.exports = router;