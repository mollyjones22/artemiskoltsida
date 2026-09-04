import { getProjectPhotos } from "../gallery";
import ProjectCarousel from "./ProjectCarousel";

type ProjectGalleryProps = {
  allowFullscreen?: boolean;
  gallery: string;
  mediaLinks?: {
    afterPhoto?: number;
    href: string;
    label: string;
  }[];
  references?: string[];
  title: string;
  number: string;
  id?: string;
  variant?: "default" | "nisos";
};

export default function ProjectGallery({
  allowFullscreen,
  gallery,
  mediaLinks,
  references,
  title,
  number,
  id,
  variant = "default",
}: ProjectGalleryProps) {
  const photos = getProjectPhotos(number, title);

  if (photos.length > 0) {
    return (
      <ProjectCarousel
        allowFullscreen={allowFullscreen}
        id={id}
        images={photos}
        mediaLinks={mediaLinks}
        title={title}
        variant={variant}
      />
    );
  }

  if (!gallery) {
    return null;
  }

  return (
    <div
      id={id}
      className="mb-6 flex min-h-40 items-center justify-center border border-dashed border-black px-4 py-8 text-center text-sm leading-normal"
      aria-label={`${title} photo gallery placeholder`}
    >
      <p>
        Photo gallery placeholder
        <br />
        {references?.map((reference) => (
          <span key={reference}>
            {reference}
            <br />
          </span>
        ))}
        {gallery}
      </p>
    </div>
  );
}
