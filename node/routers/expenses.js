

const express = require('express')
const router = express.Router()
const {checkBodyContainkeys}=require('../utils/middleware')
const {getExpenseBetweenTwoDates,createExpense,getExpenseByMonth,getExpenseByYear,getAllExpenses}=require('../modules/expense')


router.get('/getallexpenses',async(req,res)=>{
    const expenses=await getAllExpenses()
    res.status(200).json(expenses)
})

router.get('/findexpences/:starDate/:endDate',async(req, res) => {
    const {starDate}= req.params;
    const {endDate}= req.params;
    const expense=await getExpenseBetweenTwoDates(starDate,endDate)
    res.status(200).json(expense)
})

router.get('/getexpensebymonth/:month',async(req, res) => {
    const {month}= req.params;
    const expense=await getExpenseByMonth(month)
    res.status(200).json(expense)
})

router.get('/getexpensebyyear/:year',async(req, res) => {
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