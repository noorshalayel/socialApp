const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')


dotenv.config();

// mongoose.connect(
//   process.env.MONGO_URL,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     try {
//         console.log("Connected to MongoDB");
//     }catch(error){
//         console.log(error)
//     }
//   }
// );


mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log('connected'))
  .catch(e=>console.log(e));



//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use('/api/auth'  , authRoute)
app.use('/api/users' , userRoute)
app.use('/api/posts' , postRoute)


app.listen(8800, () => {
  console.log("Backend server is running!");
});




