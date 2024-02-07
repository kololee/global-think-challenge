import { AppDispatch } from '@/store';
import { updateCar } from '@/store/table';
import { Car, EngineType } from '@/types/cars';
import { Modal, Button, Stack, TextInput, Select } from '@mantine/core';
import { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';

interface CarsModalProps {
  opened: boolean;
  open: () => void;
  close: () => void;
  car: Car;
}

type FormValues = {
  id: string;
  brand: string;
  model: string;
  year: number;
  version: string;
  engineType: EngineType;
};

export default function CarsModal({ opened, open, close, car }: CarsModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      id: car.id,
      brand: car.brand,
      model: car.model,
      year: car.year,
      version: car.version,
      engineType: car.engineType,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(updateCar(data));
  }

  useEffect(() => {
    if (opened) {
      reset({
        id: car.id,
        brand: car.brand,
        model: car.model,
        year: car.year,
        version: car.version,
        engineType: car.engineType,
      });
    }
  }, [opened, reset, car]);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Edit car" centered>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <Controller
              name="brand"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Brand"
                  radius="md"
                  {...field}
                />
              )}
            />

            <Controller
              name="model"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Model"
                  placeholder="Roma"
                  radius="md"
                  {...field}
                />
              )}
            />

            <Controller
              name="year"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Year"
                  placeholder="2020"
                  radius="md"
                  {...field}
                />
              )}
            />

            <Controller
              name="version"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Version"
                  placeholder="Coupe"
                  radius="md"
                  {...field}
                />
              )}
            />

            <Controller
              name="engineType"
              control={control}
              render={({ field }) => (
                <Select
                  label="EngineType"
                  placeholder="V8"
                  data={Object.values(EngineType)}
                  radius="md"
                  {...field}
                />
              )}
            />
          </Stack>
          <Button mt={20} size='sm' type='submit'>Save changes</Button>
        </form>
      </Modal>

    </>
  );
}