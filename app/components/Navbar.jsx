import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="md:container flex sticky top-0 h-20  md:justify-around items-center bg-white z-50">
        <div className="flex items-center space-x-4">
            <Image src={"/logo.svg"} alt="Pathe Logo" width={172} height={160} className="h-10"></Image>
            <ul className="hidden md:flex space-x-4 items-center">
                <li className="font-medium">
                    Products &nbsp;
                    <span>
                        <Image src={'/arrow.svg'} width={32} height={32} className="inline w-4"  />
                    </span>
                </li>
                <li className="font-medium">
                    Solutions &nbsp;
                    <span>
                        <Image src={'/arrow.svg'} width={32} height={32} className="inline w-4"  />
                    </span>
                </li>
                <li className="font-medium">
                    Resources &nbsp;
                    <span>
                        <Image src={'/arrow.svg'} width={32} height={32} className="inline w-4"  />
                    </span>
                </li>
                <li className="text-[#3944C4] font-medium">Pricing</li>
            </ul>
        </div>

        <div className="hidden md:flex items-baseline space-x-4">
            <Link href={"#"} className="flex font-medium text-sm text-[#3944C4]">Sign In</Link>
            <button className="text-[#3944C4] font-medium p-3 border border-[#3944C4] rounded">TALK TO SALES</button>
            <button className="text-white font-medium bg-[#3944C4] p-3 rounded">TRY FOR FREE</button>
        </div>

        <div className="flex md:hidden">
            <button className="text-white [#3944C4] p-3 rounded">TRY FOR FREE</button>    
        </div>
    </div>
  )
}

export default Navbar