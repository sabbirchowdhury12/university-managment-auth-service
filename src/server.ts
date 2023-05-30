import mongoose from "mongoose";
import app from "./app";
import config from "./config";




async function dbConnect() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log('database connect successfully')
        app.listen(config.port, () => {
            console.log(`app listening on port ${config.port}`)
        })
    }
    catch (err) {
        console.log('database connect failed', err)
    }
}

dbConnect()