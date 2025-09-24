import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'
import { ModuleCard } from '../components/common/ModuleCard'


const modules = [
  {id:1, title:"Module Name", isComplete:true},
  {id:2, title:"Module Name", isComplete:false},
  {id:3, title:"Module Name", isComplete:true},
  {id:4, title:"Module Name", isComplete:false},
  {id:5, title:"Module Name", isComplete:true},
  {id:6, title:"Module Name", isComplete:false},
  {id:7, title:"Module Name", isComplete:true},
  {id:8, title:"Module Name", isComplete:false}
]

export default function CourseDetails() {

  return (
    <>
    <Navbar/>
    <Sidebar/>

        <header className="relative bg-white shadow-sm">
          <div className="flex justify-between mx-auto max-w-7xl px-4 pb-1 pt-2 mt-2  sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Course Title</h1>
            <button type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-1">
            Enroll
            </button>
          </div>
          <div className="pb-2 mx-auto max-w-7xl  lg:px-8">
            <h6 className=''>By - Instructor Name</h6>
          </div>
                      

        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" >



<div className="py-12 px-12 space-y-12 bg-gray-100 min-h-screen w-full">
	

	<div className="flex flex-col h-full w-full mx-auto  space-y-6">
		<section className="flex flex-col bg-white rounded-lg p-6 shadow-md  w-full">
		
				Detailed description of the course.
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque vitae accusantium, et modi similique atque quibusdam eius ipsam ad veniam magnam fugiat dolorum amet aspernatur consequatur illum voluptatibus inventore. Incidunt?Ab sapiente quisquam facere assumenda esse nisi fuga dolor error aspernatur accusamus libero deleniti, quae tenetur! Quas ducimus laborum et quo eos ipsam adipisci illum. Recusandae cumque necessitatibus eius maxime.Laboriosam asperiores quam reprehenderit, nam totam rem voluptatibus beatae iure fuga vel architecto, necessitatibus possimus similique ea, molestiae minima recusandae quia. Ratione ab, fugiat animi expedita aut nesciunt ducimus placeat.
        
		</section>
    
    <section className="flex flex-col bg-white rounded-lg p-6 shadow-md  w-full">
		<h3 className='text-xl font-semibold tracking-tight text-gray-900 mb-3'>Modules</h3>
    {modules.map((module)=>(
      <ModuleCard title={module.title} isComplete={module.isComplete}/>
    ))}
    </section>
	</div>
  
</div>








          </div>
        </main>
      
    </>
  )
}
