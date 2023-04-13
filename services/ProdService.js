/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Prod } = require('../models/Prod');

/**
* Creates the data
*
* prod Prod data to be created
* returns prod
* */
const createprod = ({ prod }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Prod(prod).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* prodId String the Id parameter
* no response value expected for this operation
* */
const deleteprod = ({ prodId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Prod.findOneAndDelete({ _id:prodId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllprod = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Prod.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* prodId String the Id parameter
* returns prod
* */
const getprod = ({ prodId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Prod.findById(prodId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* prodId String the Id parameter
* prod Prod data to be updated (optional)
* returns prod
* */
const updateprod = ({ prodId, prod }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Prod.findOneAndUpdate({ _id:prodId },prod).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createprod,
  deleteprod,
  getAllprod,
  getprod,
  updateprod,
};
