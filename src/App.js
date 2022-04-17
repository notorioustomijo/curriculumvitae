import React from 'react';
import CvApp from './components/CvApp';
import IntroductorySection from './components/IntroductorySection';
import NameRoleComponent from './components/NameRoleComponent';
import SocialMediaComponent from './components/SocialMediaComponent';
import ProfileSkillsComponent from './components/ProfileSkillsComponent';
import ProfileComponent from './components/ProfileComponent';
import SkillsComponent from './components/SkillsComponent';
import ExperienceEducationComponent from './components/ExperienceEducationComponent';
import ExperienceComponent from './components/ExperienceComponent';
import EducationComponent from './components/EducationComponent';
import '../src/index.css';


function App() {
  return (
    <CvApp>
      <IntroductorySection>
        <NameRoleComponent />
        <SocialMediaComponent />
      </IntroductorySection>

      <ProfileSkillsComponent>
        <ProfileComponent />
        <SkillsComponent />
      </ProfileSkillsComponent>

      <ExperienceEducationComponent>
        <ExperienceComponent />
        <EducationComponent />
      </ExperienceEducationComponent>
    </CvApp>



  );
}

export default App;
