
const data = require("../date/date1.js")

const express = require("express")
const { body, validationResult } = require("express-validator")



const getAllUsers =  (req, res) => {
  return res.status(200).json(data)
}

const getUser = (req, res) => {
  const Id_User = +req.params.id


  const person = data.find((item) => item.id === Id_User)
  if (!person) {
    return res.status(404).json({
      errpr: 404,
      massege: "not found"
    })

  }
  return res.json(person)
}


const createUser = async (req, res) => {

      const errors = validationResult(req)
      const body = await req.body
      console.log((errors));
      const newPerson = { id: data.length + 1, ...body }

      if (!errors.isEmpty()) {
        return res.status(400).json({
          stutus: 400,
          msg: errors.array()
        })

      }

      const exist = data.find((i) => {
        return i.name === body.name
      })

      if (!exist) {
        data.push(newPerson)

      }


      return res.status(201).json(newPerson)
}



const updateUser = (req, res)=>{
const Id_User = +req.params.id


  let person = data.find((item) => item.id === Id_User)
  if (!person) {
    return res.status(404).json({
      errpr: 404,
      massege: "not found"
    })
 
  }

  person = {...person,...req.body}
  return res.json(person)
}


const deleteUser =(req, res)=>{
const Id_User = +req.params.id


  let person = data.find((item) => item.id === Id_User)
  if (!person) {
    return res.status(404).json({
      errpr: 404,
      massege: "not found"
    })
 
  }

  const newData = data.filter((item)=>{
    return item.id !== Id_User
  })
  return res.json(person)
}


module.exports={
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}