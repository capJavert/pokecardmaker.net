import React, { createContext, useCallback, useEffect, useRef } from 'react';
import { useCardOptionsStore } from '@cardEditor/cardOptions';
import { useSettingsStore } from '@features/settings';
import { pushToDataLayer, relationsToSlugs } from './utils';
import { AnalyticsEvent, CardCreatorAnalyticsEvent } from './types';

interface AnalyticsContextInterface {
  trackCardCreatorEvent: (
    event: CardCreatorAnalyticsEvent,
    data?: Record<string, string>,
  ) => void;
  trackEvent: (event: AnalyticsEvent, data?: Record<string, string>) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextInterface>({
  trackCardCreatorEvent: () => null,
  trackEvent: () => null,
});

export const AnalyticsProvider: React.FC = ({ children }) => {
  const themeMode = useSettingsStore(store => store.theme);
  const {
    state: {
      retreatCost,
      customRotationIconImgSrc,
      customSetIconImgSrc,
      customRarityIconImgSrc,
    },
    relations: { typeImg: _, ...relations },
  } = useCardOptionsStore.getState();
  const cardDataRef = useRef<Record<string, string | number | undefined>>({
    retreatCost,
    ...relationsToSlugs(relations),
  });

  useEffect(() => {
    const relationSlugs = relationsToSlugs(relations);
    cardDataRef.current = {
      retreatCost,
      ...relationsToSlugs(relations),
      rarityIcon: customRarityIconImgSrc ? 'custom' : relationSlugs.rarityIcon,
      rotationIcon: customRotationIconImgSrc
        ? 'custom'
        : relationSlugs.rotationIcon,
      setIcon: customSetIconImgSrc ? 'custom' : relationSlugs.setIcon,
    };
  }, [
    retreatCost,
    relations,
    customRarityIconImgSrc,
    customRotationIconImgSrc,
    customSetIconImgSrc,
  ]);

  const trackCardCreatorEvent = useCallback(
    (event: CardCreatorAnalyticsEvent, data?: Record<string, string>) => {
      setTimeout(() => {
        pushToDataLayer(event, {
          card: cardDataRef.current,
          theme: themeMode,
          ...data,
        });
      }, 1000);
    },
    [themeMode],
  );

  const trackEvent = useCallback(
    (event: AnalyticsEvent, data?: Record<string, string>) => {
      pushToDataLayer(event, { ...data });
    },
    [],
  );

  return (
    <AnalyticsContext.Provider
      value={{
        trackCardCreatorEvent,
        trackEvent,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};
