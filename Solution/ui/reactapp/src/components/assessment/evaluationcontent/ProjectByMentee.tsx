

import React, { useEffect, useState } from "react";
import {  WEBAPI_DOTNET_URL, WEBAPI_NODE_URL ,WEBAPI_JAVA_URL} from "@/lib/utils";

function ProjectByMentee() {
  const [projects, setProjects] = useState([]);
  const [menteeId, setMenteeId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAllProjects();
  }, []);

  //  Fetch all projects
  const fetchAllProjects = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${WEBAPI_JAVA_URL}/projects`);

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data = await response.json();
      setProjects(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //  Fetch by Mentee ID
  const fetchByMenteeId = async () => {
    if (!menteeId) {
      setError("Please enter Mentee ID");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${WEBAPI_JAVA_URL}/projects/student/${menteeId}/projects`
      );

      if (!response.ok) {
        throw new Error("No projects found for this Mentee");
      }

      const data = await response.json();
      setProjects(data);
    } catch (err) {
      setError(err.message);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Mentor Dashboard - All Projects
      </h2>

      {/* 🔍 Search Box */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <input
          type="number"
          placeholder="Enter Mentee ID"
          value={menteeId}
          onChange={(e) => setMenteeId(e.target.value)}
          className="border px-4 py-2 rounded w-full sm:w-64"
        />

        <button
          onClick={fetchByMenteeId}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>

        <button
          onClick={fetchAllProjects}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Show All
        </button>
      </div>

      {/* Loading / Error */}
      {loading && <p className="text-center">Loading projects...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((p) => (
            <div
              key={p.projectId}
              className="border rounded-xl p-5 shadow-md bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">
                {p.projectName}
              </h3>

              <p><b>Mentor ID:</b> {p.mentorId}</p>
              <p><b>Description:</b> {p.description}</p>

              <p>
                <b>Status:</b>{" "}
                <span className="px-2 py-1 rounded bg-gray-100 text-gray-700">
                  {p.status}
                </span>
              </p>

              <p><b>Created:</b> {p.createdAt}</p>
              <p><b>Repo:</b> {p.repositoryUrl}</p>
            </div>
          ))
        ) : (
          !loading && (
            <p className="text-center col-span-full">
              No projects available
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default ProjectByMentee;