import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderSimple } from '@/components/Header/HeaderSimple';

export function HomePage() {
  return (
    <>
      <HeaderSimple />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
