import Navbar from "../../src/components/layout/NavBar"
import Image from "next/image";
import SearchBar from "@/src/components/layout/SearchBar";
export default function Hero() {
    return (
        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
            <Navbar />
            <Image
            src="/images/hero.jpg"
            alt="Saloony hero"
            priority
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%", zIndex: -1 }}
            />
            <div className="flex flex-col justify-start items-center h-full gap-2 pt-15">
                <h1 className="text-white text-5xl font-bold ">Welcome To Saloony</h1>
                <p className="text-white text-2xl">Search for Barber Shop</p>
                <SearchBar/>
            </div>
            
        </div>
    );
};