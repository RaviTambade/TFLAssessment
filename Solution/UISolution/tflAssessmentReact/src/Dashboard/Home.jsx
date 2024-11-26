import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Transflower's Online Assessment Platform</h1>
        <p className="text-lg mt-4">A flexible and scalable solution for conducting assessments securely and accurately.</p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>User Authentication & Authorization</li>
          <li>Assessment Creation and Management</li>
          <li>Question Bank with Various Question Types</li>
          <li>Online Test-Taking Interface</li>
          <li>Automated Scoring and Feedback</li>
          <li>Detailed Reporting and Analytics</li>
          <li>Enhanced Security Features (Preventing Cheating)</li>
          <li>Cross-Device and Browser Compatibility</li>
        </ul>
      </section>

      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-semibold">About This Platform</h2>
        <p className="text-lg">
          This repository provides an online assessment web solution designed to streamline assessments in educational settings,
          certification programs, and employment evaluations. It supports efficient test-taking, secure assessments, and real-time
          analytics for both students and teachers.
        </p>
      </section>
    </div>
  );
}

export default Home;
