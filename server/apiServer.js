const express = require('express')

const router = express.Router()
const request = require('superagent')

// GET /api/random
router.get('/quotes', async (req, res) => {
  try {
    const result = await request.get('https://zenquotes.io/api/quotes/')

    res.json(result.body)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
