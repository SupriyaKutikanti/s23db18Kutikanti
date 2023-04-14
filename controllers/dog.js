var dog = require('../models/dog');
// List of all Costumes
exports.dog_list = function(req, res) {
 res.send('NOT IMPLEMENTED: dog list');
};
// for a specific Costume.
exports.dog_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await dog.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
//exports.dog_update_put = function(req, res) {
 //res.send('NOT IMPLEMENTED: dog update PUT' + req.params.id);
 // Handle Costume update form on PUT.
exports.dog_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await dog.findById( req.params.id)
// Do updates of properties
if(req.body.dog_color)
toUpdate.dog_color = req.body.dog_color;
if(req.body.dog_breed) toUpdate.dog_breed = req.body.dog_breed;
if(req.body.dog_price) toUpdate.dog_price = req.body.dog_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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
    document.Stu_Name = req.body.Stu_Name;
    document.Stu_Age = req.body.Stu_Age;
    document.Mail_Id = req.body.Mail_Id;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };