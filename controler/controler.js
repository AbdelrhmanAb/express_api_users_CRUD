
const data = require("../date/date1.js")

const {  validationResult } = require("express-validator");

const User = require("../moduls/users.js")




const getAllUsers =  async(req, res) => {

  const usersTable = await User.find()
  
  return res.status(200).json(usersTable)
}

const getUser = async(req, res) => {
  const Id_User = req.params.id

  const user = await User.findById(Id_User)
 
  return res.json(user)
}


const createUser = async (req, res) => {

      const errors = validationResult(req)
      const body = await req.body
      console.log((errors));

      if (!errors.isEmpty()) {
        return res.status(400).json({
          stutus: 400,
          msg: errors.array()
        })

      }

        const usersTable = await User.find()
        const userIsDefind =  usersTable.find((i) => {
        return i.email === body.email
      })

      if (!userIsDefind) {
       const user = new User({...body})
        await user.save()
         return res.status(201).json([{
        stutus:201,
        msg:"create success"},
      
      user])
      }

      return res.status(409).json({
        stutus:409,
        msg:"This email is used"
      })

     
}



const updateUser = async(req, res)=>{
const Id_User = req.params.id
try {
 const UpdateUser =await User.updateOne({ _id:Id_User},{$set:{...req.body}})
  return res.status(201).json(UpdateUser,"succses")
} catch (error) {
  return res.status(400).json({error:error})
  
}


}


const deleteUser =async(req, res)=>{
const Id_User = req.params.id

const DeLData = await User.deleteOne({_id:Id_User})
res.status(200).json({success:true,DeLData})


  
}


module.exports={
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}