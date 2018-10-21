var mongoose = require('mongoose');

var parcelSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: {
            values: ["express", "classic"],
            message: 'Type must be express or classic'
        },
        required: [true, "Type is required"]
    },
    weight: { //in kg
        type: Number,
        min: [0, "Weight must be superior than 0"],
        required: [true, "Weight is required"],
    },
    volume: {
        type: Number,
        min: [0, "Volume must be superior than 0"],
        required: [true, "Volume is required"],
    },
    recipient: {
        type: String,
        required: [true, "Recipient is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    city: {
        type: String,
        required: [true, "City is required"]
    },
    zipcode: {
        type: String,
        required: [true, "Zipcode is required"]
    },
});
parcelSchema.methods.estimatePrice = function() {
    if (this.weight < 0.5){
        return this.type == "express" ? 10 : 6;
    } else if (this.weight < 1) {
        return this.type == "express" ? 12 : 7;
    } else if (this.weight < 2) {
        return this.type == "express" ? 15 : 9;
    } else {
        return (this.type == "express" ? 4 : 1) * this.weight;
    }
};
mongoose.model('Parcel', parcelSchema);

module.exports = mongoose.model('Parcel');