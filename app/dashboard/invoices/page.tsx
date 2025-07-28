import { fetchInvoicesPages } from '@/app/lib/data';

export default async function Page() {
  // 用于验证 route group（overview） 前后访问 invoices 页面时，loading 组件的显示情况
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <p>Invoices Page</p>;
}