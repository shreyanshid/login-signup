// to import a module
var mongoose = require('mongoose');

// to connect to the database



module.exports = {
   
  insert:function(a,b,c,d){



mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true});

//console.log("555555555555555555555555");

var conn = mongoose.connection;
//console.log(conn);


// = mongoose.connection;
// schema..........
var stuschema = new mongoose.Schema({
  username : String,
  phone : Number,
  email : String,
  password: String 
});





     console.log("66666666666666666666666666666");
    //console.log(a,b,c,d);
    var stumodel = mongoose.model('leaf', stuschema);
    var stuty = new stumodel({
      username : a,
      phone : b,
      email :c,
      password: d
    });

    conn.on('error', console.error.bind(console, 'connection error:'));
    conn.once('open', function() {
            stuty.save(function(err,res){
                if(err) throw error;
                console.log(res);
                conn.close();
            });
    });

    return stuty;
    //res.render('user', { title: 'Express',username: req.body.username, phone:req.body.phone , email:req.body.email  });

  }


}