import { Welcome } from '../components/Welcome/Welcome';
import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { DataTable } from '@/components/DataTable/DataTable';
import { useEffect } from 'react';

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { fetchData } from '@/store/table';
import { AppDispatch, RootState } from '@/store';

export function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector((state: RootState) => state.table);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <HeaderSimple />
      <Welcome />
      <DataTable cars={store.data} />
    </>
  );
}
