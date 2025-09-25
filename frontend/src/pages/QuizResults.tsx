import Navbar from "../components/common/Navbar"
import Sidebar from "../components/common/Sidebar"

export const QuizResults = () => {
    const progress = 80
    const questions = [
  {id:1, title:"Module Name", isCorrect:true},
  {id:2, title:"Module Name", isCorrect:false},
  {id:3, title:"Module Name", isCorrect:true},
  {id:4, title:"Module Name", isCorrect:false},
  {id:5, title:"Module Name", isCorrect:true},
  {id:6, title:"Module Name", isCorrect:false},
  {id:7, title:"Module Name", isCorrect:true},
  {id:8, title:"Module Name", isCorrect:false},
  
]
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div className="px-6 pt-6 2xl:container ">
        <div className=" grid place-items-center h-50 ">
                <div className="max-w-lg w-full shadow-xl shadow-blue-200 lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 ">
                    <h5 className="text-2xl text-gray-700 text-center">Quiz Results</h5>
                    <div className="mt-2 flex justify-center gap-4">
                        <h3 className="text-3xl font-bold text-gray-700">8/10</h3>
                    </div>
                    <div className="px-6 pt-7 pb-6">
                        <div className="w-full bg-gray-200 rounded-full ">
                            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${progress}%` }}> {progress} %</div>
                        </div>
                    </div>
                    <table className="mt-6 mb-2 w-full text-gray-600">
                        <tbody>
                            <tr>
                                <td className="py-2 text-gray-700 font-semibold">Q. id</td>
                                <td className="text-gray-700 font-semibold">Answer</td>
                                <td className="font-semibold text-gray-700">Score</td>   
                            </tr>
                            {
                                questions.map((question)=>(
                                     <tr key={question.id}>
                                <td className="py-2">{question.id}</td>
                                
                                <td className="">                        
                                    {question.isCorrect ? (
                                        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
     
                                </td> 
                                <td className="text-gray-500">{question.isCorrect? '1': '0'}</td>
                            </tr>
                                ))
                            }

                           
        
                        </tbody>
                    </table>   
                </div>
        </div>
    </div>



</>
  )
}
