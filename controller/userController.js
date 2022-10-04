const User = require('../models/userModels');

const addUser = async(req,res)=>{
    const data = {"name": "sanjay", "email":"sanjay@gmail.com"}

    // Create a new user
    User.create(data)
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
}
module.exports = addUser;