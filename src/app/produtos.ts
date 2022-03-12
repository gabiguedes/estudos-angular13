export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
  }
  
  export const produtos = [
    {
      id: 1,
      nome: 'Phone XL',
      preco: 799,
      descricao: 'Um telefone grande com uma das melhores telas'
    },
    {
      id: 2,
      nome: 'Phone Mini',
      preco: 699,
      descricao: 'Um ótimo telefone com uma das melhores câmeras'
    },
    {
      id: 3,
      nome: 'Phone Standard',
      preco: 299,
      descricao: ''
    }
  ];