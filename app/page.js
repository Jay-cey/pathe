import Image from 'next/image';
import pricingData from './pricingData';
import PricingBox from './components/PricingBox';
import Component from './components/Carousel';
import Accordion from './components/Accordion';

export default function Home() {
  function createPricingBox(pricingData) {
    return(
      <PricingBox
        key={pricingData.id}
        title={pricingData.title}
        desc={pricingData.desc}
        userNo={pricingData.userNo}
        discount={pricingData.discount}
        price={pricingData.price}
        period={pricingData.period}
        button={pricingData.button}
        heading={pricingData.heading}
        sub={pricingData.sub}
        img={pricingData.img}
        btnRecommended={pricingData.btnRecommended}
      />
    )
  }
  return (
    <>
    <main className="md:w-[95vw] flex flex-col items-center md:justify-between md:mx-auto">
      <section className='w-full md:py-16 min-h-[23vh] md:min-h-fit flex flex-col items-center justify-center text-center'>
        <h2 className='text-3xl md:text-4xl font-semibold w-5/6'>Choose a plan that works for your team</h2>
        <p className='font-medium w-4/5'>Explore what option works best for you. Automate team’s project with Pathe</p>
      </section>

      <section className=''>
        <div className='flex justify-center relative'>
          <div className='md:flex space-x-3 items-center font-normal'>
            <span className='text-xs'>Pay Monthly</span>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            <span className='text-xs'>Pay Yearly</span>

            <span className='text-[#3944C4] text-xs'>
              Save up to 23%
            </span>

            <div className='md:absolute md:right-0 flex justify-center my-3'>
            <label for="currency"></label>
            <select name="currency" id="currency" className='rounded py-1 md:py-1'>
              <option value="usd">$USD</option>
              <option value="gbp">£GBP</option>
            </select>
            </div>
          </div>
        </div>

        <div className='hidden md:grid grid-cols-4 items-center w-full mt-6 gap-7'>
          <div className='col-span-3 relative h-5 flex items-center justify-center'>
            <span className='text-xs absolute left-[40%] top-[-10] z-10 bg-white px-4'>For Teams and Individuals</span>
            <hr className='w-full border border-slate-200' />
          </div>
          <div className='relative h-3 flex items-center justify-center'>
            <span className='text-xs absolute left-[23%] top-[-10] z-10 bg-white px-4'>Managing at scale</span>
            <hr className='w-full border border-slate-200' />
          </div>
        </div>

        <div className='mt-6 flex flex-col md:flex-row items-center md:items-stretch md:justify-evenly space-y-6 md:space-y-0 md:space-x-6'>
          {pricingData.map(createPricingBox)}
        </div>

        <div className='w-full flex items-center my-14'>
          <button className='uppercase mx-auto border border-[#3944C4] py-3 px-5 rounded-3xl text-[#3944C4]'>
            Compare Our Plans &nbsp;
            <Image src={"arrow-down.svg"} alt='' width={16} height={16} className='inline' />  
          </button>
        </div>
      </section>

      <section className='text-center w-full flex flex-col items-center'>
        <h5 className='font-semibold text-xl md:text-3xl w-4/5'>
          Trusted by over 5,000 customers worldwide
        </h5>

        <div>
          <Component/>
        </div>
      </section>

    </main>
      <section className='bg-[#F6F6F9] w-full py-10 md:p-10 text-center space-y-4 md:space-y-10'>
        <h5 className='text-xl md:text-3xl font-semibold'>Frequently Asked Questions</h5>

        <div className='flex flex-col space-y-4 items-center'>
          <Accordion />
        </div>
      </section>
    </>
  )
}
