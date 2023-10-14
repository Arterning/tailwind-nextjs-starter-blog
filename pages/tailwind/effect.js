import React from 'react'

/**
 * rsf 快速生成组件模板 react function
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Effect(props) {
  return (
    <div>
      <h1>Effect</h1>
      <div className="shadow-lg w-20 h-20 bg-sky-500 m-5"></div>
      <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 m-4">Subscribe</button>
      <button className="shadow shadow-blue-500/40 hover:shadow-indigo-500/40">Hover ME</button>

      <h2>Opacity</h2>
      <button className="bg-indigo-500 opacity-100"></button>
      <Footer />
    </div>
  )
}

function Footer(props) {
  return <div>{props.data}</div>
}

export default Effect
