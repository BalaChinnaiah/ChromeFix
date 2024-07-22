  import React from 'react';
  import { useRef, useEffect, useState } from 'react';
  import './App.css'; // Import custom CSS if needed



  const App = () => {

    const sliderRef = useRef(null);
    const [showHeading, setShowHeading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliderExpanded, setIsSliderExpanded] = useState(true);
    const [isShrinking, setIsShrinking] = useState(true);
    const [isFinalState, setIsFinalState] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation menu FUnction

      const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
      };


    // Carousel Functionality 
    const scrollLeft = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: -sliderRef.current.clientWidth,
          behavior: 'smooth',
        });
      }
    };

    const scrollRight = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: sliderRef.current.clientWidth,
          behavior: 'smooth',
        });
      }
    };


    // Scroll Text Animation Functions 
    const heading = document.querySelector('.heading');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const headerHeight = heading.offsetHeight;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        if (currentScrollY > headerHeight) {
          heading.classList.add('fixed');
          heading.style.opacity = 1;
          heading.style.transform = 'translateY(0)';
        }
      } else {
        // Scrolling up
        if (currentScrollY < headerHeight) {
          heading.classList.remove('fixed');
          heading.style.opacity = 0;
          heading.style.transform = 'translateY(300px)';  
        }
      }

      lastScrollY = currentScrollY;
    });


    // ColorFul Text Animation Function 
    const texts = [
      "Fast",
      "Safe",
      "Yours",
      "Experience the future.",
    ];

    const colors = [
      { background: '#f0e68c', text: '#b8860b' }, // LightKhaki with DarkGoldenRod
      { background: '#add8e6', text: '#00008b' }, // LightBlue with DarkBlue
      { background: '#90ee90', text: '#006400' }, // LightGreen with DarkGreen
      { background: '#ffcccb', text: '#8b0000' }, // LightCoral with DarkRed
    ];

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 3000); // Change text every 3 seconds

      return () => clearInterval(intervalId);
    }, [texts.length]);

   

    return (
      <div className="app">
        <header className="header">
          
            <div className="hamburger" onClick={handleMenuToggle}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <a href="#"> <img src="chromeHeader.png" alt="chrome" className="logo" /> </a>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">The Browser by Google</a></li>
              <li>
                <a href="#support"> Feautures </a>
                <div className="dropdown">
                  <ul>
                    <li><a href="#feature1">Feature 1</a></li>
                    <li><a href="#feature2">Feature 2</a></li>
                    <li><a href="#feature3">Feature 3</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#support">Support</a>
                <div className="dropdown">
                  <ul>
                    <li><a href="#support1">Support 1</a></li>
                    <li><a href="#support2">Support 2</a></li>
                    <li><a href="#support3">Support 3</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        
        </header>
        <main className="main">
          <img src="chromeLogo.svg" alt="logo" />
          <h1 className='mainTitle'>The browser  <br /> built to be </h1>
          
        <div className="text-animation-container"
            style={{
              backgroundColor: colors[currentIndex].background,
              color: colors[currentIndex].text,
            }}
        >
        {texts.map((text, index) => (
          <div
            key={index}
            className={`text-item ${currentIndex === index ? 'active' : ''}`}
          >
            <p>{text}</p>
          </div>
        ))}
      </div>

          <button className="download-btn"> <i className="fas fa-download"></i> <span> </span> Download Chrome</button>
          
          <br /><br />
          <p style={{fontSize : "12px"}}>For Windows 11/10 64-bit.</p>

          <label style={{ display: 'flex', alignItems: 'center' }} className='helpText'>
            <input type="checkbox" style={{ marginRight: '10px' }} />
            Help make Google Chrome better by automatically sending usage statistics and crash <br /> reports to Google.
           </label>
          
         
          <p className="terms">
            By downloading Chrome, you agree to the <a href="#terms">Google Terms of Service</a> and <br /> <a href="#terms">Chrome and ChromeOS Additional Terms of Service</a>.
          </p>

          <br /><br />

          <h1 className={`heading ${showHeading ? 'fixed' : ''}`} >
            The <span className='fastHeading'> fast </span> way to do <br /> things online
          </h1>

            <br /> <br />


          <div className="carousel">
          <div className="slider" ref={sliderRef}>


              <div className="slider1mob">

                <h2> Proritise <br /> performance </h2>

                <p>Chrome is built for performance. Optimise your experience with <br /> 
                features like Energy Saver and Memory Saver.

                </p>
              </div>

            <div className="slide slider1main">

              <div className="slider1">

                <h2> Proritise <br /> performance </h2>

                <p>Chrome is built for performance. Optimise your experience with <br /> 
                features like Energy Saver and Memory Saver.
                
                </p>
              </div>
              <video autoPlay loop muted>
                <source src="slider1.webm" type="video/mp4" />
              </video>
            </div>

            <div className="slider2mob">
                <h2> Stay On top <br /> of tabs </h2>
                <p> Chrome has tools help you manage the tabs you're not quite <br />
                ready to close. Group, label, and colour-code you tabs to stay <br />
                organised and work faster.
                </p>
            </div>

            <div className="slide slider2main">
              <div className="slider2">
                <h2> Stay On top <br /> of tabs </h2>
                <p> Chrome has tools help you manage the tabs you're not quite <br />
                ready to close. Group, label, and colour-code you tabs to stay <br />
                organised and work faster.
                </p>
              </div>
              <img src="slider2.webp" alt="Slide 2" />
            </div>

          <div className="slider3mob">
                <h2> Optimised for <br /> your devices </h2>

                <p> Chrome is built to work with your <br />
                devices across platforms. That means  <br />
                a smooth experience on whatever <br />
                you're working with.
                
                </p>
            </div>

            <div className="slide slider3main">
              <div className="slider3">
                <h2> Optimised for <br /> your devices </h2>

                <p> Chrome is built to work with your <br />
                devices across platforms. That means  <br />
                a smooth experience on whatever <br />
                you're working with.
                
                </p>
              </div>
              <img src="slider3.webp" alt="Slide 3" />
            </div>

            <div className="slider4mob">
                <h2> Automatic <br /> updates </h2>

                <p> There's a new Chrome update every four weeks, making it easy to <br />
                have the newest features and a faster, safe browser. 
                
                </p>
            </div>


            <div className="slide slider4main">

              <div className="slider4">
                <h2> Automatic <br /> updates </h2>

                <p> There's a new Chrome update every four weeks, making it easy to <br />
                have the newest features and a faster, safe browser. 
                
                </p>
              </div>
              <img src="slider4.webp" alt="Slide 4" />
            </div>

            </div>

            <div className="carousel-controls">

            <button onClick={scrollLeft} className="carousel-button left"> <i className="fas fa-chevron-left"></i> </button>
            <button onClick={scrollRight} className="carousel-button right"> <i className="fas fa-chevron-right"></i> </button>

          </div>

          </div>
        </main>
      </div>
    );
  };

  export default App;
