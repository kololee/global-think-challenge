import { Welcome } from '../components/Welcome/Welcome';
import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { DataTable } from '@/components/DataTable/DataTable';
import { useEffect, useState } from 'react';

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { fetchData } from '@/store/table';
import { AppDispatch, RootState } from '@/store';
import { Car } from '@/types/cars';

export function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector((state: RootState) => state.table);

  const [listOfCars, setListOfCars] = useState<Car[]>([]);

  useEffect(() => {
    dispatch(fetchData());

    setListOfCars(store.data);
  }, []);

  return (
    <>
      <HeaderSimple />
      <Welcome />
      {!store.isLoading && store.data.length > 0 &&
        <DataTable listOfCars={listOfCars} />
      }
    </>
  );
}
