import { NoiseContainer } from "./grayni-noise";

export default function Background() {
  return (
    <div className="absolute w-full h-full top-0">
      <NoiseContainer type="background" />
    </div>
  )
}