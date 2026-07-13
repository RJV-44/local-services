const links = ['Dashboard', 'Profile', 'My Services', 'Add Service', 'Edit Service', 'Bookings', 'Earnings', 'Reviews', 'Notifications', 'Settings']

function ProviderLayout({ title, subtitle, children }) {
  return (
    <div className="dashboard-layout provider-layout">
      <aside className="dashboard-sidebar">
        <a className="dashboard-brand" href="#provider-dashboard">Local<span>Services</span></a>
        <p className="dashboard-role">PROVIDER PORTAL</p>
        <nav>{links.map((link) => <a key={link} href={`#provider-${link.toLowerCase().replaceAll(' ', '-')}`}>{link}</a>)}</nav>
        <a className="sidebar-profile" href="#provider-profile">?? Provider profile</a>
      </aside>
      <div className="dashboard-content">
        <header className="dashboard-header"><div><h1>{title}</h1><p>{subtitle}</p></div><button className="notification-button" aria-label="Notifications">??</button></header>
        <main className="dashboard-main">{children}</main>
        <footer className="dashboard-footer">Ã‚Â© 2026 Local Services Ã‚Â· Provider Portal</footer>
      </div>
    </div>
  )
}

export default ProviderLayout