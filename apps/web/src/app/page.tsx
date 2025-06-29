export default function Index() {
  return (
    <>
      {/* Header semântico com navegação */}
      <header className="bg-red-700 text-white p-4 shadow-lg">
        <nav className="container mx-auto">
          <ul className="flex space-x-4 mt-2">
            <li><a href="#home" className="hover:text-red-200 transition-colors">Home</a></li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="container mx-auto p-4 min-h-screen flex-1">
        
      </main>

      {/* Footer semântico */}
      <footer className="bg-black text-white p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <section>
              <h4 className="font-semibold mb-2">Contato</h4>
              <address className="text-sm text-gray-300 not-italic">
                <p>contato@messagesender.com</p>
                <p>+55 (11) 9999-9999</p>
              </address>
            </section>
          </div>
          
          <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm text-gray-300">
            <p>&copy; 2024 Message Sender. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
