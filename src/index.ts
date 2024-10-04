import {
  InitScript,
  Position,
  Picture,
  RigidBox2D,
  Text,
  Fill
} from './systems';
import Pic from '../images/man.jpg';
import Ground from '../images/wood.jpg';
import { Body } from 'matter-js';
import { createContext, getContext } from './context';

createContext();

const entity = 'entity';

Position.register(entity, {
  x: 100,
  y: 0,
  z: 0,
  width: 167,
  height: 250,
  angle: 0
});
Picture.register(entity, Pic);
RigidBox2D.register(entity, { density: 0.15 });
InitScript.register(entity, (entityId) => {
  document.body.onkeyup = function (e) {
    console.log({ e });
    e.preventDefault();

    if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
      e.preventDefault();
      const body = RigidBox2D.bodies.get(entityId);
      Body.applyForce(body, body.position, { x: 0, y: -200000 });
      Text.components.get(text).text = 'You have jumped';
    }
  };
});
// Velocity.register(entity, { x: 0.3, y: 0, z: 0 });

const ground = 'ground';

Position.register(ground, {
  x: 100,
  y: 500,
  z: 0,
  width: 659,
  height: 360,
  angle: 0
});
Picture.register(ground, Ground);
RigidBox2D.register(ground, { isStatic: true });

const text = 'text';

Text.register(text, { text: 'Press space to jump' });
Position.register(text, {
  x: 140,
  y: 200,
  z: 0,
  width: 100,
  height: 100,
  angle: 0.5
});

const square = 'square';

Position.register(square, {
  x: 240,
  y: 40,
  z: 0,
  width: 100,
  height: 100,
  angle: 0
});
Fill.register(square, 'cyan');

Picture.processComponents(1);

let prevTime: number;

const step = (timeStamp: number) => {
  if (!prevTime) {
    prevTime = timeStamp;
  }
  const timeDelta = (timeStamp - prevTime) / 100;

  const context = getContext();
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  RigidBox2D.processComponents(timeDelta);
  //Velocity.processComponents(timeDelta);
  Picture.processComponents(timeDelta);
  Text.processComponents();
  Fill.processComponents();

  prevTime = timeStamp;

  requestAnimationFrame(step);
};

requestAnimationFrame(step);
