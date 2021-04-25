const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/recipes');
const multer = require('multer');
const upload = multer();


// /*---------- Public Routes ----------*/
router.post('/', upload.single('photo'), recipesCtrl.create);
router.get('/', recipesCtrl.index);


module.exports = router;