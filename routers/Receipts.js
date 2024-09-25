
const express = require('express')
const router = express.Router()
const {checkBodyContainkeys}=require('../utils/middleware')
const {getReceiptBetweenTwoDates,getReceiptByMounth,getReceiptByYear,createReceipt}=require('../modules/Receipts')

router.get('/findExpences/:starDate/:endDate',async(req, res) => {
    const {starDate}= req.params;
    const {endDate}= req.params;
    const expense=await (starDate,endDate)
    res.status(200).json(expense)
})
router.get('/findExpencesByMonth/:month',async(req, res) => {
    const {month}= req.params;
    const expense=await getExpenseByMounth(month)
    res.status(200).json(expense)
})
router.get('/findExpencesByYear/:year',async(req, res) => {
    const {year}= req.params;
    const expense=await getExpenseByYear(year)
    res.status(200).json(expense)
})

router.use(express.json())
router.post('/createone',checkBodyContainkeys(['']),async(req, res) => {
    const expense= req.body;
    const newExpense = await createExpense(expense)
    res.status(201).json(newExpense)
})
module.exports = router