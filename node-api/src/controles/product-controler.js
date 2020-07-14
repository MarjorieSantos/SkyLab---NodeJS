const mongoose = require('mongoose');
const products = mongoose.model('product')

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const product = await products.paginate({}, { page, limit: 10 });

    return res.json(product)
  },

  async show(req, res) {
    const product = await products.findById(req.params.id)
    return res.json(product)
  },

  async store(req, res) {
    const product = await products.create(req.body);
    return res.json(product)
  },

  async update(req, res) {
    const product = await products.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.json(product)
  },

  async destroy(req, res) {
    await products.findByIdAndRemove(req.params.id)
    return res.send()
  },

}