import { Welcome } from '../components/Welcome/Welcome';
import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { TableReviews } from '@/components/TableReview/TableReviews';

export function HomePage() {
  return (
    <>
      <HeaderSimple />
      <Welcome />
      <TableReviews />
    </>
  );
}
