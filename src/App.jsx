import { useEffect, useState } from 'react';
import Title from './Title';
import data from './data.js';
import Menu from './Menu.jsx';
import Filters from './Filters.jsx';

const categories = ['all', ...new Set(data.map(menuItem => menuItem.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);

  const filter = category => {
    if (category === 'all') {
      setMenuItems(data);
    } else {
      const filteredItems = data.filter(
        menuItem => menuItem.category === category
      );
      setMenuItems(filteredItems);
    }
  };

  return (
    <main className="menu">
      <Title text="our menu" />
      <Filters categories={categories} filter={filter} />
      <Menu menuItems={menuItems} />
    </main>
  );
};
export default App;
