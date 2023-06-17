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
      <body className={`min-h-screen text-slate-700 bg-slate-100 ${inter.className}`}>
        <div className="w-full min-h-screen h-full relative bg-white md:bg-slate-100">
          <header className="fixed h-32 md:h-24 border-b-[1px] border-slate-300 w-full bg-white z-10">
            <div className="md:max-w-7xl w-full h-full mx-auto">
              <div className="flex items-center h-full p-5 md:p-0">
                <h1 className="text-5xl">Tools that Support My Online Articles</h1>
            </div>
            </div>
          </header>
          <main className="w-full h-full bg-white p-5">
            <div className="md:max-w-7xl w-full pt-32 pb-10 mx-auto">
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
