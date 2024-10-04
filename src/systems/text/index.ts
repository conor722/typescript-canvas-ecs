import { Position } from '..';
import { getContext } from '../../context';
import System from '../system';

type TextComponent = {
  text: string;
  size?: number;
  fontType?: string;
};

class Text extends System<TextComponent> {
  processComponents(): void {
    for (const [entityId, component] of this.components) {
      const position = Position.components.get(entityId);

      const ctx = getContext();

      const { size = 32, fontType = 'Verdana', text } = component;

      const font = `${size}px ${fontType}`;

      ctx.font = font;

      ctx.save();

      ctx.translate(position.x, position.y);
      ctx.rotate(position.angle);

      ctx.fillText(text, -(position.width / 2), -(position.height / 2));

      ctx.restore();
    }
  }
}

export default new Text();
