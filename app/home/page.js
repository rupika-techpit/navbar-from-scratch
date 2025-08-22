import React from 'react'

const page = () => {
  return (
    <div className="flex-grow w-full overflow-y-auto p-2">
      {/* Content Area */}
        <main className="flex-grow w-full mx-auto px-0 py-2">
            <div className="bg-white shadow-sm">
                <p>
                    this is home page
                </p>
                {Array.from({ length: 50 }).map((_, i) => (
                <p key={i}>Line {i + 1}</p>
                ))}
            </div>
        </main>

    </div>
  )
}

export default page