import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import PageWrapper from '@/components/PageWrapper' 
import Footer from '@/components/Footer' 
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Jay Tech Viralkit',
  description: 'Your one-stop shop for viral content creation tools.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} bg-brand-dark-blue text-white`}>
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#1B263B', // brand-light-blue
              color: '#ffffff',
              border: '1px solid #415A77', // brand-border-blue
            },
          }}
        />
        <Header />
        <main className="container mx-auto p-4 md:p-8 flex-grow">
          {/* Use the PageWrapper here */}
          <PageWrapper>
            {children}
          </PageWrapper>
        </main>
        <Footer />
      </body>
    </html>
  )
}