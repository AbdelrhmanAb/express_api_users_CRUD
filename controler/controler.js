
const data = require("../date/date1.js")

const { validationResult } = require("express-validator");

const User = require("../moduls/users.js")

const HttpTxtResponse = require("../utls/httptextresponse.js")


/// ============= GET USERS ==============>>

const getAllUsers = async (req, res) => {

  const query = req.query

  const limit = query.limit || 10;
  const page = +query.page || 1;
  const skip = (page - 1) * limit;

  const users = await User.find().limit(limit).skip(skip)

  return res.status(200).json({
    stutus: HttpTxtResponse.SUCCESSS,
    data: {
      users,
    }
  })
}

/// ============= GET ONE USER ==============>>

const getUser = async (req, res) => {
  const Id_User = req.params.id

  try {
    const user = await User.findById(Id_User)

    return res.json({
      stutus: HttpTxtResponse.SUCCESSS,
      data: {
        user
      }
    })

  } catch (error) {
    return res.status(400).json({ stutus: HttpTxtResponse.FAIL, data: { error } })

  }


}

/// ========== CREATE ONE USER ========>>

const createUser = async (req, res) => {

  const errors = validationResult(req)
  const body = await req.body
  console.log((errors));

  if (!errors.isEmpty()) {
    return res.status(400).json({
      stutus: HttpTxtResponse.FAIL,
      data: {
        errors
      }
    })

  }

  const users = await User.find()
  const userIsDefind = users.find((i) => {
    return i.email === body.email
  })

  if (!userIsDefind) {
    const user = new User({ ...body })
    await user.save()


    return res.status(201).json({ stutus: HttpTxtResponse.SUCCESSS, data: { user } })
  }

  return res.status(409).json({
    stutus: HttpTxtResponse.ERROR,
    data: null

  })


}


///=============== UPDATE USER =========>>

const updateUser = async (req, res) => {
  const Id_User = req.params.id
  try {
    const UpdateUser = await User.updateOne({ _id: Id_User }, { $set: { ...req.body } })
    return res.status(201).json(
      {
        stutus: HttpTxtResponse.SUCCESSS,
        data: {
          UpdateUser,
        }
      }
    )
  } catch (error) {
    return res.status(400).json({ stutus: HttpTxtResponse.FAIL, data: { error } })

  }


}


///============= DELETE USER =========>>

const deleteUser = async (req, res) => {
  const Id_User = req.params.id

  const DeLData = await User.deleteOne({ _id: Id_User })
  return res.status(200).json({
    stutus: HttpTxtResponse.SUCCESSS, data: {
      user: DeLData
    }
  })



}



module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,

}