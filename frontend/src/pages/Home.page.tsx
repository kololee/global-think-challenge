import { Welcome } from '../components/Welcome/Welcome';
import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { DataTable } from '@/components/DataTable/DataTable';
import { useEffect, useState } from 'react';

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { fetchData } from '@/store/table';
import { AppDispatch, RootState } from '@/store';
import { Car, EngineType } from '@/types/cars';
import { MultiSelect } from '@mantine/core';
import { Select } from '@/components/Select/Select';

export function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector((state: RootState) => state.table);

  const [listOfCars, setListOfCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const res = await dispatch(fetchData());
      setListOfCars(res.payload);
    };
    fetchCars();
  }, []);

  return (
    <>
      <HeaderSimple />
      <Welcome />
      <Select />
      {store.data.length > 0 && !store.isLoading &&
        <DataTable listOfCars={listOfCars} />
      }
    </>
  );
}
