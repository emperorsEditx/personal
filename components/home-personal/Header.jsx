"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import loadBackgroudImages from "@/common/loadBackgroudImages";

function Header() {
  const roles = [
    "web developer",
    "frontend engineer",
    "React developer",
    "UI/UX enthusiast",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const roleRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0",
    );
    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  useEffect(() => {
    if (!roleRef.current) return;
    const el = roleRef.current;
    const interval = setInterval(() => {
      gsap.to(el, {
        opacity: 0,
        y: -10,
        duration: 0.35,
        onComplete: () => {
          setRoleIndex((i) => (i + 1) % roles.length);
          gsap.fromTo(
            el,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.35 },
          );
        },
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div
      className="header header-personal valign bg-img"
      data-background=""
      data-overlay-dark="2"
    >
      <div className="container ontop">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <img src="/assets/imgs/header/hi.png" alt="" />
                </span>{" "}
                Hello! there
              </h6>
              <h1 className="fw-700 mb-10">
                I&apos;m Muhammad Awais{" "}
                <span className="main-color">Mughal</span>
              </h1>
              <h3>
                I am a{" "}
                <span ref={roleRef} className="role">
                  {roles[roleIndex]}
                </span>
              </h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      From the inception of a project to its completion, we
                      employ a comprehensive and holistic approach.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="/page-contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Contact Me</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <img
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: portrait photo ── */}
          <div className="col-lg-6 d-none d-lg-flex justify-content-end align-items-end">
            <img
              src="/assets/imgs/personal/hero-bg.png"
              alt="Muhammad Awais Mughal"
              style={{
                maxHeight: "80vh",
                width: "auto",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* ── BOTTOM: contact info (unchanged) ── */}
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">
              <a href="mailto:awaismughal14301@gmail.com">
                awaismughal14301@gmail.com
              </a>
            </span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Phone :</h6>
            <span className="p-color">
              <a href="tel:+923202558687">+92 320 (255) 86 87</a>
            </span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Address :</h6>
            <span className="p-color">
              <a
                href="https://maps.google.com/?q=Shaheen+Abad+Gujranwala,+Punjab+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shaheen Abad Gujranwala, Punjab Pakistan
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
