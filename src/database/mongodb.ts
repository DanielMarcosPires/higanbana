import { Document, MongoClient, ServerApiVersion, WithId } from "mongodb";
import * as argon2 from "argon2";

const PASSWORD = process.env.PASSWORD;
const USERNAMEKEY = process.env.USERNAMEKEY;


const uri = `mongodb+srv://${USERNAMEKEY}:${PASSWORD}@products.fvbvo.mongodb.net/?retryWrites=true&w=majority&appName=products`;

interface UsersInfo {
    username: string;
    password: string;
    status: boolean
}

export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
 
export const Users = async ():Promise<WithId<UsersInfo>[] | undefined> => {
    await client.connect();
    const collection = client.db('produtos').collection<UsersInfo>('loginAccess');
    const docs = await collection.find({}).toArray();
    return docs
}

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
