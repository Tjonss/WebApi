import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentForm from './CommentForm';

const SingleIssue = () => {

  
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [issue, setIssue] = useState();
  const [status, setStatus] = useState([]);
  const [created, setCreated] = useState();


  const getIssue = async (_id) => {
    setLoading(true);
    try {
      const res = await axios.get('https://localhost:7179/api/issues/' + _id);
      setIssue(res.data);
      // console.log(res.data)
      setLoading(false);
      setError(null);
      setCreated(new Date(res.data.created));
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const getStatus = async () => {
    try {
      const res = await axios.get('https://localhost:7179/api/statuses');
      setStatus(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIssue(id);
    getStatus();
  }, [id]);

  const handleChange = async e => {
    try {
      const res = await axios.put('https://localhost:7179/api/issues/' + id, {
        statusId: e.target.value
      })
      setIssue((state) => ({...state, statusId: res.data}))
      getIssue(id)
      console.log(res.data)
      // setIssue(state => ({...state, status: res.data}))
    } catch (err) {
      console.log(err.message)
      
    }
  }

  

  return (
    <>
      <p className='container mt-3 noarrow'>
        <Link to='/issues'>Back to issues</Link>
      </p>
      {issue && (
        <div className='container' >
          <div className='Single-Issue mt-3'>
            <div className='card mb-3 pb-2'>
              <div className='card-header d-flex justify-content-between align-items-center'>
                <small className='fs-5'>{issue.title}</small>
                <div className='form-floating'>
                  <select
                    className='form-select mb-3'
                    id='select'
                    placeholder='Select a customer..'
                    value={issue.status.id}
                    onChange={handleChange}
                  >
                  { status 
                  ? (
                    status.map(stat => 
                      <option value={stat.id} key={stat.id}>
                        {stat.status}
                      </option>
                    )) 
                  : <option>-</option> }
                  </select>
                </div>
              </div>
              <div className='fw-lighter container text-center my-2 mb-0 d-flex justify-content-between'>
                {issue && (
                  <small>{created.toLocaleString().slice(0, 16)}</small>
                )}
                <small>{issue.email}</small>
              </div>
              <div className='card-body py-2'>
                <p className='card-text'>{issue.description}</p>
              </div>
            </div>
          </div>
          <CommentForm issue={issue} setIssue={setIssue} getIssue={getIssue}/>
        </div>
      )}
    </>
  );
};

export default SingleIssue;
