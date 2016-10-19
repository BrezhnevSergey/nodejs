//module.exports = exports = this

var db = require("db");
var log = require("logger")(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    //console.log("Hello, " + who.name);
    log(db.getPhrase("Hello") + ", " + who.name);
};

//console.log("user.js is required");

//exports.User = User;

//global.User = User;


module.exports = User;
//console.log(module);