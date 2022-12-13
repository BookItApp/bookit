import Image, { StaticImageData } from "next/image";
import Link from "next/link";


const Card = ({title, img, alt}: {title:string, img:StaticImageData, alt:string}) => (
    
    <Link href={'/'} className="group flex shadow-lg relative flex-col w-full h-64 rounded-xl">
        <Image src={img} alt={alt} fill className="z-0 rounded-md group-hover:brightness-100 transition object-cover brightness-75"/>
        <div className="h-full w-full absolute flex flex-col justify-end items-center p-4">
            <p className="z-10 select-none text-white font-sans font-semibold text-2xl bottom-0">{title}</p>
        </div>
        
    </Link>
)

export default Card;
