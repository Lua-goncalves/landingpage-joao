import { useEffect } from 'react';
import { trackPageView } from '@/lib/tracking';

/**
 * Hook to track page views on component mount
 * Use this in page-level components
 */
export const usePageTracking = (pageName?: string): void => {
  useEffect(() => {
    trackPageView(pageName);
  }, [pageName]);
};

export default usePageTracking;
