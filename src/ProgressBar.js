import React, { useRef, useEffect } from "react";
import "./ProgressBar.scss";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap-trial/dist/gsap";
import { DrawSVGPlugin } from "gsap-trial/dist/DrawSVGPlugin";
import { ScrollToPlugin } from "gsap-trial/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProgressBar = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".progress-wrap path"),
      {
        drawSVG: "0",
      },
      {
        drawSVG: "100%",
        scrollTrigger: {
          trigger: element.querySelector(".progress-wrap path"),
          start: 0,
          end: "max",

          scrub: true,
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
    const element = ref.current;
    // show/hide
    gsap.fromTo(
      element.querySelector(".progress-wrap"),
      {
        yPercent: 100,
        autoAlpha: 0,
      },
      {
        yPercent: 0,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: element.querySelector(".progress-wrap"),
          start: 5,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // on click, scroll back to top
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    document.querySelector(".progress-wrap").addEventListener("click", (e) => {
      gsap.to(window, {
        scrollTo: 0,
        duration: 0.55,
      });
    });
  }, []);
  return (
    <div>
      <div ref={ref} className="paginacontainer">
        <div className="progress-wrap active-progress">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
