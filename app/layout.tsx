import { Nunito } from 'next/font/google'
import Navbar from '@/app/components/Navbar';

import LoginModal from '@/app/components/modals/LoginModal';

import './globals.css'
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Esade App',
  description: 'Esade Clone',
}

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <>
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
