import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [expanded, setExpanded] = useState(true);
  const containerRef = useRef(null);

  const toggleContainerSize = () => {
    containerRef.current.classList.toggle("collapsed");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      toggleContainerSize();
      setExpanded(!expanded);
    }, 2000);

    return () => {
      // clear the timer when unmounting this component
      if (!containerRef) {
        return clearTimeout(timer);
      }
    };
  }, [expanded]);

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="page collapsed" ref={containerRef}>
          <div className="para_wrapper">
            <div className="para long"></div>
            <div className="para short"></div>
            <div className="para full"></div>
            <div className="para full"></div>
            <div className="para full"></div>
            <div className="para long"></div>
          </div>
          <div className="flex-item-container">
            <div className="header">
              <div className="item flex-col-1"></div>
              <div className="item flex-col-2"></div>
              <div className="item flex-col-3"></div>
              <div className="item flex-col-4"></div>
              <div className="item flex-col-5"></div>
              <div className="item status flex-col-6"></div>
              <div className="item flex-col-7"></div>
            </div>

            <div className="row">
              <div className="item flex-col-1"></div>
              <div className="item flex-col-2"></div>
              <div className="item flex-col-3"></div>
              <div className="item flex-col-4"></div>
              <div className="item flex-col-5"></div>
              <div className="item status flex-col-6">
                <div className="color-icon yellow"></div>
                <div className="bauble"></div>
              </div>
              <div className="item flex-col-7"></div>
            </div>

            <div className="row short">
              <div className="item flex-col-1"></div>
              <div className="item flex-col-2"></div>
              <div className="item flex-col-3"></div>
              <div className="item flex-col-4"></div>
              <div className="item flex-col-5"></div>
              <div className="item status flex-col-6">
                <div className="color-icon blue"></div>
                <div className="bauble"></div>
              </div>
              <div className="item flex-col-7"></div>
            </div>

            <div className="row">
              <div className="item flex-col-1"></div>
              <div className="item flex-col-2"></div>
              <div className="item flex-col-3"></div>
              <div className="item flex-col-4"></div>
              <div className="item flex-col-5"></div>
              <div className="item status flex-col-6">
                <div className="color-icon  green"></div>
                <div className="bauble"></div>
              </div>
              <div className="item flex-col-7"></div>
            </div>
          </div>
          <div className="para_wrapper">
            <div className="para full"></div>
            <div className="para full"></div>
            <div className="para full"></div>
            <div className="para long"></div>
          </div>
        </div>
      </div>
      <div className="feature-info-wrapper">
        <h1>Go pageless by default</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere ad placeat, aliquam earum neque vero odio
          quia voluptas molestias, necessitatibus odit voluptate nemo exercitationem dolore. Beatae nulla delectus iusto
          eligendi!
        </p>
        <div className="buttons">
          <button className="dismiss">Dismiss</button>
          <button className="default">Set as default</button>
        </div>
      </div>
    </div>
  );
}

export default App;
