import React, { createContext, useCallback, useEffect, useRef } from 'react';
import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';
import { useSettings } from '@features/settings';
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
  const { themeMode } = useSettings();
  const {
    retreatCost,
    customRarityIconImgSrc,
    customRotationIconImgSrc,
    customSetIconSrc,
  } = useCardOptions();
  const { typeImg: _, ...relations } = useCardRelations();
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
      setIcon: customSetIconSrc ? 'custom' : relationSlugs.setIcon,
    };
  }, [
    retreatCost,
    relations,
    customRarityIconImgSrc,
    customRotationIconImgSrc,
    customSetIconSrc,
  ]);

  // TODO: Maybe only track relations that have dependencies with this fn (so not weaknessType, badgeIcon, etc.)
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
