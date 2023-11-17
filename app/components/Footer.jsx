import Image from "next/image";
// import Link from "next/link";

function Footer() {
    const whyPathe = ['Workstation', 'Automations', 'Templates', 'To Do Lists', 'Project Planning'];
    const product = ['Home', 'Solutions', 'Reviews', 'Pricing', 'Resources', 'Integrations'];
    const pricing = ['Free', 'Starter', 'Standard', 'Premium']
    const company = ['About Us', 'Leadership', 'Careers', 'Become Partner'];
    const resources = ['Support', 'Partners', 'Events', 'Community'];

    const ListItem = ({ title, items }) => (
        <div className="md:space-y-2">
            <h6 className="font-semibold">{title}</h6>
            <ul className="text-sm space-y-2 md:font-medium">
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
     );
  return (
    <footer className='w-[90vw] md:w-full min-h-fit mx-auto flex flex-col py-6'>
        <div className="w-[85%] md:grid grid-cols-9 md:mx-auto mt-5 p-4 md:p-0 space-y-3 md:space-y-0 lg:space-x-6">
            <div className="col-span-2">
                <Image src={'/logo.svg'} alt="logo" width={138} height={32} className="w-24"/>
            </div>
            <div className="grid grid-flow-row md:grid-flow-col col-span-7 space-y-4 md:space-y-0">
              <ListItem title="WHY PATHE?" items={whyPathe} />
              <ListItem title="PRODUCT" items={product} />
              <ListItem title="PRICING" items={pricing} />
              <ListItem title="COMPANY" items={company} />
              <ListItem title="RESOURCES" items={resources} />
            </div>
        </div>

        <hr className="w-[85%] mx-auto mt-4 md:mt-10" />

        <div className="flex flex-col px-4 md:px-0 md:grid grid-cols-12 grid-rows-2 md:w-[85%] gap-y-2 mt-5 md:mt-10 md:mx-auto">
            <div className="row-span-2 col-span-9 ]">
                <p className="text-sm">©2023 Pathe.</p>
            </div>
            <div className="flex space-x-6 col-span-3">
                <Image src={"/facebook.svg"} alt="" height={28} width={28} className="w-5" />
                <Image src={"/instagram.svg"} alt="" height={18} width={18} className="w-5" />
                <Image src={"/twitter.svg"} alt="" height={18} width={18} className="w-5" />
                <Image src={"/linkedin.svg"} alt="" height={18} width={18} className="w-5" />
            </div>
        </div>
    </footer>
  )
}

export default Footer
