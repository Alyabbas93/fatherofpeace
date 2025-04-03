export default function DataPermissions() {
    return (
      <div className="bg-white p-6 rounded-xl  ">
        <h2 className="text-[28px] text-[#28303F] font-medium mb-4">Data & Permissions</h2>
        
        <div className="mb-4">
        <div className="flex items-center justify-between pb-3 mt-6">
        <div>
          <h3 className="text-[16px] text-[#28303F] pb-1.5 font-bold">Data Export</h3>
          <p className="text-[14px] text-[#828282]">Download a copy of your data from askTrueMother</p>
          </div>
          <button className="border border-[#28303F] px-3 py-2 text-sm rounded-[3px] hover:bg-gray-100 whitespace-nowrap">
  Request Data Export
</button>

        </div>
        </div>
        <div className="flex items-center justify-between mt-6 sm: gap-4">
          <div>
            <h3 className="text-[16px] pb-1.5 text-[#28303F] font-bold">Show Email Address</h3>
            <p className="text-[14px] text-[#828282]">Allow others to see your email address</p>
          </div>
          <button className="bg-[#DF4A36] flex items-center justify-center text-white px-4 py-2 text-sm rounded-[3px] hover:bg-red-600">
            Delete Account
          </button>
        </div>
      </div>
    );
  }