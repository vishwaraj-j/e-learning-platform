import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CourseCatalog } from './pages/CourseCatalog'
import Error from './components/common/Error'
import CourseDetails from "./pages/CourseDetails"
import ModuleDetails from "./pages/ModuleDetails"
import { QuizResults } from './pages/QuizResults'
function App() {
  const router = createBrowserRouter([
    {path:"/course-catalog", element:<CourseCatalog/>},
    {path:"/course-details", element:<CourseDetails/>},
    {path:"/module-details", element:<ModuleDetails/>},
    {path:"/quiz-results", element:<QuizResults/>},
    {path:"*", element:<Error/>}

  ])

  return (<>

  <RouterProvider router={router}/>

  </>
  )
}

export default App
