import sobreMarca from '../../assets/imagens/apresentaçao.png'

function AboutBrand() {
  return (
    <section className="w-full bg-fibra py-20 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={sobreMarca}
            alt="Produtos Coqueiro Beach Wear em cenário de praia"
            className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-lg"
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-palmeira">
            Nascida no litoral, feita pra quem vive o verão
          </h2>
          <p className="font-body text-base text-palmeira mt-6 leading-relaxed">
            A Coqueiro nasceu da vontade de vestir o verão do jeito que ele
            realmente é: livre, leve e sem pressa. Cada peça carrega um pouco
            da natureza que inspira o nome da marca — a sombra da palmeira, a
            brisa do mar, a textura da fibra de coco.
          </p>
          <p className="font-body text-base text-palmeira mt-4 leading-relaxed">
            Trabalhamos com tecidos de alta qualidade, proteção UV e caimento
            pensado pra cada tipo de corpo, porque moda praia de verdade é
            aquela que você esquece que está vestindo — só sente o sol, a
            água e a liberdade.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutBrand