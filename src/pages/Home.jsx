import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'

const services = [
  ['Home cleaning', 'Cleaning', '4.9', '326', '$49', '??'],
  ['Electrical repair', 'Electrical', '4.8', '214', '$45', '?'],
  ['AC servicing', 'Appliance repair', '4.7', '188', '$65', '??'],
]

function Home() {
  const search = (query) => { window.location.hash = query ? '#services' : '#services' }
  return <div className="public-page"><Navbar onLogin={() => { window.location.hash = '#login' }} onRegister={() => { window.location.hash = '#register' }} /><Hero onSearch={search} /><section className="public-section"><div className="section-heading"><div><p>POPULAR SERVICES</p><h2>Help for every task</h2></div><a href="#services">Browse all services ?</a></div><div className="public-service-grid">{services.map(([title, category, rating, reviews, price, image]) => <ServiceCard key={title} title={title} category={category} rating={rating} reviews={reviews} price={price} image={image} onBook={() => { window.location.hash = '#service-details' }} />)}</div></section><section className="public-cta"><div><p>ARE YOU A LOCAL PROFESSIONAL?</p><h2>Grow your business with Local Services.</h2></div><a className="nav-register" href="#register">Become a provider</a></section><Footer /></div>
}
export default Home