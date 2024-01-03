
import React, {Component} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Landing from './components/landing/Landing'
import About from './components/about/About'
import Blogs from './components/blogs/Blogs'
import Sb from './components/scrollbtn/Sb'
import Courses from './components/courses/Courses'
import Contact from './components/contact/Contact'
import Notfound from './components/notfound/Notfound'
import CarouselComponent from './components/carousel/CarouselComponent'; // Import CarouselComponent

class App extends Component
{
    render()
    {
    const carouselImages = [
      {
        src: 'https://medicaldialogues.in/h-upload/2022/03/12/500x300_172130-170895-126075-aiims-delhi.webp',
        alt: 'Image 1',
        caption: 'Welcome to Supnits Classes',
        description: 'Learn and Excel in Your Studies',
      },
      {
        src: 'https://static.toiimg.com/thumb/msid-96327181,width-1280,height-720,resizemode-4/96327181.jpg',
        alt: 'Image 2',
        caption: 'Explore Our Courses',
        description: 'Dive into a world of knowledge and education.',
      },
      // Add more images as needed
    ];
  		return (
          <BrowserRouter>
            <>
              <Sb />
             <CarouselComponent images={carouselImages} /> {/* Add CarouselComponent here */}
              <div className = '_navbar'>
                  <Navbar />
              </div>

              <div className = '_body'>
                  <Routes>
                      <Route exact path = '/' element = {<Landing />} />
                      <Route path = '/OpenSchool' element = {<Landing />} />
                      <Route path = '/about' element = {<About />} />
                      <Route path = '/blogs/*' element = {<Blogs />} />
                      <Route path = '/courses/*' element = {<Courses />} />
                      <Route path = '/contact' element = {<Contact />} />
                      <Route path = '*' element = {<Notfound />} />
                  </Routes>
              </div>

              <div className = '_footer'>
                <Footer />
              </div>
            
            </>
          </BrowserRouter>
        )
    }
}
export default App
