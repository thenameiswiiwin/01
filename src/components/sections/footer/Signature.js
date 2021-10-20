function Signature() {
  const year = new Date().getFullYear()

  return (
    <section className="text-right text-8 font-bold">
      <div className="border-secondary">
        <h5 className="pt-2.5">© {year} Huy Nguyen</h5>
      </div>
    </section>
  )
}

export default Signature
