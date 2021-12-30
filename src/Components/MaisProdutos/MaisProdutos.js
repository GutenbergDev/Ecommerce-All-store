import React from 'react';

const MaisProdutos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    async function produtoFetch(url) {
      const response = await fetch(url);
      const json = await response.json();

      setProdutos(json);
    }
    produtoFetch('/static/json/produtos.json');
  }, []);

  //const NewProdutos = produtos.filter((item) => )

  
  if(produtos === null) return null;
  return (
    <div>
      Aqui
    </div>
  )
}

export default MaisProdutos;
