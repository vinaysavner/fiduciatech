const pool = require('../config/database')
module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into register(name,email,password)
              values(?,?,?)`,
      [data.name, data.email, data.password],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  
  
  
//  Contact: (callback) => {
//     // // console.log(data.email);
//     pool.query(
//       `Select * from contact`,

//       (error, results, fields) => {
//         if (error) {
//           // res.send(error.message)
//           return callback(error);
//         }
//         return callback(null, results);
//       }
//     );
//   },
// Createcontact: (data, callback) => {
//     // console.log("data===",data);
//     pool.query(
//       `insert into contact(mobile_number,email,address) values(?,?,?)`,
//       [data.mobile_number, data.email, data.address],
//       (error, results, fields) => {
//         if (error) {
//           return callback(error);
//         }
//         return callback(null, results);
//       }
//     )
//   },
   Image: (callback) => {
        pool.query(
          `Select * from brands `,
         
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      },
      Brands: (callback) => {
        pool.query(
          `Select * from brands `,
         
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      },
  
      Clients: (callback) => {
        pool.query(
          `Select * from clients `,
         
         
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      }, 
      Articles: (callback) => {
        pool.query(
          `Select * from articles `,
         
         
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      }, 
      Products: (callback) => {
        pool.query(
          `Select * from products `,
         
         
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      },
      Contact: (callback) => {
        pool.query(
          `Select * from contact`,
          [],
         
          (error, results, fields) => {
            console.log("mission",results);
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      }, Mission: (req,callback) => {
        pool.query(
          `Select * from mission`,
          [],
         
          (error, results, fields) => {
            console.log("mission",results);
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      },
      HomeBanner: (callback) => {
        pool.query(
          `Select * from homebanner `,
          (error, results, fields) => {
       
            if (error) {
              return callback(error);
            }
            console.log("banghghnerResult",results);
            return callback(null, results);
          }
        );
      },
      updateMission: (data, callback) => {
        // console.log("data===",data);
        pool.query(
          // `insert into mission(clients,members,experience,projects) values(?,?,?,?)`,
          "UPDATE mission SET clients = ?,members = ?,experience = ?,projects=?",
          [data.clients, data.members, data.experience, data.projects],
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        )
      },
      getBrands: (callback) => {
        pool.query(
          `Select * from brands `,
         
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      },
}