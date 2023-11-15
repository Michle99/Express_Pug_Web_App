// data/data.js
import * as fs from 'fs';
import bcrypt from 'bcrypt';

const dataFilePath = 'users.json'; 

let users = [];

function saveData() {
  fs.writeFileSync(dataFilePath, JSON.stringify({ users }, null, 2), 'utf-8');
}

const initializeData = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    const existingUsers = JSON.parse(data).users || []
    users = [...users, ...existingUsers]; // Merge existing users w/ new users
  } catch (error) {
    console.error('Error reading data file:', error.message);
  }
}

const getUserByUsername = (username) => users.find(user => user.username === username);

const addUser = (user) => {
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(user.password, saltRounds);
  users.push({ ...user, password: hashedPassword });
  saveData();
}

export {initializeData, getUserByUsername, addUser }; 
