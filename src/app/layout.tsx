import './globals.css'
import Providers from '@/app/Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="text-stone-300 bg-slate-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
