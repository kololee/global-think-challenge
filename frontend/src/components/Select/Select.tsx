import { Car, EngineType } from "@/types/cars";
import { Container, MultiSelect } from "@mantine/core";

export function Select() {
  const carFields: Array<keyof Car> = Object.keys({
    id: "",
    brand: "",
    version: "",
    model: "",
    year: 0,
    engineType: EngineType.V8
  } as Car) as Array<keyof Car>;

  return (
    <Container size={'xs'} mt={20}>
      <MultiSelect
        size='sm'
        radius='lg'
        label="Your favorite fields"
        placeholder="Pick value"
        data={['brand', 'model', 'year', 'version', 'engineType']}
        defaultValue={[]}
        clearable
      />
    </Container>
  )
}
