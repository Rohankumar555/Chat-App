const express = require('express');
const app = express();
const User=require('../models/user');
const cors = require('cors');
const corsOption = {
    origin: ['http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
}
app.use(cors(corsOption))
const search=async (req, res) => {
    const limit=req.query.limit || 9;
    const { query } = req.query;
    const search=req.query.search || "";

    try {
        const users = await User.find({ Name: {$regex:search,$options:'i'}})
        .limit(limit);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports={search};