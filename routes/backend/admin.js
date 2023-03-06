

var express = require("express");
const authController = require("../../controller/authController");
const adminController = require("../../controller/adminController");
var router = express.Router();

router.get("/admin",authController.main)//admin
router.post("/admin",authController.login);
router.get('/logout',authController.logout)
router.post('/register',authController.createUser)
router.get("/admin/dashboard",adminController.dashboard);
router.get('/profile/:id', adminController.getBrands);
router.get('/brands', adminController.getBrands);//brands
router.post('/brands', adminController.brands);//brands
router.get('/profile/:id',adminController.getClients);// clients
router.get('/clients', adminController.getClients);// clients
router.post('/clients', adminController.clients);// clients
router.get('/profile/:id',adminController.getArticles);//articles
router.get('/articles', adminController.getArticles);//articles
router.post('/articles', adminController.articles);//articles
router.get('/profile/:id',adminController.getProducts);// products
router.get('/products', adminController.getProducts);// products
router.post('/products', adminController.products);// products
router.get('/profile/:id',adminController.getContact);//contact
router.get('/contact', adminController.getContact);//contact
router.post('/contact', adminController.contact);//
router.get('/bannerImage', adminController.getBanner);//banner
router.post('/bannerImage', adminController.banner);
router.post("/updateMission",adminController.updateMission)

module.exports = router;
