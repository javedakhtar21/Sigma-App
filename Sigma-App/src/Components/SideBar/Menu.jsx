import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Wishlist from './Wishlist';
import Orders from './Orders';
import AccountDetails from './AccountDetails';

const Menu = () => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200">
        <div className="p-4">
          <MenuItem to="/menu/wishlist" name="Wishlist" />
          <MenuItem to="/menu/account-details" name="Account Details" />
          <MenuItem to="/menu/orders" name="Orders" />
        </div>
      </div>
      <div className="w-3/4 bg-gray-100">
        <Routes>
        <Route path="/menu/wishlist" element={<Wishlist />} />
        <Route path="/menu/account-details" element={<AccountDetails />} />
        <Route path="/menu/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};

const MenuItem = ({ to, name }) => (
  <Link to={to} className="block cursor-pointer py-2 hover:bg-gray-300">
    {name}
  </Link>
);

export default Menu;
