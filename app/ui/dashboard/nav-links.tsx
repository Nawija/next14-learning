'use client';

import { IoMdPricetags } from "react-icons/io";
import { SlDocs } from "react-icons/sl";
import { IoHomeOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: IoHomeOutline },
  {
    name: 'Faktury',
    href: '/dashboard/invoices',
    icon: SlDocs,
  },
  {
    name: 'Produkty',
    href: '/dashboard/invoices',
    icon: IoMdPricetags,
  },
  { name: 'Klienci', href: '/dashboard/customers', icon: FaUsers },
];

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium transition-colors hover:bg-color-400/20 hover:text-color-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-color-400/30 text-color-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6 text-xl" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
