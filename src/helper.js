function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
  const removedItem = items.filter(fruit => fruit === item)[0];
  const removedItemIdx = items.indexOf(removedItem);
  items.splice(removedItemIdx, 1);
  return removedItem;
}

export { choice, remove };
