
import { data } from "../data"

export default function Stats() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-6 text-center border border-teal-500/20">
            <h3 className="text-3xl font-bold text-teal-400">{s.number}</h3>
            <p className="text-slate-400 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
