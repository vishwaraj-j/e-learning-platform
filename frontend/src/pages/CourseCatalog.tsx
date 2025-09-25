import Cards from '../components/common/Cards'
import Navbar from '../components/common/Navbar'
import Sidebar from '../components/common/Sidebar'
export const CourseCatalog = () => {
    const courses = [
      { id: 1, name: 'Course A', instructorName:'Sunakshi Singh' },
      { id: 2, name: 'Course B', instructorName:'Sarvagya Agrawal' },
      { id: 3, name: 'Course C', instructorName:'Priyanka Sahoo', isEnrolled:true},
      { id: 4, name: 'Course D', instructorName:'Anushka Tyagi', isEnrolled:true },
      { id: 5, name: 'Course E', instructorName:'Shruti Singh', isEnrolled:true},
      { id: 6, name: 'Course F', instructorName:'Samridhi Narayan' },
      { id: 7, name: 'Course G', instructorName:'Utkarsh Shukla' },
      { id: 8, name: 'Course H', instructorName:'Sarvagya Agrawal' },
      { id: 9, name: 'Course I', instructorName:'Shreyansh Mittal' },
      { id: 10, name: 'Course J', instructorName:'Sunakshi Singh' },
      { id: 11, name: 'Course K', instructorName:'Vishwaraj Jadega' },
      { id: 12, name: 'Course L', instructorName:'Anushka Tyagi' },
      

    ];
  return(
<>
<Navbar/>
<Sidebar/>
    <div className='mt-5 max-w-screen-xl mx-auto p-5'><h3 className=' text-4xl font-semibold text-left'>Course Catalog</h3></div>
    <div className="max-w-screen-xl mx-auto p-5">
            

        <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-9">
    
          {courses.map((course) => (

            
                <Cards key={course.id} title={course.name} instructorName={course.instructorName} isEnrolled={course.isEnrolled}/>
           
          ))}
        

        </div>

    </div>


</>
)
}
