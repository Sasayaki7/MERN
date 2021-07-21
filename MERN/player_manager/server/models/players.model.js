const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    name: {type: String,
        required: [true, "Player name is required"],
        validate:{
            validator: v=> v.length > 2,
            message: 'Name must be at least 3 letters long'
        }
    },
    position: {type: String,
        required: [true, "Player Position is required"],
        enum: {values: ['P', '1st', '2nd', 'DH', '3rd', 'SS', 'C', 'RF', 'CF', 'LF'], message: '{VALUE} is not a valid position'}
    },
    status: {type: [{id: {type: Number}, activity: {type: String, 
            required: [true, "Player status must be filled"],
            enum: {values: ["Playing", "Not Playing", "Undecided"], 
            message: '{VALUE} is not a valid status'}}}],   
    }
}, {timestamps: true})

module.exports.Player = mongoose.model("Player", PlayerSchema);