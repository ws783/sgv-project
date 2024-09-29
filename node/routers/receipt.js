
const express = require('express')
const router = express.Router()
const {checkBodyContainkeys}=require('../utils/middleware')
const {getAllRecepits,getReceipetBycustomer,getReceiptBetweenTwoDates,getReceiptByMonth,getReceiptByYear, createReceipt}=require('../modules/receipt')


router.get('/getallrecepits',async(req,res)=>{
    const recepits=await getAllRecepits()
    res.status(200).json(recepits)
})

router.get('/getrecepitbycustomer/:customerName',async(req,res)=>{    
    const {customerName}=req.params
    const receipt=await getReceipetBycustomer(customerName)
    res.status(200).json(receipt)

})

router.get('/getrecepits/:starDate/:endDate',async(req, res) => {
    const {starDate}= req.params;
    const {endDate}= req.params;
    const receipt=await getReceiptBetweenTwoDates(starDate,endDate)
    res.status(200).json(receipt)
})

router.get('/getrecepitsbymonth/:month',async(req, res) => {
    const {month}= req.params;
    const receipt=await getReceiptByMonth(month)
    res.status(200).json(receipt)
})

router.get('/getrecepitsbyyear/:year',async(req, res) => {
    const {year}= req.params;
    const receipt=await getReceiptByYear(year)
    res.status(200).json(receipt)
})

router.use(express.json())

router.post('/createone',checkBodyContainkeys(['customerName','date','amount','payment','details']),async(req, res) => {
    const receipt= req.body;
    const newReceipt = await createReceipt(receipt)
    res.status(201).json(newReceipt)
})

module.exports = router