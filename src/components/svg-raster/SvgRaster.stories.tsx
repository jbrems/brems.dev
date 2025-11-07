import { color } from "storybook/theming";
import { SvgRaster, SvgRasterLine, SvgRasterPoint } from "./SvgRaster";

export default {
  component: SvgRaster,
}

export const tenByTen = {
  args: {
    columns: 10,
    rows: 10,
    size: 30,
    color: '#aaa',
  }
}

export const withChildren = {
  args: {
    columns: 10,
    rows: 10,
    size: 30,
    color: '#aaa',
    children: <>
      <SvgRasterLine x1={3} y1={2} x2={3} y2={3} />
      <SvgRasterPoint x={3} y={2} />
      <SvgRasterPoint x={3} y={3} />
      <SvgRasterLine x1={7} y1={2} x2={7} y2={3} />
      <SvgRasterPoint x={7} y={2} />
      <SvgRasterPoint x={7} y={3} />
      <SvgRasterLine x1={2} y1={6} x2={4} y2={8} />
      <SvgRasterLine x1={4} y1={8} x2={6} y2={8} />
      <SvgRasterLine x1={6} y1={8} x2={8} y2={6} />
      <SvgRasterPoint x={2} y={6} />
      <SvgRasterPoint x={8} y={6} />
      <SvgRasterPoint x={4} y={8} />
      <SvgRasterPoint x={6} y={8} />
    </>
  }
}

export const Arrow = {
  args: {
    columns: 10,
    rows: 10,
    size: 30,
    color: '#aaa',
    children: <>
      <SvgRasterLine x1={4} y1={3} x2={1} y2={5} />
      <SvgRasterLine x1={1} y1={5} x2={4} y2={7} />
      <SvgRasterLine x1={1} y1={5} x2={9} y2={5} />
      <SvgRasterPoint x={4} y={3} />
      <SvgRasterPoint x={1} y={5} />
      <SvgRasterPoint x={4} y={7} />
      <SvgRasterPoint x={9} y={5} />
    </>
  }
}