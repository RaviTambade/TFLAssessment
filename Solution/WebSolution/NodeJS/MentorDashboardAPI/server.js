
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 8000;
var fs=require('fs');





// app.get("/api/learnerskill", (req, res) => {
//     res.json();
// });

// app.get("/api/mentordata", (req, res) => {
//     res.json({
//         mentorName: "Ravi Tambade",
//         role: "Lead Mentor",
//         activeCohorts: 3,
//         learners: 86
//     });
// });

// app.get("/api/mentorrecommendation", (req, res) => {
//     res.json({
//         title: "Mentor Action Recommendations",
//         SuggestedActions: [
//             "Assign DI-focused micro-assessment",
//             "Pair with peer for code walkthrough ",
//             "Recommend Layer 3 reinforcement module "
//         ],
//         buttons: [
//             " Assign Assessment",
//             "Schedule Mentoring Session"
//         ]
//     })
// });

// app.get("/api/skillhealthsnapshot", (req, res) => {
//     res.json([
//         { level: "Strong", topic: "Programming Basics", percent: 85 },
//         { level: "Average", topic: "Web Architecture", percent: 55 },
//         { level: "Weak", topic: "Dependency Injection, LINQ", percent: 30 }
//     ]);
// });

// app.get("/api/test-data", (req, res) => {
//     res.json({
//         ActiveTest: 6,
//         PendingReview: 12,
//         SkillGap: 18,
//         Alert: 3,
//     })
// });

const router=require("./routes/routes");
app.use('/',router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});