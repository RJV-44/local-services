function DashboardHeader({ title, subtitle }) {
  return <header className="dashboard-header"><div><h1>{title}</h1><p>{subtitle}</p></div><button className="notification-button" aria-label="Notifications">??</button></header>
}
export default DashboardHeader