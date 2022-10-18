import { useContext } from 'react';
import { SettingsContext } from '../Context';

const useSettings = () => {
  const state = useContext(SettingsContext);

  return {
    ...state,
  };
};

export default useSettings;
