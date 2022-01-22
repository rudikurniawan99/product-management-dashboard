import React from 'react';
import { AnnotationIcon, ArchiveIcon, CalendarIcon, ChatAlt2Icon, CogIcon, CreditCardIcon, LogoutIcon, PresentationChartBarIcon, QuestionMarkCircleIcon, ViewBoardsIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return <div className="p-8 pr-20 border-r-2 border-gray-900 border-opacity-10">
    <div className="mb-8">
      logo
    </div>
    <div className="space-y-6">
      {sidebarMainMenu.map(menu => (
        <div className="group">
          <Link to="">
            <div className="text-gray-600 flex items-center">
              <span className="absolute left-0 scale-y-0 w-1.5 h-5 bg-blue-500 rounded-r group-hover:scale-y-100"/>
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
              <span className="absolute left-0 scale-y-0 w-1.5 h-5 bg-blue-500 rounded-r group-hover:scale-y-100"/>
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
    icon: <ViewBoardsIcon/>
  },
  {
    title: 'Products',
    icon: <ArchiveIcon/>
  },
  {
    title: 'Statictic',
    icon: <PresentationChartBarIcon/>
  },
  {
    title: 'Schedule',
    icon: <CalendarIcon/>
  },
  {
    title: 'Payout',
    icon: <CreditCardIcon/>
  },
  {
    title: 'Statement',
    icon: <AnnotationIcon/>
  }
]

const sidebarMenu = [
  {
    title: 'Help',
    icon: <QuestionMarkCircleIcon/>
  },
  {
    title: 'Community',
    icon: <ChatAlt2Icon/>
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
