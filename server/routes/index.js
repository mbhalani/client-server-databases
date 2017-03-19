
console.log('ROUTES/index.js: begin of file');

const controller = require('../controllers');
const router = require('express').Router();

// connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);
router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);
router.post('/users', controller.users.post);

module.exports = router;
