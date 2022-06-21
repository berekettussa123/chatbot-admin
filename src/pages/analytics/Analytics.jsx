import './analytics.css';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  Legend,
} from 'recharts';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import Featured from '../../components/Featured/Featured';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

export default function Analytics() {
  const [yearTotal, setYearTotal] = useState();
  const [list, setList] = useState([]);
  const [ques, setQues] = useState([]);
  const [counter, setCounter] = useState(0);
  const [openDate, setOpenDate] = useState(false);
  const [initialData, setInitialData] = useState([]);
  const [firstInd, setFirstind] = useState('');
  const [lastInd, setLastind] = useState('');
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [listSorted, setListSorted] = useState([]);
  const d = new Date();
  const { data, loading, error } = useFetch(
    'https://amharic-chatbot-for-aau-admin.herokuapp.com/getquestions'
  );

  const sepList = useMemo(() => [], []);
  const octList = useMemo(() => [], []);
  const novList = useMemo(() => [], []);
  const decList = useMemo(() => [], []);
  const janList = useMemo(() => [], []);
  const febList = useMemo(() => [], []);
  const marList = useMemo(() => [], []);
  const aprList = useMemo(() => [], []);
  const mayList = useMemo(() => [], []);
  const junList = useMemo(() => [], []);
  const julList = useMemo(() => [], []);
  const augList = useMemo(() => [], []);

  let counta = 0;
  let disConta = 0;
  let sepAnswer = 0;
  let octAnswer = 0;
  let novAnswer = 0;
  let decAnswer = 0;
  let janAnswer = 0;
  let febAnswer = 0;
  let marAnswer = 0;
  let aprAnswer = 0;
  let mayAnswer = 0;
  let junAnswer = 0;
  let julAnswer = 0;
  let augAnswer = 0;

  // console.log("hello"+ new Date(newList[0]?.date_posted).getMonth())
  // setList(data);

  // setListSorted(newList);
  // console.log(Newdata);
  var currentYear = new Date().getFullYear();
  console.log(currentYear);
  const ylist = [];

  const yearData = useMemo(
    () => [
      {
        name: 2017,
        total: 0,
        answered: sepAnswer,
        amt: 2400,
      },
      {
        name: 2018,
        total: 0,
        answered: octAnswer,
        amt: 2400,
      },
      {
        name: 2019,
        total: 0,
        answered: novAnswer,
        amt: 2020,
      },
      {
        name: 2020,
        total: 0,
        answered: decAnswer,
        amt: 2290,
      },
      {
        name: 2021,
        total: 0,
        answered: janAnswer,
        amt: 2000,
      },
      {
        name: 2022,
        total: 0,
        answered: febAnswer,
        amt: 2181,
      },
      {
        name: 2023,
        total: 0,
        answered: febAnswer,
        amt: 2181,
      },
      {
        name: 2024,
        total: 0,
        answered: aprAnswer,
        amt: 2100,
      },
      {
        name: 2025,
        total: 0,
        answered: mayAnswer,
        amt: 2100,
      },
      {
        name: 2026,
        total: 0,
        answered: mayAnswer,
        amt: 2100,
      },
      {
        name: 2027,
        total: 0,
        answered: mayAnswer,
        amt: 2100,
      },
    ],
    [
      aprAnswer,
      aprList.length,
      decAnswer,
      decList.length,
      febAnswer,
      febList.length,
      janAnswer,
      janList.length,
      julList.length,
      junList.length,
      marList.length,
      mayAnswer,
      mayList.length,
      novAnswer,
      novList.length,
      octAnswer,
      octList.length,
      sepAnswer,
      sepList.length,
    ]
  );
  var jk = 0;

  const years = [
    2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027,
  ];
  useEffect(() => {
    for (var x = 0; x < years?.length; x++) {
      for (var y = 0; y < data?.length; y++) {
        if (
          new Date(data[y]?.date_posted).getFullYear() === yearData[x]?.name
        ) {
          // console.log(yearData[y]?.name);
          if (data[y]?.resolved) {
            yearData[x].answered += 1;
          }
          yearData[x].total += 1;

          // setYearTotal(yearTotal + 1);
          // yearData[x].total = yearTotal;
        }
      }
    }
  }, [data, yearData, yearTotal, years?.length]);
  console.log('total' + yearTotal);
  useEffect(() => {
    for (var i = 0; i < data?.length; i++) {
      if (new Date(data[i]?.date_posted).getFullYear() === currentYear) {
        if (new Date(data[i]?.date_posted).getMonth() === 10) {
          sepList.push(data[i]);
        } else if (new Date(data[i]?.date_posted).getMonth() === 11) {
          octList.push(data[i]);
        } else if (new Date(data[i]?.date_posted).getMonth() === 12) {
          novList.push(data[i]);
        } else if (new Date(data[i]?.date_posted).getMonth() === 1) {
          decList.push(data[i]);
        } else if (new Date(data[i]?.date_posted).getMonth() === 2) {
          janList.push(data[i]);
        } else if (new Date(data[i]?.date_posted).getMonth() === 3) {
          febList.push(data[i]);
        } else if (new Date(data[i]?.date_posted).getMonth() === 4) {
          marList.push(data[i]);
        } else if (new Date(data[i]?.date_posted).getMonth() === 5) {
          aprList.push(data[i]);
        } else if (new Date(data[i]?.date_posted).getMonth() === 6) {
          mayList.push(data[i]);
        } else if (new Date(data[i]?.date_posted).getMonth() === 7) {
          julList.push(data[i]);
        } else if (new Date(data[i]?.date_posted).getMonth() === 8) {
          julList.push(data[i]);
        } else if (new Date(data[i]?.date_posted).getMonth() === 9) {
          augList.push(data[i]);
        }
      }
    }
  }, [
    aprList,
    augList,
    currentYear,
    data,
    decList,
    febList,
    janList,
    julList,
    marList,
    mayList,
    novList,
    octList,
    sepList,
  ]);
  for (let i = 0; i < sepList?.length; i++) {
    if (sepList[i].resolved === true) {
      sepAnswer++;
    }
    for (let i = 0; i < octList?.length; i++) {
      if (octList[i].resolved === true) {
        octAnswer++;
      }
    }
  }
  for (let i = 0; i < novList?.length; i++) {
    if (novList[i].resolved === true) {
      novAnswer++;
    }
  }
  for (let i = 0; i < decList?.length; i++) {
    if (decList[i].resolved === true) {
      decAnswer++;
    }
  }
  for (let i = 0; i < janList?.length; i++) {
    if (janList[i].resolved === true) {
      janAnswer++;
    }
  }
  for (let i = 0; i < febList?.length; i++) {
    if (febList[i].resolved === true) {
      febAnswer++;
    }
  }
  for (let i = 0; i < marList?.length; i++) {
    if (marList[i].resolved === true) {
      marAnswer++;
    }
  }
  for (let i = 0; i < aprList?.length; i++) {
    if (aprList[i].resolved === true) {
      aprAnswer++;
    }
  }
  for (let i = 0; i < mayList?.length; i++) {
    if (mayList[i].resolved === true) {
      mayAnswer++;
    }
  }
  for (let i = 0; i < junList?.length; i++) {
    if (junList[i].resolved === true) {
      junAnswer++;
    }
  }
  for (let i = 0; i < julList?.length; i++) {
    if (julList[i].resolved === true) {
      julAnswer++;
    }
  }
  for (let i = 0; i < augList?.length; i++) {
    if (augList[i].resolved === true) {
      augAnswer++;
    }
  }

  // console.log(sepAnswer);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://amharic-chatbot-for-aau-admin.herokuapp.com/getquestions'
        );
        setQues(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // console.log(ques[63]?.question);
  //  console.log(ques);

  const find = [];
  const lind = [];
  console.log(marList?.length);
  const handleFilter = () => {
    for (var i = 0; i < yearData.length; i++) {
      for (var j = 0; j < yearData.length; j++) {
        if (dates[0].startDate.getFullYear() === yearData[j].name) {
          const firstIndex = years.indexOf(yearData[j].name);
          // console.log("first index"+ yearData[j].name)
          // setFirstind(firstIndex)
          find.push(firstIndex);
        }
        if (dates[0].endDate.getFullYear() === yearData[j].name) {
          const lastIndex = years.indexOf(yearData[j].name);
          // console.log("last Index"+yearData[j].name)
          // setLastind(lastIndex)
          lind.push(lastIndex);
        }
        // console.log('first ::: ' + find[0]);
        // console.log('last :::' + lind[0]);
        const years2 = [...yearData];
        const ff = years2.slice(find[0], lind[0]);

        // console.log(ff)
        // const indexStartDate = years2.indexOf(dates[0].startDate.getFullYear())
        // const indexEndDate = years2.indexOf(dates[0].endDate.getFullYear())
        // const filteredYear = years2.slice(indexStartDate,indexEndDate + 1)
        // console.log(ff);
        if (
          dates[0].endDate.getFullYear() === dates[0].startDate.getFullYear()
        ) {
          setInitialData(datas);
        } else {
          setInitialData(ff);
        }
      }
    }

    // console.log('first index is :: ' + firstInd);
    // console.log('last index is :: ' + lastInd);
    // const indexStartDate = years2.indexOf(dates[0].startDate.getFullYear())
    // console.log(indexStartDate);
    // console.log(indexEndDate);
    // datas.slice(dates[0].startDate.getDate(),dates[0].endDate.getDate())
    // monthNames.slice(3,5)
    // console.log(dates);
  };

  for (var i = 0; i < ques?.length; i++) {
    if (ques[i].resolved === true) {
      counta++;
    } else {
      disConta++;
    }
  }

  // console.log('Answered:' + counta);
  // console.log('Unanswered:' + disConta);
  // ques.map((item) => item?.resolved === true ? setCounter(counter+1): setDec(dec +1));

  // console.log(counter);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const months = [
    {
      month: 'month',
      answered: 'answer',
      unanswered: 'unanswered',
    },
  ];

  // console.log("The current month is " + monthNames[d.getMonth()])
  const datas = useMemo(
    () => [
      {
        name: 'Sep',
        total: sepList.length,
        answered: sepAnswer,
        amt: 2400,
      },
      {
        name: 'Oct',
        total: octList.length,
        answered: octAnswer,
        amt: 2400,
      },
      {
        name: 'Nov',
        total: novList.length,
        answered: novAnswer,
        amt: 2210,
      },
      {
        name: 'Dec',
        total: decList.length,
        answered: decAnswer,
        amt: 2290,
      },
      {
        name: 'Jan',
        total: janList.length,
        answered: janAnswer,
        amt: 2000,
      },
      {
        name: 'Feb',
        total: febList.length,
        answered: febAnswer,
        amt: 2181,
      },
      {
        name: 'Mar',
        total: mayList?.length,
        answered: mayList,
        amt: 2500,
      },
      {
        name: 'Apr',
        total: junList.length,
        answered: junAnswer,
        amt: 2100,
      },
      {
        name: 'May',
        total: marList?.length,
        answered: marAnswer,
        amt: 2100,
      },
      {
        name: 'Jun',
        total: aprList.length,
        answered: aprAnswer,
        amt: 2100,
      },
      {
        name: 'Jul',
        total: julList.length,
        answered: julAnswer,
        amt: 2100,
      },
      {
        name: 'Aug',
        total: augList.length,
        answered: augAnswer,
        amt: 2100,
      },
    ],
    [
      aprAnswer,
      aprList.length,
      augAnswer,
      augList.length,
      decAnswer,
      decList.length,
      febAnswer,
      febList.length,
      janAnswer,
      janList.length,
      julAnswer,
      julList.length,
      junAnswer,
      junList.length,
      marAnswer,
      marList?.length,
      mayAnswer,
      mayList.length,
      novAnswer,
      novList.length,
      octAnswer,
      octList.length,
      sepAnswer,
      sepList.length,
    ]
  );

  useEffect(() => {
    setInitialData(datas);
  }, [datas]);

  // const len = ques?.length;
  // let i = 0;
  // for(i;i<len;i++){
  //   if(ques[i].resolved===true){
  //     setList(ques[i])
  //   }
  // }
  // console.log(list)

  // ques.map(
  //   (lis) =>
  //     lis?.resolved === true &&
  //     // console.log(ques.length);
  //     setList(lis)
  // )
  // data.map((list)=>(
  //   setList(list)
  // ))

  // ques.map((lis)=>(
  //   (lis?.resolved===true)&&
  //     // console.log(ques.length);
  //     setList(...lis,[lis])

  // ))
  // console.log(ques.length);
  // const [,setStartd]=useState([]);
  const startd = [];
  const endd = [];
  // const [endd,setendd]=useState([]);
  useEffect(() => {
    startd.push(dates?.startDate);
    endd.push(dates?.endDate);
  }, [dates, endd, startd]);
  // console.log(dates[0].endDate.getDate());
  // console.log(dates[0].endDate.getFullYear());
  var maxdate = new Date();
  maxdate.setFullYear(maxdate.getFullYear() + 5);
  var mindate = new Date();
  mindate.setFullYear(mindate.getFullYear() - 5);

  return (
    <div className="analyticsCont">
      <Sidebar />
      <div className="charterCont">
        <Featured counta={counta} disConta={disConta} ques={ques} />
        <div className="datepick">
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchText"
          >{`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(
            dates[0].endDate,
            'MM/dd/yyyy'
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              className="date"
              maxDate={maxdate}
              minDate={mindate}
            />
          )}
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleFilter}>
              Filter
            </button>
          </div>
        </div>
        {dates && (
          <div>
            {/* <p>
              From year {monthNames[dates[0].startDate.getMonth()]}{' '}
              {dates[0].startDate.getDate()}
            </p>{' '} */}
            {/* <p>
              to {monthNames[dates[0].endDate.getMonth()]}{' '}
              {dates[0].endDate.getDate()}
            </p> */}
          </div>
        )}
        <div className="charter">
          <h3 className="chartTitle">Questions</h3>
          <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
            <BarChart
              width={500}
              height={300}
              data={initialData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#8884d8" />
              <Bar dataKey="answered" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
