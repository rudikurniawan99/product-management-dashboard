import React from 'react';
import { AnnotationIcon, ArchiveIcon, CalendarIcon, ChatAlt2Icon, CogIcon, CreditCardIcon, LogoutIcon, PresentationChartBarIcon, QuestionMarkCircleIcon, UserIcon, ViewBoardsIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return <div className="p-8 pr-20 border-r-2 border-gray-900 border-opacity-10">
    <div className="mb-8">
      <h1 className="text-2xl font-semibold">Ware<span className="italic">House</span></h1>
    </div>
    <div className="space-y-6">
      {sidebarMainMenu.map(menu => (
        <div className="group">
          <Link to={menu.link ? menu.link : '/'}>
            <div className="text-gray-600 flex items-center">
              <span className="absolute left-0 scale-y-0 w-1.5 h-5 bg-gray-800 rounded-r group-hover:scale-y-100"/>
              <div className="mr-3 w-5 text-gray-500 group-hover:text-gray-800">{menu.icon}</div>
              <p className="group-hover:text-gray-800">{menu.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
    <hr className="my-6" />
    <div className="space-y-6">
      {sidebarMenu.map(menu => (
        <div className="group">
          <Link to="">
            <div className="text-gray-600 flex items-center">
              <span className="absolute left-0 scale-y-0 w-1.5 h-5 bg-gray-800 rounded-r group-hover:scale-y-100"/>
              <div className="mr-3 w-5 text-gray-500 group-hover:text-gray-800">{menu.icon}</div> 
              <p className="group-hover:text-gray-800">{menu.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>;
};

const sidebarMainMenu = [
  {
    title: 'Overview',
    icon: <ViewBoardsIcon/>,
    link: '/'
  },
  {
    title: 'Produk',
    icon: <ArchiveIcon/>,
    link: '/products'
  },
  {
    title: 'Statistik',
    icon: <PresentationChartBarIcon/>
  },
  {
    title: 'Admin',
    icon: <UserIcon/>
  }
]

const sidebarMenu = [
  {
    title: 'Help',
    icon: <QuestionMarkCircleIcon/>
  },
  {
    title: 'Setting',
    icon: <CogIcon/>
  },
  {
    title: 'Log Out',
    icon: <LogoutIcon/>
  }
]

export default Sidebar;
