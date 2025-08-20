import HomeForm from "../components/home/HomeForm";

export default function Home() {
  return (
    <main className="container">
      <h1 className="title">CementerioApp</h1>

      <section className="card card-lg card-wide" style={{ marginTop: 24 }}>
        <h2 className="section-heading">Datos del difunto</h2>
        <p className="section-subtitle">
          Rellena uno o varios campos para afinar la búsqueda.
        </p>

        <HomeForm />
      </section>
    </main>
  );
}

