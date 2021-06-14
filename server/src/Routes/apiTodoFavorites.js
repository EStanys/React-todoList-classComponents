const express = require('express')
const router = express.Router()

const TodoFavorites = require('../models/favorites')

router.get('/', (req, res) => {
  TodoFavorites.find()
    .then((favoriteTodos) => res.send(favoriteTodos))
    .catch((err) => console.error(err.message));
})

router.post('/add', (req, res) => {
  const newTodoFavorite = new TodoFavorites(req.body)
  newTodoFavorite
    .save()
    .then((response) => res.json({ msg: 'add success' }))
    .catch((err) => res.status(400).json(err));
})

router.delete('/remove/:id', (req, res) => {
  TodoFavorites.findOneAndRemove({ id: +req.params.id })
    .then((result) => res.json({ msg: 'delete success' }))
    .catch((err) => res.status(400).json(err));
})

module.exports = router;