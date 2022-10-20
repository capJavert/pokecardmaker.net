import { useContext } from 'react';
import { AnalyticsContext } from '../Context';

const useAnalytics = () => {
  const state = useContext(AnalyticsContext);

  return state;
};

export default useAnalytics;
