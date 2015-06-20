var express = require('express');
var arr=new Array(),index=0;
var router = express.Router();

/* GET contacts */
router.get('/:id', function(req, res, next) {
	res.send(arr[+req.params.id]);
});

router.post('/', function(req, res, next) {
	arr[index++]=req.body;
	res.send(""+(index-1));
  console.log(req.body);
});

router.put('/:id', function(req, res, next) {
  console.log(req.body);
  var a1=req.body;
  var a2=arr[+req.params.id];
  for(var i in a1)
  {
	  a2[i]=a1[i];
  }
  arr[+req.params.id]=a2;
  res.send(a2);
});

module.exports = router;
