const Recipe = require('../models/recipe');

module.exports = {
    create,
    deleteVote
}

async function create(req, res){
    console.log(req.body, req.user, req.params.id, ' in create vote')
    try {
        const recipe = await Recipe.findById(req.params.id);
        console.log(recipe, ' this recipe')
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

async function deleteVote(req, res){
    try {
        const recipe = await Recipe.findOne({
            'votes._id': req.params.id, 
            'votes.username': req.user.username
        });
        recipe.votes.remove(req.params.id)
        await recipe.save()
        res.json({data: 'vote removed'});
    } catch(err){
        res.json({error: err});
    }

}