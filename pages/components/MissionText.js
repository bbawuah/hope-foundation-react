import { Spring } from "react-spring/renderprops.cjs";
import VisibilitySensor from "./VisibilitySensor";

const MissionText = () => (
  <VisibilitySensor once partialVisibility>
    {({ isVisible }) => (
      <Spring
        delay={140}
        to={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(100px)",
        }}
      >
        {(props) => (
          <div className="birdbg" id="mission" style={{ ...props }}>
            <article>
              <h3>The Vision</h3>
              <p>
                We, of the H.O.P.E Foundation, want to do our best to minimize
                the pain of dialysis patients in whatever shape or form we can.
                And we would very much appreciate if you could help us achieve
                this goal by supporting us any way you can. Feel free to contact
                us for more information or go to our Donate section to see in
                which way you can contribute to our mission.
              </p>

              <h3>The Mission</h3>

              <h4>Medical aid</h4>
              <p>
                With the H.O.P.E Foundation we want to improve the patiënts
                overall experience by delivering medical aid such as blood
                pressure measurement tools, medical masks and other new
                equipment.
              </p>
              <br></br>
              <h4>Financial support </h4>
              <p>
                We want to offer financial support for those who cannot afford
                to buy the necessary medications on their own.
              </p>

              <br></br>
              <h4>Comfortable Environment</h4>
              <p>
                There is nothing more heartbreaking for a child then not being
                able to play around and be free. Being a dialysis patient is
                hard for adults but even harder for children. That is why the
                H.O.P.E Foundation wants to help children to get accustomed with
                their new situation by offering them (educational) toys and
                games to make their stay somewhat more joyous.
              </p>
            </article>
          </div>
        )}
      </Spring>
    )}
  </VisibilitySensor>
);

export default MissionText;
