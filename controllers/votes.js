const Recipe = require('../models/recipe');

module.exports = {
    create,
}

async function create(req, res){
    try {
        const recipe = await Recipe.findById(req.params.id);
        recipe.votes.push({
            username: req.user.username, 
            userId: req.user._id, 
            stars: req.body.stars
        });
        await recipe.save();
        res.status(201).json({data: 'vote added'});
    } catch(err){
        res.json({data: err})
    }
}

