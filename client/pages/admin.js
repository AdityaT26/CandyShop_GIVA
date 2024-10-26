// pages/admin.js
import { motion } from 'framer-motion';

export default function AdminLogin() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-primary-light dark:bg-primary-dark rounded-lg shadow-md text-highlight dark:text-highlight-dark">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Login</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-highlight mb-2">Username</label>
          <input type="text" className="input-style" placeholder="Enter username" />
        </div>
        <div>
          <label className="block text-highlight mb-2">Password</label>
          <input type="password" className="input-style" placeholder="Enter password" />
        </div>
        <button type="submit" className="candy-button">Login</button>
      </form>
    </div>
  );
}
