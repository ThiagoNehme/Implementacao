import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Livro A', resumo: 'Resumo A', autores: ['Autor A'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro B', resumo: 'Resumo B', autores: ['Autor B'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro C', resumo: 'Resumo C', autores: ['Autor C'] }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }
}
