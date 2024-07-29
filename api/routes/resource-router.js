const express = require('express');
const db = require('../../data/db-config');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const resources = await db('resources').select('*');
    res.status(200).json(resources);
  } catch (error) { // Define the error variable as 'error' in the catch block
    res.status(500).json({ message: 'Failed to get resources', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const [id] = await db('resources').insert(req.body);
    const newResource = await db('resources').where({ id }).first();
    res.status(201).json(newResource);
  } catch (error) { // Define the error variable as 'error' in the catch block
    res.status(500).json({ message: 'Failed to create resource', error: error.message });
  }
});

module.exports = router;
