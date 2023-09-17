export default function Flex() {
  return (
    <div>
      <div className="flex flex-row flex-nowrap">
        <div className="basis-1/4">01</div>
        <div className="basis-1/4">02</div>
        <div className="basis-1/2">03</div>
        <div className="basis-1/4 hover:basis-1/2">04</div>
      </div>
      <div className="flex flex-col">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
    </div>
  )
}
