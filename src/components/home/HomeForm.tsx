import { useEffect, useMemo, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

/** Tipos normalizados para la UI */
type Provincia = { code: string; name: string };
type Municipio = { code: string; name: string };

export default function HomeForm() {
  const [nombre, setNombre] = useState("");
  const [provincia, setProvincia] = useState("");
  const [municipio, setMunicipio] = useState("");

  const [provincias, setProvincias] = useState<Provincia[]>([]);
  const [municipios, setMunicipios] = useState<Municipio[]>([]);
  const [loadingProv, setLoadingProv] = useState(true);
  const [loadingMun, setLoadingMun] = useState(false);

  // AÑOS 1900 → actual
  const anios = useMemo(() => {
    const now = new Date().getFullYear();
    const arr: number[] = [];
    for (let y = now; y >= 1900; y--) arr.push(y);
    return arr;
  }, []);

  /** Cargar provincias (una vez) */
  useEffect(() => {
    (async () => {
      try {
        setLoadingProv(true);
        // ⬇️ URL con proxy Vite
        const res = await fetch("/meteo/api/json/v2/provincias");
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();

        const list = (Array.isArray(data) ? data : data.provincias || []) as any[];
        const mapped: Provincia[] = list
          .map((p) => ({
            code: String(p.CODPROV ?? p.codprov ?? p.id ?? "").trim(),
            name: String(p.NOMBRE_PROVINCIA ?? p.nombre ?? p.value ?? p.NOMBRE ?? "").trim(),
          }))
          .filter((p) => p.code && p.name)
          .sort((a, b) => a.name.localeCompare(b.name, "es"));

        setProvincias(mapped);
      } catch (e) {
        console.error("Error cargando provincias:", e);
        setProvincias([]);
      } finally {
        setLoadingProv(false);
      }
    })();
  }, []);

  /** Cuando cambia provincia: cargar municipios */
  useEffect(() => {
    (async () => {
      if (!provincia) {
        setMunicipios([]);
        setMunicipio("");
        return;
      }
      try {
        setLoadingMun(true);
        setMunicipio("");

        // ⬇️ URL con proxy Vite
        const url = `/meteo/api/json/v2/provincias/${provincia}/municipios`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();

        const list = (Array.isArray(data) ? data : data.municipios || []) as any[];
        const mapped: Municipio[] = list
          .map((m) => ({
            code: String(m.CODIGOINE ?? m.cod_ine ?? m.ID ?? m.id ?? "").trim(),
            name: String(m.NOMBRE ?? m.nombre ?? m.municipio ?? "").trim(),
          }))
          .filter((m) => m.name)
          .sort((a, b) => a.name.localeCompare(b.name, "es"));

        setMunicipios(mapped);
      } catch (e) {
        console.error("Error cargando municipios:", e);
        setMunicipios([]);
      } finally {
        setLoadingMun(false);
      }
    })();
  }, [provincia]);

  const navigate = useNavigate();
  const [anio, setAnio] = useState<string>("");

  const handleBuscar = () => {
    const filtros: Record<string, string> = {
      ...(nombre ? { nombre } : {}),
      ...(provincia ? { provincia } : {}),
      ...(municipio ? { municipio } : {}),
      ...(anio ? { anio } : {}),
    };
    navigate({ pathname: "/resultados", search: `?${createSearchParams(filtros)}` });
  };

  const handleLimpiar = () => {
    setNombre("");
    setProvincia("");
    setMunicipio("");
    setAnio("");
    setMunicipios([]);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-stack">
        <div>
          <label className="label">Nombre y apellidos</label>
          <input
            className="input"
            placeholder="Ej: Juan Pérez García"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="grid-2">
          <div>
            <label className="label">Ciudad / Provincia</label>
            <select
              className="select"
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
              disabled={loadingProv || provincias.length === 0}
            >
              <option value="">{loadingProv ? "Cargando..." : "— elegir —"}</option>
              {provincias.map((p) => (
                <option key={p.code} value={p.code}>{p.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="label">Pueblo / Municipio</label>
            <select
              className="select"
              value={municipio}
              onChange={(e) => setMunicipio(e.target.value)}
              disabled={!provincia || loadingMun || municipios.length === 0}
            >
              <option value="">
                {!provincia ? "— elige provincia —" : loadingMun ? "Cargando..." : (municipios.length ? "— elegir —" : "— sin datos —")}
              </option>
              {municipios.map((m) => (
                <option key={`${m.code}-${m.name}`} value={m.name}>{m.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="label">Año de fallecimiento</label>
          <select className="select" value={anio} onChange={(e) => setAnio(e.target.value)}>
            <option value="">— cualquier año —</option>
            {anios.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>

        <div className="actions">
          <button type="button" className="btn secondary" onClick={handleLimpiar}>Limpiar</button>
          <button type="button" className="btn primary" onClick={handleBuscar}>Buscar</button>
        </div>
      </div>
    </form>
  );
}
