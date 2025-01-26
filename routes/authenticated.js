const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.get('/users/me', UserController.me);
router.get('/my-orders', UserController.me);
router.get('/my-settings', UserController.me);

module.exports = router;