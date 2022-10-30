import { PropsWithChildren } from 'react';
import { TooltipProps } from '../Tooltip/types';

export interface FileUploaderProps {
  slug: string;
  label: string;
  /**
   * If this is enabled, the fileName will not show up when uploading
   */
  hideFileName?: boolean;
  onChange: (name: string, src: string) => void;
  file?: string;
  tooltipProps?: PropsWithChildren<TooltipProps>;
}
