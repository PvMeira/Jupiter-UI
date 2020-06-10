export const addItemToCart = (items, item) => {
  const exist = findItem(items, item);
  if (exist) {
    return items.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }

  return [...items, { ...item, quantity: 1 }];
};

export const removeItem = (items, item) => {
  const exist = findItem(items, item);
  if (exist.quantity === 1) {
    return items.filter((i) => i.id !== item.id);
  } else {
    return items.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
    );
  }
};

const findItem = (items, item) => {
  return items.find((i) => i.id === item.id);
};
