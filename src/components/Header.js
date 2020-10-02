/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

/**
 * Login user
 */
function Header() {

  /**
   * render 
   */
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
		  <div className="container">
        <a className="navbar-brand" href="#">Task Management</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    	</div>
    </nav>
  );
}

export default React.memo(Header);
