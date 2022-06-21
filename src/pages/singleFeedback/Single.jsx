import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import useFetch from '../../hooks/useFetch';
import './single.css';

export const Single = () => {
  const location = useLocation();
  // console.log(path)
  const [feed, setFeed] = useState([]);
  const [feedbackId,setFeedbackId] = useState()
  const [resolved, setResolved] = useState();

  const { data, loading, error } = useFetch(
    'https://amharic-chatbot-for-aau-admin.herokuapp.com/getfeedback'
  );
  const path = location.pathname.split('/')[2];
  const li = [];
  useEffect(() => {
    for (var i = 0; i < data?.length; i++) {
      if (data[i]?.feedback_id === parseInt(path)) {
        // li.push(data[i]);
        setFeed(data[i]);
        // console.log(data[i]);
      }
      setFeedbackId(feed.feedback_id)
      setResolved(feed.resolved);
    }
  }, [data, li, path, feed.resolved,feed.feedback_id]);

  // console.log(feed);
  // console.log(feed.feedback);
  // console.log(feed.feedback_id)
  // console.log(feedbackId);
  // console.log(data);
  const handleResolve = async () => {
    await axios.put(
      'https://amharic-chatbot-for-aau-admin.herokuapp.com/updatefeedbackstate',
      { feedback_id: feedbackId, resolved: true }
    );
    setResolved(true)
    window.location.replace("/feedback")

    // window.location.reload()
  };

  

  console.log(resolved);
  const handleDelete = () => {

    window.location.replace("/feedback")
  };
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <div class="card">
          <div className="cardContent">
            <div class="card-header">USER FEEDBACKS</div>
            <hr
              style={{
                backgroundColor: 'black',
                width: '190px',
                marginTop: '7px',
                height: '1px',
              }}
            />
            <div class="card-body">{feed.feedback}</div>
            <div class="card-footer">
              <div class="btn-wrapper">
                <button
                  className="btn res"
                  disabled={resolved}
                  onClick={handleResolve}
                >
                  Resolve
                </button>
                {/* <button className="btn del" onClick={handleDelete}>
                  Delete
                </button> */}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
