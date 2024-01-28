import './App.css'
import BackToTopIcon from './components/BackToTopIcon'
import LogoIcon from './components/LogoIcon'
import CameraIcon from './components/CameraIcon'
import MagnifierIcon from './components/MagnifierIcon'
import ListItemSkeleton from './components/ListItemSkeleton'
import BagIcon from './components/BagIcon'
import { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function App() {

  const headerRef = useRef(null);
  const searchControlsRef = useRef(null);
  const logoRef = useRef(null);
  const searchWrapperRef = useRef(null);
  const sneakyBearRef = useRef(null);

  useEffect(() => {
    if (!CSS.supports('animation-timeline: scroll()')) {
      gsap.registerPlugin(ScrollTrigger);
      const HEADER = headerRef.current;

      if (HEADER) {
        gsap.to(searchControlsRef.current, {
          width: HEADER.offsetWidth - 66,
          scrollTrigger: {
            scrub: 0.25,
            ease: 'none',
            start: 0,
            end: HEADER.offsetHeight
          }
        });

        gsap.to(logoRef.current, {
          yPercent: -25,
          opacity: 0,
          scrollTrigger: {
            scrub: 0.25,
            ease: 'none',
            start: 0,
            end: HEADER.offsetHeight * 0.8
          }
        });

        gsap.to(searchWrapperRef.current, {
          boxShadow: '0 5px 10px hsl(0 0% 0%)',
          scrollTrigger: {
            scrub: 0.25,
            ease: 'none',
            start: HEADER.offsetHeight,
            end: HEADER.offsetHeight * 1.5
          }
        });

        gsap.to(searchWrapperRef.current, {
          background: 'var(--bg)',
          scrollTrigger: {
            scrub: 0.25,
            ease: 'none',
            start: HEADER.offsetHeight,
            end: HEADER.offsetHeight * 1.5
          }
        });

        gsap.to(sneakyBearRef.current, {
          transform: 'rotate(90deg) translateX(calc(var(--header-height) * 0.125)) translateY(50%)',
          scrollTrigger: {
            scrub: 0.25,
            ease: 'none',
            start: HEADER.offsetHeight * 1.5,
            end: HEADER.offsetHeight * 2
          }
        });
      }
    }
  }, []);



  return (
    <>
 <div>
    <a href="#">
      <span className="sr-only">Back to top</span>  
      <BackToTopIcon ref={sneakyBearRef} />
    </a>
    <a href="#" className="logo" ref={logoRef}>
      <LogoIcon />
    </a>
    <div className="header-wrapper">
      <header ref={headerRef}>
        <button>
          <BagIcon />
        </button>
      </header>
    </div>
    <div className="search-wrapper" ref={searchWrapperRef}>
      <div className="search-bar">
        <div className="search-controls" ref={searchControlsRef}>
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