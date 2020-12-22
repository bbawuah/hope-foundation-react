import { Spring } from "react-spring/renderprops.cjs";
import VisibilitySensor from "./VisibilitySensor";
import AboutSection from "./AboutSection";
import Article from "./Article";

const aboutText = {
  first: (
    <p>
      For years I had to live with a kidney disease. Today, I am happy to say I
      can live my life to the fullest with a new kidney thanks to a gracious
      donor. However, I cannot forget the journey I embarked on before getting
      here. As a dialysis patient, I went through difficult times and often
      experienced feelings of loneliness. When I remember the trying times I
      went through as a patient, I feel prompted to help those who are going to
      or are going through a similar situation. I want to help them on their
      journey to resetting their life. I want to do so by helping them by giving
      them comfort and an opportunity.
    </p>
  ),
  second: (
    <p>
      As of now, I am a healthy 25 year old Dutch-Ghanaian living in the
      Netherlands. I was blessed enough to receive the necessary care I needed
      here in the Netherlands to get my second chance at life, but I know that
      the same cannot be said for all the dialysis patients across the world
      like for example those in Ghana.
    </p>
  ),

  third: (
    <p>
      That is why I founded the <strong>H.O.P.E. Foundation</strong> to get
      attention for kidney / dialysis patients among others in Ghana especially
      for those who are at a young age. The care the patients receive in Ghana
      is not as advanced as it is here in Europe and so, I want to help improve
      the care there first and hopefully extend it at a later stage to other
      countries in a similar situation.
    </p>
  ),

  forth: (
    <p>
      The reason behind the name <strong>H.O.P.E. Foundation</strong> comes from
      the period I started going into my dialysis phase and I remember having so
      much complications during it. I really wanted to give up and felt really
      lonely and even felt like every day could have been my last day. With no
      one to talk during my dialysis, I just started praying and then I heard a
      voice saying “You’re not alone, I’m here with you! Hold on, your pain will
      end!” That’s when I knew God was in control and my pain would end! So
      <em> H.O.P.E </em> became my motto and encouragement through my dialysis
      and kept me strong all the way through it. That’s why I knew that it had
      to be the name of this foundation.
    </p>
  ),
};

const About = () => (
  <div id="about">
    <AboutSection>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={100}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(100px)",
            }}
          >
            {(props) => (
              <div className="article-wrapper" style={{ ...props }}>
                <h3>My Story</h3>
                <Article>{aboutText.first}</Article>
              </div>
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
              <img
                src="static/img/enock1.jpeg"
                alt=""
                style={{ ...props }}
                className="about-img1"
              ></img>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </AboutSection>

    <AboutSection>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={100}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(100px)",
            }}
          >
            {(props) => (
              <blockquote style={{ ...props }}>
                "I cannot forget the journey I embarked on before getting here."
              </blockquote>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </AboutSection>

    <AboutSection>
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
              <img
                src="static/img/enock3.jpeg"
                alt=""
                style={{ ...props }}
              ></img>
            )}
          </Spring>
        )}
      </VisibilitySensor>

      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={100}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(100px)",
            }}
          >
            {(props) => (
              <div className="article-wrapper" style={{ ...props }}>
                <Article className="second-text">{aboutText.second}</Article>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </AboutSection>

    <AboutSection>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={100}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(100px)",
            }}
          >
            {(props) => (
              <div className="article-wrapper" style={{ ...props }}>
                <Article>{aboutText.third}</Article>
              </div>
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
              <img
                src="static/img/IMG_7403-min.png"
                alt=""
                style={{ ...props }}
              ></img>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </AboutSection>

    <AboutSection>
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
              <img
                src="static/img/gladdejongen1.jpeg"
                alt=""
                style={{ ...props }}
              ></img>
            )}
          </Spring>
        )}
      </VisibilitySensor>

      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={100}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(100px)",
            }}
          >
            {(props) => (
              <div className="article-wrapper" style={{ ...props }}>
                <Article className="second-text">{aboutText.forth}</Article>
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </AboutSection>

    <style jsx>{`
      div {
        background: #f7fafc;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }

      .article-wrapper {
        padding-top: 0;
      }
    `}</style>
  </div>
);

export default About;
