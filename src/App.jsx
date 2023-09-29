import About from './About/About'
import './App.css'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Profile from './Profile/Profile'
import Skills from './Skills/Skills'

function App() {


  return (
    <>
   <Home/>
   <About/>
   <div className='w-100 text-white bg-dark '>
     <div className="container ">
    <div className="row py-4">
      <div className="col-md-12 py-4 text-center">
      <h1>SKILLS</h1>
      </div>
      <div className="col-md-12 py-4 text-muted text-center">
      <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officia doloribus consequatur dignissimos eos. In aliquid eveniet odit sequi laborum? adipisicing elit. Voluptates sint ipsum impedit molestiae veniam nulla laboriosam velit unde ea at!</p>

      </div>

      <div className="col-md-4 py-4 d-flex justify-content-center align-items-center">
          <div className="div w-50 text-center">
            <h6>MY FOCUS</h6>
            <hr/>
            <h6>UI/UX DESIGN</h6>
            <h6>RESPONSIVE DESIGN</h6>
            <h6>WEB DESIGN</h6>
            <h6>MOBILE APP DESIGN</h6>
          </div>
      </div>
      <div className="col-md-8 py-4">
        <Skills skill="Html" range="100" />
        <Skills skill="Css" range="80"/>
        <Skills skill="Bootstrap" range="60"/>
        <Skills skill="Js" range="70"/>
        <Skills skill="React" range="50"/>
      </div>
    </div>
   </div>
   </div>

   <div className="container py-5">
    <div className="row">
    <h1 className='py-3'>Portfolio</h1>
    <Profile bg="dark" text="UI/UX DESIGN"/>
    <Profile bg="info" text="RESPONSIVE DESIGN"/>
    <Profile bg="dark" text="WEB DESIGN"/>
    <Profile bg="info" text="MOBILE APP DESIGN"/>
    <Profile bg="dark" text="UI/UX DESIGN"/>
    <Profile bg="info" text="UI/UX DESIGN"/>
    </div>
   </div>

  <div className='text-white w-100 bg-dark'>
  <Footer/>
  </div>
  
    </>
  )
}

export default App
