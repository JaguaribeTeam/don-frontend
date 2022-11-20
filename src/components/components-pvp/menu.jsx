import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../css/index.css";

import Config from "../../img/logoRed.png";
import Settings from "../../img/icons/settings.svg";
import Perfil from "../../img/icons/person.svg";
import { Link } from 'react-router-dom';

function MenuPrivate() {

    return (
      <Navbar  fixed='top' className='menu'  >
        <Container fluid className='menuContainer'>
          <Navbar.Brand href="#">
           <Link to={'/'}> <img src={Config} width="150" alt="React Bootstrap logo" /> </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              
            </Nav>

           <Link to={'/perfil'} >
              <img src={Perfil} width="30" height="30" style={{'margin-right':'40px'}} alt="React Bootstrap logo" />
           </Link>
            
            <Link>
              <img src={Settings} width="30" height="30" alt="React Bootstrap logo" style={{'margin-right':'10px'}}/>
            </Link>
         
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }


export default MenuPrivate;