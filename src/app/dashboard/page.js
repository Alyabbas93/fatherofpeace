"use client";
import Contactcard from "@/components/contactcard";
import Journeycard from "@/components/journeycard";
import Meditationcard from "@/components/meditationcard";
import Profilecard from "@/components/profilecard";
import QuoteCard from "@/components/quotecard";
import VideoCard from "@/components/videoCard";

export default function Dashboard() {
  return (
    <div className="flex-1 p-6 bg-[#f8f8f8]  ">
      <h1 className="text-[40px] text-[#28303F] font-semibold ">Dashboard</h1>
      <p className="text-[20px] text-[#28303F] font-normal mb-4">John Doe</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      <div className="md:col-span-2 space-y-4">
  <QuoteCard />
  <VideoCard />
  <div className="w-full h-auto">
    <Meditationcard />
  </div>
</div>
        <div className="h-[100%] bg-[#ffffff] px-4  rounded-lg">
<Profilecard/>
<Journeycard/>
<Contactcard/>

        </div>
      </div>
    </div>
  );
}
