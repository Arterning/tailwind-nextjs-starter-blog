export default function Border() {
  return (
    <div>
      <h1>Border</h1>
      <div className="rounded bg-amber-100 w-20">a</div>
      <div className="rounded-md bg-amber-300 w-20">b</div>
      <div className="rounded-lg bg-amber-300 w-20">c</div>
      <div className="rounded-full bg-amber-500 w-20">d</div>
      <button className="rounded-full bg-sky-200">Save Changes</button>
      <h1>Border</h1>
      <div className="border-8 border-sky-500 w-12 h-12 bg-amber-500"></div>
    </div>
  )
}
