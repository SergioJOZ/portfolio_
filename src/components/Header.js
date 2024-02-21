"use client";

import { Button, ButtonGroup, Option, Select } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { useCountries } from "use-react-countries";


export default function Header(){
    const {countries} = useCountries()
    const filteredVenezuela = countries.filter(country => country.name === "Venezuela")
    const filteredUS = countries.filter(country => country.name === "United States")
    const path = usePathname();
    

    if(path === "/english"){
        return <div className="min-h-20 bg-gray-100 min-w-full pt-4 fixed top-0 z-40">
        <header className="flex justify-around align-items-center pl-4 gap-2 ">
            <Link href={"/"}>
                <h1 className="md:text-4xl font-bold sm:text-xl xs:text-md">My Portfolio</h1></Link>

            <div>
                <ButtonGroup variant="text">
                    <Button className="md:text-lg"><Link href="#aboutMe">About me</Link></Button>
                    <Button className="md:text-lg"><Link href="#projects">Projects</Link></Button>
                    <Button className="md:text-lg"><Link href="#contact">Contact</Link></Button>
                </ButtonGroup>
            </div>

            <div className="bg-gray-100 min-h-20">
            <Select label="Idioma/Language" selected={(element) => element && React.cloneElement(element, { disabled: true, className: "flex items-center opacity-100 px-0 gap-2 pointer-events-none"})}>
                    <Option key={filteredVenezuela[0].languages[0]} value={filteredVenezuela[0].languages[0]} className="flex items-center gap-2">
                        <Link href={"/"} className="flex items-center gap-2">
                        <img src={filteredVenezuela[0].flags.svg} alt={filteredVenezuela[0].languages[0]} className="h-5 w-5 rounded-full object-cover"/>
                        {filteredVenezuela[0].languages[0]}
                        </Link>
                    </Option>
                    
                    <Option key={filteredUS[0].languages[0]} value={filteredUS[0].languages[0]} className="flex items-center gap-2">
                    <Link href={"/english"} className="flex items-center gap-2">
                        <img src={filteredUS[0].flags.svg} alt={filteredUS[0].languages[0]} className="h-5 w-5 rounded-full object-cover"/>
                        {filteredUS[0].languages[0]}
                    </Link>
                    </Option>
                </Select>
            </div>
        </header>
    </div>
    }
    
    return <div className="min-h-20 bg-gray-100 min-w-full pt-4 fixed top-0 z-40">
        <header className="flex justify-around align-items-center pl-4 gap-2 ">
            <Link href={"/"}>
                <h1 className="md:text-4xl font-bold sm:text-xl xs:text-md">Mi Portafolio</h1></Link>

            <div>
                <ButtonGroup variant="text">
                    <Button className="md:text-lg"><Link href="#aboutMe">Acerca de mí</Link></Button>
                    <Button className="md:text-lg"><Link href="#projects">Proyectos</Link></Button>
                    <Button className="md:text-lg"><Link href="#contact">Contacto</Link></Button>
                </ButtonGroup>
            </div>

            <div className="bg-gray-100 min-h-20">
            <Select label="Idioma/Language" selected={(element) => element && React.cloneElement(element, { disabled: true, className: "flex items-center opacity-100 px-0 gap-2 pointer-events-none"})}>
                    <Option key={filteredVenezuela[0].languages[0]} value={filteredVenezuela[0].languages[0]} className="flex items-center gap-2">
                        <Link href={"/"} className="flex items-center gap-2">
                        <img src={filteredVenezuela[0].flags.svg} alt={filteredVenezuela[0].languages[0]} className="h-5 w-5 rounded-full object-cover"/>
                        {filteredVenezuela[0].languages[0]}
                        </Link>
                    </Option>
                    
                    <Option key={filteredUS[0].languages[0]} value={filteredUS[0].languages[0]} className="flex items-center gap-2">
                    <Link href={"/english"} className="flex items-center gap-2">
                        <img src={filteredUS[0].flags.svg} alt={filteredUS[0].languages[0]} className="h-5 w-5 rounded-full object-cover"/>
                        {filteredUS[0].languages[0]}
                    </Link>
                    </Option>
                </Select>
            </div>
        </header>
    </div>
}