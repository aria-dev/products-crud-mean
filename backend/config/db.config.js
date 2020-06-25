const mongoose = require("mongoose");
const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

module.exports.init = function () {
    mongoose.connect(process.env.MONGO_ATLAS_URL, options, function (err) {
        if (err) throw err;
        console.log("...mongodb initialised");
    });
}
