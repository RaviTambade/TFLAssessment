import { useState, useEffect } from 'react'
import './AssessmentSummary.css'

interface Student {
  id: number
  name: string
}

interface AssessmentResult {
  assessmentId: number
  assessmentTitle: string
  student: Student
  status: string
  score: number
  percentile: number
  timeTakenMinutes: number
  totalQuestions: number
  correctAnswers: number
  wrongAnswers: number
}

export default function AssessmentSummary() {
  const [data, setData] = useState<AssessmentResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAssessmentResult = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:5104/api/assessment/summary')
        if (!response.ok) {
          throw new Error('Failed to fetch assessment result')
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchAssessmentResult()
  }, [])

  if (loading) {
    return <div className="assessment-container"><div className="assessment-card"><p style={{ padding: '40px' }}>Loading...</p></div></div>
  }

  if (error) {
    return <div className="assessment-container"><div className="assessment-card"><p className="error">Error: {error}</p></div></div>
  }

  if (!data) {
    return <div className="assessment-container"><div className="assessment-card"><p style={{ padding: '40px' }}>No data available</p></div></div>
  }

  return (
    <div className="assessment-container">
      <div className="assessment-card">
        <div className="card-header">
          <h1>Assessment <span>Summary</span></h1>
        </div>

        <div className="assessment-details">
          <div className="detail-row">
            <span className="detail-label">Assessment</span>
            <span className="detail-value">{data.assessmentTitle}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Student</span>
            <span className="detail-value">{data.student.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Status</span>
            <span className="detail-value">
              <span className="status-badge">● {data.status}</span>
            </span>
          </div>
          <div className="divider"></div>
        </div>

        <div className="metrics-section">
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-label">Score</div>
              <div className="metric-value">{data.score}</div>
              <div className="metric-subtext">out of 100</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Percentile</div>
              <div className="metric-value">{data.percentile}%</div>
              <div className="metric-subtext">rank</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Time Taken</div>
              <div className="metric-value">{data.timeTakenMinutes}</div>
              <div className="metric-subtext">minutes</div>
            </div>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-label">Total Questions</div>
              <div className="metric-value">{data.totalQuestions}</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Correct Answers</div>
              <div className="metric-value">{data.correctAnswers}</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Wrong Answers</div>
              <div className="metric-value">{data.wrongAnswers}</div>
            </div>
          </div>
        </div>

        <div className="button-container">
          <button className="report-button">View Detailed Report</button>
        </div>
      </div>
    </div>
  )
}
