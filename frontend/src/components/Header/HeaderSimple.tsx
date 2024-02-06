import { Button, Container, Group, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderSimple.module.css';

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <MantineLogo size={28} />
        <Group justify="center" mt="xs">
          <Button onClick={() => setColorScheme('light')}>Light</Button>
          <Button onClick={() => setColorScheme('dark')}>Dark</Button>
          <Button onClick={() => setColorScheme('auto')}>Auto</Button>
        </Group>
      </Container>
    </header>
  );
}