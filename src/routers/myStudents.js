const express = require('express');
const app = express();
//  we need to define the router
const router = new express.Router();

const RegStudentData = require("../models/students")



/*  create (POST) the data in the database */
// router.post('/students', (req, res) => {
//     console.log(req.body)
//     const user = RegStudentData(req.body)
//     // store the data in mongoose 
//     user.save().then(() => {
//         res.status(201).send(console.log(`data is saved in mongoose`));
//     }).catch(err => {
//         res.status(201).send(console.log(`error saving data in mongoose ${err}`));
//     })
// })

router.get('/', (req, res) => {
    res.send('How are you')
})

router.post('/students', async (req, res) => {
    try {
        const user = await RegStudentData(req.body);
        // store the data in mongoose 
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch (err) {
        res.status(404).send(err)
    }
})


// get all data from the database
router.get('/students', async (req, res) => {
    try {
        const studentData = await RegStudentData.find();
        res.send(studentData);


    } catch (err) {
        res.send(err);
    }

})


// get the specific data from the database
router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await RegStudentData.findById({ _id: _id })
        res.send(studentData);
    } catch (err) {
        res.send(err);
    }
})

// get the specific data from the database
router.get('/students/:email', async (req, res) => {
    try {
        const email = req.params.id;
        const studentData = await RegStudentData.findOne({ email })
        res.send(studentData);
    } catch (err) {
        res.send(err);
    }
})

/*
// patch(update) the specific data from the database
router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudentData = await RegStudentData.findByIdAndUpdate(_id, req.body,
            { new: true });
        res.send(updateStudentData);
    } catch (err) {
        res.send(err);
    }
}); */



// patch(update) the specific data from the database
router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await RegStudentData.findByIdAndUpdate(_id, req.body);
        res.send(updateData);

        console.log(updateData);
    } catch (err) {
        res.status(404).send(updateData);
    }
});



// delete (delete) the specific data from the database
router.delete('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await RegStudentData.findByIdAndDelete({ _id: _id })
        res.send(studentData)
    } catch (err) {
        throw err
    }
})


module.exports = router;



