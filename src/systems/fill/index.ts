import { Position } from '..';
import System from '../system';

type FillComponent = CanvasFillStrokeStyles['fillStyle'];

class Fill extends System<FillComponent> {
  processComponents(): void {
    for (const [entityId, component] of this.components) {
      const position = Position.components.get(entityId);

      const canvas = <HTMLCanvasElement>document.getElementById('tutorial');
      const ctx = canvas.getContext('2d');

      ctx.save();

      ctx.translate(position.x, position.y);
      ctx.rotate(position.angle);
      ctx.fillStyle = component;
      ctx.fillRect(
        -position.width / 2,
        -position.height / 2,
        position.width,
        position.height
      );
      ctx.fillRect;

      ctx.restore();
    }
  }
}

export default new Fill();
