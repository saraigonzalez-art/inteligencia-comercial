import logo from "../assets/img.png";
import { ShieldCheck } from "lucide-react";

const Footer = () => (
  <footer className="bg-green-700 px-6 py-6">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-white md:flex-row">
      
      {/* IZQUIERDA */}
      <div className="flex items-center gap-3">
        <ShieldCheck className="h-10 w-10 text-white" />
        <span className="text-2xl font-light uppercase tracking-wide">
          SITE VERIFICADO
        </span>
      </div>

      {/* CENTRO */}
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="Logo"
          className="mb-2 h-16 w-auto object-contain"
        />
        {/* TEXTO DEBAJO */}
        <div className="mt-1 text-center leading-tight">
          <p className="text-lg font-medium">SITE</p>
          <p className="text-sm font-light">
            Inteligencia Comercial
          </p>
        </div>
      </div>

      {/* DERECHA */}
      <div className="text-center md:text-right">
        <p className="text-2.5 font-light">
          Site Inteligencia Comercial 2026 ®
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
