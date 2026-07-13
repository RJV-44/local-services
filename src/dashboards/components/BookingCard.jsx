function BookingCard({ customer, service, time, status = 'Confirmed' }) {
  return <article className="booking-card"><div><strong>{customer}</strong><p>{service} · {time}</p></div><span className={`status status-${status.toLowerCase()}`}>{status}</span></article>
}
export default BookingCard