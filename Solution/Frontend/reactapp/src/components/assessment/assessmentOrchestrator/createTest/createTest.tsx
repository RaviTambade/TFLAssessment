import { useEffect, useState } from "react";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigate, useNavigate } from "react-router-dom";


const CreateTest = () => {
      const [testName, setTestName] = useState("");
      const [description, setDescription] = useState("");
      const [duration, setDuration] = useState("");
      const [error, setError] = useState<string | null>(null);
      const Navigate = useNavigate();

 
      
        // ==========================
        // SUBMIT FORM
        // ==========================
        const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
      
          try {
            setError(null);
      
            const smeId = Number(localStorage.getItem("smeId") || 0);
      
            const payload = {
              SmeId: smeId,
              Title: testName,
              Description: description,
              Duration: Number(duration)
            };
      
            console.log("Submitting Payload:", payload);

            const response = await fetch(`${WEBAPI_DOTNET_URL}/CreateTest/create`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error("Failed to create test");

            alert("Test Created Successfully");
            setTestName("");
            setDescription("");
            setDuration("");
          } catch (err) {
            setError("Failed to create test.");
            console.error(err);
          }
        };

    return (
        <div>
            <div className="w-full max-w-5xl mx-auto p-6">
      <CreateTest />

      <div>
        <div>
          <h3>Create New Test</h3>
        </div>

        {/* <CardContent>
          {loading && (
            <p className="text-center py-4">Loading concepts...</p>
          )}

          {error && (
            <div className="mb-4 p-4 border border-red-400 bg-red-100 rounded">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          
        </CardContent> */}
      </div>
    </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* TEST NAME */}
                <div className="space-y-2">
                    <Label>Test Name</Label>

                    <Input
                        value={testName}
                        onChange={(e) => setTestName(e.target.value)}
                        placeholder="Enter test name"
                        required
                    />
                </div>

                {/* DESCRIPTION */}
                <div className="space-y-2">
                    <Label>Description</Label>

                    <textarea
                        className="w-full border rounded-md p-3"
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description"
                        required
                    />
                </div>

                {/* DURATION */}
                <div className="space-y-2">
                    <Label>Duration</Label>

                    <Input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        placeholder="Enter duration"
                        required
                    />
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">
                    <Button type="submit"   className="flex-1">
                        Create Test
                    </Button>

                    <Button type="reset" variant="outline" className="flex-1">
                        Clear
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default CreateTest;