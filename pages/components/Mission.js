import { Spring } from "react-spring/renderprops.cjs";
import VisibilitySensor from "./VisibilitySensor";
import MissionText from "./MissionText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEuroSign, faProcedures, faPercentage } from '@fortawesome/free-solid-svg-icons';

const Mission = () => (
  <div className="mission">
    <MissionText />
    <section className="facts-container">
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={110}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(100px)",
            }}
          >
            {(props) => (
              <aside style={{ ...props }}>
                <FontAwesomeIcon icon={faEuroSign} className="icon"/>
                <p className="facts">
                  The cost of treatment for dialysis patients in Ghana is very
                  high. In some cases patients are left to their fate when they
                  cannot afford to pay the cost.
                </p>
              </aside>
            )}
          </Spring>
        )}
      </VisibilitySensor>

      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={150}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(100px)",
            }}
          >
            {(props) => (
              <aside style={{ ...props }}>
                <FontAwesomeIcon icon={faProcedures} className="icon"/>
                
                <p className="facts">
                  The cost of investigations to detect dialysis and the cost of
                  treatments for side effects of dialysis are so high that in
                  most cases families find themselves in very deep financial
                  struggles.
                </p>
              </aside>
            )}
          </Spring>
        )}
      </VisibilitySensor>

      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={170}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(100px)",
            }}
          >
            {(props) => (
              <aside style={{ ...props }}>
                <FontAwesomeIcon icon={faPercentage} className="icon"/>
                
                <p className="facts">
                  The mortality rates amongst adults in Africa with acute kidney
                  injury is between the 13.5 - 43.5 % and could be higher in
                  areas where dialysis services are unavailable.
                </p>
              </aside>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </section>

    <style jsx>{``}</style>
  </div>
);

export default Mission;
