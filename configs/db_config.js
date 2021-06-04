
const mongoose = require('mongodb');
var url = process.env.DB_URL;
// Connecting to DB 
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connected to Database")
  }).catch((e) => {
    console.log(`Error Occurred ${e}`)
  });

