import { Position, Render, RigidBox2D } from './systems';
import Pic from '../images/man.jpg';
import Ground from '../images/wood.jpg';

const body = document.body;
const canvas = document.createElement('canvas');
canvas.height = 500;
canvas.width = 500;
canvas.id = 'tutorial';
body.appendChild(canvas);

const entity = 1;

Position.register(entity, {
  x: 100,
  y: 0,
  z: 0,
  width: 167,
  height: 250,
  angle: 0
});
Render.register(entity, Pic);
RigidBox2D.register(entity, {});
// Velocity.register(entity, { x: 0.3, y: 0, z: 0 });

const ground = 2;

Position.register(ground, {
  x: 100,
  y: 500,
  z: 0,
  width: 659,
  height: 360,
  angle: 0
});
Render.register(ground, Ground);
RigidBox2D.register(ground, { isStatic: true });

Render.processComponents(1);

let prevTime: number;

const step = (timeStamp: number) => {
  if (!prevTime) {
    prevTime = timeStamp;
  }
  const timeDelta = (timeStamp - prevTime) / 100;

  RigidBox2D.processComponents(timeDelta);
  //Velocity.processComponents(timeDelta);
  Render.processComponents(timeDelta);

  prevTime = timeStamp;

  requestAnimationFrame(step);
};

requestAnimationFrame(step);
