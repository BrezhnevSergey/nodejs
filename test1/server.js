var user = require("./user");
//require("./user");

var vasya = new user.User("vasya");
//var vasya = new User("vasya");
var petya = new user.User("petya");
//var petya = new User("petya");

vasya.hello(petya);