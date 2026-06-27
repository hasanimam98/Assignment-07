import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-16">
      <div className="max-w-7xl mx-auto py-14 px-6 text-center">
        {/* Logo */}
        <h2 className="text-5xl font-bold mb-3">KeenKeeper</h2>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-8">
          Your personal CRM of meaningful connections. Browse, blend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mb-8">
          <p className="text-sm text-gray-300 mb-3">Social Links</p>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white text-[#244D3F] flex items-center justify-center hover:scale-110 duration-200"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white text-[#244D3F] flex items-center justify-center hover:scale-110 duration-200"
            >
              <FaInstagram size={14} />
            </a>

            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white text-[#244D3F] flex items-center justify-center hover:scale-110 duration-200"
            >
              <FaXTwitter size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-green-700 pt-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
          <p>© 2025 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;