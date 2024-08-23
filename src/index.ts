import { Position, Render, Velocity } from './systems';

const entity = 1;

Position.register(entity, { x: 0, y: 0, z: 0 });
Render.register(entity, 'images/man.jpg');
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
