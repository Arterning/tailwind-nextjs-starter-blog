export default function Bg() {
  return (
    <>
      <h1>Bg</h1>
      <div className="h-full w-full bg-[url('/static/images/ocean.jpeg')]"></div>
      <div className="w-200 h-200">hello images</div>
      <button className="bg-indigo-500 w-100 h-100">Save changes</button>
      <button className="bg-sky-500/100 ml-10">Sky Button</button>
    </>
  )
}
