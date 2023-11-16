import { ColDef, ValueFormatterParams } from 'ag-grid-community';

export const pdbColDefs: ColDef[] = [
  {
    headerName: 'PDB ID',
    field: 'pdb_id',
    valueFormatter: toUpperCase
  },
  {
    headerName: '# Interface',
    field: 'num_interface'
  },
  {
    headerName: 'Accession Date',
    field: 'accession_date',
    type: 'dateColumn',
  },
  {
    headerName: 'Resolution',
    field: 'resolution'
  },
  {
    headerName: 'Experiment Type',
    field: 'experiment_type'
  },
  {
    headerName: 'Status',
    field: 'status'
  }
];

export const interfaceColDefs: ColDef[] = [
  {
    headerName: 'Interface ID',
    field: 'interface_id',
    valueFormatter: toUpperCase
  },
  {
    headerName: 'Chain 1',
    field: 'chain_1'
  },
  {
    headerName: 'Chain 2',
    field: 'chain_2'
  },
  {
    headerName: 'Total',
    field: 'total'
  },
  {
    headerName: 'Num Chain 1',
    field: 'num_chain_1'
  },
  {
    headerName: 'Num Chain 2',
    field: 'num_chain_2'
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  },
  {
    headerName: '',
    field: ''
  }
];

export const defaultColDefs: ColDef = {
  sortable: true,
  filter: true,
};

function toUpperCase(params: ValueFormatterParams) {
  return params.value.toUpperCase();
}
