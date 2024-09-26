require('dotenv').config()
const { v4 } = require('uuid')
const { MongoOperations } = require('../services/mongo/mongo-operations')
const { errorTypes } = require('../utils/types')
const {MONGO_RECEPIT_COLLECTION,MONGO_ACCOUNTANCY_DB}=process.env
const mongoOperations = new MongoOperations(MONGO_ACCOUNTANCY_DB)

const getAllRecepits = async () => {
    mongoOperations.Collection = MONGO_RECEPIT_COLLECTION;
    try {
        const response = await mongoOperations.find({})
        return response
    }
    catch (error) {
        throw error;
    }
}
const getReceipetByrecepit = async (recepitName,recepitPhone) => {
    mongoOperations.Collection = MONGO_RECEPIT_COLLECTION;
    try {
        const filter={name:recepitName,phone:recepitPhone}
        const response = await mongoOperations.find({ filter })
        return response
    }
    catch (error) {
        throw error;
    }
}

const getReceiptBetweenTwoDates = async (starDate,endDate) => {
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

const getReceiptByMonth = async (month) => {
    mongoOperations.Collection = MONGO_RECEPIT_COLLECTION;
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
const getReceiptByYear = async (year) => {
    mongoOperations.Collection = MONGO_RECEPIT_COLLECTION;
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
const createReceipt = async (receipt) => {
    const id = v4();
    expense.id = id

    try {
        mongoOperations.Collection = MONGO_RECEPIT_COLLECTION;
        const response = await mongoOperations.insertItem(receipt)
        console.log({ response })
        return expense;
    }
    catch (error) {
        throw error
    }
}

module.exports={getReceiptBetweenTwoDates,getReceiptByMonth,getReceiptByYear,createReceipt,getReceipetByrecepit,getAllRecepits}