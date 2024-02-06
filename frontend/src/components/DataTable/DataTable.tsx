import { Table, Progress, Anchor, Text, Group, Container } from '@mantine/core';
import classes from './TableReviews.module.css';
import { Car } from '@/types/cars';

interface DataTableProps{
  listOfCars: Car[]
}

export function DataTable({ listOfCars }: DataTableProps) {

  const rows = listOfCars.map((row) => {

    return (
      <Table.Tr key={row.id}>
        <Table.Td>{row.brand}</Table.Td>
        <Table.Td>{row.model}</Table.Td>
        <Table.Td>{row.year}</Table.Td>
        <Table.Td>{row.version}</Table.Td>
        <Table.Td>{row.engineType}</Table.Td>
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
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Container>
  );
}