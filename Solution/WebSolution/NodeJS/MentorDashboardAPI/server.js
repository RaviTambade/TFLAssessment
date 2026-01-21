const express = require('express');
const cors=require('cors');

const app=express();

app.use(cors());


const PORT=7766;

app.listen(PORT,()=>{
    console.log(`Server is Listening on port no. ${PORT}`)
});

app.get("/publish-assessment",(req,res)=>{
    res.json({
    Title: "Publish Assessment",
    AssessmentName: "ASP.NET Core – Layer 3 Diagnostic",
    AssignedTo: "Sejal kulkarni",
    StarDate: "15 Jan 2025",
    EndDate: "16 Jan 2025",
    AttemptsAllowed: "1",
    FeedbackMode: " Immediate ✓ Mentor Review ✓",
    Buttons: [
      "Publish", "Schedule", "Cancel"
    ]
    })
});

app.get("/mentor-recommendation",(req,res)=>{
    res.json({
        title: "Mentor Action Recommendations",
        SuggestedActions: [
            "Assign DI-focused micro-assessment",
            "Pair with peer for code walkthrough ",
            "Recommend Layer 3 reinforcement module "
        ],
        buttons:[
            " Assign Assessment",
            "Schedule Mentoring Session"
        ]})
});

  app.get("/skill-health-snapshot", (req, res) => {
  res.json([
    { level: "Strong", topic: "Programming Basics", percent: 85 },
    { level: "Average", topic: "Web Architecture", percent: 55 },
    { level: "Weak", topic: "Dependency Injection, LINQ", percent: 30 }
  ]);
});
