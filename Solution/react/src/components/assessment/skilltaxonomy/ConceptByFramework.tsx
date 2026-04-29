import { useEffect, useState } from "react";

type Framework = {
  id: number;
  frameworkName: string;
};

type Concept = {
  id: number;
  name: string;
};

const baseUrl = "http://localhost:8080/api/technologies";

const ConceptByFramework = () => {
  const [frameworks, setFrameworks] = useState<Framework[]>([]);
  const [frameworkName, setFrameworkName] = useState("");
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [loading, setLoading] = useState(false);

 
  useEffect(() => {
    fetch(`${baseUrl}/frameworks`)
      .then(res => res.json())
      .then(data => setFrameworks(Array.isArray(data) ? data : []))
      .catch(err => console.error(err));
  }, []);

  const handleSearch = async () => {
    if (!frameworkName.trim()) {
      alert("Enter framework name");
      return;
    }

   
    const framework = frameworks.find(f =>
      f.frameworkName.toLowerCase().includes(frameworkName.toLowerCase())
    );

    if (!framework) {
      alert("Framework not found");
      setConcepts([]);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${baseUrl}/concepts/frameworks/${framework.id}`
      );

      const data = await res.json();
      setConcepts(Array.isArray(data) ? data : []);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Framewok Name</h2>

      <input
        type="text"
        placeholder="Enter framework name"
        value={frameworkName}
        onChange={(e) => setFrameworkName(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>
        Search
      </button>

  
      {loading && <p>Loading...</p>}

      
      <ul>
        {concepts.map(c => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>


      {!loading && concepts.length === 0 && frameworkName && (
        <p>No concepts found</p>
      )}
    </div>
  );
};

export default ConceptByFramework;