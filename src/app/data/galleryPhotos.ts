import { engagements } from './engagements';

/**
 * @deprecated Use `engagements` from `./engagements` instead. This thin shim
 * remains for backward compatibility — it projects the unified engagement
 * data down to the original {id, src, title} shape.
 */
export interface Photo {
  id: string;
  src: string;
  title: string;
}

export const galleryPhotos: Photo[] = engagements.map((e) => ({
  id: e.id,
  src: e.image,
  title: e.title,
}));
