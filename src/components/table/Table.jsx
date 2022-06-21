import './table.css';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { rows, columns } from '../../datatableSource';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

const Table = () => {
  
  const [list, setList] = useState([]);
  const [finalClickInfo, setFinalClickInfo] = useState({});
  const [allInfo, setAllinfo] = useState("");
  const [listD, setListD] = useState([]);
  const { data, loading, error } = useFetch(
    'https://amharic-chatbot-for-aau-admin.herokuapp.com/getfeedback'
  );
  const nav = useNavigate();

  useEffect(() => {
    setList(data);
  }, [data]);

  useEffect(() => {
    const newList = [...data];
    newList.sort((p1, p2) => {
      return new Date(p2?.date_posted) - new Date(p1?.date_posted);
    });
    // setList(data);

    setList(newList);
    // console.log(Newdata);
  }, [data]);

  //console.log(data);
  const handleOnCellClick = (params) => {
    setFinalClickInfo(params);
    // await nav(`/feedback/${finalClickInfo.id}`)
  };

  const handleDelete=(params)=>{
    // console.log(allInfo)

    setList(list.filter((item) => item.feedback_id !== params.row.feedback_id));
     
  }
  // console.log(list.length)

  const handleAction = () => {
    console.log('hellllo');
  };
  const handleUpdate = async() => {
    await allInfo.map((info)=> (
       axios.put("https://amharic-chatbot-for-aau-admin.herokuapp.com/updatequestionstate",{question_id:info,resolved:true})

    ))
  };

  const actionColum = [
    {
      feild: 'action',
      headerName: 'Action',
      width: 130,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link style={{textDecoration:'none'}} to={"/feedback/" + params.row.feedback_id}>
            <div onClick={handleAction} className="viewButton">
              View
            </div>
            </Link>
            
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="tableCont" style={{ height: 600, width: '100%' }}>
        {/* <div>
          {allInfo.map((info) =>( 
            <div>{info}</div>
          ))}
        </div> */}
        <div className="tableTile">User Feedbacks</div>
        <hr />
        {/* <div className="datatableTitle" onClick={handleUpdate}>
          Resolve Selected
        </div> */}
        <DataGrid
          rows={list}
          columns={columns.concat(actionColum)}
          // columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          // checkboxSelection
          getRowId={(data) => data.feedback_id}
          onSelectionModelChange={(itm) => setAllinfo(itm)}
          onCellClick={handleOnCellClick}
        />

        {/* {finalClickInfo &&
          `Final clicked id = ${finalClickInfo.id}, 
        Final clicked field = ${finalClickInfo.field}, 
        Final clicked value = ${finalClickInfo.value} 
        `} */}
      </div>
    </>
  );
};

export default Table;
