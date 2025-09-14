const express = require('express');
const app = express();
const port = 3000;

// Middleware to check working hours (Mon-Fri, 9-17)
const workingHoursMiddleware = (req, res, next) => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();

  if (day === 0 || day === 6 || hour < 9 || hour >= 17) {
    res.send('<h1>Sorry, the site is only available during working hours (Mon-Fri, 9-17)</h1>');
  } else {
    next();
  }
};

// Apply middleware globally
app.use(workingHoursMiddleware);

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><nav><a href="/">Home</a> | <a href="/services">Our Services</a> | <a href="/contact">Contact Us</a></nav>');
});

app.get('/services', (req, res) => {
  res.send('<h1>Our Services</h1><p>We provide web development, consulting, and design services.</p><nav><a href="/">Home</a> | <a href="/services">Our Services</a> | <a href="/contact">Contact Us</a></nav>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1><p>Email: info@example.com | Phone: 123-456-7890</p><nav><a href="/">Home</a> | <a href="/services">Our Services</a> | <a href="/contact">Contact Us</a></nav>');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});




