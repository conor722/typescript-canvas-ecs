import { Position, Render } from "./systems";

const entity = 1;

Position.register(entity, { x: 0, y: 0, z: 0 });
Render.register(entity, "images/man.jpg");

Render.processComponents(1);