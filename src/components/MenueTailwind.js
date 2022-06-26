/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Menuetailwind({data}) {
  return (
    <div className='flex-col items-center mt-4 mr-6'>
    <Menu as="div" className="flex text-left">
      <div>
        <Menu.Button className="flex w-full rounded-md border shadow-sm px-4 text-sm font-medium text-white-700 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2  ">
          {data.name}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-bottom top-16 absolute  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          
        {data.sublink.map(sub => (
             <Menu.Item>
             {({ active }) => (
                <Link
               to={sub.link}
                 className={classNames(
                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                   'block px-4 py-2 text-sm'
                 )}
               >
                 {sub.name}
               </Link>
             )}
           </Menu.Item>
        ))}
       

          {/* section 1 */}
          {/* <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Internet
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Network
                </a>
              )}
            </Menu.Item>
          </div> */}

          {/* section 2 */}
          {/* <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Software
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  IoT
                </a>
              )}
            </Menu.Item>
          </div> */}

          {/* section 3 */}
          {/* <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  OWL
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  OrgaSoul
                </a>
              )}
            </Menu.Item>
          </div> */}

          {/* section 4 */}
          {/* <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  E-Commerce
                </a>
              )}
            </Menu.Item>
          </div> */}

          {/* end */}
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  )
}
