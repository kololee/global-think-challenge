import { ActionIcon, Table, Container } from '@mantine/core';
import { Car } from '@/types/cars';
import { IconPencil } from '@tabler/icons-react';

import CarsModal from '@/components/Modal/Modal';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

interface DataTableProps {
  listOfCars: Car[]
}

export function DataTable({ listOfCars }: DataTableProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleClick = (car: Car) => {
    setSelectedCar(car);
    open();
  }

  const rows = listOfCars.map((row) => {
    return (
      <Table.Tr key={row.id}>
        <Table.Td>{row.brand}</Table.Td>
        <Table.Td>{row.model}</Table.Td>
        <Table.Td>{row.year}</Table.Td>
        <Table.Td>{row.version}</Table.Td>
        <Table.Td>{row.engineType}</Table.Td>
        <Table.Td>
          <ActionIcon radius={'xl'} aria-label="Edit car" color="gray" size="md" onClick={() => handleClick(row)}>
            <IconPencil />
          </ActionIcon>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Container my="md" mt={20}>
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="xs">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Brand</Table.Th>
              <Table.Th>Model</Table.Th>
              <Table.Th>Year</Table.Th>
              <Table.Th>Version</Table.Th>
              <Table.Th>Engine Type</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      {selectedCar && <CarsModal opened={opened} open={open} close={close} car={selectedCar} />}
    </Container>

  );
}