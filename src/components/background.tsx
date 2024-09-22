import { NoiseContainer } from "./grayni-noise";

export default function Background() {
  return (
    <div className="absolute w-screen h-screen top-0">
      <NoiseContainer type="background" />
    </div>
  )
}