const express = require('express')
const router = express.Router()
const {checkBodyContainkeys}=require('../utils/middleware')
router.use(express.json())

router.post('/createone',checkBodyContainkeys(['costomerName','costomerPhone','costomerEmail']),async(req, res) => {
    const customer= req.body;
    const newCustomer=await createCustomer(customer)
    res.status(201).json(newCustomer)
})

