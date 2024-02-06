import { Welcome } from '../components/Welcome/Welcome';
import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { DataTable } from '@/components/DataTable/DataTable';

export function HomePage() {


  return (
    <>
      <HeaderSimple />
      <Welcome />
      <DataTable />
    </>
  );
}
