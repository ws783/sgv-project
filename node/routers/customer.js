const express = require('express')
const router = express.Router()
const {checkBodyContainkeys}=require('../utils/middleware')
const {createCustomer,getAllCustomer}=require('../modules/customer')

router.get('/getallcustomers',async(req, res) => {
    const {filter}= req.params;
    const customer=await getAllCustomer(filter)
    res.status(200).json(customer)
})

router.use(express.json())

router.post('/createone',checkBodyContainkeys(['name','phone']),async(req, res) => {
    const customer= req.body;
    const newCustomer=await createCustomer(customer)
    res.status(201).json(newCustomer)
})

module.exports = router

   





