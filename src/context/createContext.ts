import { CANVAS_ID } from './constants';

export default ({ height = 500, width = 500 } = {}) => {
  const body = document.body;

  const canvas = document.createElement('canvas');
  canvas.height = height;
  canvas.width = width;
  canvas.id = CANVAS_ID;
  body.appendChild(canvas);

  return canvas.getContext('2d');
};
