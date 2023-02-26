var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/gallery",((req,res) => {
  res.send("Iam in gallery")
  res.end()
}))

router.get("/submit",((req,res) => {
  res.send("submitted data")
}))

router.post("/submit",((req,res) => {
  res.send("response of submit")
  res.end()
}))


module.exports = router;
