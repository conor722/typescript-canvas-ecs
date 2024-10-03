import {
  Bodies,
  Body,
  Composite,
  Engine,
  IChamferableBodyDefinition
} from 'matter-js';
import { Position } from '..';
import System from '../system';

type RigidBody2DComponent = IChamferableBodyDefinition;

class RigidBox2D extends System<RigidBody2DComponent> {
  engine?: Engine;
  bodies: Map<EntityId, Body> = new Map();

  addToWorld(body: Body) {
    if (!this.engine) {
      this.engine = Engine.create({ gravity: { y: 400 } });
    }

    Composite.add(this.engine.world, body);
  }

  register(entityId: EntityId, component: RigidBody2DComponent): void {
    const position = Position.components.get(entityId);

    if (!position) {
      return;
    }

    this.components.set(entityId, component);

    const body = Bodies.rectangle(
      position.x,
      position.y,
      position.width,
      position.height,
      {
        angle: position.angle,
        ...component
      }
    );

    this.bodies.set(entityId, body);

    this.addToWorld(body);
  }

  processComponents(timedelta: number): void {
    Engine.update(this.engine, timedelta);

    for (const [entityId, body] of this.bodies) {
      const position = Position.components.get(entityId);
      position.x = body.position.x;
      position.y = body.position.y;

      position.angle = body.angle;
    }
  }
}

export default new RigidBox2D();
