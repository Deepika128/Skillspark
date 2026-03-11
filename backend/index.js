const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock user database
let users = [];

app.post('/api/register', (req, res) => {
    const { fullName, email, mobile, password } = req.body;
    
    // Simple validation
    if (!fullName || !email || !mobile || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const userExists = users.find(u => u.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = { fullName, email, mobile, password };
    users.push(newUser);
    
    console.log('User registered:', newUser);
    res.status(201).json({ message: 'User registered successfully', user: { fullName, email } });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user: { fullName: user.fullName, email: user.email } });
});

app.get('/', (req, res) => {
    res.send('SkillSpark API is running...');
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
