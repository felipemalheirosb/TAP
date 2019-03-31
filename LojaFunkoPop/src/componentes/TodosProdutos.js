import React, { Component } from 'react';
import { LojaContext } from '../context/LojaContext';
import Button from 'react-bootstrap/Button';
import styles from './ItemCarrinho.css';

class TodosProdutos extends Component {
  render() {
    return (
      <tr>
        <td><img className={styles.carrinho_img} src={this.props.produto.imagem} alt="" /></td>
        <td>{this.props.produto.nome}</td>
        
        <td>
            <Button variant="outline-primary" block onClick={() => this.context.comprar(this.props.produto)}>
              Comprar
            </Button>
        </td>
      </tr>
    );
  }
}

TodosProdutos.contextType = LojaContext;

export default TodosProdutos;