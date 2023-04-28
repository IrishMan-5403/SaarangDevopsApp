const User = require('../models/user');


exports.data = async (req, res ,next) => {
    const users= await User.find()
    return res.send(users)

};