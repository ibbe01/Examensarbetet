import React from "react"

export const Header: React.FC = () => {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    window.history.pushState({}, "", path)
    window.dispatchEvent(new PopStateEvent("popstate"))
  }

  return (
    <header className="bg-white shadow-sm w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" onClick={(e) => handleNavigation(e, "/")} className="text-2xl font-bold text-gray-900">
              Assistena
            </a>
          </div>

          <nav className="hidden md:flex flex-grow justify-center space-x-8">
            <a href="/" onClick={(e) => handleNavigation(e, "/")} className="text-gray-500 hover:text-gray-900">
              Home
            </a>
            <a
              href="/products"
              onClick={(e) => handleNavigation(e, "/products")}
              className="text-gray-500 hover:text-gray-900"
            >
              Products
            </a>
            <a
              href="/about"
              onClick={(e) => handleNavigation(e, "/about")}
              className="text-gray-500 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={(e) => handleNavigation(e, "/contact")}
              className="text-gray-500 hover:text-gray-900"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4 ml-auto">
            <button className="text-black hover:text-gray-700" aria-label="Search"></button>

            <a
              href="/cart"
              onClick={(e) => handleNavigation(e, "/cart")}
              className="text-black hover:text-gray-700"
              aria-label="Shopping cart"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M4 5h16l-2 11H6L4 5zm4 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
            </a>

            <button className="text-black hover:text-gray-700" aria-label="Menu">
              <span className="text-2xl">≡</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

