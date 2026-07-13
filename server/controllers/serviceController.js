const Service = require('../models/Service')

const getServices = async (req, res) => {
  try {
    const filter = { isActive: true }
    if (req.query.category) filter.category = req.query.category
    if (req.query.provider) filter.provider = req.query.provider
    const services = await Service.find(filter).populate('provider', 'name businessName rating')
    res.json(services)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate('provider', 'name businessName email phone rating')
    if (!service) return res.status(404).json({ message: 'Service not found' })
    res.json(service)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createService = async (req, res) => {
  try {
    const { title, category, description, price, duration } = req.body
    const service = await Service.create({ provider: req.user._id, title, category, description, price, duration })
    res.status(201).json(service)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)
    if (!service) return res.status(404).json({ message: 'Service not found' })
    if (service.provider.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' })
    }
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)
    if (!service) return res.status(404).json({ message: 'Service not found' })
    if (service.provider.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' })
    }
    await service.deleteOne()
    res.json({ message: 'Service removed' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { getServices, getServiceById, createService, updateService, deleteService }