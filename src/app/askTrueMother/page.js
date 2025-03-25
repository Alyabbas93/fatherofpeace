import CategoriesList from '@/components/categories'
import RecentSearches from '@/components/history'
import SavedCard from '@/components/saved'
import JourneyTabs from '@/components/tabscomponent'
import FamilyValues from '@/components/truemothermedia'
import React from 'react'

const Asktrumother = () => {
 const tabsData=[
    { label: "Categories", value: "Categories", content: <CategoriesList/> },
    { label: "History", value: "History", content: <RecentSearches/> },
    { label: "Saved", value: "Saved", content: <SavedCard/> }
  ]
  return (
<div className="flex-1 p-6 bg-[#f8f8f8]  ">
<h1 className="text-2xl font-semibold ">Ask True Mother</h1>
<p className="text-lg mb-4">Ask questions about Dr. Hak Ja Han Moon's teachings</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
<div className="md:col-span-2 space-y-4">
<FamilyValues/>

</div>
  <div className="h-[100%] bg-[#ffffff] px-4 py-5 border rounded-lg">
  <JourneyTabs tabs={tabsData} />
  </div>
</div>
</div>
  )
}

export default Asktrumother
