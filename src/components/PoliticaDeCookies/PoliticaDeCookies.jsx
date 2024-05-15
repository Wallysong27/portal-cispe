// FUNÇÃO PARA REDIRECIONAR O USÁRIO PARA OS RESPECTIVOS ENDEREÇOS
const cookieFunctions = {
  googleRedirect: () => {
    window.location.href =
      "https://policies.google.com/technologies/partner-sites";
  },
  disableGoogleCookies: () => {
    window.location.href = "https://support.google.com/chrome/answer/95647";
  },
  disableExplorerCookies: () => {
    window.location.href =
      "https://support.microsoft.com/pt-br/topic/descri%C3%A7%C3%A3o-de-cookies-ad01aa7e-66c9-8ab2-7898-6652c100999d";
  },
  disableSafariCookies: () => {
    window.location.href =
      "https://support.apple.com/pt-br/guide/safari/sfri11471/mac";
  },
  disableMozilaCookies: () => {
    window.location.href =
      "https://support.mozilla.org/pt-BR/kb/limpe-cookies-e-dados-de-sites-no-firefox?redirectslug=exclua-cookies-para-remover-info-armazenadas&redirectlocale=pt-BR";
  },
  disableOperaCookies: () => {
    window.location.href =
      "https://help.opera.com/en/latest/web-preferences/#cookies";
  },
};

export default function PoliticaDeCookies() {
  const handleClick = (func) => {
    if (cookieFunctions[func]) {
      cookieFunctions[func]();
    }
  };

  // BASICAMENTE ESTE CÓDIGO É UMA PÁGINA CONTENDO EXPLICAÇÕES REFERENTES ÀS POLÍTICAS DE COOKIES
  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:items-start lg:justify-start py-60 px-4 lg:px-20 gap-10 bg-gray-400 backdrop-blur-sm backdrop-filter w-full">
      <div className="absolute top-40">
        <h1 className="text-3xl lg:text-5xl">Política de Cookies</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-20 relative">
        <div className="flex flex-col gap-10 flex-1">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl lg:text-3xl">Introdução</h2>
            <p>
              A política de cookies tem como objetivo descrever as práticas que
              o Conselho Regional de Medicina do Estado de Pernambuco segue para
              respeitar a privacidade de todos os visitantes do nosso Portal.
            </p>
            <p>
              Os cookies são utilizados em nossos Portais para melhorar o
              desempenho, aprimorar a experiência de navegação e análise de
              estatísticas.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl lg:text-3xl">O que é um Cookie?</h2>
            <p>
              Cookies são arquivos de texto que contêm pequenas quantidades de
              informações que são armazenadas no seu dispositivo quando você
              visita um site.
            </p>
            <p>
              Estas informações podem ser sobre você, as suas preferências ou
              sobre o seu dispositivo.
            </p>
            <p>
              Os cookies podem ter diferentes objetivos, como permitir que você
              navegue entre as páginas com eficiência, lembrando suas
              preferências e, geralmente, melhorando a experiência do usuário.
            </p>
            <p>
              A maioria dos navegadores da Internet aceitam cookies; entretanto,
              os usuários podem configurar seus navegadores para recusar certos
              tipos de cookies ou cookies específicos.
            </p>
            <p>
              A recusa de uso de cookies no site, pode resultar na
              impossibilidade de ter acesso a algumas das suas áreas ou de
              receber informação personalizada.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl lg:text-3xl">
              Para que servem os Cookies?
            </h2>
            <p>
              Os cookies são utilizados para ajudar a determinar a utilidade,
              interesse e o número de utilizações dos sites, permitindo maior
              rapidez e eficiência na navegação, eliminando a necessidade de
              introduzir, repetidamente, as mesmas informações já inseridas.
            </p>
            <p>
              Eles podem ser igualmente usados para ajudar a acelerar as
              atividades e experiências futuras dos usuários nos Sites. Também
              usamos cookies para compilar estatísticas anônimas e agregadas,
              que nos possibilitam compreender a forma como os usuários utilizam
              os nossos Sites, o que nos ajuda a melhorar a estrutura e os
              nossos conteúdos.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl lg:text-3xl">
              Quais os tipos de Cookies que utilizamos?
            </h2>
            <span className="font-bold">
              Cookies estatísticos e de análise de dados
            </span>
            <p>
              São os cookies dos serviços{" "}
              <span className="font-bold">Google Analytics</span>
            </p>
            <p>
              A ferramenta Google Analytics é utilizada para coletar informações
              estatísticas sobre visitantes, e pode compartilhar estas
              informações com terceiros.
            </p>
            <p>
              Permitem criar e coletar dados da sessão, tais como: número de
              visitas, páginas visualizadas, seções visitadas, duração da
              sessão, fontes de referência, buscas realizadas, número de novos
              usuários, frequência e reincidência das visitas, interesse em
              produtos ou serviços, páginas visitadas, navegador e tipo de
              terminal usados para fazer a visita.
            </p>
            <p>
              Para fins estatísticos, com o intuito de medir e analisar as
              audiências dos sites ou aplicativos e de melhoria da comunicação
              com os usuários, os dados coletados pelos cookies, sempre de forma
              agregada e anônima, podem ser compartilhados com empresas
              parceiras, dentre elas, o Google. Se você quiser mais informações
              de como o Google utiliza os dados quando os usuários usam sites ou
              aplicativos, você pode acessar{" "}
              <span
                className="text-[#0C2856] hover:text-[#4c73b3] transition duration-300 ease-in-out font-bold cursor-pointer"
                onClick={() => handleClick("googleRedirect")}
              >
                clicando aqui
              </span>
              .
            </p>
          </div>
        </div>
        <div className="absolute border hidden lg:block border-gray-500 h-full left-1/2"></div>
        <div className="flex flex-col gap-10 flex-1">
          <div className="flex flex-col gap-5">
            <span className="font-bold">Cookies de funcionalidade</span>
            <p>
              Guardam as preferências do utilizador relativamente à utilização
              do site, de forma que não seja necessário voltar a configurar o
              site cada vez que o visita. Evitam, por exemplo, introduzir nomes
              de utilizador de cada vez que se acede ao mesmo.
            </p>
            <span className="font-bold">Cookies de terceiros</span>
            <p>
              Medem o sucesso de aplicações e a eficácia da publicidade de
              terceiros.
            </p>
            <span className="font-bold">
              Cookies de redes sociais e sites externos
            </span>
            <p>
              São os cookies dos serviços do Facebook, Instagram, Linkedin,
              Twitter, e YouTube.
            </p>
            <p>
              Estes cookies facilitam a interação do usuário com nosso site por
              meio do uso de suas contas nas principais redes sociais.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl lg:text-3xl">Como desativar os cookies?</h2>
            <p>
              Se você deseja restringir ou bloquear a captação de cookies
              definidos por este site ou por qualquer outro, você pode desativar
              ou excluir os cookies e outras formas/tecnologias de coleta nas
              configurações do seu navegador e nas configurações do sistema
              operacional do seu dispositivo.
            </p>
            <p>
              É importante que você esteja ciente que se o acesso for limitado
              por você ou dependendo da limpeza e configuração de cookies, os
              sites ou alguns de seus recursos ou funcionalidades poderão não
              funcionar da maneira mais benéfica.
            </p>
            <p>
              Para fazer isso, deve acessar as opções de configuração do
              navegador web. Você pode consultar as guias de ajuda ao usuário
              dos principais navegadores a seguir:
            </p>
            <ul className="leading-9 list-disc ml-10">
              <li>
                Navegador Google Chrome:{" "}
                <span
                  className="text-[#0C2856] hover:text-[#4c73b3] font-bold cursor-pointer"
                  onClick={() => handleClick("disableGoogleCookies")}
                >
                  clique aqui
                </span>
                .
              </li>
              <li>
                Navegador Internet Explorer:{" "}
                <span
                  className="text-[#0C2856] hover:text-[#4c73b3] transition duration-300 ease-in-out font-bold cursor-pointer"
                  onClick={() => handleClick("disableExplorerCookies")}
                >
                  clique aqui
                </span>
                .
              </li>
              <li>
                Navegador Safari:{" "}
                <span
                  className="text-[#0C2856] hover:text-[#4c73b3] transition duration-300 ease-in-out font-bold cursor-pointer"
                  onClick={() => handleClick("disableSafariCookies")}
                >
                  clique aqui
                </span>
                .
              </li>
              <li>
                Navegador Mozila:{" "}
                <span
                  className="text-[#0C2856] hover:text-[#4c73b3] transition duration-300 ease-in-out font-bold cursor-pointer"
                  onClick={() => handleClick("disableMozilaCookies")}
                >
                  clique aqui
                </span>
              </li>
              <li>
                Navegador Opera:{" "}
                <span
                  className="text-[#0C2856] hover:text-[#4c73b3] transition duration-300 ease-in-out font-bold cursor-pointer"
                  onClick={() => handleClick("disableOperaCookies")}
                >
                  clique aqui
                </span>
                .
              </li>
            </ul>
            <p>
              Note-se que, ao desativar cookies, pode impedir que alguns
              serviços da web funcionem corretamente, afetando, parcial ou
              totalmente, a navegação no website.
            </p>
            <p>
              Recordamos que ao desativar os cookies, partes do nosso site podem
              não funcionar corretamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
