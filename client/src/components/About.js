import styled from "styled-components";

const About = () => {
  return (
    <AboutWrapper>
      <AboutTitle>About Visual Snow Syndrome</AboutTitle>
      <AboutCopy>
        <Bold>Visual Snow Syndrome (VSS)</Bold> is a neurological disorder
        characterized by a continuous visual disturbance that occupies a
        person's entire visual field. It is often described as tiny flickering
        dots that resemble the noise of a detuned analog television. In addition
        to the static, or “snow”, people with VSS typically experience many
        other visual and non-visual symptoms. These include tinnitus,
        sensitivity to light, seeing excessive floaters, seeing an image after
        it's gone, and many others.
      </AboutCopy>
      <SpecialCopy>
        For people living with VSS, these symptoms occur 24 hours a day, 7 days
        a week, even when their eyes are closed.
      </SpecialCopy>
      <SymptomsWrapper>
        <SymptomType>Visual Symptoms</SymptomType>
        <Symptom>Snow-like dots all over the field of vision</Symptom>
        <Symptom> Small floating objects or flashing lights</Symptom>
        <Symptom>Sensitivity to light (Photophobia)</Symptom>
        <Symptom>
          Continuing to see an image after it is no longer in the field of
          vision (Palinopsia)
        </Symptom>
        <Symptom>
          Seeing images within the eye itself (Entopic phenomena)
        </Symptom>
        <Symptom>
          Other visual effects such as starburst, halos, and double vision
          (Diplopia)
        </Symptom>
        <SymptomType>Non-Visual Symptoms</SymptomType>
        <Symptom>Ringing, humming, or buzzing sounds (Tinnitus)</Symptom>
        <Symptom>Feeling detached from yourself (Depersonalization)</Symptom>
        <Symptom>Symptoms of anxiety and/or depression</Symptom>
        <Symptom>Frequent migraines, brain fog, and confusion</Symptom>
        <Symptom>Dizziness and nausea</Symptom>
        <Symptom>Insomnia and other sleep-related issues</Symptom>
        <Symptom>
          Tingling sensations in legs and arms, accompanied by general pain
          throughout body
        </Symptom>
      </SymptomsWrapper>
      <IconWrapper>
        <Icon src="assets/snow.png"></Icon>
        <Icon src="assets/brightness.png"></Icon>
        <Icon src="assets/depression.png"></Icon>
        <Icon src="assets/migraines.png"></Icon>
        <Icon src="assets/dizzy.png"></Icon>
        <Icon src="assets/depersonalization.png"></Icon>
      </IconWrapper>
    </AboutWrapper>
  );
};

const IconWrapper = styled.div``;

const Icon = styled.img`
  max-width: 80px;
  max-height: 80px;
  border: 2px var(--blue) solid;
  border-radius: 50%;
  object-fit: cover;
  padding: 10px;
  margin: 10px;
`;

const AboutWrapper = styled.div`
  max-width: 66%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 80px;
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
`;

const Bold = styled.span`
  font-weight: 600;
`;

const SpecialCopy = styled.div`
  line-height: 24px;
  font-size: 18px;
  margin-top: 20px;
`;

const SymptomsWrapper = styled.div``;

const SymptomType = styled.ul`
  font-size: 18px;
  font-weight: 900;
  margin: 20px 0px 5px 0px;
`;

const Symptom = styled.li`
  line-height: 25px;
  font-size: 18px;
`;

export default About;
