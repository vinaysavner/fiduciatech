const pool = require("../config/database");

// exports.index = function(req, res){
//     message = '';
//    if(req.method == "POST"){
//       var post  = req.body;
//       var title= post.title;



//       if (!req.files)
//                 return res.status(400).send('No files were uploaded.');
//         var file = req.files.uploaded_image;
//         var img_name=file.name;
//          if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){

//               file.mv('public/images/upload_images/'+file.name, function(err) {

//                   if (err)
//                     return res.status(500).send(err);
//                         var sql = "INSERT INTO `clients`(`title`,`image`) VALUES ('" + title + "','" +img_name+ "')";
//                             var query = pool.query(sql, function(err, result) {
//                                  res.redirect('profile/'+result.insertId);
//                             });
//                        });
//           } else {
//             message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
//             res.render('pages/frontend/clients',{message: message});
//           }
//    } else {
//       res.render('pages/frontend/clients');
//    }
// };
// exports.profile = function(req,res){
//   var message = '';
//   var id = req.params.id;
//   var sql="SELECT * FROM `clients` WHERE `id`='"+id+"'"; 
// pool.query(sql, function(err, result){
//   console.log("client res",result);
//     if(result.length <= 0)
//     message = "Profile not found!";

//     res.render('pages/frontend/clients',{data:result, message: message});
//  });
// };
//Brands
// exports.indexx = function (req, res) {
//   message = '';
//   if (req.method == "POST") {
//     var post = req.body;
//     var title = post.title;
//     var fl = post.fl;


//     if (!req.files)
//       return res.status(400).send('No files were uploaded.');
//     var file = req.files.uploaded_image;
//     var img_name = file.name;
//     if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

//       file.mv('public/images/upload_imagess/' + file.name, function (err) {

//         if (err)
//           return res.status(500).send(err);
//         var sql = "INSERT INTO `brands`(`title`,`image`,`fl`) VALUES ('" + title + "','" + img_name + "','" + fl + "')";
//         var query = pool.query(sql, function (err, result) {
//           res.redirect('profile/' + result.insertId);
//         });
//       });
//     } else {
//       message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
//       res.render('pages/backend/brands', { message: message });
//     }
//   } else {
//     res.render('pages/backend/brands');
//   }
// };
// exports.profilee = function (req, res) {
//   var message = '';
//   var id = req.params.id;
//   var sql = "SELECT * FROM `brands` WHERE `id`='" + id + "'";
//   pool.query(sql, function (err, result) {
//     if (result.length <= 0)
//       message = "Profile not found!";

//     res.render('pages/backend/brands', { title: "Express", data: result, message: message });
//   });
// };
//articles

//banner

//clients

//products


//contact







