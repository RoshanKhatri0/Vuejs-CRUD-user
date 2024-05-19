const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const auth = require('../middleware/auth');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/profile', auth, authController.getProfile);
router.get('/allprofile', authController.getAllProfile);
router.put('/profile', auth, authController.updateProfile);
router.delete('/profile', auth, authController.deleteProfile);

module.exports = router;
