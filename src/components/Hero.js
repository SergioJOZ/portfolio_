import { Button, Input } from "@material-tailwind/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Hero(){
    const path = usePathname()

    if(path === "/english"){
        return <section className="grid grid-cols-2 place-items-center pt-16 pl-2">
        <div className="justify-self-center">
        <h2 className="md:text-lg lg:text-xl 2xl:text-4xl"><p className="font-bold">Hi!</p> My name is <p className="font-bold">Sergio Jiménez.</p></h2>
        <p className="md:text-sm lg:text-md 2xl:text-xl">I'm a Systems Engineer and Web Developer.</p>
        </div>

        <div className="justify-self-center pb-2">
            <Image src="/images/PROFILENEW.jpg" alt="yo" width={300} height={300} className="rounded-xl"/>
            
            <div className="relative flex w-full min-w-[16rem] max-w-[26rem] pt-2">
            <Input disabled label="sergio2jo13@gmail.com" value={"sergio2jo13@gmail.com"} className="pr-20" containerProps={{
                className: "min-w-0",
            }} />
            <Button size="sm" variant="outlined" className="!absolute right-1 top-3 bottom-2 rounded" onClick={(e) => {
                navigator.clipboard.writeText("sergio2jo13@gmail.com")
            }}>
                Copy
            </Button>
            </div>
            
        </div>
    </section>
    }
    return <section className="grid grid-cols-2 place-items-center pt-16 pl-2">
        <div className="justify-self-center">
        <h2 className="md:text-lg lg:text-xl 2xl:text-4xl"><p className="font-bold">¡Hola!</p> Me llamo <p className="font-bold">Sergio Jiménez.</p></h2>
        <p className="md:text-sm lg:text-md 2xl:text-xl">Soy un Ingeniero en Sistemas y Desarrollador Web.</p>
        </div>

        <div className="justify-self-center pb-2">
            <Image src="/images/PROFILENEW.jpg" alt="yo" width={300} height={300} className="rounded-xl"/>
            
            <div className="relative flex w-full min-w-[16rem] max-w-[26rem] pt-2">
            <Input disabled label="sergio2jo13@gmail.com" value={"sergio2jo13@gmail.com"} className="pr-20" containerProps={{
                className: "min-w-0",
            }} />
            <Button size="sm" variant="outlined" className="!absolute right-1 top-3 bottom-2 rounded" onClick={(e) => {
                navigator.clipboard.writeText("sergio2jo13@gmail.com")
            }}>
                Copiar
            </Button>
            </div>
            
        </div>
    </section>
}