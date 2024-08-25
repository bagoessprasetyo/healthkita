import Image from "next/image"

export default function Navbar(){
    return(
        <>
            <div className="flex flex-row justify-between w-full">
              <Image src={'/healthkita-logo.png'} width={163} height={53} alt="Healthkita Logo" />
              <div className="hidden flex-row rounded-sm bg-secondarysurface bg-opacity-[24%] px-[80px] py-[17px] space-x-[120px]">
                <p className="text-secondary text-base font-medium">About Us</p>
                <p className="text-secondary text-base font-medium">Our Core</p>
                <p className="text-secondary text-base font-medium">Our Service</p>
              </div>
            </div>
        </>
    )
}