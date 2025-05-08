let clientes = [];

exports.getClientes = (req, res) => {
  res.json(clientes);
};

exports.addCliente = (req, res) => {
  const novo = { ...req.body, id: Date.now().toString(), data: new Date().toLocaleString() };
  clientes.push(novo);
  res.status(201).json(novo);
};

exports.updateCliente = (req, res) => {
  const { id } = req.params;
  const index = clientes.findIndex((c) => c.id === id);
  if (index !== -1) {
    clientes[index] = { ...clientes[index], ...req.body };
    return res.json(clientes[index]);
  }
  res.status(404).json({ error: 'Cliente não encontrado' });
};

exports.deleteCliente = (req, res) => {
  const { id } = req.params;
  const index = clientes.findIndex((c) => c.id === id);
  if (index !== -1) {
    const excluido = clientes.splice(index, 1);
    return res.json(excluido);
  }
  res.status(404).json({ error: 'Cliente não encontrado' });
};
