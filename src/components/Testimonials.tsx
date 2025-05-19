
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empresário",
      image: null,
      rating: 5,
      text: "Perdi todos os arquivos do meu MacBook Pro após uma falha no SSD. Achei que tinha perdido anos de projetos e fotos da família. A Link TI conseguiu recuperar 100% dos meus dados com esse serviço homologado pela Apple. Valeu cada centavo!",
      device: "MacBook Pro • Falha de SSD"
    },
    {
      name: "Amanda Oliveira",
      role: "Fotógrafa",
      image: null,
      rating: 5,
      text: "Meu iPhone caiu na água e não ligava mais. Tentei vários lugares que diziam conseguir recuperar os dados, mas só a Link TI com esse serviço autorizado pela Apple conseguiu salvar minhas fotos de trabalho e contatos. Profissionalismo total!",
      device: "iPhone 13 • Dano por líquido"
    },
    {
      name: "Lucas Mendes",
      role: "Advogado",
      image: null,
      rating: 4,
      text: "Um HD externo com todos os processos do escritório parou de funcionar. A Link TI gerenciou todo o processo e meus arquivos foram recuperados pelo parceiro homologado Apple em tempo recorde. O melhor é que manteve a garantia do meu equipamento!",
      device: "HD Externo • Falha mecânica"
    },
    {
      name: "Juliana Costa",
      role: "Designer",
      image: null,
      rating: 5,
      text: "Três anos de trabalhos em meu iMac se perderam após uma atualização. Estava desesperada! A Link TI me atendeu com muita atenção e conseguiu recuperar absolutamente tudo através do parceiro homologado Apple. Recomendo a todos!",
      device: "iMac • Falha após atualização"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="depoimentos">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 rounded-full border border-linkti-blue/10 -top-20 left-20 opacity-50"></div>
        <div className="absolute w-96 h-96 rounded-full bg-linkti-blue/5 blur-3xl -bottom-48 -right-48"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Histórias de <span className="text-gradient">Sucesso</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nosso serviço de recuperação de dados homologado pela Apple.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4" data-aos="fade-up" data-aos-delay="200">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-50 h-full flex flex-col hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-linkti-blue to-linkti-darkblue flex items-center justify-center text-white overflow-hidden">
                        {testimonial.image ? (
                          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                        ) : (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        )}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? "" : "opacity-40"}`} 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 italic flex-grow">"{testimonial.text}"</p>
                    <div className="mt-4 flex items-center">
                      <div className="h-2 w-2 rounded-full bg-linkti-blue mr-2"></div>
                      <p className="text-sm font-medium text-linkti-blue">{testimonial.device}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-white/80 backdrop-blur-sm hover:bg-white" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-white/80 backdrop-blur-sm hover:bg-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
