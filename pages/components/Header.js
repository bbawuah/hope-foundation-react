import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => (
  <header>
    <Link href="/">
      <a>
        <div className="logo-div">
          <img src="static/img/logo-hope-small-min.png" alt=""></img>
          <p>H.o.p.e. foundation</p>
        </div>
      </a>
    </Link>

    <ul className="navlinks">
      <li>
        <ScrollLink
          activeClass="active"
          to="mission"
          smooth={true}
          offset={-55}
          duration={500}
          className="li-links"
        >
          Mission
        </ScrollLink>
      </li>

      <li>
        <ScrollLink
          activeClass="active"
          to="about"
          smooth={true}
          offset={-50}
          duration={500}
          className="li-links"
        >
          My story
        </ScrollLink>
      </li>

      <li>
        <Link href="/">
          <a
            className="li-links"
            href="https://www.paypal.me/EnockOsei"
            target="_blank"
          >
            Donate
          </a>
        </Link>
      </li>
    </ul>
    <style jsx>
      {`
        header {
          z-index: 10;
          display: flex;
          position: fixed;
          top: 0;
          left: 0;
          flex-direction: row;
          width: 100%;
          padding: .4vmax 9.5vw;
          align-items: center;
          background: #f7fafc;
          justify-content: space-between;
          -webkit-box-shadow: 0px 0px 36px -8px rgba(166, 168, 171, 1);
          -moz-box-shadow: 0px 0px 36px -8px rgba(166, 168, 171, 1);
          box-shadow: 0px 0px 36px -8px rgba(166, 168, 171, 1);
        }

        header img {
          width: 2.2em;
        }

        .logo-div{
          display: flex;
          align-items: center;
        }

        .logo-div p{
          margin-left: 1rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          font-weight: bolder;
          color: #A0AEC0;
        }

        header ul {
          display: flex;
          justify-content: space-between;
          width: 17rem;
          list-style: none;
        }

        header ul li {
          text-transform: uppercase;
          font-weight: bolder;
          color: #4a5568;
        }

        @media screen and (max-width: 700px) {
          header {
            flex-direction: column;
            padding: 1vmax 2vmax;
            align-items: start;
          }

          header ul {
            margin-top: 0.5rem;
          }
        }

        @media screen and (min-width: 1900px) {
          header {
            max-width: 1900px;
            left: 50%;
            padding: 1vmax;
            transform: translate(-50%);
          }
        }
      `}
    </style>
  </header>
);

export default Header;
