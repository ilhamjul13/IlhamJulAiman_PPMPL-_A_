const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let data = [{ id: 1, name: "User1" }];

app.get('/users', (req, res) => {
    res.json(data);
});

app.get('/users/:id', (req, res) => {
    const user = data.find(u => u.id === parseInt(req.params.id));
    user ? res.json(user) : res.status(404).send("User not found");
});

app.post('/users', (req, res) => {
    const newUser = { id: data.length + 1, name: req.body.name };
    data.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const user = data.find(u => u.id === parseInt(req.params.id));
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.status(404).send("User not found");
    }
});

app.delete('/users/:id', (req, res) => {
    const userIndex = data.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
        data.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send("User not found");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
