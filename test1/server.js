//module.exports = exports = this

//require("./user");
//var user = require("./user");
var log = require("logger")(module);
var db = require("db");
db.connect();

var User = require("./user");

function run() {
    //var vasya = new user.User("vasya");
    var vasya = new User("vasya");
    //var petya = new user.User("petya");
    var petya = new User("petya");

    vasya.hello(petya);

    log(db.getPhrase("Run successful"));

}

if (module.parent) {
    exports.run = run;
} else {
    run();
}