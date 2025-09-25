import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'
import { ModuleCard } from '../components/common/ModuleCard'
import { NavLink } from 'react-router-dom'


const contents = [
  {id:1, title:"Content Name", isComplete:true},
  {id:2, title:"Content Name", isComplete:false},
  {id:3, title:"Content Name", isComplete:true},
  {id:4, title:"Content Name", isComplete:false},
  {id:5, title:"Content Name", isComplete:true},
  {id:6, title:"Content Name", isComplete:false},
  {id:7, title:"Content Name", isComplete:true},
  {id:8, title:"Content Name", isComplete:false}
]
const quizes = [
  {id:1, title:"Quiz Name", isComplete:true},
  {id:3, title:"Quiz Name", isComplete:true},
  {id:4, title:"Quiz Name", isComplete:false},
  {id:5, title:"Quiz Name", isComplete:true},
  {id:6, title:"Quiz Name", isComplete:false},
  {id:7, title:"Quiz Name", isComplete:true},
  {id:8, title:"Quiz Name", isComplete:false}
]

export default function ModuleDetails() {

  return (
    <>
    <Navbar/>
    <Sidebar/>
    <header className="relative bg-white shadow-sm">
      <div className="flex justify-between mx-auto max-w-7xl px-4 pb-1 pt-2 mt-2  sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Module Title</h1>
        <button type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-1">
            Mark as Complete
        </button>
      </div>
      <div className="pb-2 mx-auto max-w-7xl  lg:px-8">
        <h6 className=''>Course - Course Title</h6>
      </div>
    </header>
    <main>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" >
        <div className="py-12 px-12 space-y-12 bg-gray-100 min-h-screen w-full">
          <div className="flex flex-col h-full w-full mx-auto  space-y-6">
            <section className="flex flex-col bg-white rounded-lg p-6 shadow-md  w-full">
                Detailed description of the module.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque vitae accusantium, et modi similique atque quibusdam eius ipsam ad veniam magnam fugiat dolorum amet aspernatur consequatur illum voluptatibus inventore. Incidunt?Ab sapiente quisquam facere assumenda esse nisi fuga dolor error aspernatur accusamus libero deleniti, quae tenetur! Quas ducimus laborum et quo eos ipsam adipisci illum. Recusandae cumque necessitatibus eius maxime.Laboriosam asperiores quam reprehenderit, nam totam rem voluptatibus beatae iure fuga vel architecto, necessitatibus possimus similique ea, molestiae minima recusandae quia. Ratione ab, fugiat animi expedita aut nesciunt ducimus placeat.
            </section>
            <section className="flex flex-col bg-white rounded-lg p-6 shadow-md  w-full">
              <h3 className='text-xl font-semibold tracking-tight text-gray-900 mb-3'>Content</h3>
              {contents.map((content)=>(
                  <ModuleCard key={content.id} isModule={false} title={content.title} isComplete={content.isComplete}/>
              ))}
            </section>
            <section className="flex flex-col bg-white rounded-lg p-6 shadow-md  w-full">
              <h3 className='text-xl font-semibold tracking-tight text-gray-900 mb-3'>Quizes</h3>
              {quizes.map((quiz)=>(
                 <ul className="space-y-2 font-medium">
        <li>
            <NavLink to="/module-details" className="flex justify-between p-1 text-gray-900 bg-gray-50 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 ">
                <span className="ms-3">{quiz.title}</span>
                {quiz.isComplete?
                  <NavLink to="/quiz-results" type="button" className="text-green-600 hover:text-white border border-blue6700 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-1">View Results
                  </NavLink>
                  :
                  <button type="button" className="text-blue-600 hover:text-white border border-blue6700 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-1">Attempt Quiz</button>
                }
                  
            </NavLink>
        </li>
    </ul>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
      
    </>
  )
}
