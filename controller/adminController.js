
const {getBrands} = require("../model/services")
const pool = require("../config/database")
const { HomeBanner } = require("../model/services")
const { Mission } = require("../model/services")
const { updateMission } = require("../model/services")

exports.brands = function (req, res) {
  message = '';
  if (req.method == "POST") {
    var post = req.body;
    var title = post.title;
    var fl = post.fl;


    if (!req.files)
      return res.status(400).send('No files were uploaded.');
    var file = req.files.uploaded_image;
    var img_name = file.name;
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

      file.mv('public/images/upload_imagess/' + file.name, function (err) {

        if (err)
          return res.status(500).send(err);
        var sql = "INSERT INTO `brands`(`title`,`image`,`fl`) VALUES ('" + title + "','" + img_name + "','" + fl + "')";
        var query = pool.query(sql, function (err, result) {
          res.redirect('profile/' + result.insertId);
        });
      });
    } else {
      message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
      res.render('pages/backend/brands', { message: message });
    }
  } else {
    var message = '';
    var id = req.params.id;
    var sql = "SELECT * FROM `brands` WHERE `id`='" + id + "'";
    pool.query(sql, function (err, result) {
      console.log("brands", result)
      if (result.length <= 0)
        message = "Profile not found!";

      res.render('pages/backend/brands', { title: "Express", data: result, message: message });
    });
  }
},
exports.getBrands = function (req, res) {
  var message = '';
  var id = req.params.id;
  var sql = "SELECT * FROM `brands`";
  pool.query(sql, function (err, result) {
    if (result.length <= 0)
      message = "Brands not found!";

    res.render('pages/backend/brands', { title: "Express", data: result, message: message , active_nav : 'brands'});
  });
};


//clients



exports.clients = function (req, res) {
  console.log("resssssss=>", res);
  message = '';
  if (req.method == "POST") {
    var post = req.body;

    if (!req.files)
      return res.status(400).send('No files were uploaded.');
    var file = req.files.uploaded_image;
    var img_name = file.name;
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

      file.mv('public/images/upload_images/' + file.name, function (err) {

        if (err)
          return res.status(500).send(err);
        var sql = "INSERT INTO `clients`(image) VALUES ('" + img_name + "')";
        var query = pool.query(sql, function (err, result) {
          res.redirect('profile/' + result.insertId);
        });
      });
    } else {
      message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
      res.render('pages/backend/clients', { message: message });
    }
  } else {
    res.render('pages/backend/clients');
  }
};
exports.getClients = function (req, res) {
  console.log("resssssss=>", res);
  var message = '';
  var id = req.params.id;
  var sql = "SELECT * FROM `clients`";
  pool.query(sql, function (err, result) {
    console.log("clients>", result);
    if (result.length <= 0)
      message = "Profile not found!";

    res.render('pages/backend/clients', { data: result, message: message , active_nav : 'clients'});
  });
};


//articles

exports.articles = function (req, res) {
  message = '';
  if (req.method == "POST") {
    var post = req.body;
    var title = post.title;
    var description = post.description;
    var date = post.date;


    if (!req.files)
      return res.status(400).send('No files were uploaded.');
    var file = req.files.uploaded;
    var img_name = file.name;
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

      file.mv('public/images/upload_article_images/' + file.name, function (err) {

        if (err)
          return res.status(500).send(err);
        var sql = "INSERT INTO `articles`(`image`,`title`,`description`,`date`) VALUES ('" + img_name + "','" + title + "','" + description + "','" + date + "')";
        var query = pool.query(sql, function (err, result) {
          res.redirect('profile/' + result.insertId);
        });
      });
    } else {
      message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
      res.render('pages/backend/articles', { message: message });
    }
  } else {
    res.render('pages/backend/articles');
  }
};
exports.getArticles = function (req, res) {
  var message = '';
  var id = req.params.id;
  var sql = "SELECT * FROM `articles` LIMIT 2;";
  pool.query(sql, function (err, result) {
    if (result.length <= 0)
      message = "Profile not found!";

    res.render('pages/backend/articles', { data: result, message: message , 
      active_nav : 'articles' });
  });
};


//products


exports.products = function (req, res) {
  message = '';
  if (req.method == "POST") {
    var post = req.body;
    var title = post.title;
    var description = post.description;


    if (!req.files)
      return res.status(400).send('No files were uploaded.');
    var file = req.files.uploaded_image;
    var img_name = file.name;
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

      file.mv('public/images/products_images/' + file.name, function (err) {

        if (err)
          return res.status(500).send(err);
        var sql = "INSERT INTO `products`(`title`,`image`,`description`) VALUES ('" + title + "','" + img_name + "','" + description + "')";
        var query = pool.query(sql, function (err, result) {
          res.redirect('profile/' + result.insertId);
        });
      });
    } else {
      message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
      res.render('pages/backend/products', { message: message });
    }
  } else {
    res.render('pages/backend/products');
  }
};
exports.getProducts= function (req, res) {
  var message = '';
  var id = req.params.id;
  var sql = "SELECT * FROM `products`";
  pool.query(sql, function (err, result) {
    if (result.length <= 0)
      message = "Profile not found!";

    res.render('pages/backend/products', { data: result, message: message ,active_nav : 'products'});
  });
};

//contact

exports.contact = function (req, res) {
  message = '';
  if (req.method == "POST") {
    var post = req.body;
    var mobile_number = post.mobile_number;
    var email = post.email;
    var address = post.address;


    if (!req.files)
      return res.status(400).send('No files were uploaded.');
    var file = req.files.uploaded_image;
    var img_name = file.name;
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

      file.mv('public/images/contact_images/' + file.name, function (err) {

        if (err)
          return res.status(500).send(err);
        var sql = "INSERT INTO `contact`(`mobile_number`,`image`,`email`,`address`) VALUES ('" + mobile_number + "','" + img_name + "','" + email + "','" + address + "')";
        var query = pool.query(sql, function (err, result) {

          console.log("ccccccc", result);
          res.redirect('profile/' + result.insertId);
        });
      });
    } else {
      message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
      res.render('pages/backend/contact', { message: message });
    }
  } else {
    res.render('pages/backend/contact');
  }
};
exports.getContact = function (req, res) {
  var message = '';
  var id = req.params.id;
  var sql = "SELECT * FROM `contact`";
  pool.query(sql, function (err, result) {
    if (result.length <= 0)
      message = "Profile not found!";

    res.render('pages/backend/contact', { data: result, message: message,active_nav : 'contact' });
  });
};

exports.dashboard = function(req, res) {
  HomeBanner((err, banner) => {
    // console.log(subs);
    if (err) {
      // console.log(err);
      return;
    }
      Mission(req, (err, mission) => {
        if (err) {
          // console.log(err);
          return;
        }
        res.render("pages/backend/home", { title: "Express", banner: banner, mission: mission , active_nav : 'home'});
      });
    
  });
},
//banner
exports.banner= function (req, res) {
  console.log("resssssss=>", res);
  message = '';
  if (req.method == "POST") {
    var post = req.body;

    if (!req.files)
      return res.status(400).send('No files were uploaded.');
    var file = req.files.uploaded_image;
    var img_name = file.name;
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

      file.mv('public/images/upload_banner_images/' + file.name, function (err) {

        if (err)
          return res.status(500).send(err);
        var sql = "INSERT INTO `homebanner`(image) VALUES ('" + img_name + "')";
        var query = pool.query(sql, function (err, result) {
          res.redirect('profile/' + result.insertId);
        });
      });
    } else {
      message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
      res.render('pages/backend/home', { message: message });
    }
  } else {
    res.render('pages/backend/home');
  }
};
exports.getBanner = function (req, res) {
  console.log("resssssss=>", res);
  var message = '';
  var id = req.params.id;
  var sql = "SELECT * FROM `homebanner`";
  pool.query(sql, function (err, result) {
    console.log("homebanner1>", result);
    if (result.length <= 0)
      message = "Profile not found!";
 res.redirect('/admin/dashboard')
    // res.render('pages/backend/home', { data: result, message: message, active_nav : 'home' });
  });
};

exports.updateMission= function(req, res)  {
  updateMission(req.body, (err, results)=> {

    if (err) {
      console.log(err);
      // res.send(err.message)

      return;
    }
    console.log("resssssss=>>>>>", results);
    // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
    res.redirect('/bannerImage')
    
  });
}
