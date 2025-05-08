const API_URL = import.meta.env.VITE_API_URL;

export const getClientes = async () => {
  const res = await fetch(`${API_URL}/clientes`);
  return res.json();
};

export const addCliente = async (cliente) => {
  const res = await fetch(`${API_URL}/clientes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cliente),
  });
  return res.json();
};

export const updateCliente = async (id, data) => {
  const res = await fetch(`${API_URL}/clientes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteCliente = async (id) => {
  const res = await fetch(`${API_URL}/clientes/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
