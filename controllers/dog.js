var dog = require('../models/dog');
// List of all dogs

exports.dog_list = async function (req, res) {
    try {
        thedogs = await dog.find();
        res.send(thedogs);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific dog.
exports.dog_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await dog.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle dog create on POST.
exports.dog_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: dog create POST');
};
// Handle dog delete form on DELETE.
exports.dog_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await dog.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle dog update form on PUT.
exports.dog_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await dog.findById(req.params.id)
        // Do updates of properties
        if (req.body.dog_color) toUpdate.dog_color = req.body.dog_color;
        if (req.body.dog_breed) toUpdate.dog_breed= req.body.dog_breed;
        if (req.body.dog_price) toUpdate.dog_price = req.body.dog_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};
exports.dog_view_all_Page = async function (req, res) {
    try {
        thedogs = await dog.find();
        res.render('dog', { title: 'dog Search Results', results: thedogs });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
exports.dog_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await dog.findById(req.query.id)
        res.render('dogdetail', { title: 'dog Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
exports.dog_create_post = async function (req, res) {
    console.log(req.body)
    let document = new dog();
    document.dog_color = req.body.dog_color;
    document.dog_breed = req.body.dog_breed;
    document.dog_price = req.body.dog_price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
exports.dog_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('dogcreate', { title: 'dog Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.dog_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await dog.findById(req.query.id)
        res.render('dogupdate', { title: 'dog Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.dog_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await dog.findById(req.query.id)
        res.render('dogdelete', { title: 'dog Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};