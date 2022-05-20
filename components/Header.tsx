import Link from 'next/link'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5 ">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://www.hudsonintegrated.com/pub/blogimages/20140305094710_blog49006_640.png"
            alt=""
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About Us</h3>
          <h3>Contact Us</h3>
          <h3 className="rounded-full bg-blue-200 px-4 py-1 text-white">
            Follow Us
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-blue-200">
        <h3>Sign In</h3>
        <h3 className="rounded-full border border-blue-200 px-4 py-1">
          Getting Started
        </h3>
      </div>
    </header>
  )
}

export default Header
