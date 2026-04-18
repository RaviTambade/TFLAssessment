import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { useNavigate } from "react-router-dom";

const AddLanguage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");

  const handleSave = () => {
    if (!name.trim()) return alert("Language name is required.");
    console.log({ name, description, status }); // replace with your API call
    navigate("/models/skilltaxonomy/languages");
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="shadow-elegant border-0">
          <CardContent className="bg-gradient-hero p-8 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Add Language
            </h2>
            <div>
              <Label>Language Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter language name"
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
              />
            </div>
            <div>
              <Label>Status</Label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full mt-2 p-2 rounded-md border"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => navigate("/models/skilltaxonomy/languages")}>
                Cancel
              </Button>
              <Button variant="hero" onClick={handleSave}>
                Save Language
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AddLanguage;