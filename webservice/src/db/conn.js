
const ATLAS_URI = "mongodb+srv://eos-sarath:u21o5mMlPsKqBFUt@eosio.sd4x2.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000;
const { MongoClient } = require("mongodb");
const Db = ATLAS_URI;
console.log("DB LINK", Db);
const client = new MongoClient(Db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

var _db;

module.exports = {
	connectToServer: function (callback) {
		client.connect(function (err, db) {
			// Verify we got a good "db" object
			if (db) {
				_db = db.db("eosio");
				console.log("Successfully connected to MongoDB.");
			} else {
				console.log("NOT connected to MongoDB.");
			}
			return callback(err);
		});
	},

	getDb: function () {
		return _db;
	},
};