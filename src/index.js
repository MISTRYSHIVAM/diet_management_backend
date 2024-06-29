import "dotenv/config";
import connectToDb from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT;
connectToDb()
.then(() => {
    app.listen(port, () => {
        console.log(`app listening on port ${port}`)
    })
})
.catch((err) => {
    console.log("Mongodb connection error !!!!!")
})