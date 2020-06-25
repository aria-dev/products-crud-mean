module.exports = function(mongoose) {
    var Schema = mongoose.Schema;
    var Product = new Schema({
            name: String,
            category: String,
            price: String,
            size: String,
            stock: Number,
            description: String
        });
   
    var models = {
      Product : mongoose.model('Product', Product),
    };

    return models;
}