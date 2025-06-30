import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
const Footer =()=> {
  return (
    <footer className="border-t px-4 sm:px-6 lg:px-8" style={{background:"#877754"}}>
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-30">
        <div className='flex flex-col items-center'>
        <Link href="/">
          <Image
            src="/images/logo-white.png"
            alt="Saloony Logo"
            width={150}
            height={10}
            priority
          />
        </Link>
        <div className="flex gap-2 text-white text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-600 transitio" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
        </div>

        </div>
          <div className="mt-20 flex gap-22 w-[640px] h-[214px]">
          <div className="w-[250px] h-[208px]">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">About Saloony</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/join" className="text-white hover:text-black transition">
                  Join us
                </Link>
              </li>
              <li>
                <Link href="/add-business" className="text-white hover:text-black transition">
                  Add your establishment
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white hover:text-black transition">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white hover:text-black transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
            <div className="w-[250px] h-[208px]">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Find your Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/hairdresser" className="text-white hover:text-black transition">
                  Hairdresser
                </Link>
              </li>
              <li>
                <Link href="/services/barber" className="text-white hover:text-black transition">
                  Barber
                </Link>
              </li>
              <li>
                <Link href="/services/manicure" className="text-white hover:text-black transition">
                  Manicure
                </Link>
              </li>
              <li>
                <Link href="/services/massage" className="text-white hover:text-black transition">
                  Massage
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;