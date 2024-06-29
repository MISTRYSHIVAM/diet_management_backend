import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json())
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import home from './routes/home.js';
import userRouter from './routes/userRoutes.js'
import dietRouter from './routes/dietRouter.js'
import planRouter from './routes/plansRouter.js'

// router declaration
app.use("/",home);
app.use("/user",userRouter);

app.use("/food",dietRouter);

app.use("/plan",planRouter)
export { app }