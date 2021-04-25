const Recipe = require('../models/recipe');

module.exports = {
    create,
    deleteIngredient
}

async function create(req, res){

    try {
        const recipe = await Recipe.findById(req.params.id);
        recipe.ingredients.push({
            quantity: req.body.quantity,
            measurement: req.body.measurement,
            product: req.body.product
        });
        await recipe.save()
        res.status(201).json({ data: 'ingredient added' });

    } catch(err){
        res.json({data: err})
    }
}

async function deleteIngredient(req, res){

    try {
        const recipe = await Recipe.findOne({
            'ingredients._id': req.params.id
        });
        recipe.ingredients.remove(req.params.id);
        await recipe.save()
        res.json({data: 'ingredient removed'})
    } catch(err){
        res.json({error: err});
    }
}