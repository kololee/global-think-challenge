import { Button, Container, Grid, MultiSelect } from "@mantine/core";

interface SelectProps {
  setFilters: React.Dispatch<React.SetStateAction<String[]>>;
  filter: () => void;
}

const Select: React.FC<SelectProps> = ({ setFilters, filter }) => {

  return (
    <Container size={'xs'} mt={20}>
      <Grid justify="center" align="flex-end">
        <Grid.Col span={8}>
          <MultiSelect
            size='sm'
            radius='lg'
            label="Your favorite fields"
            placeholder="Pick value"
            data={['brand', 'model', 'year', 'version', 'engineType']}
            defaultValue={[]}
            onChange={setFilters}
            clearable
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <Button radius={'lg'} onClick={filter}>Filter</Button>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Select;