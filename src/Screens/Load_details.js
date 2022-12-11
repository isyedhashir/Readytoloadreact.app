var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Gp Bootstrap Template - Index</title>
        <meta content name="description" />
        <meta content name="keywords" />
        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
        {/* Vendor CSS Files */}
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
        <header id="header" className="fixed-top " style={{backgroundColor: 'black'}}>
          <div className="container d-flex align-items-center justify-content-lg-between">
            <h1 className="logo me-auto me-lg-0"><a href="index.html">Ready To Load <span>.</span></a></h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li><a className="nav-link scrollto active" href="index.html">Home</a></li>
                <li><a className="nav-link scrollto" href="index.html">Goals</a></li>
                <li><a className="nav-link scrollto" href="#contact"> Contact</a></li>
                <li className="dropdown"><a href="#"><span>Get Started</span> <i className="bi bi-chevron-down" /></a>
                  <ul>
                    <li className="dropdown"><a href="#"><span>Carrier</span> <i className="bi bi-chevron-right" /></a>
                      <ul>
                        <li><a href="signup.html">Sign Up</a></li>
                        <li><a href="Login.html">Login</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a href="#"><span>Shipper</span> <i className="bi bi-chevron-right" /></a>
                      <ul>
                        <li><a href="signup.html">Sign Up</a></li>
                        <li><a href="Login.html">Login</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}      
          </div> 
        </header> 
        <main id="main">
          <section className="vh-100" style={{backgroundColor: '#eee'}}>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{borderRadius: '25px'}}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                          <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                              <div className="form-outline flex-fill mb-0">
                                <input type="email" id="form3Example3c" className="form-control" />
                                <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw" />
                              <div className="form-outline flex-fill mb-0">
                                <input type="password" id="form3Example4c" className="form-control" />
                                <label className="form-label" htmlFor="form3Example4c">Password</label>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button type="button" className="btn btn-primary btn-lg">Login</button>
                            </div>
                          </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-info">
                    <h3>Gp<span>.</span></h3>
                    <p>
                      A108 Adam Street <br />
                      NY 535022, USA<br /><br />
                      <strong>Phone:</strong> +1 5589 55488 55<br />
                      <strong>Email:</strong> info@example.com<br />
                    </p>
                    <div className="social-links mt-3">
                      <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                      <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                      <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                      <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                      <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Our Newsletter</h4>
                  <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                  <form action method="post">
                    <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong><span>Gp</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              All the links in the footer should remain intact. --&gt;
            </div></div></footer>End Footer --&gt;
        <div id="preloader" />
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        {/* Vendor JS Files */}
        Template Main JS File
      </div>
    );
  }
});