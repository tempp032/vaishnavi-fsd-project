const express = require("express");
const app = express();

app.use(express.json());

// Import cart route
const cartRoutes = require("./routes/cart");
app.use("/cart", cartRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
