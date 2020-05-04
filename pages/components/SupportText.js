import { Spring } from "react-spring/renderprops.cjs";
import VisibilitySensor from "./VisibilitySensor";

const SupportText = () => (
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
         <div className="support-text" style={{...props}}>
         <h3 id="support">We need your support</h3>
         <p>
           Each amount you give helps someone to get the care they need and look
           upon brighter days. Your donation will be very much appreciated and used
           to provide for the best care they need. Thank you for even considering
           your donation and may God bless you abundantly. 
         </p>
         <a className="call-to-action" href="https://www.paypal.me/EnockOsei" target="_blank"> <span>Donate</span></a>
       </div>
        )}
      </Spring>
    )}
  </VisibilitySensor>
)

export default SupportText;