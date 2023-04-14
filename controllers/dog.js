var dog = require('../models/dog');
// List of all Costumes
exports.dog_list = function(req, res) {
 res.send('NOT IMPLEMENTED: dog list');
};
// for a specific Costume.
exports.dog_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: dog detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.dog_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: dog create POST');
};
// Handle Costume delete form on DELETE.
exports.dog_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: dog delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.dog_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: dog update PUT' + req.params.id);
};

// List of all dog
exports.dog_list = async function(req, res) {
    try{
    thedog = await dog.find();
    res.send(thedog);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.dog_view_all_Page = async function(req, res) {
    try{
    thedog = await dog.find();
    res.render('dog', { title: 'dog Search Results', results: thedog });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.dog_create_post = async function(req, res) {
    console.log(req.body)
    let document = new dog();
    document.dog_color = req.body.dog_color;
    document.dog_breed = req.body.dog_breed;
    document.dog_price = req.body.dog_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };