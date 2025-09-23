import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10 absolute left-0 top-1/2 -translate-y-1/2 h-48"
      >
        &gt;
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-75"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-75"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {/* Panel wrapper */}
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md bg-white shadow-xl h-full flex flex-col">
                  {/* Panel Header with Close */}
                  <div className="relative flex justify-end p-4">
                    <button
                      onClick={() => setOpen(false)}
                      className="rounded-md text-gray-400 hover:text-gray-700 focus:outline-none"
                    >
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Panel content */}
                  <div className="px-4 sm:px-6 flex-1 overflow-y-auto">
                    <Dialog.Title className="text-lg font-semibold text-gray-900">
                      Dashboard
                    </Dialog.Title>
                    <div className="mt-4">
                      {/* Your content */}
                      

      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 bg-gray-100 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
               <span className="ms-3">Courses</span>
            </a>
         </li>
          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 bg-gray-100 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
               <span className="ms-3">Quizes</span>
            </a>
         </li>

         
      </ul>

                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}



