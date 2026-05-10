interface PlaceholderPageProps {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-8 shadow-panel">
      <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
        This section is ready for the next dashboard tasks.
      </p>
    </section>
  )
}
