const { MongoClient} = require("mongodb");

const url = "mongodb+srv://indresh209721_db_user:zTvk5HvoxS0B7cjR@namastenode.nmwlvw8.mongodb.net/";

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
    
    
    const data = {
        firstname: "Tanya",
        lastname: "Tyagi",
        city: "Kanpur",
        phoneNumber: "9988776655"
    }

    // Insert Document
    const insertResult = await collection.insertOne(data);
    console.log("Inserted Documents =>", insertResult);

    // Read Document
    const findResult = await collection.find({}).toArray();
    console.log("Found Documents =>", findResult);

    // count Documents
    const countResult = await collection.countDocuments({});
    console.log("Count of documents in the User collection =>", countResult);
    

    // Find all documents with a filter of firstname : Isha

    const result = await collection.find({firstname: "Isha"}).toArray();
    console.log("result =>", result);

    return "done.";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
