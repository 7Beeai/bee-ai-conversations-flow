
const ChatModal = () => {
  return (
    <div id="chat-modal" className="fixed inset-0 z-50 bg-black bg-opacity-50 hidden flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold">Demonstração 7Bee.AI</h3>
          <button 
            onClick={() => document.getElementById('chat-modal')?.classList.add('hidden')}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-auto p-4">
          <div className="flex flex-col space-y-4">
            {/* This would be replaced by the actual chat interface */}
            <div className="flex items-start">
              <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-800">Olá! Sou o assistente da 7Bee.AI. Como posso ajudar você hoje?</p>
              </div>
            </div>
            
            <div className="flex items-start justify-end">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-800">Gostaria de saber mais sobre a ferramenta de vocês.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                <p className="text-gray-800">Claro! A 7Bee.AI é uma solução de inteligência artificial com comportamento humano para vendas, cobranças e atendimento. O que mais específico você gostaria de saber?</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t">
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder="Digite sua mensagem..." 
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
