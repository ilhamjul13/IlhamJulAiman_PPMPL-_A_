let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ];
  
  // Mendapatkan semua item
  exports.getItems = (req, res) => {
    res.status(200).json(items);
  };
  
  // Menambah item baru
  exports.createItem = (req, res) => {
    const newItem = {
      id: items.length + 1,
      name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
  };
  
  // Memperbarui item berdasarkan id
  exports.updateItem = (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const item = items.find(i => i.id === itemId);
  
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
  
    item.name = req.body.name || item.name;
    res.status(200).json(item);
  };
  
  // Menghapus item berdasarkan id
  exports.deleteItem = (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex(i => i.id === itemId);
  
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found' });
    }
  
    items.splice(itemIndex, 1);
    res.status(200).json({ message: 'Item deleted successfully' });
  };
  