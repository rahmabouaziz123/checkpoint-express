const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// app.get("/",(req,res)=>res.send("<h1> hello every body</h1>"))

app.use(
  (date = (req, res, next) => {
    var objDate = new Date();
    var hours = objDate.getHours();
    var day = objDate.getDay();
    if (hours >= 9 && hours <= 17 && (day != 0 || day != 6)) {
      next();
    } else {
      //   res.send("We Are Closed");
      res.sendFile(path.join(__dirname, "public", "close.html"));
      // res.send(` <script>alert("We Are Closed"); window.location.href = "/page_location"; </script>`);
    }
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "home.html"))
);

// app.get('/', function(req, res, next){
//   req.time = new Date().toString();
//   next();
// },
//   function(req, res) {
//     res.send({"time": req.time});

//   }
// );

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`server is run sucessfuly rahma on port ${PORT}`)
);
