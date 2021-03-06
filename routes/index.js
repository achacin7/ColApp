const express = require('express');
const router = express.Router();

const pasajeroController = require('../controllers/pasajeroController');
const conductorController = require('../controllers/conductorController');
const userController = require('../controllers/userController');

require('dotenv').config({ path: 'variables.env'});

//rutas establecidas para la ejecución de los métodos POST y GET

router.get('/', (req, res) => {
	res.json({
		msg: "App deployed"
	})
})

router.post('/iniciarPasajero', (req, res) => {
	if(!!req.body){
		pasajeroController.insertPasajero( req.body, (err, result) => {
			if(err || result == null){
				res.json({
					success: false,
					pasajero: 'error'
				});
			}else{
				res.json({
					success: true,
					pasajero: result
				});
			}
		})
	}else{
		res.send('notData')
	}
})


router.post('/iniciarConductor', (req, res) => {
	if(!!req.body){
		conductorController.insertConductor( req.body, (err, result) => {
			if(err || result == null){
				res.json({
					success: false,
					conductor: 'error'
				});
			}else{
				res.json({
					success: true,
					conductor: result
				});
			}
		})
	}else{
		res.send('notData')
	}
})

router.post('/login', (req, res) => {
	if(!!req.body){
		userController.insertUser( req.body, (err, result) => {
			if(err || result == null){
				res.json({
					success: false,
					user: 'error'
				});
			}else{
				res.json({
					success: true,
					user: result
				});
			}
		})
	}else{
		res.send('notData')
	}
})

module.exports = router;