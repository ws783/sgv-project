require('dotenv').config()
const { v4 } = require('uuid')
const { MongoOperations } = require('../services/mongo/mongo-operations')
const { errorTypes } = require('../utils/types')
const {MONGO_EXPENSE_COLLECTION,MONGO_ACCOUNTANCY_DB}=process.env
const mongoOperations = new MongoOperations(MONGO_ACCOUNTANCY_DB)

const getAllExpenses = async () => {
    mongoOperations.Collection = MONGO_EXPENSE_COLLECTION;
    try {
        const response = await mongoOperations.find({})
        return response
    }
    catch (error) {
        throw error;
    }
}


const getExpenseBetweenTwoDates = async (starDate,endDate) => {
    mongoOperations.Collection = MONGO_EXPENSE_COLLECTION;
    try {
        const filter={ date: { $gte: starDate, $lt: endDate } }
        const response = await mongoOperations.find({filter})
        return response
    }
    catch (error) {
        throw error;
    }
}

const getExpenseByMonth = async (month) => {
    mongoOperations.Collection = MONGO_EXPENSE_COLLECTION;
    try {
        const filter={
            $expr: {
                $eq: [{ $month: { $toDate: "$date" } }, parseInt(month)]
              }}
        const response = await mongoOperations.find({filter})
        return response
    }
    catch (error) {
        throw error;
    }
}
const getExpenseByYear = async (year) => {
    mongoOperations.Collection = MONGO_EXPENSE_COLLECTION;
    try {
        const filter={
            
                $expr: {
                  $eq: [{ $year: { $toDate: "$date" } }, parseInt(year)]
                }}
        const response = await mongoOperations.find({filter})
        return response
    }
    catch (error) {
        throw error;
    }
}

const createExpenses = async (expense) => {
    
    if (await existexpenseName(expense.name)) {
        const error = {
            massege: (`expenseName '${expense.name}' is not valid`),
            type: errorTypes.VALIDATION
        }
        throw error
    }
    const id = v4();
    expense.id = id

    try {
        mongoOperations.Collection = MONGO_EXPENSE_COLLECTION;
        const response = await mongoOperations.insertItem(expense)
        return expense;
    }
    catch (error) {
        throw error
    }
}

module.exports={getExpenseBetweenTwoDates,createExpenses,getExpenseByMonth,getExpenseByYear,getAllExpenses}

