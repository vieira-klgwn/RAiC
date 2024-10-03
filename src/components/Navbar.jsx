const Navbar = () => {
  return (
 <nav className="bg-white shadow-lg">
    <div className="container max-w-7xl mx-auto py-2">
        <div className="flex justify-between items-center px-4">
            <div className="items-center ">
                <a href="#" className="text-lg font-semibold">RAiC</a>
            </div>
            <div className="hidden md:flex space-x-4">
                
                <a href="#" className="text-sm text-gray-800 hover:text-blue-500">Home</a>
                <a href="#" className="text-sm text-gray-800 hover:text-blue-500">About us</a>
                <a href="#" className="text-sm text-gray-800 hover:text-blue-500">Our Services</a>
                <a href="#" className="text-sm text-gray-800 hover:text-blue-500">Contact</a>
            </div>
            <div className="hidden md:flex space-x-4">
                <a href="#" className="text-gray-800 hover:text-blue-500">Log In</a>
                <a href="#" className="text-white bg-blue-400 p-2 rounded-lg px-3 hover:bg-blue-500">SignUp</a>
            </div>
            <div className="mobile-menu hidden flex space-x-4">
                <a href="#" className="text-gray-800
                hover:text-blue-500">Home</a>
                <a href="#" className="text-gray-800
                hover:text-blue-500">About us</a>
                <a href="#" className="text-gray-800
                hover:text-blue-500">Our Services</a>
                <a href="#" className="text-gray-800
                hover:text-blue-500">Contact</a>
            </div>
            <button className="md:hidden mobile-menu-button  sm:flex text-gray-800 focus:outline-none">
  <svg className="w-6 h-6" width="800px" height="800px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#000000" />
    <path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#000000" />
    <path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#000000" />
  </svg>
</button>

        </div>
    </div>
 </nav>
  )
}

export default Navbar
