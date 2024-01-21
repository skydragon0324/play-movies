import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Movies, Studios } from "./index";

const MoviesScreen = () => {
  const [activeTab, setActiveTab] = useState("Movies");
  return (
    <div className="m-4">
      <Nav className="border-transparent d-flex justify-content-start align-items-center mt-3">
        <Nav.Item>
          <Link
            to="/"
            className={`border px-3 py-1 m-2 rounded-pill text-decoration-none text-secondary font-weight-normal ${
              activeTab === "Movies" ? "activeTab" : null
            } `}
            onClick={() => setActiveTab("Movies")}
          >
            Movies
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="#"
            className={`border px-3 py-1 m-2 rounded-pill text-decoration-none text-secondary font-weight-normal ${
              activeTab === "TV" ? "activeTab" : null
            }`}
            onClick={() => setActiveTab("TV")}
          >
            TV
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="#"
            className={`border px-3 py-1 m-2 rounded-pill text-decoration-none text-secondary font-weight-normal ${
              activeTab === "Family" ? "activeTab" : null
            }`}
            onClick={() => setActiveTab("Family")}
          >
            Family
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="#"
            className={`border px-3 py-1 m-2 rounded-pill text-decoration-none text-secondary font-weight-normal ${
              activeTab === "Studios" ? "activeTab" : null
            }`}
            onClick={() => setActiveTab("Studios")}
          >
            Studios
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="#"
            className={`border px-3 py-1 m-2 rounded-pill text-decoration-none text-secondary font-weight-normal ${
              activeTab === "Network" ? "activeTab" : null
            }`}
            onClick={() => setActiveTab("Network")}
          >
            Network
          </Link>
        </Nav.Item>
      </Nav>

      <div className="">
        {activeTab === "Movies" ?  <Movies /> : activeTab === "Studios" ?   <Studios /> : null}
      </div>
    </div>
  );
};

export default MoviesScreen;
