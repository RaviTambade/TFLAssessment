import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const DeleteLanguage = () => {
    const navigate = useNavigate();

    const handleDelete = () => {
        console.log("Deleting language..."); // replace with your API call
        navigate("/models/skilltaxonomy/languages");
    };

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-xl">
                <Card className="shadow-elegant border-0">
                    <CardContent className="bg-gradient-hero p-8 space-y-6 text-center">

                        <h2 className="text-2xl font-bold text-foreground">
                            Confirm Delete
                        </h2>

                        <p className="text-muted-foreground">
                            Are you sure you want to delete this language?
                        </p>

                        <div className="bg-background rounded-lg p-4 shadow">
                            <p className="font-semibold">Language: Java</p>
                        </div>

                        <div className="flex justify-center gap-4 pt-4">
                            <Button variant="outline" onClick={() => navigate("/models/skilltaxonomy/languages")}>
                                Cancel
                            </Button>
                            <Button variant="destructive" onClick={handleDelete}>
                                Delete
                            </Button>
                        </div>

                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default DeleteLanguage;