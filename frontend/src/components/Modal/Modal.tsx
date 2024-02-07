import { Car, EngineType } from '@/types/cars';
import { Modal, Button, Stack, TextInput, Select } from '@mantine/core';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface CarsModalProps {
  opened: boolean;
  open: () => void;
  close: () => void;
  car: Car | null;
}

type FormValues = {
  brand: string;
  model: string;
  year: number;
  version: string;
  engineType: EngineType;
};

export default function CarsModal({ opened, open, close, car }: CarsModalProps) {
  console.log('car in modal', car)

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      brand: car ? car.brand : '',
      model: car ? car.model : '',
      year: car ? car.year : 0,
      version: car ? car.version : '',
      engineType: car ? car.engineType : EngineType.V8,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  const handleOnClose = () => {
    close();
    reset();
  }

  return (
    <>
      <Modal opened={opened} onClose={handleOnClose} title="Edit car" centered>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <Controller
              name="brand"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Brand"
                  placeholder="Ferrari"
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