import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const DeleteSubject = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-xl">

        <Card className="shadow-elegant border-0">
          <div className="bg-gradient-hero p-8">
            <CardContent className="space-y-6 text-center">

              <h2 className="text-2xl font-bold text-foreground">
                Confirm Delete
              </h2>

              <p className="text-muted-foreground">
                Are you sure you want to delete this subject?
              </p>

              <div className="bg-background rounded-lg p-4 shadow">
                <p className="font-semibold">Subject: Java</p>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <Button variant="outline" onClick={() => navigate(-1)}>
                  Cancel
                </Button>
                <Button variant="destructive">
                  Delete
                </Button>
              </div>

            </CardContent>
          </div>
        </Card>

      </div>
    </section>
  );
};

export default DeleteSubject;