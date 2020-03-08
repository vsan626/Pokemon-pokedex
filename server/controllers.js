const express = require("express");
const model = require('../database/schema.js')

module.exports = {
  getAll: (req, res) => {
    console.log("getAll Hit from controllers")
    model.find({}, (err, data) => {
      if(err){
        res.status(400).send(err)
      } else {
        res.status(200).send(data);
      }
    })
  },
  postOne: (req, res) => {
    console.log("postOne Hit from controllers")
    let { id, name, type, img } = req.body;
    model.create({
      id: id,
      name: name,
      type: type, 
      img: img
    })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err)
    })
  },
  updateOne: (req, res) => {
    console.log("updateOne Hit from controllers")
    let _id = req.params.id
    let {id, name, type, img} = req.body
    model.findOneAndUpdate(_id, { id:id, name:name, type:type, img:img})
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(200).send(err)
    })
  },
  deleteOne: (req, res) => {
    console.log("deleteOne Hit from controllers")
    let _id = req.params
    model.deleteOne({_id}, function (err) {
      if (err) return handleError(err);
    })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err)
    })
  }
};
