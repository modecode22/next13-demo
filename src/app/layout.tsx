import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='text-stone-200 bg-amber-900/20'>{children}</body>
    </html>
  )
}
