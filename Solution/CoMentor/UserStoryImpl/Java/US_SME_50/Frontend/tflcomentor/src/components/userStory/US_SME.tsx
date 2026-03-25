import React, { useState, useEffect } from "react";
import { BookOpen, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

type Runtime = {
  id: number;
  runtimeName: string;
};

type Language = {
  id: number;
  languageName: string;
  runtimeId: number;
};

type Layer = {
  id: number;
  layerName: string;
};

type Framework = {
  id: number;
  runtimeName: string;
};

type Concept = {
  id: number;
  name: string;
  description: string;
};

const API_BASE_URL = import.meta.env.VITE_CONCEPTS_API_BASE ?? "/api/concepts";

console.log("API_BASE_URL:", API_BASE_URL);

const US_SME = () => {
  // State for dropdowns
  const [runtimes, setRuntimes] = useState<Runtime[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [layers, setLayers] = useState<Layer[]>([]);
  const [frameworks, setFrameworks] = useState<Framework[]>([]);
  const [concepts, setConcepts] = useState<Concept[]>([]);

  // State for selected values
  const [selectedRuntime, setSelectedRuntime] = useState<Runtime | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [selectedLayer, setSelectedLayer] = useState<Layer | null>(null);
  const [selectedFramework, setSelectedFramework] = useState<Framework | null>(null);

  // State for loading and errors
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch runtimes on component mount
  useEffect(() => {
    const fetchRuntimes = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const response = await fetch(`${API_BASE_URL}/runtimes`, {
          method: "GET",
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data: Runtime[] = await response.json();
        setRuntimes(Array.isArray(data) ? data : []);
      } catch (error) {
        setErrorMessage("Unable to load runtimes. Please verify backend API.");
        console.error("Runtimes fetch failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchRuntimes();
  }, []);

  // Fetch languages when runtime is selected
  useEffect(() => {
    if (!selectedRuntime) {
      setLanguages([]);
      setSelectedLanguage(null);
      setLayers([]);
      setSelectedLayer(null);
      setFrameworks([]);
      setSelectedFramework(null);
      setConcepts([]);
      return;
    }

    const fetchLanguages = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const response = await fetch(`${API_BASE_URL}/languages/${selectedRuntime.id}`, {
          method: "GET",
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data: Language[] = await response.json();
        setLanguages(Array.isArray(data) ? data : []);
        setSelectedLanguage(null);
        setLayers([]);
        setSelectedLayer(null);
        setFrameworks([]);
        setSelectedFramework(null);
        setConcepts([]);
      } catch (error) {
        setErrorMessage("Unable to load languages.");
        console.error("Languages fetch failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchLanguages();
  }, [selectedRuntime]);

  // Fetch layers when language is selected
  useEffect(() => {
    if (!selectedLanguage) {
      setLayers([]);
      setSelectedLayer(null);
      setFrameworks([]);
      setSelectedFramework(null);
      setConcepts([]);
      return;
    }

    const fetchLayers = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const response = await fetch(`${API_BASE_URL}/layers`, {
          method: "GET",
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data: Layer[] = await response.json();
        setLayers(Array.isArray(data) ? data : []);
        setSelectedLayer(null);
        setFrameworks([]);
        setSelectedFramework(null);
        setConcepts([]);
      } catch (error) {
        setErrorMessage("Unable to load layers.");
        console.error("Layers fetch failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchLayers();
  }, [selectedLanguage]);

  // Fetch frameworks when layer is selected
  useEffect(() => {
    if (!selectedLayer || !selectedLanguage) {
      setFrameworks([]);
      setSelectedFramework(null);
      setConcepts([]);
      return;
    }

    const fetchFrameworks = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");
        console.log(`Fetching frameworks for language ID: ${selectedLanguage.id}, layer ID: ${selectedLayer.id}`);
        // Use both language and layer ID for better filtering
        const response = await fetch(`${API_BASE_URL}/frameworks/${selectedLanguage.id}/${selectedLayer.id}`, {
          method: "GET",
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data: Framework[] = await response.json();
        console.log("Frameworks data:", data);
        setFrameworks(Array.isArray(data) ? data : []);
        setSelectedFramework(null);
        setConcepts([]);
      } catch (error) {
        setErrorMessage("Unable to load frameworks.");
        console.error("Frameworks fetch failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchFrameworks();
  }, [selectedLayer, selectedLanguage]);

  // Fetch concepts when framework is selected
  useEffect(() => {
    if (!selectedFramework) {
      setConcepts([]);
      return;
    }

    const fetchConcepts = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const response = await fetch(
          `${API_BASE_URL}/get/${encodeURIComponent(selectedFramework.runtimeName)}`,
          {
            method: "GET",
            headers: { Accept: "application/json" },
          }
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data: Concept[] = await response.json();
        setConcepts(Array.isArray(data) ? data : []);
      } catch (error) {
        setErrorMessage("Unable to load concepts.");
        console.error("Concepts fetch failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchConcepts();
  }, [selectedFramework]);

  return (
    <section className="container mx-auto px-4 py-8">
      <Card className="border-border/70">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <BookOpen className="h-6 w-6 text-primary" />
            Concept Explorer
          </CardTitle>
          <CardDescription>
            Navigate through Runtime, Language, Layer, and Framework to explore concepts.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Selection Radio Buttons */}
          <div className="space-y-8">
            {/* Runtime Selection */}
            <div>
              <Label className="mb-4 block text-base font-semibold">1. Select Runtime</Label>
              <RadioGroup
                value={selectedRuntime?.id.toString() ?? ""}
                onValueChange={(value) => {
                  const runtime = runtimes.find((r) => r.id.toString() === value);
                  setSelectedRuntime(runtime ?? null);
                }}
              >
                <div className="flex flex-wrap gap-6">
                  {runtimes.length === 0 && !isLoading && (
                    <p className="text-sm text-muted-foreground">No runtimes available</p>
                  )}
                  {isLoading && <p className="text-sm text-muted-foreground">Loading runtimes...</p>}
                  {runtimes.map((runtime) => (
                    <div key={runtime.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={runtime.id.toString()} id={`runtime-${runtime.id}`} />
                      <Label htmlFor={`runtime-${runtime.id}`} className="cursor-pointer font-normal">
                        {runtime.runtimeName}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Language Selection */}
            {selectedRuntime && (
              <div className="flex items-start gap-4">
                <ChevronRight className="mt-6 h-5 w-5 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <Label className="mb-4 block text-base font-semibold">2. Select Language</Label>
                  <RadioGroup
                    value={selectedLanguage?.id.toString() ?? ""}
                    onValueChange={(value) => {
                      const language = languages.find((l) => l.id.toString() === value);
                      setSelectedLanguage(language ?? null);
                    }}
                  >
                    <div className="space-y-3">
                      {languages.length === 0 && !isLoading && (
                        <p className="text-sm text-muted-foreground">No languages available</p>
                      )}
                      {isLoading && <p className="text-sm text-muted-foreground">Loading languages...</p>}
                      {languages.map((language) => (
                        <div key={language.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={language.id.toString()} id={`language-${language.id}`} />
                          <Label htmlFor={`language-${language.id}`} className="cursor-pointer font-normal">
                            {language.languageName}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Layer Selection */}
            {selectedLanguage && (
              <div className="flex items-start gap-4">
                <ChevronRight className="mt-6 h-5 w-5 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <Label className="mb-4 block text-base font-semibold">3. Select Layer</Label>
                  <RadioGroup
                    value={selectedLayer?.id.toString() ?? ""}
                    onValueChange={(value) => {
                      const layer = layers.find((l) => l.id.toString() === value);
                      setSelectedLayer(layer ?? null);
                    }}
                  >
                    <div className="space-y-3">
                      {layers.length === 0 && !isLoading && (
                        <p className="text-sm text-muted-foreground">No layers available</p>
                      )}
                      {isLoading && <p className="text-sm text-muted-foreground">Loading layers...</p>}
                      {layers.map((layer) => (
                        <div key={layer.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={layer.id.toString()} id={`layer-${layer.id}`} />
                          <Label htmlFor={`layer-${layer.id}`} className="cursor-pointer font-normal">
                            {layer.layerName}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Framework Selection */}
            {selectedLayer && (
              <div className="flex items-start gap-4">
                <ChevronRight className="mt-6 h-5 w-5 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <Label className="mb-4 block text-base font-semibold">
                    4. Select Framework 
                    {frameworks.length > 0 && <span className="ml-2 text-xs text-muted-foreground">({frameworks.length})</span>}
                  </Label>
                  {frameworks.length === 0 && !isLoading && (
                    <p className="mb-4 text-sm text-destructive">No frameworks available for this selection</p>
                  )}
                  {isLoading && <p className="mb-4 text-sm text-muted-foreground">Loading frameworks...</p>}
                  <RadioGroup
                    value={selectedFramework?.id.toString() ?? ""}
                    onValueChange={(value) => {
                      const framework = frameworks.find((f) => f.id.toString() === value);
                      setSelectedFramework(framework ?? null);
                    }}
                  >
                    <div className="space-y-3">
                      {frameworks.map((framework) => (
                        <div key={framework.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={framework.id.toString()} id={`framework-${framework.id}`} />
                          <Label htmlFor={`framework-${framework.id}`} className="cursor-pointer font-normal">
                            {framework.runtimeName}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}
          </div>

          {/* Concepts Display */}
          {selectedFramework && (
            <div className="rounded-md border border-border p-4">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Concepts</h2>
                <span className="text-sm text-muted-foreground">
                  {isLoading ? "Loading..." : `${concepts.length} concept(s)`}
                </span>
              </div>

              {errorMessage && (
                <p className="mb-3 text-sm text-destructive">{errorMessage}</p>
              )}

              {!isLoading && concepts.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No concepts found for the selected framework.
                </p>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {concepts.map((concept) => (
                    <Card key={`${concept.id}-${concept.name}`} className="h-full">
                      <CardHeader>
                        <CardTitle className="text-base">{concept.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {concept.description || "No description available."}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          {!selectedFramework && (
            <div className="rounded-md border border-dashed border-border p-8 text-center">
              <p className="text-sm text-muted-foreground">
                Select Runtime, Language, Layer, and Framework using the radio buttons above to view concepts.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default US_SME;
