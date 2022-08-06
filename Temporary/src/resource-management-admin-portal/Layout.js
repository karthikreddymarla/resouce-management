import React, { Children } from "react";

const Layout = ({ children }) => {
  return (
    <div className="main_container">
      <div className="header_container">
        {/* display flex, justify contebt space between */}
        <div className="logo_container">
          <img
            className="left_logo"
            src="https://images.unsplash.com/photo-1512093266765-564111bfb15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fDY0MCo0ODB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="logo_container">
          <img
            className="right_logo"
            src="https://images.unsplash.com/photo-1512093266765-564111bfb15f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fDY0MCo0ODB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
