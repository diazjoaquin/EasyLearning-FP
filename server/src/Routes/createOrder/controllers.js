const {Orderr, User} = require("../../db")

const createOrder = async(req,res) =>{

    const {prodd, userDB} = req.body //array de productos
    //console.log("HASTA ACA", prodd);
    // const prodd = req.body[0];
    // const userDB = req.body[1];
    console.log("console", userDB)
    let user = await User.findByPk(userDB.id)

    console.log(prodd, user.dataValues);
    try {

        const newOrder = await Orderr.create(
               prodd 
             )
        
       await newOrder.addUser(user)

    console.log("newOrder", newOrder);

    res.status(200).json(newOrder)
    } catch (error) {
    res.status(400).json(error)
    }
}

module.exports = { createOrder };