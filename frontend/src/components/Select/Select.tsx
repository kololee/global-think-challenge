import { Container, MultiSelect } from "@mantine/core";

interface SelectProps {
  setFilters: React.Dispatch<React.SetStateAction<String[]>>;
}

const Select: React.FC<SelectProps> = ({ setFilters }) => {

  return (
    <Container size={'xs'} mt={20}>
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
      
    </Container>
  )
}

export default Select;