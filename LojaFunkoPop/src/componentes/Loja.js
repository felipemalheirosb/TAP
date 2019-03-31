import React, { Component } from 'react';
import {LojaProvider} from '../context/LojaContext';
import BarraDeBusca from './BarraDeBusca';
import ListaDeProdutos from './ListaDeProdutos';
import CarrinhoDeCompras from './CarrinhoDeCompras';
import DetalhesDoProduto from './DetalhesDoProduto';
import ListagemDeProduto from './ListagemDeProduto';

class Loja extends Component {
  render() {
    return (
      <LojaProvider>
        <BarraDeBusca/>
        <ListaDeProdutos/>
        <CarrinhoDeCompras/>
        <DetalhesDoProduto/>
        <ListagemDeProduto/>
      </LojaProvider>
    );
  }
}

export default Loja;