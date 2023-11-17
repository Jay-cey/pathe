import Image from "next/image";

function PricingBox(props) {
  return (
    <div className="bg-[#F0F0F4] px-6 pt-10 pb-20 rounded-lg w-[70vw] md:w-[48%] lg:w-[23%] items-center relative">
        {
            props.btnRecommended ? (
                <div className="text-white bg-[#8F250C] w-[60%] absolute top-0 rounded mx-auto text-xs text-center  py-2 px-2 left-[20%]">
                    Pathe Recommends
                </div>
            ) : null
        }
        <div className="h-1/2 flex flex-col space-y-4 mt-5">
            <h5 className="font-semibold text-2xl">{props.title}</h5>
            <div>
                <p className="text-xs font-medium">{props.desc}</p>
                <p className="text-xs font-medium">{props.userNo}</p>
            </div>

            <div className="space-y-2">
                {props.price ? (
                    <>
                        <p className="text-xs text-[#3944C4] font-medium">{props.discount}</p>

                        <div className="flex items-start">
                            <Image src={"/dollar.svg"} width={20} height={20} alt="dollar logo" className="" />
                            <div className="flex items-baseline">
                                <span className="text-4xl font-medium">
                                    {props.price}
                                </span>
                                <p className="text-[.6rem] font-normal w-3/5">{props.period}</p>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>

            {props.img ? (
                <Image src={props.img} width={56} height={56} className="mx-auto" />
            ) : null}

            <button className={
                props.btnRecommended ? "bg-[#3944C4] text-white w-full py-2 border border-[#3944C4] rounded-md mt-4 mb-2 text-base" 
                : "w-full py-2 border border-[#3944C4] rounded-md mt-4 mb-2 text-[#3944C4] text-base"}>
                {props.button}
            </button>
        </div>

        <hr className="border my-4 w-[100%] border-gray-200 "/>

        <div className="space-y-2">
            <h6 className="uppercase font-semibold text-sm">{props.heading}</h6>

            {
                props.sub.map((item) => <div key={props.sub.indexOf(item)} className="text-xs font-medium flex items-start">
                    <Image src={"/tick.svg"} alt="tick" width={16} height={16} className="inline"/> &nbsp;
                    {item}
                </div>)
            }
        </div>
    </div>
  )
}

export default PricingBox;