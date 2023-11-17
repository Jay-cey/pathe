
'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import reviews from '../reviews';

function Component() {

  return (
    <div className="h-64 xl:h-80 2xl:h-96 w-[100vw] md:w-[70vw] overflow-visible mt-5 md:mt-10 flex">
      <Carousel leftControl=" " rightControl=" ">
        {
          reviews.map((item) => (
            <div key={item.id} className='flex h-full w-[90%]'>
                <div className='w-full h-4/5 bg-[#F6F6F9] flex flex-col justify-center items-center text-center relative'>
                    <Image src={"quote.svg"} alt="" width={32} height={48} className="absolute top-5 left-7" />
                    <p className='italic w-4/5 mt-6 text-sm'>
                        {item.reviews}
                    </p>
                    <p className='mt-5 text-sm'>
                        <span className='font-medium'>{item.name} </span> | {item.job}
                    </p>
                </div>
            </div>
          ))
        }
        
      </Carousel>
    </div>
  );
}

export default Component;