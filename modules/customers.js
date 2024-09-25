require('dotenv').config()
const { v4 } = require('uuid')
const { MongoOperations } = require('../services/mongo/mongo-operations')
const { errorTypes } = require('../utiles/types')
const mongoOperations = new MongoOperations(process.env.MONGO_USERS_DB)


const existcustomerName = async (customerName) => {
    mongoOperations.Collection = process.env.MONGO_USERS_COLLECTION;
    try {
        const response = await mongoOperations.find({ filter: { customerName: customerName } })
        return response.length > 0
    }
    catch (error) {
        throw error;
    }
}

const getCustomerByName = async (customerName) => {
    mongoOperations.Collection = process.env.MONGO_USERS_COLLECTION;
    try {
        const response = await mongoOperations.find({ filter: { customerName: customerName } })
        return response
    }
    catch (error) {
        throw error;
    }
}

const createCustomer = async (customer) => {

 
    console.log(customer.customerName);
    if (await existcustomerName(customer.customerName)) {
        const error = {
            massege: (`customerName '${customer.customerName}' is not valid`),
            type: errorTypes.VALIDATION
        }
        throw error
    }
    const id = v4();
    customer.id = id

    try {
        mongoOperations.Collection = process.env.MONGO_USERS_COLLECTION;
        const response = await mongoOperations.insertItem(customer)
        console.log({ response })
        return customer;
    }
    catch (error) {
        throw error
    }
}



module.exports = {
    existcustomerName, createCustomer
}





//לכל לקוח
//שם  טלפון id מייל