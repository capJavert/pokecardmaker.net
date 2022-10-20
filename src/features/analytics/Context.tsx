import React, { createContext, useCallback, useEffect, useRef } from 'react';
import { useCardRelations } from '@cardEditor/cardOptions';
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
  const { baseSet, supertype, type, subtype, variation, rarity } =
    useCardRelations();
  const cardDataRef = useRef(
    relationsToSlugs({ baseSet, supertype, type, subtype, variation, rarity }),
  );

  useEffect(() => {
    cardDataRef.current = relationsToSlugs({
      baseSet,
      supertype,
      type,
      subtype,
      variation,
      rarity,
    });
  }, [baseSet, supertype, type, subtype, variation, rarity]);

  const trackCardCreatorEvent = useCallback(
    (event: CardCreatorAnalyticsEvent, data?: Record<string, string>) => {
      setTimeout(() => {
        pushToDataLayer(event, {
          card: cardDataRef.current,
          ...data,
        });
      }, 1000);
    },
    [],
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
