import fs from 'fs';
import http from 'http';

import { port, hostname } from '../config/config';
import { 
  addUserController,
  getUserController,
  updateUserController,
  deleteUserController 
} from '../user/userController';

http.createServer((req, res) => {
  if (req.url === '/addUser' && req.method === 'POST') {
    const code = addUserController('nikita')

    res.statusCode = code;
    return res.end();
  }
  else if (req.url === '/getUser' && req.method === 'GET') {
    const code = getUserController('user.txt')

    res.statusCode = code;
    return res.end('users');
  }
  else if (req.url === '/updateUser' && req.method === 'PUT') {
    const code = updateUserController('NIkita', 'user.txt')

    res.statusCode = code;
    return res.end();
  }
  else if (req.url === '/deleteUser' && req.method === 'DELETE') {
    const code = deleteUserController('user.txt');

    res.statusCode = code;
    return res.end();
  }

}).listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`);
})