// import {AgGridReact, AgGridColumn} from "ag-grid-react";

export const columns = [
  { field: 'feedback_id', headerName: 'ID', width: 80 },
  {
    field: 'feedback',
    headerName: 'feedback',
    width: 900,
    renderCell:(cellValues)=>{
      <div style={{color:'blue',fontSize:'22'}}>{cellValues.value}</div>
    }
  },
];
export const questionColumns = [
  { field: 'question_id', headerName: 'ID', width: 70 },
  {
    field: 'question',
    headerName: 'question',
    width: 880,
    
  },

  {
    field: 'resolved',
    headerName: 'resolved',
    width: 100,
  },
];
{/* <AgGridReact  questionColumns={columns}></AgGridReact > */}
// export const rows = [
//   {
//     id: 1,
//     feedback:
//       'Snow lorem asdfals jsldfjalsdjf alsdfja;lsdfj alsdjfa;lsdfj sldfaja;slfd jjSnow lorem asdfals jsldfjalsdjf alsdfja;lsdfj alsdjfa;lsdfj sldfaja;slfd jj',
//   },
//   { id: 2, feedback: 'Lannister' },
//   { id: 3, feedback: 'Lannister' },
//   { id: 4, feedback: 'Stark' },
//   { id: 5, feedback: 'Targaryen' },
//   { id: 6, feedback: 'Melisandre' },
//   { id: 7, feedback: 'Clifford' },
//   { id: 8, feedback: 'Frances' },
//   { id: 9, feedback: 'Roxie' },
// ];
