import About from './About/About'
import './App.css'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Profile from './Profile/Profile'
import Skills from './Skills/Skills'

function App() {


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Profile</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
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
    <Profile bg="green" text="RESPONSIVE DESIGN"/>
    <Profile bg="dark" text="WEB DESIGN"/>
    <Profile bg="green" text="MOBILE APP DESIGN"/>
    <Profile bg="dark" text="UI/UX DESIGN"/>
    <Profile bg="green" text="UI/UX DESIGN"/>
    </div>
   </div>

  <div className='text-white w-100 bg-dark'>
  <Footer/>
  </div>
  
    </>
  )
}

export default App
