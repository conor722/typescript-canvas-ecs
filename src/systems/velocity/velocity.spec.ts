import Position from '../position';
import Velocity from '.';
import { describe, it, expect } from 'vitest';

describe('Velocity', () => {
  it('processes change of an entities position based on its velocity component', () => {
    const entityId = 1;
    const position = { x: 0, y: 0, z: 0, angle: 0 };
    const velocity = { x: 1, y: 0, z: 0, angle: 0 };

    Position.register(entityId, position);
    Velocity.register(entityId, velocity);

    Velocity.processComponents(1);

    expect(position).toEqual({
      x: 1,
      y: 0,
      z: 0
    });
  });

  it('processes change of an entities position based on its velocity component (negative velocity)', () => {
    const entityId = 1;
    const position = { x: 0, y: 0, z: 0, angle: 0 };
    const velocity = { x: -1, y: 0, z: 0, angle: 0 };

    Position.register(entityId, position);
    Velocity.register(entityId, velocity);

    Velocity.processComponents(1);

    expect(position).toEqual({
      x: -1,
      y: 0,
      z: 0
    });
  });

  it('processes change of an entities position based on its velocity component (velocity in all directions)', () => {
    const entityId = 1;
    const position = { x: 0, y: 0, z: 0, angle: 0 };
    const velocity = { x: -1, y: 1, z: 2, angle: 0 };

    Position.register(entityId, position);
    Velocity.register(entityId, velocity);

    Velocity.processComponents(1);

    expect(position).toEqual({
      x: -1,
      y: 1,
      z: 2
    });
  });

  it('processes change of an entities position based on its velocity component (timedelta less than 1)', () => {
    const entityId = 1;
    const position = { x: 0, y: 0, z: 0, angle: 0 };
    const velocity = { x: -1, y: 1, z: 2, angle: 0 };

    Position.register(entityId, position);
    Velocity.register(entityId, velocity);

    Velocity.processComponents(0.1);

    expect(position).toEqual({
      x: -0.1,
      y: 0.1,
      z: 0.2
    });
  });

  it('ignores components with no velocity component', () => {
    const entityId = 1;
    const position = { x: 0, y: 0, z: 0, angle: 0 };

    Position.register(entityId, position);

    Velocity.processComponents(1);

    expect(position).toEqual({
      x: 0,
      y: 0,
      z: 0
    });
  });
});
