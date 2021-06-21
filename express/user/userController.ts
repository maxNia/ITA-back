import app from "../server/server";

import {
    addUser,
    getUser,
    updateUser,
    deleteUser
} from './userService';

app.post('/addUser', (req, res) => {
    const code = addUser();
    res.statusCode = code;
});

app.get('/getUser', (req, res) => {
    const code = getUser();
    res.statusCode = code;
});

app.put('/updateUser', (req, res) => {
    const code = updateUser();
    res.statusCode = code;
});

app.delete('/deleteUser', (req, res) => {
    const code = deleteUser();
    res.statusCode = code;
});