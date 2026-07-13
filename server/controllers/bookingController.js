const Booking = require('../models/Booking')

const getBookings = async (req, res) => {
  try {
    let bookings
    if (req.user.role === 'customer') {
      bookings = await Booking.find({ customer: req.user._id }).populate('provider', 'name businessName').populate('service', 'title price')
    } else if (req.user.role === 'provider') {
      bookings = await Booking.find({ provider: req.user._id }).populate('customer', 'name email').populate('service', 'title price')
    } else {
      bookings = await Booking.find({}).populate('customer', 'name').populate('provider', 'name businessName').populate('service', 'title')
    }
    res.json(bookings)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('customer', 'name email phone').populate('provider', 'name businessName phone').populate('service', 'title price description')
    if (!booking) return res.status(404).json({ message: 'Booking not found' })
    res.json(booking)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createBooking = async (req, res) => {
  try {
    const { provider, service, date, time, address, notes, totalPrice } = req.body
    const booking = await Booking.create({ customer: req.user._id, provider, service, date, time, address, notes, totalPrice })
    res.status(201).json(booking)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
    if (!booking) return res.status(404).json({ message: 'Booking not found' })
    booking.status = req.body.status || booking.status
    booking.paymentStatus = req.body.paymentStatus || booking.paymentStatus
    const updated = await booking.save()
    res.json(updated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { getBookings, getBookingById, createBooking, updateBookingStatus }