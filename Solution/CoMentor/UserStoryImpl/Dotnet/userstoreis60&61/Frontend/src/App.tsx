import { useEffect, useState } from 'react'

interface StudentResult {
  student_name: string
  subject: string
  assessment_title: string
  percentile: number
  result_status: string
}

function App() {
  const [results, setResults] = useState<StudentResult[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5125/student-results')

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data: StudentResult[] = await response.json()
        setResults(data)
      }catch (err: unknown) {
  if (err instanceof Error) {
    setError(err.message)
  } else {
    setError('Something went wrong')
  }
} finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">

      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-orange-600 tracking-wide">
            Transflower Learning
          </h1>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          SME <span className="text-orange-500">Dashboard</span>
        </h1>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden">

          {/* Card Header */}
          <div className="bg-orange-500 px-8 py-5">
            <h2 className="text-xl font-semibold text-white">
              Assessment Results
            </h2>
          </div>

          {/* Content */}
          <div className="p-6">

            {loading ? (
              <div className="text-center py-10 text-gray-500 text-lg">
                Loading results...
              </div>
            ) : error ? (
              <div className="text-center py-10 text-red-600 font-semibold">
                Error: {error}
              </div>
            ) : (
              <div className="overflow-x-auto">

                <table className="w-full text-sm">

                  {/* Header */}
                  <thead>
                    <tr className="bg-orange-100 text-orange-800">
                      <th className="px-5 py-3 text-left">#</th>
                      <th className="px-5 py-3 text-left">Student</th>
                      <th className="px-5 py-3 text-left">Subject</th>
                      <th className="px-5 py-3 text-left">Assessment</th>
                      <th className="px-5 py-3 text-left">Percentile</th>
                      <th className="px-5 py-3 text-left">Result</th>
                    </tr>
                  </thead>

                  {/* Body */}
                  <tbody>
                    {results.map((result, index) => (
                      <tr
                        key={index}
                        className="border-b border-orange-50 hover:bg-orange-50/60 transition duration-200"
                      >
                        <td className="px-5 py-4 text-gray-600">{index + 1}</td>

                        <td className="px-5 py-4 font-semibold text-gray-800">
                          {result.student_name}
                        </td>

                        <td className="px-5 py-4 text-gray-600">
                          {result.subject}
                        </td>

                        <td className="px-5 py-4 text-gray-600">
                          {result.assessment_title}
                        </td>

                        <td className="px-5 py-4 font-semibold text-gray-800">
                          {result.percentile}%
                        </td>

                        <td className="px-5 py-4">
                          {result.result_status.toLowerCase() === 'pass' ? (
                            <span className="px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wide border border-green-200">
                              PASS
                            </span>
                          ) : (
                            <span className="px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold tracking-wide border border-red-200">
                              FAIL
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App