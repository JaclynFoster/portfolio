import NavBar from './Navbar';
import './Layout.css';

const Layout = (props) => {
  return (
    <div class="background">
      <NavBar />
    <div class="elements">
      <div class="square sq1"></div>
      <div class="square sq2"></div>
      <div class="square sq3"></div>
    </div> 
      {props.children}
  </div>
  );
}

export default Layout;
