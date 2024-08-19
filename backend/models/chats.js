const mongoose=require("mongoose");

const ChatuserSchema=new mongoose.Schema({
	message : {
		type:String,
		required : true
	},
	sender : {
		type:String,
		required : true,
		unique:true
	},
	password: {
		type:String,
		required : true,
        default: Date.now
	}
})

const Chatuser=new mongoose.model("Chats",ChatuserSchema);

module.exports=Chatuser;