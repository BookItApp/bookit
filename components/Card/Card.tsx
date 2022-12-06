import Image, { StaticImageData } from "next/image";

const Card = ({title, img, alt}: {title:string, img:StaticImageData, alt:string}) => (
    
    <div className="group flex shadow-lg relative flex-col w-64 h-64 mx-3 rounded-xl">
        <Image src={img} alt={alt} fill className="z-0 rounded-md group-hover:brightness-100 transition object-cover brightness-75"/>
        <div className="h-full w-full absolute flex flex-col justify-end items-center p-4">
            <p className="z-10 select-none text-white font-sans font-semibold text-2xl bottom-0">{title}</p>
        </div>
        
    </div>
)

export default Card;
