import { CroppableCardImg } from '@cardEditor/types';
import { DroppableListItem } from './types';

export const isCardImg = (item: DroppableListItem): item is CroppableCardImg =>
  !!(item as CroppableCardImg).name;

export const constructDroppableList = (
  images: CroppableCardImg[],
): DroppableListItem[] => {
  const list: DroppableListItem[] = [];
  let dividerInserted = false;
  [...images]
    .sort((a, b) => a.order - b.order)
    .forEach(img => {
      if (!dividerInserted && !img.behindTemplate) {
        list.push({ id: 'divider' });
        dividerInserted = true;
      }
      list.push(img);
    });
  if (!dividerInserted) list.push({ id: 'divider' });
  return list;
};
