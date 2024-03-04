import NavbarComponent from './components/Navbar'
import InfoComponent from './components/InfoComponent'
import AvatarsComponent from './components/Avatars'
import DescriptionComponent from './components/Description'

function App() {
  return (
    <>
      <div className='justify-center'>
       <NavbarComponent></NavbarComponent>
       <InfoComponent ></InfoComponent>
       <AvatarsComponent></AvatarsComponent>
       <DescriptionComponent></DescriptionComponent>
      </div>
    </>
  )
}

export default App
