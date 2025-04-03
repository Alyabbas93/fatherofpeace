import InviteFriends from "../invitecard"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const CreateTribe = ({ mode = 'create' }) => {
  return (
    <div className="w-full">

      {mode === 'invite' ? (
        <InviteFriends/>
      ) : (
        <>
      
      <div className="mb-6">
        <h1 className="text-[#28303F] font-readexpro text-xl font-semibold leading-normal">
          Subscribe to Daily Quotes
        </h1>
        <p className="text-[#828282] font-readexpro text-sm font-normal leading-normal mt-1">
          Receive inspirational quotes from Dr. Hak Ja Han Moon based on themes you select.
        </p>
      </div>

      {/* for the data   */}
      <div className="flex flex-col gap-5">
        {/* tribe name  */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[#28303F] font-readexpro text-[14px] font-semibold leading-normal">Tribe Name</h1>
          <Input
            placeholder="e.g. builder"
            defaultValue="e.g. builder"
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        {/* description  */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[#28303F] font-readexpro text-[14px] font-semibold leading-normal">Description</h1>
          <Textarea
            placeholder="About"
            defaultValue="About"
            className="resize-none w-full h-[100px] border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* privacy area  */}
        <div className="flex flex-col gap-2">
          <h1 className="text-[#28303F] font-readexpro text-[14px] font-semibold leading-normal">Privacy</h1>
          <Input defaultValue="Public Anyone can join" className="p-2 border border-gray-300 rounded-md" readOnly />
        </div>
      </div>
      </>
    )}
    </div>
  )
}

export default CreateTribe