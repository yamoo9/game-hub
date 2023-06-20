import placeholderImage from '../assets/placeholder-image.svg';

function getCroppedImageUrl(url: string): string {
  return url ? url.replace('media/', 'media/crop/600/400/') : placeholderImage;
}

export default getCroppedImageUrl;
