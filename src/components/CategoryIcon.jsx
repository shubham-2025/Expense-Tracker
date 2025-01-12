import React from 'react';

const icons = {
  Food: '🍔',
  Transport: '🚗',
  Shopping: '🛍️',
  Entertainment: '🎮',
  Bills: '💡',
  Misc: '📦'
};

const CategoryIcon = ({ category }) => {
  return <span>{icons[category] || '❓'}</span>;
};

export default CategoryIcon;
