import { useEffect, useMemo, useState } from "react";

/** Años desde `from` hasta el actual (descendente) */
function getYears(from = 1900) {
  const y = new Date().getFullYear();
  return Array.from({ length: y - from + 1 }, (_, i) => String(y - i));
}

export default function HomeForm() {
  const [municipios, setMunicipios] = useState<string[]>([]);
  const [nombreApellidos, setNombreApellidos] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pueblo, setPueblo] = useState("");
  const [anio, setAnio] = useState("");

  useEffect(() => {
    fetch("/data/municipios_es.json")
      .then((r) => r.json())
      .then((arr: string[]) => setMunicipios(arr))
      .catch(() => setMunicipios([]));
  }, []);

  const years = useMemo(() => getYears(1900), []);

  // IDs accesibles
  const nameId = "campo-nombre";
  const ciudadId = "campo-ciudad";
  const puebloId = "campo-pueblo";
  const anioId = "campo-anio";

  // Estilos
  const tag =
    "inline-flex items-center rounded-full px-4 py-2 text-sm font-bold " +
    "bg-indigo-50 text-indigo-700 border border-indigo-200";

  const inputBase =
    "h-11 w-full sm:w-[460px] rounded-xl border border-gray-300 px-3 bg-white " +
    "focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500";

  // Centrar “— elegir —” cuando no hay valor; al seleccionar, texto a la izquierda
  const selectClass = (v: string) =>
    v ? `${inputBase} text-left` : `${inputBase} text-center text-gray-500`;

  // Separación muy grande entre bloques y entre etiqueta → control
  const block = "mb-14"; // espacio entre bloques (etiquetas principales)
  const labelGap: React.CSSProperties = { marginBottom: 18 }; // espacio grande etiqueta→control

  return (
    <section className="rounded-2xl bg-white shadow-md border border-gray-100 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Datos del difunto</h3>
      <p className="text-sm text-gray-500 mb-10">
        Rellena uno o varios campos para afinar la búsqueda.
      </p>

      {/* NOMBRE Y APELLIDOS (texto) */}
      <div className={block}>
        <label htmlFor={nameId} className={tag} style={labelGap}>
          Nombre y apellidos
        </label>
        <div>
          <input
            id={nameId}
            type="text"
            className={inputBase}
            placeholder="Ej: Juan Pérez García"
            value={nombreApellidos}
            onChange={(e) => setNombreApellidos(e.target.value)}
          />
        </div>
      </div>

      {/* CIUDAD (solo desplegable) */}
      <div className={block}>
        <label htmlFor={ciudadId} className={tag} style={labelGap}>
          Ciudad
        </label>
        <div>
          <select
            id={ciudadId}
            className={selectClass(ciudad)}
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          >
            <option value="">{`— elegir —`}</option>
            {municipios.map((m) => (
              <option key={`c-${m}`} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* PUEBLO (solo desplegable) */}
      <div className={block}>
        <label htmlFor={puebloId} className={tag} style={labelGap}>
          Pueblo
        </label>
        <div>
          <select
            id={puebloId}
            className={selectClass(pueblo)}
            value={pueblo}
            onChange={(e) => setPueblo(e.target.value)}
          >
            <option value="">{`— elegir —`}</option>
            {municipios.map((m) => (
              <option key={`p-${m}`} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* AÑO DE FALLECIMIENTO (solo desplegable) */}
      <div className={block}>
        <label htmlFor={anioId} className={tag} style={labelGap}>
          Año de fallecimiento
        </label>
        <div>
          <select
            id={anioId}
            className={selectClass(anio)}
            value={anio}
            onChange={(e) => setAnio(e.target.value)}
          >
            <option value="">{`— cualquier año —`}</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

