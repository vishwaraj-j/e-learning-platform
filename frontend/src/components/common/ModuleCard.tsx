import React from "react"
import { NavLink } from "react-router-dom";
interface ModuleCardProps{
  title?: string;
  isModule?: boolean
  isComplete?: boolean
}
export const ModuleCard: React.FC<ModuleCardProps> = ({
    title= "Module Name",
    isComplete = false,
    isModule = true
}) => {
  return (
<>
    <ul className="space-y-2 font-medium">
        <li>
            <NavLink to="/module-details" className="flex justify-between p-2 text-gray-900 bg-gray-50 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 ">
                <span className="ms-3">{title}</span>
                {isModule?
                    <input type="checkbox" className=" w-4 h-4 border border-gray-400 rounded-sm bg-white" checked={isComplete}/>
                :
                    <button type="button" className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                }
            </NavLink>
        </li>
    </ul>
</>
  )
}
