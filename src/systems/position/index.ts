import System from '../system';

type PositionComponent = {
  x: number;
  y: number;
  z: number;
  angle: number;
};

class Position extends System<PositionComponent> {}

export default new Position();
