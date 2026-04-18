import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const DeleteConcept = () => {
  const navigate = useNavigate();

  // In real project → pass concept details via params or state
  const conceptName = "JAVA";

  const handleDelete = () => {
    // Call API delete method here
    alert("Concept Deleted Successfully");
    navigate(-1);
  };

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-xl">

        <Card className="border-0 shadow-elegant overflow-hidden">
          <div className="bg-gradient-hero p-8">

            <CardContent className="text-center space-y-6">

              {/* Warning Icon Style */}
              <div className="mx-auto w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-4xl">⚠️</span>
              </div>

              <h2 className="text-3xl font-bold text-foreground">
                Delete Concept
              </h2>

              <p className="text-muted-foreground">
                Are you sure you want to delete
                <span className="font-semibold text-primary"> {conceptName} </span> ?
                This action cannot be undone.
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-4 pt-4">

                <Button
                  variant="outline"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>

                <Button
                  variant="destructive"
                  onClick={handleDelete}
                >
                  Delete Concept
                </Button>

              </div>

            </CardContent>
          </div>
        </Card>

      </div>
    </section>
  );
};

export default DeleteConcept;