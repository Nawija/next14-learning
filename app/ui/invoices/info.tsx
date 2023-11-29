import { deleteInvoice } from '@/app/lib/actions';

export function InfoDeleted({ id }: { id: string }) {
 const deletionResult = deleteInvoice(id);

  console.log(deletionResult.message);
  return (
    <div
      id="invoice-toast"
      className={`absolute right-0 top-0 mt-2 rounded-md ${
        deleteInvoice ? 'bg-green-500' : 'bg-red-500'
      }  p-4 text-white`}
    >
      <p>Invoice deleted successfully!</p>
    </div>
  );
}
