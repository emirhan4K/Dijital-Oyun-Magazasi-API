const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/db"); 
const userRouter = require("./routes/user.routes");
const gameRouter = require("./routes/game.routes");


const app = express();
connectDB();

app.use(express.json());

app.use("/api/auth",userRouter);
app.use("/api/games",gameRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Sunucu ${PORT} portunda başarıyla başlatıldı!`);
});