import React from 'react';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/white-logo.png" alt="" style={{ width: '150px' }} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
                Shaheen Abad, Gujranwala <br /> Pakistan
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="#0">awaismughal14301@gmail.com</a>
              </h6>
              <a href="#0" className="underline">
                <span className="fz-22 main-color">+92 320 (255) 86 87</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                {/* <li className="mb-15">
                  <a href="/page-about">About</a>
                </li>
                <li className="mb-15">
                  <a href="/page-services">Services</a>
                </li>
                <li className="mb-15">
                  <a href="/blog-grid-sidebar">Blog</a>
                </li> */}
                <li>
                  <a href="/page-contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="www.linkedin.com/in/muhammad-awais-mughal-emperor-editx" className="hover-anim">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="https://web.facebook.com/profile.php?id=61578940463458" className="hover-anim">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="https://github.com/emperorsEditx" className="hover-anim">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="https://www.instagram.com/emperors_editx/" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2025{" "}
              <span className="underline main-color">
                <a href="https://themeforest.net/user/UiCamp" target="_blank">
                  Emperor Editx
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
