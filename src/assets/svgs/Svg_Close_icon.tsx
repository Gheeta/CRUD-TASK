import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Svg_Close_icon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#135D66"
      d="M4.586 6 .343 1.757 1.757.343 6 4.586 10.243.343l1.414 1.414L7.414 6l4.243 4.243-1.414 1.414L6 7.414l-4.243 4.243-1.414-1.414L4.586 6Z"
    />
  </Svg>
)
export default Svg_Close_icon
