import { useState, useEffect } from 'react';
import { Toggle } from '../common/toggle';
import { useTheme, changeTheme, Theme } from '../../models/theme';

export const ThemeToggler = () => {
  const theme = useTheme();
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return rendered ? <Toggle
    enabledIconName="sun"
    disabledIconName="moon"
    enabled={theme === Theme.dark}
    onClick={() => changeTheme(theme === Theme.light ? Theme.dark : Theme.light)}
  /> : null;
}