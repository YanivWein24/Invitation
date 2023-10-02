import { IFloatingImages } from "@data/images";
import FadeIn from "@styles/animations/FadeIn.styled";
import FloatingImage, {
  FloatingImageReversed,
} from "@styles/animations/FloatAround.styled";

export default function FloatingImages({
  images,
}: {
  images: IFloatingImages[];
}) {
  return (
    <div>
      {/* do not remove the div */}
      {images.map(({ src, alt, ...props }, index) => {
        const baseDelay = index % 2 ? 0 : 0;
        return (
          <FadeIn
            key={src}
            width="100%"
            duration="3s"
            delay={`${baseDelay + 0.2 * index}s`}
          >
            {index === 1 || index % 2 ? (
              <FloatingImage src={src} alt={alt} {...props} />
            ) : (
              <FloatingImageReversed src={src} alt={alt} {...props} />
            )}
          </FadeIn>
        );
      })}
    </div>
  );
}
