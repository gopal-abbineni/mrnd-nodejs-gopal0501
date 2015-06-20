var express = require('express');
var arr=new Array(),index=0;
var router = express.Router();
var fs = require('fs');

var getContactFileName = function(id) {

	// We assume contacts are stored under data sub-folder
	return "data\\" +id+ "-Contact.json";
}

/* GET contacts */
router.get('/', function(req, res, next) {
	res.send(arr);
});
router.get('/:id', function(req, res, next) {
    var filename=getContactFileName(+req.params.id);
    fs.readFile(filename, function (err, data) {
  var a2=JSON.parse(data);
        console.log(a2);
  res.send(a2);
});
});

router.post('/', function(req, res, next) {
    var filename=getContactFileName(index);
    console.log(filename);
    arr[index++]=req.body;
    fs.writeFile(filename,JSON.stringify(arr[index-1]),function(err){
        if(err) throw err;
        console.log('saved');
    });
	res.send(""+(index-1));
  //console.log(req.body);
});

router.put('/:id', function(req, res, next) {
 // console.log(req.body);
  var filename=getContactFileName(+req.params.id);
    fs.readFile(filename, function (err, data) {
  if (err) throw err;
         var a1=req.body;
  var a2=JSON.parse(data);
  for(var i in a1)
  {
	  a2[i]=a1[i];
  }
  arr[+req.params.id]=a2;
  console.log(JSON.stringify(data));
          fs.writeFile(filename,JSON.stringify(arr[+req.params.id]),function(err){
        if(err) throw err;
        console.log('saved');
    });  
  res.send(a2);
});
    
 
    
});

module.exports = router;
