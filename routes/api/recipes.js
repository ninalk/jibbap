const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/recipes');
const multer = require('multer');
const upload = multer();


// /*---------- Public Routes ----------*/
router.post('/new', upload.single('photo'), recipesCtrl.create);
router.get('/', recipesCtrl.index);
router.get('/recipes/:id', recipesCtrl.show);

module.exports = router;