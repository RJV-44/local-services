import AdminLayout from '../components/AdminLayout.jsx'
import StatCard from '../components/StatCard.jsx'
import BookingCard from '../components/BookingCard.jsx'

function Dashboard() {
  return <AdminLayout title="Dashboard" subtitle="Here is what is happening across your platform.">
    <section className="stat-grid">
      <StatCard icon="??" label="Total users" value="1,248" trend="12.5% this month" />
      <StatCard icon="??" label="Active providers" value="186" trend="8.2% this month" />
      <StatCard icon="??" label="Bookings today" value="74" trend="15.3% this week" />
      <StatCard icon="??" label="Monthly revenue" value="$12,480" trend="10.1% this month" />
    </section>
    <section className="panel"><div className="panel-heading"><div><h2>Recent bookings</h2><p>Latest service requests from customers.</p></div><button className="text-button">View all</button></div><div className="booking-list"><BookingCard customer="Sophia Patel" service="Home cleaning" time="Today, 10:00 AM" /><BookingCard customer="Rahul Sharma" service="Electrical repair" time="Today, 1:30 PM" status="Pending" /><BookingCard customer="Maya Singh" service="AC servicing" time="Today, 4:00 PM" /></div></section>
  </AdminLayout>
}
export default Dashboard