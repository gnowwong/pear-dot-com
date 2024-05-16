import Footer from './components/footer';
import Header from './components/header'
import menusData from './data/navigation-menu.json';
import sitemapData from './data/sitemap.json';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='scroll-smooth'>
      <Header menus={menusData} />
      <Outlet />
      <Footer sitemap={sitemapData} />
    </div>
  )
}

export default App
