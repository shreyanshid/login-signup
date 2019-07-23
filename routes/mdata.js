// to import a module
var mongoose = require('mongoose');

// to connect to the database
mongoose.connect('mongodb://localhost:27017/students', {useNewUrlParser: true});

// to establish a connection
var conn = mongoose.connection;

var stuschema = new mongoose.Schema({
  name : String,
  roll : Number,
  branch : String, 
});

// student - name of table ::: and stuschema - above format 
// below is model creation
var stumodel = mongoose.model('student', stuschema);
var student = new stumodel({
	name : 'anmol 00000000000  k',
	roll : 1234560000000000,
	branch :'IT0000000000000',
});

/*
// below is afunction declared within stuschema.methods named 'detail' which is user specific
stuschema.methods.detail = function(){
	console.log(student);
}


// below method is called with object
console.log(student)

*/
////////////////////////////////// connection work    given at page  https://mongoosejs.com/docs/index.html
conn.on('connected',function(){
	console.log("connection succcess");
});
conn.on('disconnected',function(){
	console.log("dissconnection succcess");
});




conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {

    
    student.save(function(err,res){
        if(err) throw error;
        console.log(res);
        conn.close();
    });
    

     /*
     stumodel.find( {name:"anmol"} ,function(err,data){
        if(err) throw error;
        console.log(data);
        conn.close();
        });
        */
});