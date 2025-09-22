import Cards from './components/common/Cards'
import Navbar from './components/common/Navbar'
import Sidebar from './components/common/Sidebar'
function App() {

  return (<>
  <Navbar/>
  <Sidebar/>
  <Cards title={'course1'} isEnrolled={true}/>
  <Cards title={'course2'} isEnrolled={false}/>
  </>
  )
}

export default App
