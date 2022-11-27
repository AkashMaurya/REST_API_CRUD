const mongoose = require('mongoose');


mongoose.connect("mongodb://0.0.0.0/students-api", {

    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log('Connection is successful');
}).catch((err) => {
    console.log(" Connection error: " + err);
})