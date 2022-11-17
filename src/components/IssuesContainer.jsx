import axios from 'axios'
import { useEffect, useState } from 'react'
import IssueCard from './IssueCard'

const IssuesContainer = () => {
 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [issues, setIssues] = useState([])

  const fetchIssues = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`https://localhost:7179/api/issues`)
      setIssues(await res.data)
      setLoading(false)
      setError(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }
  
  useEffect(() => {
      fetchIssues()
  },[])

  const issuesTemplate = ( issues && 
    issues.map(issue => <IssueCard key={issue.id} issue={issue}/>)
  )

  return (
    <div className='container'>
      <h2 className='text-center mt-3 mb-4 Create'>Customer issues</h2>

      { loading && <div className='text-center'>Loading issues...</div>}
      { issues.length
        ? issuesTemplate 
        : <h2 className='text-center mt-5 fst-italic fw-lighter'>No issues</h2>
      }
    </div>
  )
}

export default IssuesContainer