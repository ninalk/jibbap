const Recipe = require('../models/recipe');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');
const e = require('express');
const s3 = new S3();
const BUCKET_NAME = process.env.JIBBAB_BUCKET

module.exports = {
    create,
    index,
    show,
    update,
    deleteRecipe
}

function create(req, res){
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`;
        const params = { Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer }

        s3.upload(params, async function(err, data) {
            // use our model to create a recipe
            // The data object is the response from aws, 
            // its the callback function to upload
            const recipe = await Recipe.create({
                cuisine: req.body.cuisine,
                recipeName: req.body.recipeName,
                description: req.body.description,
                cookTime: req.body.cookTime,
                ingredients: req.body.ingredients,
                instructions: req.body.instructions,
                photoUrl: data.Location, 
                user: req.user
            });
            // We have to populate the user on the recipe we just created
            // on a document you have to call execPopulate()
            
            const populatedRecipe = await recipe.populate('user').execPopulate();
            // userSchema.set('toObject') gets invoked, to delete the password
            // when we populate the user so we don't have to worry about sending over the password!


            // tells the client, success create worked
          res.status(201).json({recipe: populatedRecipe})
      });
    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}

async function index(req, res){
    try {
        const recipes = await Recipe.find({}).populate('user').exec();
        res.status(200).json({recipes});
    } catch(err){
        res.json(err);
    }
}

async function show(req, res){
    try {
        const recipe = await Recipe.findById(req.params.id);
        res.status(200).json({recipe: recipe});
    } catch(err){
        console.log(err);
        res.send({err});
    }

}

async function update(req, res){
    try {
        const recipe = await Recipe.findById(req.params.id);
        //update body of form
        recipe.cuisine = req.body.cuisine;
        recipe.recipeName = req.body.recipeName;
        recipe.description = req.body.description;
        recipe.cookTime = req.body.cookTime;
        recipe.ingredients = req.body.ingredients;
        recipe.instructions = req.body.instructions;
        await recipe.save();
        res.status(200).json({recipe: recipe});
    } catch(err){
        console.log(err)
        res.send({err})
    }
}

async function deleteRecipe(req, res){
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        res.json();
    } catch(err){
        console.log(err)
        res.send({err});
    }
}
