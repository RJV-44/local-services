const links = ['Dashboard', 'Profile', 'Bookings', 'Booking History', 'Favorites', 'Reviews', 'Notifications', 'Payments', 'Settings']

function CustomerLayout({ title, subtitle, children }) {
  return (
    <div className="dashboard-layout customer-layout">
      <aside className="dashboard-sidebar">
        <a className="dashboard-brand" href="#customer-dashboard">Local<span>Services</span></a>
        <p className="dashboard-role">CUSTOMER PORTAL</p>
        <nav>{links.map((link) => <a key={link} href={`#customer-${link.toLowerCase().replaceAll(' ', '-')}`}>{link}</a>)}</nav>
        <a className="sidebar-profile" href="#customer-profile">?? My account</a>
      </aside>
      <div className="dashboard-content">
        <header className="dashboard-header"><div><h1>{title}</h1><p>{subtitle}</p></div><button className="notification-button" aria-label="Notifications">??</button></header>
        <main className="dashboard-main">{children}</main>
        <footer className="dashboard-footer">Â© 2026 Local Services Â· Customer Portal</footer>
      </div>
    </div>
  )
}

export default CustomerLayout