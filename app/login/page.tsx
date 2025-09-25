"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import {
  Facebook,
  Google,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا منطق تسجيل الدخول
    console.log("Form submitted");
  };

  return (
    <div className="bg-[#FCF7F3] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* الهيدر */}
      <header className="w-full">
        <Image
          src="/05c20312e00885b850b8d3da09fde4ee658c7406.png"
          alt="alt"
          width={157}
          height={111}
        />
      </header>

      <main className="w-full h-full flex md:flex-row   items-center gap-3">
        {/* الفورم */}

        <div className="flex-1">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              padding: "0 100px ",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: "45px",
                fontWeight: 700,
                color: "#000000",
                lineHeight: "100%",
                letterSpacing: "0",
              }}
            >
              Log in
            </Typography>
            {/* حقل البريد الإلكتروني */}
            <div className="">
              <Typography
                variant="body1"
                sx={{ mb: 1, fontWeight: 500, color: "black" }}
              >
                Email
              </Typography>
              <TextField
                type="email"
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 4,
                    backgroundColor: "#fafafa",
                  },
                }}
              />
            </div>

            {/* حقل كلمة المرور */}
            <div className="">
              <Typography
                variant="body1"
                sx={{ mb: 1, fontWeight: 500, color: "black" }}
              >
                Password
              </Typography>
              <TextField
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 4,
                    backgroundColor: "#fafafa",
                  },
                }}
              />

              {/* رابط نسيان كلمة المرور */}
              <Box sx={{ textAlign: "right", mt: 1 }}>
                <Link
                  href="/forgot-password"
                  className="text-sm text-[#00000080] opacity-50 "
                >
                  Forgot Password?
                </Link>
              </Box>
            </div>

            {/* زر تسجيل الدخول */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                width: "228px",
                height: "47px",
                borderRadius: "10px",
                padding: "10px 4px 10px 5px",
                backgroundColor: "#AC8D5F",
                color: "white",
                alignSelf: "center",
              }}
            >
              Log in
            </Button>

            {/* رابط إنشاء حساب جديد */}
            <Typography
              align="center"
              sx={{ mb: 2, color: "text.secondary", opacity: 0.5 }}
            >
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#AC8D5F]">
                Create one
              </Link>
            </Typography>
          </Box>
          <div className="flex gap-5 justify-center items-center ">
            <div className="w-[197px] h-[1px] bg-black" />
            <div className="text-black">OR</div>
            <div className="w-[197px] h-[1px] bg-black" />
          </div>
          <div className="flex flex-col gap-3 mt-1 justify-center items-center ">
            <Link
              href="#"
              className="text-black flex  items-center  bg-white border w-[400px] rounded-lg"
            >
              <Google
                sx={{
                  py: "8px",
                  width: "45px",
                  height: "45px",
                  borderRight: "1px black solid",
                  color: "#AC8D5F",
                }}
              />
              <span className=" px-2 ">Sign up with your Google account</span>
            </Link>
            <Link
              href="#"
              className="text-black flex  items-center  bg-white border w-[400px] rounded-lg "
            >
              <Facebook
                sx={{
                  py: "8px",
                  width: "45px",
                  height: "45px",
                  borderRight: "1px black solid",
                  color: "#AC8D5F",
                }}
              />
              <span className=" px-2">Sign up with your Facebook account</span>
            </Link>
          </div>
        </div>

        {/* الصورة */}
        <div className="relative flex-1 w-full h-full md:block  hidden ">
          <Image
            src="/283236feb227c4e600d857182cf653d4cabce2c3.png"
            alt="alt"
            fill
            className="object-contain"
          />
        </div>
      </main>
    </div>
  );
}
