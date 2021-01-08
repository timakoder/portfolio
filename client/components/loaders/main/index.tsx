
import { Icon } from '../../icons';

import styles from './main-loader.module.scss';

export const MainLoader = () => {
  return <div className={styles.root}>
    <Icon name="meditation" className={styles.icon}/>
    <span className={styles.label}>tima initializing...</span>
  </div>
}
