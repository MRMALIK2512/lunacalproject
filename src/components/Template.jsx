import React from 'react';
import { BiGridVertical } from "react-icons/bi";
import { RxQuestionMarkCircled } from "react-icons/rx";

function Template({children}) {
  return(
        <div className='w-full bg-[#363C43] h-[316px] rounded-[18.89px] px-2 py-4 flex flex-row gap-x-4'>
          <div className="w-[24px] h-[159.69px] flex flex-col justify-between items-center">
          <RxQuestionMarkCircled  className="w-[24px] h-[24px] text-[#A3ADBA] "/>
           <BiGridVertical className="w-fit h-[40px] text-[#4A4E54] " />
          </div>
          <div className='w-full h-full flex flex-col gap-6 overflow-x-hidden'>
            {children}
          </div>
        </div>
  );
}

export default Template