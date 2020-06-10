export const addItemToCart = (items, item) => {
  const exist = items.find((i) => i.id === item.id);
  if (exist) {
    return items.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }

  return [...items, { ...item, quantity: 1 }];
};
