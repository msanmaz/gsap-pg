import './App.css'
import BackToTopIcon from './components/BackToTopIcon'
import LogoIcon from './components/LogoIcon'
import CameraIcon from './components/CameraIcon'
import MagnifierIcon from './components/MagnifierIcon'
import ListItemSkeleton from './components/ListItemSkeleton'


function App() {

  return (
    <>
 <div>
    <a href="#">
      <span className="sr-only">Back to top</span>  
      <BackToTopIcon />
    </a>
    <a href="#" className="logo">
      <LogoIcon />
    </a>
    <div className="header-wrapper">
      <header>
        <button>
          <CameraIcon />
        </button>
      </header>
    </div>
    <div className="search-wrapper">
      <div className="search-bar">
        <div className="search-controls">
          <button className="camera">
            <CameraIcon />
          </button>
          <input type="text" placeholder="Search for anything" />
          <button className="magnifier">
            <MagnifierIcon />
          </button>
        </div>
      </div>
    </div>
    <main>
      <ul>
      {listData.map((item, index) => (
            <ListItemSkeleton key={index} imageUrl={item.imageUrl} />
          ))}
      </ul>
    </main>
  </div>
    </>
  )
}

export default App




const listData = [
  { imageUrl: 'https://picsum.photos/400/400?random=one' },
  { imageUrl: 'https://picsum.photos/400/400?random=two' },
  { imageUrl: 'https://picsum.photos/400/400?random=three' },
  { imageUrl: 'https://picsum.photos/400/400?random=four' },
  { imageUrl: 'https://picsum.photos/400/400?random=five' }
];