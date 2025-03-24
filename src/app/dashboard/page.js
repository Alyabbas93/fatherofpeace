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
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      <div className="md:col-span-2 space-y-4">
  <QuoteCard />
  <VideoCard />
  <div className="w-full h-auto">
    <Meditationcard />
  </div>
</div>
        <div className="h-[100%] bg-[#ffffff] px-4 border rounded-lg">
<Profilecard/>
<Journeycard/>
<Contactcard/>

        </div>
      </div>
    </div>
  );
}
