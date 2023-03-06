const app = require("express")
const { Image } = require("../model/services")
const { Brands } = require("../model/services")
const { Clients } = require("../model/services")
const { Products } = require("../model/services")
const { Articles } = require("../model/services")
const { Mission } = require("../model/services")
const { Contact } = require("../model/services")
// const { Createmission } = require("../model/services")
const { contact } = require("../model/services")
const { HomeBanner } = require("../model/services")
const { active } = require("../model/services")

// require("dotenv").config();

// const pool = require("../config/database");

module.exports = {
  Image: (req, res, next) => {
    Image((err, results) => {

      if (err) {
        console.log(err);
        // res.send(err.message)
        

        return;
      }
      console.log("res=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/frontend/index", { title: "Express", data: results });
    });
  },

  Brands: (req, res, next) => {
    Brands((err, results) => {

      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("res=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/frontend/brands", { title: "Express", data: results,active_nav: "fbrands" });
    });
  },

  Clients: (req, res, next) => {
    Clients((err, results) => {

      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("clientssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/frontend/clientFrontend", { title: "Express", data: results, active_nav: "fclients" });
    });
  },
  
  About: (req, res, next) => {
    // console.log( 'dash=>',req.session);
    res.render("pages/frontend/about", { title: "Express", active_nav: "about" });
  },
  Products: (req, res, next) => {
    Products((err, results) => {

      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("res=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/frontend/products", { title: "Express", data: results, active_nav: "fproducts" });
    });
    // console.log( 'dash=>',req.session);

  },

  Contact: (req, res, next) => {
    Contact((err, results) => {

      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("res=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/frontend/contact", { title: "Express", data: results, active_nav: "fcontact" });
    });
    // console.log( 'dash=>',req.session);

  },

  Home: (req, res, next) => {
    // let active_nav = req.path.split('/')
    HomeBanner((err, banner) => {
      // console.log(subs);
      if (err) {
        // console.log(err);
        return;
      }
      Clients((err, clients) => {
        // console.log(subs);
        if (err) {
          // console.log(err);
          return;
        }
        Articles((err, articles) => {
          // console.log(subs);
          if (err) {
            // console.log(err);
            return;
          }

          Mission(req, (err, results) => {
            console.log(results);
            if (err) {
              // console.log(err);
              return;
            }
            res.render("pages/frontend/home", { title: "Express", data: results , banner: banner, clients: clients, articles: articles, active_nav: "home" });
          });
        });
      });
    });


  },

  contact: (req, res, next) => {
    contact(req.body, (err, results) => {

      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/frontend/contact", { title: "Express", data: results });
    });
  },
  


  

}