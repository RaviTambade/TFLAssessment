function KPIStrip() {

  const kpis = {
    candidates: 24,
    employable: 7,
    trainable: 10,
    notReady: 7
  };

  return (
    <div className="KPI-Strip">
      <div>👥 Candidates <strong>{kpis.candidates}</strong></div>
      <div>🟢 Employable <strong>{kpis.employable}</strong></div>
      <div>🟡 Trainable <strong>{kpis.trainable}</strong></div>
      <div>🔴 Not Ready <strong>{kpis.notReady}</strong></div>
    </div>
  );
}

export default KPIStrip;
