const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());


app.get("/api/learnerskill", (req, res) => {
    res.json({
        learnerName: "Nirjala Naik",
        layer: "3 - System Understanding",
        skills: [
            { skillName: "Programming Basics", mastery: "85%", status: "strong" },
            { skillName: "MVC Flow", mastery: "78%", status: "stable" },
            { skillName: "Dependency Injection", mastery: "42%", status: "warning" },
            { skillName: "LINQ", mastery: "35%", status: "warning" },
            { skillName: "Asynchronous Programming", mastery: "25%", status: "warning" }
        ],
        insights: [
            "Conceptual clarity is good",
            "Struggles with lifetime selection",
            "Needs scenario-based practice"
        ]
    });
});

app.get("/api/mentordata",(req,res)=>{
    res.json( {
    mentorName: "Ravi Tambade",
    role: "Lead Mentor",
    activeCohorts: 3,
    learners: 86
    });
});

app.get("/api/mentorrecommandation",(req,res)=>{
    res.json({
        title: "Mentor Action Recommendations",
        SuggestedActions: [
            "Assign DI-focused micro-assessment",
            "Pair with peer for code walkthrough ",
            "Recommend Layer 3 reinforcement module "
        ],
        buttons: [
            " Assign Assessment",
            "Schedule Mentoring Session"
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});