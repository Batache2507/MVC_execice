const { request, response } = require('express');
let express = require('express');
let router = express.Router();

let userController = require('./controllers/userController');

//liste des routes vers les contrôleurs
router.get('/', function (request, response) {
    response.redirect('/user');
})

router.get('/user', userController.userList);
router.get('/user/show/:iduser', userController.userShow);
router.get('/user/delete/:iduser', userController.userDelete);
router.get('/user/add', userController.userFormAdd);
router.post('/user/new', userController.userNew);
router.get ('/user/update/:iduser', userController.userUpdate);

//exporter module 
module.exports = router;
