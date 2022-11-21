const { Schema, model } = require("mongoose");

const SkillsSchema=new Schema({

    name:{
       type:String,
       required:true 
    },

    img:{
        type:String,
        required:true
    },

},
{
 timestamps:true,
 collection:"Skills"   
})
const Skill=model("Skills",SkillsSchema);
module.exports=Skill;
