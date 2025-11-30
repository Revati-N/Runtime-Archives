import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl animate-fade-in">
        {children}
      </main>
      <footer className="bg-deep-brown text-parchment py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display">Runtime Archives © {new Date().getFullYear()}</p>
          <p className="text-sm mt-2 opacity-80">A Personal Knowledge Repository</p>
        </div>
      </footer>
    </div>
  )
}
