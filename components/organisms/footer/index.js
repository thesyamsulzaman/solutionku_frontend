import Link from "next/link";
const Footer = () => {
  return (
    <footer className="relative px-3 py-5 h-100 w-100 bg-gray-100">
      <div className="xl:max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-9 md:justify-center">
        <div>
          <h1 className="text-1xl font-bold text-gray-800 mb-2">
            Questions? Contact us
          </h1>
          <div>
            <Link href="/products">
              <a className="block py-1 text-gray-700">FAQ</a>
            </Link>
            <Link href="/categories">
              <a className="block py-1 text-gray-700">Corporate Information</a>
            </Link>
            <Link href="/login">
              <a className="block py-1 text-gray-700">Investor Relation</a>
            </Link>
            <Link href="/register">
              <a className="block py-1 text-gray-700">Contact Us</a>
            </Link>
          </div>
        </div>

        <div className="mt-5 md:m-0">
          <h1 className="text-1xl font-bold text-gray-800 mb-2">General</h1>
          <div>
            <Link href="/products">
              <a className="block py-1 text-gray-700">Account</a>
            </Link>
            <Link href="/categories">
              <a className="block py-1 text-gray-700">Redeem gift cards</a>
            </Link>
            <Link href="/login">
              <a className="block py-1 text-gray-700">Privacy</a>
            </Link>
          </div>
        </div>

        <div className="mt-5 md:m-0">
          <h1 className="text-1xl font-bold text-gray-800 mb-2">More.</h1>
          <div>
            <Link href="/products">
              <a className="block py-1 text-gray-700">Legal Notices</a>
            </Link>
            <Link href="/categories">
              <a className="block py-1 text-gray-700">Cookie preferences</a>
            </Link>
            <Link href="/login">
              <a className="block py-1 text-gray-700">Buy gift cards</a>
            </Link>
          </div>
        </div>

        <div className="mt-5 md:m-0">
          <h1 className="text-1xl font-bold text-gray-800 mb-2">
            About Solutionku.com
          </h1>
          <div>
            <Link href="/products">
              <a className="block py-1 text-gray-700">Braches</a>
            </Link>
            <Link href="/categories">
              <a className="block py-1 text-gray-700">Our team</a>
            </Link>
            <Link href="/login">
              <a className="block py-1 text-gray-700">Twitter</a>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
