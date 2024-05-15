// IMPORTAÇÕES PARA ADICIONAR ESTADO E REALIZAR EFEITOS COLATERAIS APÓS A RENDERIZAÇÃO D COMPONENTE OU MUDANÇAS EM VARIÁVEIS ESPECÍFICAS
import { useState, useEffect } from "react";

const CookiesComponent = () => {
  // ESTADOS PARA ALTERAR O ACEITE DO COOKIES, INICIA-SE COMO FALSE
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  // HOOK UTILIZADO PARA ENVIAR AO LOCALSTORAGE UMA INFORMAÇÃO DE QUE O USUÁRIO ACEITOU OS COOKIES, SENDO ASSIM, A MENSAGEM NÃO APARECERÁ NOVAMENTE
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("acceptedCookies");
    if (cookiesAccepted) {
      setAcceptedCookies(true);
    }
  }, []);

  // FUNÇÃO PARA ALTERAR O HOOK DE FALSE PARA TRUE QUANDO O USUÁRIO ACEITA OS COOKIES
  const acceptCookies = () => {
    localStorage.setItem("acceptedCookies", "true");
    setAcceptedCookies(true);
  };

  if (acceptedCookies) {
    return null;
  }

  {/* ABAIXO ESTÁ O CONTAINER CONTENDO A MENSAGEM DOS COOKIES E UM BOTÃO "ACEITAR COOKIES" */}
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full p-4 bg-gray-800 text-white shadow-md z-[10000]">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex-1">
          <p>
            Nós usamos cookies para melhorar sua experiência de navegação no
            portal. Ao utilizar o Portal do CISPE, você concorda com a política
            de monitoramento de cookies. Para ter mais informações sobre como
            isso é feito, acesse{" "}
            <a href="/politica-de-cookies" className="underline">
              Política de cookies
            </a>
            . Se você concorda, clique em ACEITO.
          </p>
        </div>
        <div>
          <button
            onClick={acceptCookies}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesComponent;
