import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RegistroIndividual = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    clave: "",
    cedula: "",
    concepto: "RUBROS DE TRANSPORTE",
    valor: "",
    observacion: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario diligenciado:", form);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f8] p-6">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 flex items-center gap-2 text-emerald-700 font-semibold"
      >
        <ArrowLeft size={20} /> Volver
      </button>

      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">3. Registro Individual</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Clave</label>
            <input type="text" name="clave" required value={form.clave} onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Cédula</label>
            <input type="number" name="cedula" required value={form.cedula} onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Concepto</label>
            <select name="concepto" value={form.concepto} onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none">
              <option value="RUBROS DE TRANSPORTE">RUBROS DE TRANSPORTE</option>
              <option value="PREMIOS">PREMIOS</option>
              <option value="OTROS">OTROS</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Valor</label>
            <input type="number" name="valor" required value={form.valor} onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Observación</label>
            <textarea name="observacion" rows={3} value={form.observacion} onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none" />
          </div>

          <button type="submit" className="w-full rounded-lg bg-emerald-600 py-3 font-bold text-white transition hover:bg-emerald-700">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistroIndividual;