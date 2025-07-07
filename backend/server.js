const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const adTagRoutes = require("./routes/AdtagRoutes");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: "You are on server side" });
});


app.use("/api/ad-tag", adTagRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
