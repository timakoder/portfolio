import { FC } from 'react';
import cx from 'classnames';
import { Icon, IconName } from '../../icons';

import styles from './toggle.module.scss';

export type ToggleProps = {
  enabled: boolean,
  onClick: () => void,
  enabledIconName?: IconName,
  disabledIconName?: IconName
}

export const Toggle: FC<ToggleProps> = ({
  onClick,
  enabled,
  enabledIconName,
  disabledIconName
}) => {
  return <div className={cx(styles.toggleContainer, enabled && styles.enabled)} onClick={onClick}>
    {
      enabledIconName && <Icon name={enabledIconName} className={cx(styles.icon, styles.enabledIcon)}/>
    }
    {
      disabledIconName && <Icon name={disabledIconName} className={cx(styles.icon, styles.disabledIcon)}/>
    }
    <div
      className={cx(styles.thumb, enabled && styles.enabled)}
    />
  </div>
}