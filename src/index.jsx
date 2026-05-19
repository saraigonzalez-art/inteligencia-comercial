import HeroCarousel from "@/components/HeroCarousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />

      <section className="py-20 px-10">
        <h2 className="text-3xl font-bold mb-6">
          Bienvenido al Centro de Inteligencia Comercial
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Este portal es su acceso único y directo a herramientas,
          procesos, tableros estratégicos y recursos clave de la
          Vicepresidencia de Canales Comerciales.
        </p>
      </section>

      {/* 🔥 CHATBOT AQUÍ */}
      <section className="px-10 pb-20">
        <div className="max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h3 className="mb-3 text-2xl font-semibold">Soporte y orientacion</h3>
          <p className="text-muted-foreground">
            Estamos ajustando este espacio para integrar nuevas ayudas de
            consulta. Mientras tanto, use el menu principal para navegar entre
            tableros, estructura, grupos homogeneos y bonificaciones.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Index;
