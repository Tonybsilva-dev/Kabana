const mongoose = require('mongoose')
const Users = mongoose.model('Users')

module.exports = {

  async index (req, res) {
    const { page = 1 } = req.query
    const users = await Users.paginate({}, { page, limit: 10 })
    return res.json(users)
  },

  async show (req, res) {
    const user = await Users.findById(req.params.id)
    return res.json(user)
  },

  async store (req, res) {
    const user = await Users.create(req.body)
    return res.json(user)
  },

  async update (req, res) {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.json(user)
  },

  async destroy (req, res) {
    await Users.findByIdAndRemove(req.params.id)
    return res.send('Usuário deletado com sucesso')
  }
}
