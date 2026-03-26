"use client";

import { useState } from "react";

export default function BookCallPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/lead", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Submitted!");
  };

  return (
    <section className="py-24 px-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Book a Free Call</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          placeholder="Name"
          className="w-full p-3 bg-white/10 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full p-3 bg-white/10 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Phone"
          className="w-full p-3 bg-white/10 rounded"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button className="bg-brand-500 px-6 py-3 rounded-lg cursor-pointer hover:scale-105 transition">
          Submit
        </button>

      </form>
    </section>
  );
}