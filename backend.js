const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


mongoose.connect('mongodb+srv://newuser:newuser12@nodetuto.4upw8op.mongodb.net/nodetuto?retryWrites=true&w=majority&appName=nodetuto', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a mongoose schema for the form data
const formDataSchema = new mongoose.Schema({
  email: String,
  phone: String,
  advantageCardNumber: String,
  questionDescription: String,
});

// Create a mongoose model for the form data
const FormData = mongoose.model('FormData', formDataSchema);

// Middleware to enable CORS (for development purposes)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Endpoint to save form data
app.post('/api/submitForm', async (req, res) => {
  console.log("form submitted");
  const formData = req.body;
  

  try {
    // Save form data to MongoDB
    await FormData.create(formData);

    // Respond with success message
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving form data:', error.message);
    res.status(500).json({ success: false, error: 'Failed to save form data' });
  }
});

// Endpoint to retrieve all form data
app.get('/api/getAllFormData', async (req, res) => {
  try {
  
    // Retrieve all form data from MongoDB
    const allFormData = await FormData.find();

    // Respond with the retrieved data
    res.json({ success: true, data: allFormData });
  } catch (error) {
    console.error('Error retrieving form data:', error.message);
    res.status(500).json({ success: false, error: 'Failed to retrieve form data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
