import React from 'react';

const Navbarf = () => {
  function logout(){
    localStorage.removeItem("Token");
    window.location.href = '/';
}
    return (
        <div className="navbar-custom">
        <ul className="list-unstyled topbar-menu float-end mb-0">
          <li className="dropdown notification-list d-lg-none">
            <a
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="dripicons-search noti-icon" />
            </a>
            <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
              <form className="p-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search ..."
                  aria-label="Recipient's username"
                />
              </form>
            </div>
          </li>
         
          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="dripicons-bell noti-icon" />
              <span className="noti-icon-badge" />
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">
              {/* item*/}
              <div className="dropdown-item noti-title">
                <h5 className="m-0">
                  <span className="float-end">
                    <a href="javascript: void(0);" className="text-dark">
                      <small>Clear All</small>
                    </a>
                  </span>
                  Notification
                </h5>
              </div>
              <div style={{ maxHeight: 230 }} data-simplebar="">
                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon bg-primary">
                    <i className="mdi mdi-comment-account-outline" />
                  </div>
                  <p className="notify-details">
                    Caleb Flakelar commented on Admin
                    <small className="text-muted">1 min ago</small>
                  </p>
                </a>
                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon bg-info">
                    <i className="mdi mdi-account-plus" />
                  </div>
                  <p className="notify-details">
                    New user registered.
                    <small className="text-muted">5 hours ago</small>
                  </p>
                </a>
                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon">
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      className="img-fluid rounded-circle"
                      alt=""
                    />{" "}
                  </div>
                  <p className="notify-details">Cristina Pride</p>
                  <p className="text-muted mb-0 user-msg">
                    <small>Hi, How are you? What about our next meeting</small>
                  </p>
                </a>
                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon bg-primary">
                    <i className="mdi mdi-comment-account-outline" />
                  </div>
                  <p className="notify-details">
                    Caleb Flakelar commented on Admin
                    <small className="text-muted">4 days ago</small>
                  </p>
                </a>
                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon">
                    <img
                      src="assets/images/users/avatar-4.jpg"
                      className="img-fluid rounded-circle"
                      alt=""
                    />{" "}
                  </div>
                  <p className="notify-details">Karen Robinson</p>
                  <p className="text-muted mb-0 user-msg">
                    <small>
                      Wow ! this admin looks good and awesome design
                    </small>
                  </p>
                </a>
                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <div className="notify-icon bg-info">
                    <i className="mdi mdi-heart" />
                  </div>
                  <p className="notify-details">
                    Carlos Crouch liked
                    <b>Admin</b>
                    <small className="text-muted">13 days ago</small>
                  </p>
                </a>
              </div>
              {/* All*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item text-center text-primary notify-item notify-all"
              >
                View All
              </a>
            </div>
          </li>
          
          <li className="notification-list">
            <a className="nav-link end-bar-toggle" href="javascript: void(0);">
              <i className="dripicons-gear noti-icon" />
            </a>
          </li>
          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle nav-user arrow-none me-0"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <span className="account-user-avatar">
                <img
                  src="assets/images/users/avatar-1.jpg"
                  alt="user-image"
                  className="rounded-circle"
                />
              </span>
              <span>
                <span className="account-user-name">Soeng Souy</span>
                <span className="account-position">Founder</span>
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
              {/* item*/}
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome !</h6>
              </div>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="mdi mdi-account-circle me-1" />
                <span>My Account</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="mdi mdi-account-edit me-1" />
                <span>Settings</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="mdi mdi-lifebuoy me-1" />
                <span>Support</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="mdi mdi-lock-outline me-1" />
                <span>Lock Screen</span>
              </a>
              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
                onClick={logout}
              >
                <i className="mdi mdi-logout me-1" />
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
        <button className="button-menu-mobile open-left">
          <i className="mdi mdi-menu" />
        </button>
        
      </div>
    );
}

export default Navbarf;
