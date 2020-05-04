import Trail from "./animations/TrailAnimation";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

const Landing = () => (
  <div className="landing">
    <section>
      <img src="static/img/logo-hope-med-min.png" alt="Logo H.O.P.E. Foundation"></img>
      <h1>
        <Trail str="H.O.P.E. Foundation" />
      </h1>
      <h2>
        <Trail str="Hold On, Pain Ends." />
      </h2>
      <div className="btn-container">
        <ScrollLink
          activeClass="active"
          to="mission"
          smooth={true}
          offset={-50}
          duration={500}
          className="call-to-action"
        >
          <span> Read more</span>
        </ScrollLink>

        <Link href="#">
          <a className="call-to-action" href="https://www.paypal.me/EnockOsei" target="_blank">
            <span>Donate</span>
          </a>
        </Link>
      </div>
    </section>
    <style jsx>{`
      .landing {
        height: 95vh;
        width: 100%;
        position: relative;
        background: url(static/img/background-img-min.png) center top no-repeat;
        background-size: cover;
      }

      .landing::before {
        content: "";
        background: #333;
        position: absolute;
        height: 95vh;
        width: 100%;
        opacity: 0.8;
        overflow: hidden;
      }

      @media screen and (max-width: 700px) {
        .landing img {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default Landing;
