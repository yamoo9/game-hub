import platforms from '../data/platforms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platforms, isLoading: false, error: '' });

export default usePlatforms;
