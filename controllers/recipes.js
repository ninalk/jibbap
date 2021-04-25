const Recipe = require('../models/recipe');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');
const s3 = new S3();

module.exports = {
    create,
    index
}

function create(req, res){
    console.log(req.body, req.file, req.user)

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
        res.status(200).json({posts});
    } catch(err){
        resjson(err);
    }
}