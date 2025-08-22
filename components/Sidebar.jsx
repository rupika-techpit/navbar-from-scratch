import React from 'react'

const page = () => {
  return (
    <div>
        {/* Secondary Menu Bar (Modules Navigation) */}
      <div className="bg-gray-100 border-b p-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="flex space-x-6 h-2 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Modules
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Reports
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;