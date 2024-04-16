import AcmeLogo from '@/app/ui/logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center md:justify-start h-screen">
      <div className="relative flex w-full mb-6 md:mb-0 max-w-[300px] flex-col">
        <div className="flex h-20 w-full items-end rounded-r-xl bg-color-500 p-3 md:h-screen">
          <div className="w-44 text-white md:w-44">
            <AcmeLogo />
          </div>
        </div>
      </div>
      <div className='mx-auto'>
       
        <LoginForm />
      </div>
    </main>
  );
}
