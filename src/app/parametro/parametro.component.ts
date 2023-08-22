import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  styleUrls: ['./parametro.component.css']
})

export class ParametroComponent {

  constructor(private poDialog: PoDialogService) {}

  columns = [
    { property: 'entidade'  , label: 'Entidade' , align: 'rigth', readonly: true,  width: 120},
    { property: 'parametro' , label: 'Parâmetro', readonly: true,  width: '200px' },
    { property: 'conteudo'  , label: 'Conteúdo' , align: 'center', readonly: true,  width: 120},
    { property: 'descricao' , label: 'Descrição', align: 'center', readonly: true,  width: 500}
  ];

  data = [
    {
      entidade: '000001',
      parametro: 'MV_AMBIENT',
      conteudo: '2',
      descricao: 'Ambiente de transmissão de NF-e'
    },
    {
      entidade: '000002',
      parametro: 'MV_AMBIENT',
      conteudo: '1',
      descricao: 'Ambiente de transmissão de NF-e'
    },
  ];


  btnIncluir() {
    this.poDialog.alert({ title: 'PO Button', message: 'Incluir' });
  }
  btnAlterar() {
    this.poDialog.alert({ title: 'PO Button', message: 'Alterar' });
  }
  btnExcluir() {
    this.poDialog.alert({ title: 'PO Button', message: 'Excluir' });
  }
  btnFiltrar() {
    this.poDialog.alert({ title: 'PO Button', message: 'Filtrar' });
  }


}
