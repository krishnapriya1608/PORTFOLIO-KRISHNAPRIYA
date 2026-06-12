export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8 text-center">
      <p className="text-slate-600 text-xs font-mono">
        Designed & built by <span className="text-teal-500">Krishnapriya C S</span> · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
