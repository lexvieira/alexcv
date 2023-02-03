import React from 'react'
import { Routes, Route} from 'react-router-dom'
// 
import './App.css'
import './styledoc.css'
import '@fontsource/raleway'
import PersonalData from './components/resume/PersonalData'
import Summary from './components/resume/Summary'
import Home from './pages/Home'
import Error404 from './components/resume/Error404'
import Education from './components/resume/Education'
import Github from './components/resume/Github'
import Languages from './components/resume/Languages'
import SoftSkills from './components/resume/SoftSkills'
import TechnicalSkills from './components/resume/TechnicalSkills'
import CoursesMoocs from './components/resume/CoursesMoocs'
import Interests from './components/resume/Interests'
import WorkExperience from './components/resume/WorkExperience'
import Volunteering from './components/resume/Volunteering'
// import Home from './pages/Home'
// import Summary from './components/resume/Summary'
// import PersonalData from './components/resume/PersonalData'

function App() {
  // const [dataUser, setDataUser] = useState<any>({})
  // const [objective, setObjectives] = useState<any>([])
  // // const [topic, setTopics] = useState<any>([])

  // useEffect(() => {
  //   setDataUser(resume.personaldata)
  //   setObjectives(resume.personaldata.objective)
  //   // setTopics(resume.topics)
  // }, [])

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="summary" element={<Summary />} />
          <Route path="education" element={<PersonalData />} />
          <Route path="github" element={<Summary />} />
          <Route path="languages" element={<Summary />} />
          <Route path="softskills" element={<Summary />} />
          <Route path="technicalskills" element={<Summary />} />
          <Route path="coursesmoocs" element={<Summary />} />
          <Route path="interests" element={<Summary />} />
          <Route path="workexperience" element={<Summary />} />
          <Route path="volunteering" element={<Summary />} /> */}

          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          {/* Check this https://github.com/remix-run/react-router/blob/dev/examples/basic/src/App.tsx */}
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        {/* </Route>
      </Routes> */}
      {/* Routes version 6: */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Summary />} />
          <Route path="personal" element={<PersonalData />} />
          <Route path="summary" element={<Summary />} />
          <Route path="education" element={<Education />} />
          <Route path="github" element={<Github />} />
          <Route path="languages" element={<Languages />} />
          <Route path="softskills" element={<SoftSkills />} />
          <Route path="technicalskills" element={<TechnicalSkills />} />
          <Route path="coursesmoocs" element={<CoursesMoocs />} />
          <Route path="interests" element={<Interests />} />
          <Route path="workexperience" element={<WorkExperience />} />
          <Route path="volunteering" element={<Volunteering />} /> 
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>


    </>
  )
}


export default App
