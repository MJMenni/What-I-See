import styled from "styled-components";

const About = () => {
  return (
    <Wrap>
      <AboutWrap>
        <AboutTitle>About Visual Snow Syndrome</AboutTitle>
        <AboutCopy>
          <Bold>Visual Snow Syndrome (VSS)</Bold> is a neurological disorder
          that impacts how a person processes visual and auditory information.
          The condition causes individuals to see a continuous layer of tiny
          flickering dots over their entire visual field. This is often
          described as seeing through a transparent layer of television static.
          In addition to the static, people with VSS typically experience many
          other visual and non-visual symptoms. While some may experience
          moderate symptoms that have little impact on their daily lives, others
          are completely debilitated by the condition.
        </AboutCopy>
        <SpecialCopy>
          For people living with VSS, these symptoms occur 24 hours a day, 7
          days a week, even when their eyes are closed.
        </SpecialCopy>

        <IconWrapper>
          <VisualSymptoms>
            <SymptomType>Visual Symptoms</SymptomType>
            <IconTextWrapper>
              <Icon src="assets/snow.png"></Icon>
              <IconText>
                Snow-like dots all over the field of vision (visual snow)
              </IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon src="assets/starbursts.png"></Icon>
              <IconText>Small floating objects or flashing lights</IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon src="assets/brightness.png"></Icon>
              <IconText>Sensitivity to light (photophobia)</IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon src="assets/entopic.png"></Icon>
              <IconText>
                Seeing images within the eye itself (entopic phenomena)
              </IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon src="assets/palinopsia.png"></Icon>
              <IconText>
                Continuing to see an image after it is no longer in the field of
                vision (palinopsia)
              </IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon src="assets/night.png"></Icon>
              <IconText>Impaired night vision (nyctalopia)</IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon src="assets/double.png"></Icon>
              <IconText>
                Other visual effects such as starburst, halos, and double vision
                (diplopia)
              </IconText>
            </IconTextWrapper>
          </VisualSymptoms>
          <NonVisualSymptoms>
            <SymptomType>Non-Visual Symptoms</SymptomType>
            <IconTextWrapper>
              <Icon src="assets/tinnitus.png"></Icon>
              <IconText>
                Ringing, humming, or buzzing sounds (tinnitus)
              </IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon src="assets/depersonalization.png"></Icon>
              <IconText>
                Feeling detached from yourself (depersonalization)
              </IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon src="assets/depression.png"></Icon>
              <IconText>Symptoms of anxiety and/or depression</IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon src="assets/migraines.png"></Icon>
              <IconText>Frequent migraines, brain fog, and confusion</IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon src="assets/dizzy.png"></Icon>
              <IconText>Dizziness and nausea</IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon src="assets/insomnia.png"></Icon>
              <IconText>Insomnia and other sleep-related issues</IconText>
            </IconTextWrapper>
            <IconTextWrapper>
              <Icon src="assets/tingling.png"></Icon>
              <IconText>
                {" "}
                Tingling sensations in legs and arms, accompanied by general
                pain throughout body
              </IconText>
            </IconTextWrapper>
          </NonVisualSymptoms>
        </IconWrapper>
      </AboutWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 1250px;
  margin-right: auto;
  margin-left: auto;
`;

const IconWrapper = styled.div`
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

const IconTextWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const IconText = styled.div`
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

const AboutWrap = styled.div`
  max-width: 66%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 200px;
`;

const AboutTitle = styled.div`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 50px;
  text-align: center;
`;

const AboutCopy = styled.div`
  line-height: 24px;
  font-size: 18px;
  text-align: justify;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const SpecialCopy = styled.div`
  text-align: justify;
  line-height: 24px;
  font-size: 18px;
  margin-top: 20px;
  font-weight: 600;
`;

const SymptomType = styled.ul`
  font-size: 18px;
  font-weight: 900;
  margin: 30px 0px 15px 0px;
  text-align: center;
`;

export default About;
