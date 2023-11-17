import Image from "next/image";
import faq from "../faq";

function Accordion() {
  return (
    <>
    {
        faq.map((item) => (
            <div key={item.id} className="py-4 px-5 bg-white w-[90%] flex min-h-fit items-center text-left rounded justify-between">
                <div className="font-semibold text-sm md:text-base">
                    {item.question}
                </div>
                <Image src={"add.svg"} alt="toggle" width={48} height={48} className="w-6" />
            </div>
        ))
    }
    </>
  )
}

export default Accordion