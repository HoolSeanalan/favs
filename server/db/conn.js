import { MongoClient } from "mongodb";

// Connection URI
const Db = process.env.ATLAS_URI;

// New MongoClient
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

// Connect to db, save, and close
async function connectToDB() {
    try {
        client.connect()
        _db = client.db("favs")
        client.close();
    } catch (err) {
        console.log(err);
    }
}

// Returns db after connecting
function getDb() {
    return _db;
}

export { connectToDB, getDb };