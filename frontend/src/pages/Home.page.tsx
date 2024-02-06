import { useEffect, useState } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { DataTable } from '@/components/DataTable/DataTable';
import Select from '@/components/Select/Select';

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

import { Car } from '@/types/cars';

// ** Actions Imports
import { fetchData } from '@/store/table';
import { AppDispatch, RootState } from '@/store';

export function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const store = useSelector((state: RootState) => state.table);

  const [listOfCars, setListOfCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState<String[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const res = await dispatch(fetchData());
      setListOfCars(res.payload);
    };
    fetchCars();
  }, []);

  console.log(filters)

  return (
    <>
      <HeaderSimple />
      <Welcome />
      <Select setFilters={setFilters} />
      {store.data.length > 0 && !store.isLoading &&
        <DataTable listOfCars={listOfCars} />
      }
    </>
  );
}
