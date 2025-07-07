import { Typography } from "@mui/material";
import Image from "next/image";
const About = () => {
  return (
    <section className="py-12 sm:px-6 lg:px-8 bg-[#fdf8f5]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 bg-[#fdf8f5]">
        <div className="flex items-center gap-5">
          <Typography variant="h2">
            About Saloony
            <span className="absolute left-0 bottom-0 w-[80px] h-[4px] bg-purple-700 rounded-full" />
          </Typography>
          <Image
            src="/images/aboutlogo.png"
            alt="Saloony about"
            width={50}
            height={20}
            className="border-2 rounded-lg"
          />
        </div>
        <div className="flex items-center gap-15">
          <Image
            src="/images/about.jpg"
            alt="Saloony about"
            width={376}
            height={436}
            className="w-[376px] h-[436px] rounded-[16px]"
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: "35px",
              lineHeight: "100%",
              maxWidth: "600px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui um.qui officia deserunt
            est laborum.
          </Typography>
        </div>
      </div>
    </section>
  );
};
export default About;
