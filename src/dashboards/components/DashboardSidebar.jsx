const links = ['Dashboard', 'Users', 'Providers', 'Services', 'Bookings', 'Payments', 'Reviews', 'Reports', 'Settings']

function DashboardSidebar() {
  return (
    <aside className="dashboard-sidebar">
      <a className="dashboard-brand" href="#admin-dashboard">Local<span>Services</span></a>
      <p className="dashboard-role">ADMIN PORTAL</p>
      <nav>{links.map((link) => <a key={link} href={`#admin-${link.toLowerCase()}`}>{link}</a>)}</nav>
      <a className="sidebar-profile" href="#admin-profile">? Admin profile</a>
    </aside>
  )
}

export default DashboardSidebar
