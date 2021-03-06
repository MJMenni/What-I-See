import styled from "styled-components";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <Wrap>
        <AboutTitle>About Visual Snow Syndrome</AboutTitle>
        <AboutCopy>
          <Bold>Visual Snow Syndrome (VSS)</Bold> is a neurological disorder
          that impacts how a person sees and hears. The condition causes
          individuals to see a continuous layer of tiny flickering dots over
          their entire visual field. People with VSS often describe this visual
          disturbance as seeing the world through a broken television set. In
          addition to the static, people with VSS typically experience many
          other visual and non-visual symptoms. While some may have moderate
          symptoms that have little impact on their daily lives, others are
          completely debilitated by the condition.
        </AboutCopy>
        <SpecialCopy>
          For people living with VSS, these symptoms occur 24 hours a day, 7
          days a week, even when their eyes are closed.
        </SpecialCopy>

        <SymptomsWrap>
          <VisualSymptoms>
            <SymptomType>Visual Symptoms</SymptomType>
            <IconWrap>
              <Icon src="assets/snow.png" alt="Visual snow"></Icon>
              <IconText>
                Snow-like dots all over the field of vision (visual snow)
              </IconText>
            </IconWrap>
            <IconWrap>
              <Icon src="assets/starbursts.png" alt="Flashing lights"></Icon>
              <IconText>Small floating objects or flashing lights</IconText>
            </IconWrap>
            <IconWrap>
              <Icon src="assets/brightness.png" alt="Photophobia"></Icon>
              <IconText>Sensitivity to light (photophobia)</IconText>
            </IconWrap>
            <IconWrap>
              <Icon src="assets/entopic.png" alt="Entoptic phenomena"></Icon>
              <IconText>
                Seeing images within the eye itself (entoptic phenomena)
              </IconText>
            </IconWrap>
            <IconWrap>
              <Icon src="assets/palinopsia.png" alt="Palinopsia"></Icon>
              <IconText>
                Continuing to see an image after it is no longer in the field of
                vision (palinopsia)
              </IconText>
            </IconWrap>
            <IconWrap>
              <Icon src="assets/night.png" alt="Nyctalopia"></Icon>
              <IconText>Impaired night vision (nyctalopia)</IconText>
            </IconWrap>
            <IconWrap>
              <Icon src="assets/double.png" alt="Diplopia"></Icon>
              <IconText>
                Other visual effects such as starbursts, halos, and double
                vision (diplopia)
              </IconText>
            </IconWrap>
          </VisualSymptoms>
          <NonVisualSymptoms>
            <SymptomType>Non-Visual Symptoms</SymptomType>
            <IconWrap>
              <Icon src="assets/tinnitus.png" alt="Tinnitus"></Icon>
              <IconText>
                Ringing, humming, or buzzing sounds (tinnitus)
              </IconText>
            </IconWrap>
            <IconWrap>
              <Icon
                src="assets/depersonalization.png"
                alt="Depersonalization"
              ></Icon>
              <IconText>
                Feeling detached from yourself (depersonalization)
              </IconText>
            </IconWrap>
            <IconWrap>
              <Icon src="assets/depression.png" alt="Depression"></Icon>
              <IconText>Symptoms of anxiety and/or depression</IconText>
            </IconWrap>
            <IconWrap>
              <Icon src="assets/migraines.png" alt="Migraines"></Icon>
              <IconText>Frequent migraines, brain fog, and confusion</IconText>
            </IconWrap>
            <IconWrap>
              <Icon src="assets/dizzy.png" alt="Dizziness"></Icon>
              <IconText>Dizziness and nausea</IconText>
            </IconWrap>
            <IconWrap>
              <Icon src="assets/insomnia.png" alt="Insomnia"></Icon>
              <IconText>Insomnia and other sleep-related issues</IconText>
            </IconWrap>
            <IconWrap>
              <Icon src="assets/tingling.png" alt="Body pain"></Icon>
              <IconText>
                Tingling sensations in legs and arms, accompanied by general
                pain throughout the body
              </IconText>
            </IconWrap>
          </NonVisualSymptoms>
        </SymptomsWrap>
        <ResourcesLink>
          To learn more about VSS or keep up with the latest VSS news, visit the
          <NavLinks
            to="/resources"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            {" "}
            {` Resources`}
          </NavLinks>{" "}
          page.
        </ResourcesLink>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1250px;
  margin-right: auto;
  margin-left: auto;
`;

const Wrap = styled.div`
  max-width: 66%;
  padding-bottom: 75px;
  margin-right: auto;
  margin-left: auto;
`;

// Title
const AboutTitle = styled.h1``;

// About
const AboutCopy = styled.p`
  line-height: 24px;
  font-size: 18px;
  text-align: justify;
`;

const SpecialCopy = styled.p`
  text-align: justify;
  line-height: 24px;
  font-size: 18px;
  margin-top: 20px;
  font-weight: 600;
`;

// List of symptoms
const SymptomsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 85px;
`;

const VisualSymptoms = styled.div`
  width: 46%;
`;

const NonVisualSymptoms = styled.div`
  width: 46%;
`;

const SymptomType = styled.ul`
  font-size: 18px;
  font-weight: 900;
  margin: 30px 0px 15px 0px;
  text-align: center;
`;

// Icons
const IconWrap = styled.div`
  display: flex;
  margin-top: 10px;
`;

const IconText = styled.p`
  padding-top: 7%;
  padding-left: 10px;
  line-height: 20px;
`;

const Icon = styled.img`
  width: 85px;
  height: 85px;
  border: 2px var(--blue) solid;
  border-radius: 50%;
  object-fit: cover;
  padding: 10px;
  margin: 10px;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;

// Resources link
const ResourcesLink = styled.div`
  font-size: 18px;
`;

const NavLinks = styled(NavLink)`
  font-weight: 900;
  font-size: 18px;

  &:hover {
    opacity: 75%;
  }
  &:visited {
    text-decoration: none;
    color: var(--blue);
  }
`;

// Font styles
const Bold = styled.span`
  font-weight: 600;
`;

export default About;
