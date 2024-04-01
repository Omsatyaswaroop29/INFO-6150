const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const multer = require('multer');
const User = require('./user/user'); // Ensure this path is correct
const fs = require('fs'); // File System for reading directories/files
const path = require('path'); // Path module to work with file paths
const cors = require('cors'); // Add this line to include cors
const app = express();
const PORT = 8000;

app.use(cors()); // Enable CORS for all routes

app.use(express.json());
// Serve images as static resources
app.use('/images', express.static(path.join(__dirname, 'images')));

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file format'), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// MongoDB connection
mongoose.connect('mongodb://localhost/omsatya', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// POST: Create a user
app.post('/user/create', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    // Add more validations as needed
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ fullName, email, password: hashedPassword });
    await user.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/user/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (!user) {
      return res.status(401).json({
        message: "Auth failed",
      });
    }
    fetchedUser = user;
    bcrypt.compare(req.body.password, user.password).then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      res.status(200).json({
        message: "User logged in successfully",
      });
    });
  });
});


// PUT: Update user details
app.put('/user/edit', async (req, res) => {
  try {
    const { email, fullName, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send('User not found');
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.updateOne({ email }, { fullName, password: hashedPassword });
    res.send('User updated successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE: Delete a user
app.delete('/user/delete', async (req, res) => {
  try {
    const { email } = req.body;
    const result = await User.deleteOne({ email });
    if (result.deletedCount === 0) return res.status(404).send('User not found');
    res.send('User deleted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET: Retrieve all users
app.get('/user/getAll', async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Excludes passwords from the result
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST: Upload an image
app.post('/user/uploadImage', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).send('No image uploaded');
    // Assuming the user's email is sent in the request for identifying the user
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send('User not found');
    const imagePath = req.file.path;
    // Update user or handle image path storage as per requirements
    console.log(`Image ${imagePath}`)
    res.send(`Image uploaded successfully: ${imagePath}`);
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message);
  }
});

app.get('/user/images', (req, res) => {
  const imagesDirectory = path.join(__dirname, 'images'); // Adjust this path as necessary

  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Failed to list images');
    }

    const images = files.map(file => {
      return { url: `/images/${file}` }; // Construct the URL for each image
    });

    res.json(images);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});