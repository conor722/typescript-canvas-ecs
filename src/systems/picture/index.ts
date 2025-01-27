import System from '../system';
import Position, { PositionComponent } from '../position';
import { getContext } from '../../context';

class ImageLoadWrapper {
  image: HTMLImageElement;
  loaded: boolean;

  constructor(src: string) {
    this.image = new Image();
    this.image.onload = () => (this.loaded = true);
    this.image.src = src;
  }
}

class ImageLoader {
  imageLoadWrappers: Map<string, ImageLoadWrapper> = new Map();

  new(src: string) {
    if (this.imageLoadWrappers.has(src)) {
      return;
    }

    this.imageLoadWrappers.set(src, new ImageLoadWrapper(src));
  }

  get allImagesLoaded() {
    return Array.from(this.imageLoadWrappers.values()).every(
      (imageLoader) => imageLoader.loaded
    );
  }
}

type ImageComponent = string;

class Picture extends System<ImageComponent> {
  imageLoader: ImageLoader = new ImageLoader();

  render(image: HTMLImageElement, position: PositionComponent) {
    const canvas = <HTMLCanvasElement>document.getElementById('tutorial');
    const ctx = getContext();

    ctx.save();

    ctx.translate(position.x, position.y);
    ctx.rotate(position.angle);
    ctx.drawImage(image, -(position.width / 2), -(position.height / 2));

    ctx.restore();
  }

  register(entityId: EntityId, component: ImageComponent): void {
    this.imageLoader.new(component);
    this.components.set(entityId, component);
  }

  processComponents(_timedelta: number): void {
    for (const [entityId, imageComponent] of this.components) {
      const position = Position.components.get(entityId);

      if (!position) {
        return;
      }

      this.render(
        this.imageLoader.imageLoadWrappers.get(imageComponent).image,
        position
      );
    }
  }
}

export default new Picture();
