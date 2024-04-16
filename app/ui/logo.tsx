import { AiOutlineGitlab } from 'react-icons/ai';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <AiOutlineGitlab className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[40px]">Perlon</p>
    </div>
  );
}
