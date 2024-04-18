import Form from '@/app/ui/produkty/formProduct';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchProducts } from '@/app/lib/data';
 
export default async function Page() {
  const produkty = await fetchProducts();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form produkty={produkty} />
    </main>
  );
}