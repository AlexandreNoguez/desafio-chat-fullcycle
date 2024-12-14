"use client";

import { useState } from "react";

interface SubmitChatProps {
  onMessageSent: () => void; // Função para atualizar o Chat
}

export default function SubmitChat({ onMessageSent }: SubmitChatProps) {
  const [message, setMessage] = useState<string>(""); // Estado para o input
  const [loading, setLoading] = useState<boolean>(false); // Estado de carregamento

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    try {
      setLoading(true);
      const response = await fetch("/api/chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      setMessage(""); // Limpar input após o envio
      onMessageSent(); // Atualizar a lista do Chat
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 p-6 shadow-lg rounded-md w-full max-w-sm"
    >
      <label className="text-lg font-semibold">Digite sua mensagem</label>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escreva aqui..."
        className="w-full p-2 border rounded-md"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
