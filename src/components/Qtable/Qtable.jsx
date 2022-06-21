import { Link, useNavigate } from 'react-router-dom';
import './qtable.css';
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { rows, questionColumns } from '../../datatableSource';
import { useEffect, useRef, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import * as React from 'react';
import { useDemoData } from '@mui/x-data-grid-generator';
import { GridToolbar } from '@mui/x-data-grid';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
const Qtable = () => {
  const navigate = useNavigate()
  const { dataa, loadingg } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6,
  });
  const [newList, setNewList] = useState([]);
  const [finalClickInfo, setFinalClickInfo] = useState({});
  const [allInfo, setAllinfo] = useState([]);

  const [list, setList] = useState([]);
  const [listD, setListD] = useState();


  const { data, loading, error } = useFetch(
    'https://amharic-chatbot-for-aau-admin.herokuapp.com/getquestions'
  );

  useEffect(() => {
    setListD(data);
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

  // list.sort((p1, p2) => {
  //   return new Date(p2?.date_posted) - new Date(p1?.date_posted);
  // });

  // console.log(new Date(list[9]?.date_posted).getHours);
  // console.log(new Date(list[9]?.date_posted)-new Date(list[10]?.date_posted));
  const nav = useNavigate();
  // console.log(list[10]?.date_posted > list[3]?.date_posted);
  const handleOnCellClick = async (params) => {
    setFinalClickInfo(params);
    // await nav(`/feedback/${finalClickInfo.id}`);
  };

  const handleDelete = (id) => {
    setListD(listD.filter((item) => item._id !== id));

    console.log(listD);
  };

 
  const handleUpdate = () => {
    try {
      allInfo.map((info) => (axios.put(
        'https://amharic-chatbot-for-aau-admin.herokuapp.com/updatequestionstate',
        { question_id: info, resolved: true }
      )

      ));
    } catch (error) {
      console.log(error);
    }
  //   navigate('/questions')
  // window.location.replace('/questions')
  // window.location.reload()
      

  };

 
  return (
    <>
      <div className="tableCont" style={{ height: 600, width: '100%' }}>
        <div className="tableTile">Questions</div>
        <hr />
        <div className="datatableTitle" onClick={handleUpdate}>
          Resolve Selected
        </div>

        {
          
            <DataGrid
              rows={list}
              columns={questionColumns}
              pageSize={9}
              rowsPerPageOptions={[9]}
              checkboxSelection
              getRowId={(data) => data.question_id}
              onSelectionModelChange={(itm) => setAllinfo(itm)}
              onCellClick={handleOnCellClick}
              loading={loadingg}
              components={{
                Toolbar: CustomToolbar,
              }}
              componentsProps={{
                toolbar: { printOptions: { disableToolbarButton: true } },
              }}
            />
     
        }

        {/* {finalClickInfo &&
          `Final clicked id = ${finalClickInfo.id}, 
        Final clicked field = ${finalClickInfo.field}, 
        Final clicked value = ${finalClickInfo.value} `} */}
      </div>
    </>
  );
};
export default Qtable;
