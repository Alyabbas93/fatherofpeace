
const tribes = [
    {
      id: 1,
      name: "Global Peace Initiative",
      members: 124,
      description:
        "A community dedicated to global peace efforts inspired by True Mother’s vision.",
    },
    {
      id: 2,
      name: "Interfaith Dialogue",
      members: 87,
      description:
        "Exploring True Mother’s teachings on interfaith harmony and cooperation.",
    },
  ];
  
  export default function SuggTribes() {
    return (
      <div className="bg-white px-4 py-6  rounded-xl w-full">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-[22px] sm:text-[28px] text-[#28303F] font-[500]">
            Suggested Tribes
          </h2>
          <p className="text-sm sm:text-[16px] text-[#828282] font-[400]">
            Groups you might be interested in
          </p>
        </div>
  
        {/* Tribe List */}
        <div className="space-y-4">
          {tribes.map((tribe) => (
            <div key={tribe.id} className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <p className="text-[20px] sm:text-[24px] font-[500]">
                  {tribe.name}
                </p>
                <p className=" text-sm sm:text-normal font-[400] text-[#828282]">
                  {tribe.members} members
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {tribe.description}
                </p>
                <button className="mt-2 border border-[#28303F] px-1 sm:px-3 py-0.5 sm:py-1 rounded-[3px] text-sm text-black hover:bg-gray-100">
                  + Join
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* Discover More Button */}
        <button className="mt-4 w-full border border-[#28303F] text-sm sm:text-normal py-1 sm:py-2 rounded-[7px] text-black font-[400] hover:bg-gray-100">
          Discover More Tribes
        </button>
      </div>
    );
  }