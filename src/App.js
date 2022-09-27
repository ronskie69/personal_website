import { VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Landing from './components/Landing'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Techs from './components/Techs'
import './css/app.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'

//libs
import AOS from 'aos'
import 'aos/dist/aos.css'
import PopupMe from './components/PopupMe'

function App() {

  const [ scrollY, setScrollY ] = React.useState(0)
  const onScroll = () => setScrollY(window.scrollY);
  const { isOpen, onToggle } = useDisclosure()

  React.useEffect(() => {
    AOS.init({
      duration: 550,
      easing: 'ease-in-out-cubic',
      delay: 100
    });
    // AOS.refresh()

    setTimeout(() => {
      onToggle()
    }, 1000);

  },[])
  React.useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  },[scrollY]);

  return (
    <VStack className='app' position={"relative"}>
      <Navigation 
        onScroll={scrollY}
        isOpenMe={isOpen}
        onToggleMe={onToggle}/>
      <PopupMe isOpenMe={isOpen} onToggleMe={onToggle}/>
      <Landing onToggleMe={onToggle}/>
      <Intro/>
      <Projects/>
      <Techs/>
      <Contact/>
      <Footer/>
    </VStack>
  )
}

export default App