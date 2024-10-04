import { Position } from '..';
import { getContext } from '../../context';
import System from '../system';

type TextComponent = {
  text: string;
};

class Text extends System<TextComponent> {
  processComponents(): void {
    for (const [entityId, component] of this.components) {
      const position = Position.components.get(entityId);

      const ctx = getContext();

      ctx.font = '48px serif';

      ctx.save();

      ctx.translate(position.x, position.y);
      ctx.rotate(position.angle);

      ctx.fillText(
        component.text,
        -(position.width / 2),
        -(position.height / 2)
      );

      ctx.restore();
    }
  }
}

export default new Text();
