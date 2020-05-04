import { Spring } from "react-spring/renderprops.cjs";
import VisibilitySensor from "./VisibilitySensor";
import SupportText from "./SupportText";

const Support = () => (
  <div className="support">
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
            <img
              src="/static/img/luke6-38-tekstTekengebied 5@2x-min.png"
              alt="Luke 6:38"
              style={{ ...props }}
              className="bible-text"
            ></img>
          )}
        </Spring>
      )}
    </VisibilitySensor>

    <SupportText />
  </div>
);

export default Support;
