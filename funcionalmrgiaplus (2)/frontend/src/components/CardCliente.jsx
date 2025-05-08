import React from 'react';

export default function CardCliente({ cliente }) {
  return (
    <div className="border p-4 rounded shadow-md bg-white mb-2">
      <h3 className="font-bold text-lg">{cliente.name}</h3>
      <p>CPF: {cliente.cpf}</p>
      <p>Telefone: {cliente.telefone}</p>
      <p>Status: {cliente.status}</p>
    </div>
  );
}
