import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { useNavigate } from "react-router-dom";

const UpdateConcept = () => {

    const navigate = useNavigate();

    // Multiple concepts (example)
    const concepts = [
        { id: 1, name: "OOP Basics", description: "Object oriented programming fundamentals", level_id: 1 },
        { id: 2, name: "Data Structures", description: "Understanding arrays, stacks and queues", level_id: 2 },
        { id: 3, name: "Operating System", description: "Process, memory and scheduling", level_id: 3 }
    ];

    const [selectedConceptId, setSelectedConceptId] = useState(concepts[0].id);
    const [conceptData, setConceptData] = useState(concepts[0]);

    const handleConceptChange = (e) => {
        const id = Number(e.target.value);
        setSelectedConceptId(id);

        const concept = concepts.find(c => c.id === id);
        setConceptData(concept);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setConceptData({
            ...conceptData,
            [name]: value
        });
    };

    const handleUpdate = () => {
        console.log("Updated Concept:", conceptData);
        alert("Concept Updated Successfully!");
        navigate(-1);
    };

    return (
        <section className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">

                <Card className="border-0 shadow-elegant overflow-hidden">
                    <div className="bg-gradient-hero p-6 sm:p-10">

                        <CardContent className="space-y-6">

                            {/* Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                    Update Concept
                                </h2>
                            </div>

                            {/* Select Concept */}
                            <div className="space-y-2">
                                <Label>Select Concept</Label>
                                <select
                                    value={selectedConceptId}
                                    onChange={handleConceptChange}
                                    className="w-full p-3 rounded-md border bg-background"
                                >
                                    {concepts.map((concept) => (
                                        <option key={concept.id} value={concept.id}>
                                            {concept.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Concept Name */}
                            <div className="space-y-2">
                                <Label>Concept Name</Label>
                                <Input
                                    name="name"
                                    value={conceptData.name}
                                    onChange={handleChange}
                                    placeholder="Enter concept name"
                                />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label>Description</Label>
                                <textarea
                                    name="description"
                                    rows={4}
                                    value={conceptData.description}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary outline-none"
                                />
                            </div>

                            {/* Skill Level */}
                            <div className="space-y-2">
                                <Label>Skill Level</Label>

                                <select
                                    name="level_id"
                                    value={conceptData.level_id}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md border bg-background"
                                >
                                    <option value="">-- Select Level --</option>
                                    <option value={1}>Beginner</option>
                                    <option value={2}>Intermediate</option>
                                    <option value={3}>Advanced</option>
                                </select>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-4 pt-4">

                                <Button variant="outline" onClick={() => navigate(-1)}>
                                    Cancel
                                </Button>

                                <Button variant="hero" onClick={handleUpdate}>
                                    Save Changes
                                </Button>

                            </div>

                        </CardContent>
                    </div>
                </Card>

            </div>
        </section>
    );
};

export default UpdateConcept;