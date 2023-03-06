var express = require("express");
const homeController = require("../../controller/homeController");
var router = express.Router();

router.get("/fhome",homeController.Image);
router.get("/Brand",homeController.Brands)
router.get("/Client",homeController.Clients)
router.get("/Product",homeController.Products)
router.get("/Contact",homeController.Contact)
router.get("/About",homeController.About)
router.get("/",homeController.Home)
// router.get("/active",homeController.Active)
// router.get("/mission",homeController.Mission)

// router.post("/upload",homeController.Upload)





module.exports = router;
