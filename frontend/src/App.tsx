import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CourseCatalog } from './pages/CourseCatalog'
import Error from './components/common/Error'
import CourseDetails from "./pages/CourseDetails"
import ModuleDetails from "./pages/ModuleDetails"
function App() {
  const router = createBrowserRouter([
    {path:"/course-catalog", element:<CourseCatalog/>},
    {path:"/course-details", element:<CourseDetails/>},
    {path:"/module-details", element:<ModuleDetails/>},
    {path:"*", element:<Error/>}

  ])

  return (<>
  {/* <CourseCatalog/>
  <Error/>
  <CourseDetails/>
  <ModuleDetails/> */}
  <RouterProvider router={router}/>

  </>
  )
}

export default App
