import React from 'react'
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const CreateTribe = () => {
  return (
    <main className="absolute flex flex-col gap-8  w-[624px] h-[680px] flex-shrink-0 bg-white  rounded-[12px] py-4 px-6">
      {/* for the title  */}
      <div>
        <h1 className="text-[#28303F] font-readexpro text-2xl font-semibold leading-normal">
          Subscribe to Daily Quotes
        </h1>
        <p className="text-[#828282] font-readexpro text-base font-normal leading-normal">
          Receive inspirational quotes from Dr. Hak Ja Han Moon based on themes
          you select.
        </p>
      </div>

      {/* for the data   */}
      <div className='flex flex-col gap-9'>
        {/* tribe name  */}
        <div className='flex flex-col gap-3'>
          <h1 className='text-[#28303F] font-readexpro text-[16px] font-semibold leading-normal'>Tribe Name</h1>
          <Input placeholder='eg . builders ' className=' p-2 border-1 border-black' />
        </div>
       {/* description  */}
       <div className='flex flex-col gap-3'>
          <h1 className='text-[#28303F] font-readexpro text-[16px] font-semibold leading-normal'>Description</h1>
            <Textarea placeholder="About" rows={50} className= "resize-y w-full min-h-[200px] border-1 border-black" />
       </div>

       {/* privacy area  */}
       <div className='flex flex-col gap-3'>
          <h1 className='text-[#28303F] font-readexpro text-[16px] font-semibold leading-normal'>Privacy</h1>
          <Input  value="Public Anyone can join" className=' py-4 px-6 text-[#28303F] text-[15px] border-1 border-black' />
        </div>

        <div className='flex justify-end gap-3'>
            <Button className="text-black text-[16px] cursor-pointer bg-white      py-7 px-10">Cancel</Button>
            <Button className="text-white text-[16px] cursor-pointer bg-[#5E8DE5]  py-7 px-10">Create Tribe</Button>

        </div>


      </div>



    </main>
  );

  
}

export default CreateTribe