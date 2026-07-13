import { useEffect, useState } from 'react'
import AdminDashboard from './dashboards/Admin/Dashboard.jsx'
import AdminUsers from './dashboards/Admin/Users.jsx'
import AdminProviders from './dashboards/Admin/Providers.jsx'
import AdminServices from './dashboards/Admin/Services.jsx'
import AdminBookings from './dashboards/Admin/Bookings.jsx'
import AdminPayments from './dashboards/Admin/Payments.jsx'
import AdminReviews from './dashboards/Admin/Reviews.jsx'
import AdminReports from './dashboards/Admin/Reports.jsx'
import AdminSettings from './dashboards/Admin/Settings.jsx'
import AdminProfile from './dashboards/Admin/AdminProfile.jsx'
import CustomerDashboard from './dashboards/Customer/Dashboard.jsx'
import CustomerProfile from './dashboards/Customer/Profile.jsx'
import CustomerBookings from './dashboards/Customer/Bookings.jsx'
import CustomerBookingHistory from './dashboards/Customer/BookingHistory.jsx'
import CustomerFavorites from './dashboards/Customer/Favorites.jsx'
import CustomerReviews from './dashboards/Customer/Reviews.jsx'
import CustomerNotifications from './dashboards/Customer/Notifications.jsx'
import CustomerPayments from './dashboards/Customer/Payments.jsx'
import CustomerSettings from './dashboards/Customer/Settings.jsx'
import ProviderDashboard from './dashboards/Provider/Dashboard.jsx'
import ProviderProfile from './dashboards/Provider/Profile.jsx'
import ProviderMyServices from './dashboards/Provider/MyServices.jsx'
import ProviderAddService from './dashboards/Provider/AddService.jsx'
import ProviderEditService from './dashboards/Provider/EditService.jsx'
import ProviderBookings from './dashboards/Provider/Bookings.jsx'
import ProviderEarnings from './dashboards/Provider/Earnings.jsx'
import ProviderReviews from './dashboards/Provider/Reviews.jsx'
import ProviderNotifications from './dashboards/Provider/Notifications.jsx'
import ProviderSettings from './dashboards/Provider/Settings.jsx'

const routes = {
  '#admin-dashboard': AdminDashboard, '#admin-users': AdminUsers, '#admin-providers': AdminProviders,
  '#admin-services': AdminServices, '#admin-bookings': AdminBookings, '#admin-payments': AdminPayments,
  '#admin-reviews': AdminReviews, '#admin-reports': AdminReports, '#admin-settings': AdminSettings, '#admin-profile': AdminProfile,
  '#customer-dashboard': CustomerDashboard, '#customer-profile': CustomerProfile, '#customer-bookings': CustomerBookings,
  '#customer-booking-history': CustomerBookingHistory, '#customer-favorites': CustomerFavorites, '#customer-reviews': CustomerReviews,
  '#customer-notifications': CustomerNotifications, '#customer-payments': CustomerPayments, '#customer-settings': CustomerSettings,
  '#provider-dashboard': ProviderDashboard, '#provider-profile': ProviderProfile, '#provider-my-services': ProviderMyServices,
  '#provider-add-service': ProviderAddService, '#provider-edit-service': ProviderEditService, '#provider-bookings': ProviderBookings,
  '#provider-earnings': ProviderEarnings, '#provider-reviews': ProviderReviews, '#provider-notifications': ProviderNotifications,
  '#provider-settings': ProviderSettings,
}

function App() {
  const [hash, setHash] = useState(window.location.hash || '#admin-dashboard')
  useEffect(() => { const updateRoute = () => setHash(window.location.hash || '#admin-dashboard'); window.addEventListener('hashchange', updateRoute); return () => window.removeEventListener('hashchange', updateRoute) }, [])
  const Page = routes[hash] ?? AdminDashboard
  return <Page />
}

export default App