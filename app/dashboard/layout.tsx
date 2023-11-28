import NextTopLoader from 'nextjs-toploader';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <NextTopLoader
          color="#36a5e6"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2.7}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 25px #3caff1,0 0 15px #2299DD"
          zIndex={1600}
          showAtBottom={false}
        />
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
