import React from "react"
interface ModuleCardProps{
  title?: string;
  isComplete?: boolean
}
export const ModuleCard: React.FC<ModuleCardProps> = ({
    title= "Module Name",
    isComplete = true
}) => {
  return (
    <>
        {/* <div className="w-300 bg-gray-100 p-3 rounded-lg ">
            <ul className="space-y-2 font-medium">
                <li>
                    <a href="#" className="flex items-center justify-between mb-2 p-2 text-gray-900 bg-white rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                        <span className="ms-3">Courses</span>
                        <input type="checkbox" className=" w-4 h-4 border border-gray-400 rounded-sm bg-white" />
                    </a>
                </li>
            </ul>
        </div> */}
         <ul className="space-y-2 font-medium">
                <li>
                    <a href="#" className="flex justify-between p-2 text-gray-900 bg-gray-50 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 ">
                        <span className="ms-3">{title}</span>
                        <input type="checkbox" className=" w-4 h-4 border border-gray-400 rounded-sm bg-white" checked={isComplete}/>
                    </a>
                </li>
            </ul>
        
    </>
  )
}
