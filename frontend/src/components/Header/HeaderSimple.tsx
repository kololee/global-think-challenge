import { ActionIcon, Button, Container, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './HeaderSimple.module.css';

export function HeaderSimple() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <MantineLogo size={28} />
        <ActionIcon
          onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      </Container>
    </header>
  );
}