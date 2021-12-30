const express=require('express');
const route=express.Router();

const services=require('../services/render');

const controller= require('../controller/controller')
route.get('/',services.homeRoutes);

route.get('/create',services.create);

route.get('/book',services.book);

route.get('/create',services.create);

route.get('/dashboard',services.dashboard);

route.get('/m_list',services.m_list);

route.get('/profile',services.profile);


//API for slots
route.post('/api/slots',controller.createSlot);
route.get('/api/slots',controller.findSlot);


module.exports = route;