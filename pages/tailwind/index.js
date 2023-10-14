import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <h1 className="text-3xl">Tailwind Css 练习</h1>
      <ul>
        <li>
          <Link href="/tailwind/bg">背景样式练习</Link>
        </li>
        <li>
          <Link href="/tailwind/flex">Flex布局练习</Link>
        </li>
        <li>
          <Link href="/tailwind/grid">Grid布局练习</Link>
        </li>
        <li>
          <Link href="/tailwind/text">Text练习</Link>
        </li>
      </ul>
    </div>
  )
}
