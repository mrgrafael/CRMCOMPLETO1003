import React, { useEffect, useState } from 'react';
import { getClientes } from '../services/api';
import CardCliente from '../components/CardCliente';

export default function Dashboard() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getClientes();
      setClientes(data);
    }
    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard de Clientes</h1>
      {clientes.map((cliente) => (
        <CardCliente key={cliente.id} cliente={cliente} />
      ))}
    </div>
  );
}
