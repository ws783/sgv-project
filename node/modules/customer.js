require('dotenv').config()
const { v4 } = require('uuid')
const { MongoOperations } = require('../services/mongo/mongo-operations')
const { errorTypes } = require('../utils/types')
const { MONGO_CUSTOMER_COLLECTION="customer",MONGO_ACCOUNTANCY_DB="expenses"} = process.env
const mongoOperations = new MongoOperations(MONGO_ACCOUNTANCY_DB)


const existcustomerName = async (customerName) => {
    mongoOperations.Collection = MONGO_CUSTOMER_COLLECTION;
    try {
        const response = await mongoOperations.find({ filter: { name: customerName } })
        return response.length > 0
    }
    catch (error) {
        throw error;
    }
}

const getAllCustomer = async () => {

    mongoOperations.Collection = MONGO_CUSTOMER_COLLECTION;
    try {
        const response = await mongoOperations.find({})
        return response
    }
    catch (error) {
        throw error;
    }
}

const createCustomer = async (customer) => {

    if (await existcustomerName(customer.name)) {
        const error = {
            massege: (`customerName '${customer.name}' is not valid`),
            type: errorTypes.VALIDATION
        }
        throw error
    }
    const id = v4();
    customer.id = id

    try {
        mongoOperations.Collection = MONGO_CUSTOMER_COLLECTION;
        const response = await mongoOperations.insertItem(customer)
        return customer;
    }
    catch (error) {
        throw error
    }
}



module.exports = {
    existcustomerName, createCustomer, getAllCustomer
}



