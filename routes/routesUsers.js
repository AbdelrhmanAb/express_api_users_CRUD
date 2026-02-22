
const express = require("express")

const router = express.Router()

const { body, validationResult } = require("express-validator")
const userControl = require("../controler/controler")




router.route("/")
  .get(userControl.getAllUsers)
  .post([
    body("name")
      .notEmpty()
      .isLength({ min: 3 })
      .withMessage("name is required and length must be > 3"),
    body("age")
      .notEmpty()
      .withMessage("age must be bigger than 9")

  ]
    , userControl.createUser)


router.route("/:id")
  .get(userControl.getUser)
  .patch( userControl.updateUser)
  .delete( userControl.deleteUser)




module.exports = router