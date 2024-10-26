import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Button */}
      <motion.button
        onClick={toggleMenu}
        className="fixed top-7 left-7 z-50 p-3 bg-accent rounded-full shadow-lg text-textPrimary"
        whileTap={{ scale: 0.9, rotate: 180 }}
      >
        {isOpen ? '✖' : '☰'}
      </motion.button>

      {/* Sliding Navigation Panel */}
      <motion.div
        className={`fixed top-0 left-0 h-full w-52 bg-primary p-8 text-textSecondary shadow-lg transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ type: 'spring', stiffness: 100 }}
      > 
        <br></br>
        <br></br>
        <br></br>
        <h2 className="text-2xl font-bold mb-8">Candy Shop</h2>
        <ul className="space-y-4">
          <li>
            <Link href="/" onClick={toggleMenu} className="hover:text-accent">
              Search
            </Link>
          </li>
          <li>
            <Link href="/admin/manage" onClick={toggleMenu} className="hover:text-accent">
              Manage
            </Link>
          </li>
          <li>
            <Link href="/admin/statistics" onClick={toggleMenu} className="hover:text-accent">
              Statistics
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default NavBar;
