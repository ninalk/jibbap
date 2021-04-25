const Recipe = require('../models/recipe');

module.exports = {
    create,
    deleteStep
}

async function create(req, res){

    try {
        const recipe = await Recipe.findById(req.params.id);
        recipe.instructions.push({
            stepNumber: req.body.stepNumber,
            stepDescription: req.body.stepDescription,
        });
        await recipe.save()
        res.status(201).json({ data: 'step added' });

    } catch(err){
        res.json({data: err})
    }
}

async function deleteStep(req, res){

    try {
        const recipe = await Recipe.findOne({
            'instructions._id': req.params.id
        });
        recipe.instructions.remove(req.params.id);
        await recipe.save()
        res.json({data: 'step removed'})
    } catch(err){
        res.json({error: err});
    }
}