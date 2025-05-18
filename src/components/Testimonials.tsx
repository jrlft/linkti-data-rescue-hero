
import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-white" id="depoimentos">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Histórias de <span className="text-linkti-blue">Sucesso</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nosso serviço de recuperação de dados homologado pela Apple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-apple-gray rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                <svg className="h-8 w-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Carlos Silva</h4>
                <p className="text-sm text-gray-500">Empresário</p>
              </div>
            </div>
            <div className="mb-3">
              <div className="flex text-yellow-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Perdi todos os arquivos do meu MacBook Pro após uma falha no SSD. Achei que tinha perdido anos 
              de projetos e fotos da família. A Link TI conseguiu recuperar 100% dos meus dados com esse serviço 
              homologado pela Apple. Valeu cada centavo!"
            </p>
            <p className="mt-4 text-sm text-linkti-blue">MacBook Pro • Falha de SSD</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-apple-gray rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                <svg className="h-8 w-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Amanda Oliveira</h4>
                <p className="text-sm text-gray-500">Fotógrafa</p>
              </div>
            </div>
            <div className="mb-3">
              <div className="flex text-yellow-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Meu iPhone caiu na água e não ligava mais. Tentei vários lugares que diziam conseguir recuperar 
              os dados, mas só a Link TI com esse serviço autorizado pela Apple conseguiu salvar minhas 
              fotos de trabalho e contatos. Profissionalismo total!"
            </p>
            <p className="mt-4 text-sm text-linkti-blue">iPhone 13 • Dano por líquido</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-apple-gray rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                <svg className="h-8 w-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Lucas Mendes</h4>
                <p className="text-sm text-gray-500">Advogado</p>
              </div>
            </div>
            <div className="mb-3">
              <div className="flex text-yellow-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="h-5 w-5 opacity-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Um HD externo com todos os processos do escritório parou de funcionar. A Link TI gerenciou todo o 
              processo e meus arquivos foram recuperados pelo parceiro homologado Apple em tempo recorde. 
              O melhor é que manteve a garantia do meu equipamento!"
            </p>
            <p className="mt-4 text-sm text-linkti-blue">HD Externo • Falha mecânica</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
