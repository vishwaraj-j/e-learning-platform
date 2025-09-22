// import { useState } from 'react'
// import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'

// export default function Sidebar() {
//   const [open, setOpen] = useState(false)

//   return (
    
//     <div>
//       <div>
//       <button
//         onClick={() => setOpen(true)}
//         className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10 absolute left-0 top-1/2 -translate-y-1/2 p-4 h-48"
//       >&gt;
//       </button>
//       </div>
//       <Dialog open={open} onClose={setOpen} className="relative z-10">
//         <DialogBackdrop
//           transition
//           className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0 translate-y-0"
//         />

//         <div className="fixed inset-0 overflow-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
//               <DialogPanel
//                 transition
//                 className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
//               >
//                 <TransitionChild>
//                   <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
//                     <button
//                       type="button"
//                       onClick={() => setOpen(false)}
//                       className="relative rounded-md text-gray-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                     >
//                       <span className="absolute -inset-2.5" />
//                       <span className="sr-only">Close panel</span>
//                       <XMarkIcon aria-hidden="true" className="size-6" />
//                     </button>
//                   </div>
//                 </TransitionChild>
//                 <div className="relative flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
//                   <div className="px-4 sm:px-6">
//                     <DialogTitle className="text-base font-semibold text-gray-900">Panel title</DialogTitle>
//                   </div>
//                   <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
//                 </div>
//               </DialogPanel>
//             </div>
//           </div>
//         </div>
//       </Dialog>
//     </div>
//   )
// }

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
                      Panel Title
                    </Dialog.Title>
                    <div className="mt-4">
                      {/* Your content */}
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



