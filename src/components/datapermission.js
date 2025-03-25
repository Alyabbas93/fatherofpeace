export default function DataPermissions() {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Data & Permissions</h2>
        
        <div className="mb-4">
        <div className="flex items-center justify-between mt-6">
        <div>
          <h3 className="text-sm font-semibold">Data Export</h3>
          <p className="text-sm text-gray-600">Download a copy of your data from askTrueMother</p>
          </div>
          <button className="border border-gray-400 px-4 py-2 text-sm rounded-md hover:bg-gray-100 whitespace-nowrap">
  Request Data Export
</button>

        </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div>
            <h3 className="text-sm font-semibold">Show Email Address</h3>
            <p className="text-sm text-gray-600">Allow others to see your email address</p>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 text-sm rounded-md hover:bg-red-600">
            Delete Account
          </button>
        </div>
      </div>
    );
  }