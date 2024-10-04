import { CANVAS_ID } from './constants';

export default () => {
  const canvas = <HTMLCanvasElement>document.getElementById(CANVAS_ID);
  return canvas.getContext('2d');
};
