import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Load_details from './Screens/Load_details';

function App() {

  return (
 <><Routes>

      <Route path=' /Load_details' element={Load_details}>


      </Route>

    </Routes><>
        <body>

          <header id="header" class="fixed-top ">
            <div class="container d-flex align-items-center justify-content-lg-between">

              <h1 class="logo me-auto me-lg-0"><a href="index.html">Ready To Load <span>.</span></a></h1>
              <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                  <li><a class="nav-link scrollto active" href="index.html">Home</a></li>
                  <li><a class="nav-link scrollto" href="#about">Goals</a></li>
                  <li><a class="nav-link scrollto" href="Persona.html"> Personas</a></li>
                  <li><a class="nav-link scrollto" href="sketches.html">Sketches</a></li>
                  <li><a class="nav-link scrollto" href="Critique.html">Critique</a></li>
                  <li><a class="nav-link scrollto" href="framework.html">Technologies/Framework</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>


              </nav>
            </div>
          </header>

          <section id="hero" class="d-flex align-items-center justify-content-center">
            <div class="container" data-aos="fade-up">

              <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                <div class="col-xl-6 col-lg-8">
                  <h1>SIMPLIFY FREIGHT AND SAVE TIME.<span>.</span></h1>
                  <h2>Reimagine the future of logistics with an advanced platform for both shippers and carriers.</h2>
                </div>
              </div>



            </div>
          </section>

          <main id="main">


            <section id="about" class="about">
              <div class="container" data-aos="fade-up">

                <div class="row">
                  <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">

                  </div>
                  <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                    <h3>Goal</h3>
                    <p>
                      Ready to load has been designed with a goal to become the top digital freight platform in Pakistan for produce by providing freshness right to your door, minimizing transportation waste, and paving the way for long-term, sustainable development. It???s aimed towards providing a platform to the freight market where shippers and carriers can post and book a load at the ease and comfort of their home so that their loads and trucks are always on the go. Keeping in view the caliber of the freight workers in Pakistan about of usage of digital marketing, it???ll be kept simple for their easy and better understanding.
                      A number of aspects will help this app in reaching its goal.
                      {/* </p> */}
                      <ul>
                        <li>
                          -Whether you are an experienced freight worker or you are someone new to this field, this app will be of service for both because of its absolutely simple access and use.
                        </li>
                        <li>
                          -Shippers do not have to worry about finding a truck for their load because in just a few clicks their load will be posted on the load board, followed with being booked by an interested carrier and delivered before it gets rotten sitting in their warehouse.

                        </li>
                        <li>
                          -Similarly for the carriers, they do not have to worry about their trucks standing in their yards anymore because with just a few clicks they will be able to not just find a load but also as there will be plenty of options available they will have the chance to take their truck to whichever region of the country they wish.

                        </li>
                        <li>
                          -Neither shippers nor carriers will need a third party to get their work done because this app will connect shippers directly with the carriers eliminating any kind of third party cost in between.

                        </li>
                        <li>
                          -Going out in the market and finding a vendor is a hassle in itself. This app will save a lot of time, energy and money of the shippers and carriers.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>

              </div>
            </section>

          </main>
          <footer id="footer">
            <div class="footer-top">
              <div class="container">
                <div class="row">

                  <div class="col-lg-3 col-md-6">
                    <div class="footer-info">
                      <h3>Ready To Load <span>.</span></h3>
                      <p>
                        XYZ  <br />
                        KY,Sd Pakistan <br /><br />
                        <strong>Phone:</strong> +92 5589 55488<br />
                        <strong>Email:</strong> info@example.com<br />
                      </p>
                      <div class="social-links mt-3">
                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                      </div>
                    </div>
                  </div>



                </div>
              </div>
            </div>

            <div class="container">
              <div class="copyright">
                &copy; Copyright <strong><span>Ready To Load </span></strong>. All Rights Reserved
              </div>
            </div>
          </footer>


          {/* <div id="preloader"></div> */}
          <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>


        </body>
      </></>
  );
}

export default App;
