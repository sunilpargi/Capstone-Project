const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Add this at the top to import the route
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('ShopPlusPlus API');
});

mongoose.connect('mongodb+srv://sunilpargi121:ezSCk51xgQTJQFda@cluster0.kzaxdlb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.log('MongoDB Atlas connection error:', error);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Use the route
app.use('/api', authRoutes);