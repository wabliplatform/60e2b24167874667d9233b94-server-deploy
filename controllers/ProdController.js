/**
 * The ProdController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProdService');
const createprod = async (request, response) => {
  await Controller.handleRequest(request, response, service.createprod);
};

const deleteprod = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteprod);
};

const getAllprod = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllprod);
};

const getprod = async (request, response) => {
  await Controller.handleRequest(request, response, service.getprod);
};

const updateprod = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateprod);
};


module.exports = {
  createprod,
  deleteprod,
  getAllprod,
  getprod,
  updateprod,
};
