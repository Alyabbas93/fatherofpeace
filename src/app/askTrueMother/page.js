import JourneyTabs from '@/components/tabscomponent'
import FamilyValues from '@/components/truemothermedia'
import React from 'react'

const Asktrumother = () => {
  return (
    <div className='flex-1 p-6 bg-[#f8f8f8]  h-full'>
      <h1 className="text-2xl font-semibold ">Ask True Mother</h1>
      <p className="text-lg mb-4">Ask questions about Dr. Hak Ja Han Moon's teachings</p>
      <div>
     <FamilyValues/>
     </div>
     <div>
      <JourneyTabs/>
     </div>
    </div>
  )
}

export default Asktrumother
