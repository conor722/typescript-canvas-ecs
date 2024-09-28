import { Position, Render, Velocity } from './systems';
import Pic from '../images/man.jpg';

const body = document.body;
const canvas = document.createElement('canvas');
canvas.height = 150;
canvas.width = 150;
canvas.id = 'tutorial';
body.appendChild(canvas);

const entity = 1;

Position.register(entity, { x: 0, y: 0, z: 0, angle: 0 });
Render.register(entity, Pic);
Velocity.register(entity, { x: 0.3, y: 0, z: 0 });

Render.processComponents(1);

let prevTime: number;

const step = (timeStamp: number) => {
  if (!prevTime) {
    prevTime = timeStamp;
  }
  const timeDelta = (timeStamp - prevTime) / 100;

  Velocity.processComponents(timeDelta);
  Render.processComponents(timeDelta);

  prevTime = timeStamp;

  requestAnimationFrame(step);
};

requestAnimationFrame(step);
