import { CourseCatalog } from './pages/CourseCatalog'
import Error from './components/common/Error'
import { ModuleCard } from "./components/common/ModuleCard"
import CourseDetails from "./pages/CourseDetails"
import ModuleDetails from "./pages/ModuleDetails"
function App() {

  return (<>
  <CourseCatalog/>
  <Error/>
  <ModuleCard/>
  <CourseDetails/>
  <ModuleDetails/>

  </>
  )
}

export default App
