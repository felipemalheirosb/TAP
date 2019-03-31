import React, { Component } from 'react';
import {LojaContext} from '../context/LojaContext';
import DetalheProduto from './DetalheProduto';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

class ListagemDeProduto extends Component {
  render() {
    return (
      <Modal show={this.context.state.produtoClicado} centered onHide={this.context.esconderDetalhes}>
        <Modal.Header closeButton>
          <Modal.Title>Sobre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <Cabecalho/>
            <tbody>
              {this.context.state.produtos.map(this.renderProduto)}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    );

  }

  renderProduto = (p, i) => (<DetalheProduto produto={p} index={i} />);
}

// Criando alguns hooks para simplificar o código principal
function Cabecalho() {
  return (
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Descrição</th>
        <th>Ação</th>
      </tr>
    </thead>
  );
}


ListagemDeProduto.contextType = LojaContext;

export default ListagemDeProduto;