import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Svg_Active_Add = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6Z" />
  </Svg>
)
export default Svg_Active_Add
