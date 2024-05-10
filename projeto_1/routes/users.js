// ./routes/users.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const userService = require('../services/userService');
const UserService = new userService(db.User);

const userController = require('../controllers/userController');
const UserController = new userController(UserService);

const authMiddleware = require('../middlewares/authMiddleware');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Modulo de usuários está rodando');
});

//Rota para criar um novo usuario
router.post('/newUser',function(req, res, next){
  UserController.create(req,res);
});

// Rota para login de usuário
router.post('/login', function(req, res, next) {
  UserController.loginUser(req, res);
});

router.get('/findAllUser', authMiddleware, function(req, res, next){
  const page = parseInt(req.query.page) || 1; // Pega o número da página da query string, ou default para 1
  const limit = parseInt(req.query.limit) || 10; // Pega o limite da página da query string, ou default para 10

  UserController.findAllUser(req, res, page, limit);
});

router.get('/findUserbyId', function(req, res, next){
  UserController.findUserbyId(req, res);
});

module.exports = router;
