import React from "react";
import "./menular.scss";
import { Link } from "react-router-dom"

function Menu({ menuItem }) {
  return (
    <div className="menular">
      <div className="row w-100 section">
        {menuItem.map((item) => {
          return (
            <div
              className="col-11 col-md-6 col-lg-3 mx-0 mb-4 box"
              key={item.id}
            >
              <Link to="/aloqa" className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} className="card-img" alt="Menu_image" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <h6 className="card-price fs-6">{item.price}</h6>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
