const projectEvidence = {
    project : "Order Management System",
    deployment:"Azure App Service",
    gitActivityLevel:75
}

function ProjectEvidence() {

    return (
        <div className="card mb-3">
            <div className="card-header bg-dark text-white">
            <h4>Project : {projectEvidence.project}</h4>
            </div>

            <h6>Problem Statement</h6>
            <p>REST-based system for order processing</p>

            <h6> Architecture: </h6>
            <p>UI → API → Service → Database</p>
            <h6> Git Activity: </h6>
             <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${projectEvidence.gitActivityLevel}%` }}
              >{projectEvidence.gitActivityLevel}%</div>
            </div>

        <h6> Deployment:{projectEvidence.deployment} </h6>

        <div className="d-flex">
        <button className="btn btn-outline-primary me-2">View Demo</button>
        <button className="btn btn-outline-primary me-2">View Code</button>
        </div>
    </div>
    );
}

export default ProjectEvidence;
