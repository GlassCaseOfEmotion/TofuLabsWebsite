const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

// Serve static files from the website directory
app.use(express.static(path.join(__dirname)));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🌐 Tofu Labs website running at:`);
    console.log(`   http://localhost:${PORT}`);
    console.log(`\n📄 Pages available:`);
    console.log(`   Homepage: http://localhost:${PORT}/`);
    console.log(`   Product:  http://localhost:${PORT}/product.html`);
    console.log(`   Pricing:  http://localhost:${PORT}/pricing.html`);
    console.log(`\n💡 Make sure your chatbot server is running on port 3001!`);
});