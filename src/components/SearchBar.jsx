import React from "react";
import { IoIosSearch } from "react-icons/io";


const SearchBar = ({ show, setShow }) => {

  const handleVisible = () => {
    setShow()
  }
  return (
    <div className="w-100 d-flex justify-content-center align-items-center m-1">
      <form action="">
        {
            show ? 
            <div className="search-container border border-light border-rounded">
            <input type="text" placeholder="Search for apps and games" className="search-field"/>
            <span className="small-box d-flex justify-content-start align-items-center">
              <IoIosSearch className="search-bar" onClick={ () => setShow((prev) => ! prev)}/>
            </span>
          </div> : null
        }
      </form>
      <span>
      {
        !show ?   <IoIosSearch className="search-bar m-1"  onClick={handleVisible}/> : null
      }
      </span>
    </div>
  );
};

export default SearchBar;
