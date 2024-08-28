import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Props {
  iconAwesome: IconProp;
  text: string;
  onClick: Function;
  color: string;
  args: boolean;
  isDisabled?: boolean;
}