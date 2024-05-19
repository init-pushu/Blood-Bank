const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
// const path = require("path");

dotenv.config();


connectDB();


const app = express();
// app.get('/',(req,res)=>{
//     res.status(200).json({
//         message:"Welcome to bba",
//     });
// });


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.use("/", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// // STATIC FOLDER
// app.use(express.static(path.join(__dirname, "./client/build")));

// // STATIC ROUTES
// app.get("/",function(req,res){
//   // res.sendFile("public/index.html",{root:'client'});
//   res.send("Hi")
// });
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});
