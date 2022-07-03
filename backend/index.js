const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

// routes
app.use('/api/users', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Main api route
app.get('/', async (req, res) => {
   res.status(200).json({ msg: "General API route..." });
});

// Error route
app.get('*', async (req, res) => {
    res.status(404).json({ msg: "Page not found." })
});

// Error Handling
app.use(errorHandler);

// start server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})
