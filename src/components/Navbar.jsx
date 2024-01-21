import React, { useState} from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SearchBar } from './index'
import { BsQuestionCircle} from 'react-icons/bs'
import { logo } from '../assets';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);




  return (
    <Nav className="border border-transparent d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-center align-items-center">
      <Navbar.Brand className="m-2 h2">
        <Link to="/" className="text-decoration-none text-secondary font-weight-normal">
       
        <img src={logo} alt="logo" height='60px'/>
      
        </Link>
      </Navbar.Brand>
      <Nav.Item>
            
            <Link to="/games" className="text-decoration-none text-secondary font-weight-normal">
              Games
            </Link>
            
        </Nav.Item>
      <Nav.Item>
            
            <Link to="/app" className="text-decoration-none text-secondary font-weight-normal">
              Apps
            </Link>
            
        </Nav.Item>
      <Nav.Item>
           
            <Link to="/" className="nav-link active text-decoration-none text-danger font-weight-normal">
             Movies & TV
            </Link>
            
        </Nav.Item>
      <Nav.Item>
            
            <Link to="/books" className="text-decoration-none text-secondary font-weight-normal">
             Books
            </Link>
           
        </Nav.Item>
      <Nav.Item>
           
            <Link to="/kids" className="text-decoration-none text-secondary font-weight-normal">
            Kids
            </Link>
           
        </Nav.Item>
      </div>
      
      <div className="d-flex justify-content-center align-items-center m-2">
      <SearchBar show={show} setShow={setShow}/>
      <Nav.Item>
          <Nav.Link role="button">
           <BsQuestionCircle className='question'/>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link role="button">
            <span className='avatar text-center'>A</span>
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default NavbarComponent;