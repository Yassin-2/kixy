import React from 'react'


const Footer = ({ 
  brandName = 'Kixys', 
  links = {
    'Shop Shoes': ['Running Shoes', 'Casual Shoes', 'Formal Shoes', 'Sports Shoes', 'Sandals', 'Boots'],
    'About Us': ['Our Story', 'Careers', 'Store Locator', 'Press', 'Sustainability', 'Blog'],
    'Connect': ['Facebook', 'Instagram', 'Twitter', 'YouTube', 'Newsletter']
  }
}) => {
  
  
  const categories = Object.entries(links)

  return (
    <footer className="bg-gray-950 text-white font-poppins">
     

     
      <div className="bg-gray-900 py-2 justify-center items-center" >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-16 mx-20">
            {categories.map(([category, items], catIndex) => (
              <div key={catIndex}>
                <h3 className="font-bold text-sm mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="text-xs text-gray-300 hover:underline hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl text-white">{brandName}</h3>
            <p className="text-xs text-gray-400">Premium Footwear for Every Step</p>
          </div>
          <div className="flex gap-4">
            <span className="text-xs text-gray-300 border border-gray-600 px-2 py-1 rounded cursor-pointer hover:border-white">Terms of Use</span>
            <span className="text-xs text-gray-300 border border-gray-600 px-2 py-1 rounded cursor-pointer hover:border-white">Privacy Policy</span>
            <span className="text-xs text-gray-300 border border-gray-600 px-2 py-1 rounded cursor-pointer hover:border-white">Help</span>
          </div>
        </div>
      </div>

     
      <div className="bg-gray-900 py-4 text-center">
        <p className="text-xs text-gray-400">
          © 2026 {brandName}, Inc. or its affiliates. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
