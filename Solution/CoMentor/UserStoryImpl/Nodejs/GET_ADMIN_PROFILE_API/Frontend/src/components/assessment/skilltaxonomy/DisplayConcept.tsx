import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const DisplayConcept = () => {

    const navigate = useNavigate();

    // ✅ Hardcoded Concept Data
    const concepts = [
        {
            concept_id: 1,
            name: "OOP Basics",
            description: "Object oriented programming fundamentals",
            level_id: 1
        },
        {
            concept_id: 2,
            name: "Inheritance",
            description: "Class inheritance concepts",
            level_id: 2
        },
        {
            concept_id: 3,
            name: "Polymorphism",
            description: "Runtime and compile time polymorphism",
            level_id: 3
        },
        {
            concept_id: 4,
            name: "Encapsulation",
            description: "Data hiding and security concepts",
            level_id: 1
        }
    ];

    return (
        <section className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4">

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground">
                        Concepts List
                    </h2>

                    <Button variant="hero" onClick={() => navigate("/concept/add")}>
                        + Add Concept
                    </Button>
                </div>

                <Card className="border-0 shadow-elegant overflow-hidden">
                    <CardContent className="p-0">

                        <div className="overflow-x-auto">
                            <table className="w-full">

                                <thead className="bg-gradient-hero">
                                    <tr>
                                        <th className="p-4 text-left">ID</th>
                                        <th className="p-4 text-left">Concept Name</th>
                                        <th className="p-4 text-left">Description</th>
                                        <th className="p-4 text-left">Level ID</th>
                                        <th className="p-4 text-center">Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {concepts.map((concept) => (
                                        <tr key={concept.concept_id} className="border-b">
                                            <td className="p-4">{concept.concept_id}</td>
                                            <td className="p-4 font-medium">{concept.name}</td>
                                            <td className="p-4 text-muted-foreground">
                                                {concept.description}
                                            </td>
                                            <td className="p-4">{concept.level_id}</td>

                                            <td className="p-4 text-center space-x-3">
                                                <Button onClick={() => navigate("/concept/update")} size="sm" variant="outline">
                                                    Edit
                                                </Button>

                                                <Button onClick={() => navigate("/concept/delete")} size="sm" variant="destructive">
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                    </CardContent>
                </Card>

            </div>
        </section>
    );
};

export default DisplayConcept;