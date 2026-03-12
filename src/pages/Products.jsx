import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Products() {
 const [filter, setFilter] = useState('all');

const products = [
    {
      id: 1,
      name: 'Air Max Pro',
      category: 'running',
      price: 189.99,
      image: '/shoe1.jpg',
      description: 'Premium running shoes with advanced cushioning'
    },
    {
      id: 2,
      name: 'Urban Street',
      category: 'casual',
      price: 149.99,
      image: '/many.jpg',
      description: 'Stylish casual shoes for everyday wear'
    },
    {
      id: 3,
      name: 'Sport Elite',
      category: 'sports',
      price: 169.99,
      image: '/shoe1.jpg',
      description: 'High-performance athletic footwear'
    },
    {
      id: 4,
      name: 'Classic Leather',
      category: 'casual',
      price: 199.99,
      image: '/many.jpg',
      description: 'Timeless leather shoes with modern comfort'
    },
    {
      id: 5,
      name: 'Trail Blazer',
      category: 'running',
      price: 179.99,
      image: '/shoe1.jpg',
      description: 'Rugged outdoor shoes for trail running'
    },
    {
      id: 6,
      name: 'Court Master',
      category: 'sports',
      price: 159.99,
      image: '/many.jpg',
      description: 'Professional tennis shoes with superior grip'
    }
  ];

const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'running', label: 'Running' },
    { id: 'casual', label: 'Casual' },
    { id: 'sports', label: 'Sports' }
  ];

const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

 return (
  <>
   <Navbar />
   <section className="min-h-screen bg-gray-950 text-white py-20 px-6">
     <div className="max-w-7xl mx-auto">
       {/* Header */}
       <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      className="text-center mb-16"
       >
         <h1 className="text-5xl md:text-6xl font-black uppercase tracking-[0.2em] text-white mb-4">
           Our Products
         </h1>
         <p className="text-gray-400 text-lg max-w-2xl mx-auto">
           Discover our premium collection of footwear designed for comfort, style, and performance
         </p>
       </motion.div>

       {/* Filter Buttons */}
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-4 mb-12"
       >
         {categories.map((category) => (
           <motion.button
             key={category.id}
             onClick={() => setFilter(category.id)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-[0.15em] transition-all ${
               filter === category.id
                 ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                 : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
             }`}
           >
             {category.label}
           </motion.button>
         ))}
       </motion.div>

       {/* Products Grid */}
       <motion.div
         layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
       >
         <AnimatePresence>
           {filteredProducts.map((product, index) => (
             <motion.div
               key={product.id}
               layout
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
             whileHover={{ y: -10 }}
          className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
             >
               {/* Product Image */}
             <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
               <motion.img
                 src={product.image}
                 alt={product.name}
                className="w-full h-full object-cover"
                 initial={{ scale: 1 }}
                 whileHover={{ scale: 1.1 }}
                 transition={{ type: "spring", stiffness: 300, duration: 0.3 }}
               />
                            
               {/* Hover Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             </div>

               {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-400 capitalize">{product.category}</p>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    ${product.price}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
               className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
                >
                  Add to Cart
                </motion.button>
              </div>
             </motion.div>
           ))}
         </AnimatePresence>
       </motion.div>

       {/* Empty State */}
       {filteredProducts.length === 0 && (
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
        className="text-center py-20"
         >
           <p className="text-gray-400 text-xl">No products found in this category</p>
         </motion.div>
       )}
     </div>
   </section>
  </>
  );
}
