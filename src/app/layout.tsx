import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'How to execute REST API on Apache Spark, the Right Way',
  description: 'Web service that supports the article How to execute REST API on Apache Spark, the Right Way',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={` text-slate-700 ${inter.className}`}>
        <div className="w-full min-h-screen relative">
          <header className="fixed h-24 border-b-[1px] border-slate-300 bg-white w-full">
            <div className="max-w-7xl w-full h-full mx-auto">
              header
            </div>
          </header>
          <main className="w-full h-full mb-10">
            <div className="max-w-7xl w-full pt-32 mx-auto">
              {children}
            </div>
          </main>
          <footer className="h-32 w-full border-t-[1px] border-slate-300 bg-slate-100">
            <div className="flex w-full h-full">
              <div className="m-auto">
                Copyright &copy; James Hocking.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
