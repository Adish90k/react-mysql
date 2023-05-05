import express from "express";
import mysql from "mysql";
import cors from "cors";
import multer from "multer"

const app = express();

let PORT = 5000 || process.env.port;




app.use(express.json())

app.use(cors())



 

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"test"
})



app.get("/",(req,res)=>{
    res.json({"name":"hello backend"})
})

app.get("/books",(req,res)=>{
    let q;
    q = "SELECT * FROM book;";
    db.query(q,(err,data)=>{
      if(err){
        res.json({"err":err})
      }
      res.json(data)
    })

})


// let values = [1,2,3,4,5]
// console.log(typeof([values]));

app.post("/books",(req,res)=>{
    let q;
    q = "INSERT INTO book(`title`,`desc`,`cover`) VALUES(?);"
     
    let values;

    values = [
    req.body.title,
    req.body.desc,
    req.body.cover
    ]

    console.log(values)

    db.query(q,[values],(err,data)=>{
        if(err){
            res.json(err)
        }
        res.json({"name":"book has been created"})
    })



})

app.delete("/books/:id",(req,res)=>{
    let id = req.params.id;
    
    let q = `DELETE FROM book WHERE idbook=?`

    db.query(q,[id],(err,data)=>{
        if(err){
            res.json(err)
        }
        res.json({"deleted":"true"})
    })



})





function deleteItemById(id, callback) {
    const sql = 'DELETE FROM items WHERE id = ?';
    pool.query(sql, [id], (error, results, fields) => {
      if (error) {
        callback(error);
      } else {
        callback(null, results.affectedRows);
      }
    });
  }
  
  // Define a route for deleting an item by ID
  app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    deleteItemById(id, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else if (result === 0) {
        res.status(404).send('Item Not Found');
      } else {
        res.status(200).send('Item Deleted Successfully');
      }
    });
  });
  





app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
