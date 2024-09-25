

const express = require('express')
const router = express.Router()
const {checkBodyContainkeys}=require('../utils/middleware')
const {getExpenseBetweenTwoDates,createExpense,getExpenseByMounth,getExpenseByYear}=require('../modules/expenses')

router.get('/findExpences/:starDate/:endDate',async(req, res) => {
    const {starDate}= req.params;
    const {endDate}= req.params;
    const expense=await getExpenseBetweenTwoDates(starDate,endDate)
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
router.post('/createone',checkBodyContainkeys(['date','amount','supplier','payment','details']),async(req, res) => {
    const expense= req.body;
    const newExpense = await createExpense(expense)
    res.status(201).json(newExpense)
})
module.exports = router