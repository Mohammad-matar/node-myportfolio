const { Schema, model } = require('mongoose')

const PersonalInfoSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },

},

    {
        timestamps: true,
        collection: "PersonalInfos"
    })
const PersonalInfo = model("PersonalInfo", PersonalInfoSchema);
module.exports = PersonalInfo;