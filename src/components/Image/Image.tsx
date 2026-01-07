import { Component, type Ref } from "ddd-react";

interface ImageProps {
  src?: string;
  alt?: string;
  className?: string;
  getRootRef?: Ref<HTMLElement>;
  fallbackSRC?: string;
  [key: string]: any;
}

export class Image extends Component<ImageProps> {
  render() {
    const { src, alt, className, getRootRef, fallbackSRC, ...rest } =
      this.props;

    if (!src) {
      return <div />;
    }

    return (
      <img
        alt={alt}
        src={src}
        ref={getRootRef}
        className={className}
        onError={(e: Event) => {
          const target = e.target as HTMLImageElement | null;

          if (target && fallbackSRC) {
            target.src = fallbackSRC;
            target.onerror = null;
          }
        }}
        {...rest}
      />
    );
  }
}
