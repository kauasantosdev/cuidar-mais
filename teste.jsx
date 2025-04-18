import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-blue-600 mr-2"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span className="text-xl font-bold text-gray-900">HealthTrack</span>
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Recursos
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Como Funciona
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Depoimentos
          </a>
          <a
            href="#get-started"
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Começar Agora
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#get-started"
              className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              Começar Agora
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
