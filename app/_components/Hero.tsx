import Navbar from "../../src/components/layout/NavBar";
import Image from "next/image";
import SearchBar from "@/src/components/layout/SearchBar";
import { Typography } from "@mui/material";

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
        <Typography variant="h1">Welcome To Saloony</Typography>
        <Typography variant="subtitle1">Search for Barber Shop</Typography>
        <SearchBar />
      </div>
    </div>
  );
}
