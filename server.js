//Packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


//Initialize app
var app = express();

//setup template engine
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');

//use static file
app.use(express.static(__dirname + '/public'));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Setup MongoDB
const MongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017/techstitution';
const objectId = require('mongodb').ObjectId;

//Connecting MongoDB
MongoClient.connect(mongoURL, function(err , database ){
	if (err){
		console.log(err);
	}else{
		console.log('MongoDB Connected !');
	}
	qkmk = database.collection('qkmk');
	
});


app.get('/', function(req,res){
   //res.sendFile(__dirname + '/index.html');
   var title="Forma e regjistrimit t\353 pikave kufitare";
   res.render('index' , {title : title});
       
       
   });
 //list all data 
app.get('/show',function(req,res){
		var title="Lista me t\353 dh\353na";
		qkmk.find({}).toArray(function(err,docs){
			if(err){
				console.log(err);
			}
			
   res.render('show' , {title: title , docs :docs});
     });  
 });   
 
app.post('/add',function(req,res){ 
	var data = req.body;
	qkmk.insert(data , function(err, results){
		if(err){
			console.log(err);
		}
		res.redirect('/show');	
		});
     }); 
/*app.get('/edit/:id',function(req,res){ 
	var title = "Edito te dhenat";
  var id = req.params.id;
   qkmk.findOne({_id: ObjectId(id) },  function(err, result) {
   	if(err) {
   		console.log(err);
   	}
   	res.render('edit', {title: title, doc: result });
   });
   
   
   //res.render('edit');
     }); 
*/
	 

app.get('/edit/:id', function(req, res) {
	var title = "Edito t\353 dh\353nat";
  var id = objectId(req.params.id);
  qkmk.findOne({_id: objectId(id) },  function(err, result) {
   	if(err) {
   		console.log(err);
   	}
   	res.render('edit', {title: title, doc: result });
   });

});	 

app.post('/update/:id',function(req,res){ 
	var data = req.body;
	var id = objectId(req.params.id);
	qkmk.updateOne( { _id: id}, 
		{ $set: data },
		function(err, result) {
			if(err) {
				console.log(err);
			}
   res.redirect('/show'); //('/edit')
     }); 
});

app.get('/delete/:id',function(req,res){ 

	var data = req.body;
	var id = objectId(req.params.id);
	qkmk.deleteOne( { _id: id},
	
		function(err, result) {
			if(err) {
				console.log(err);
			}
   res.redirect('/show');
     }); 
});
   	 
      
   
/*app.get('/exercise',function(req,res){
	var dataJson ={
		"id" : 1,
		"project" : "techstitution",
		"cars": {
        "car1":"Ford",
        "car2":"BMW",
        "car3":"Fiat"
    }
		
	};
	var projects = [
		{ id :1 , name : "anita" , lastname : "hajdari"},
        { id :2 , name : "fatbardha" , lastname : "bruqi"},
		{ id :3 , name : "monika" , lastname : "behluli"},
	];
	res.render('exercise' , {data : dataJson , projects : projects});
	 
 });  */

app.get('*' ,function(req, res){
  res.send("Not found ! ");

});

app.listen(3001,function(){
   console.log("Navigate to http://localhost:3001");

});