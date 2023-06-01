import NavBar from './Navbar'
import './Layout.css'

const Layout = props => {
  return (
    <div class="background">
      <NavBar />
      {props.children}

      <div class="elements">
        <div class="square sq1" />
        <div class="square sq2" />
        <div class="square sq3" />
      </div>
    </div>
  )
}

export default Layout

