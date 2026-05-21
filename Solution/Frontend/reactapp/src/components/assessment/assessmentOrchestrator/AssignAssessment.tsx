import { useEffect, useState, useRef } from "react";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
import Student from "./entities/Student";
import Test from "./entities/Test";

type AssignmentSummary = {
  AssessmentIds: (number | string)[];
  TestName: string;
  Status: string;
  ScheduledAt: string;
  StudentNames: string[];
};

export default function AssignAssessment() {

  const [students, setStudents] = useState<Student[]>([]);
  const [tests, setTests] = useState<Test[]>([]);

  const [status, setStatus] = useState("");
  const [searchStudent, setSearchStudent] = useState("");
  const [searchTest, setSearchTest] = useState("");

  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
  const [selectedTest, setSelectedTest] = useState<number | null>(null);

  const [isStudentListOpen, setIsStudentListOpen] = useState(false);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [summary, setSummary] = useState<AssignmentSummary | null>(null);

  // DROPDOWN REF
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // CURRENT DATE + TIME
  const getCurrentSchedule = () => {

    const now = new Date();

    return {
      date: now.toISOString().split("T")[0],
      time: now.toTimeString().slice(0, 5)
    };
  };

  // SET DEFAULT DATE TIME
  useEffect(() => {

    const currentSchedule = getCurrentSchedule();

    setDate(currentSchedule.date);
    setTime(currentSchedule.time);

  }, []);

  // LOAD DATA
  useEffect(() => {

    fetchStudents();
    fetchTests();

  }, []);

  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {

        setIsStudentListOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  // FETCH STUDENTS
  const fetchStudents = async () => {

    try {

      const res = await fetch(
        `${WEBAPI_DOTNET_URL}/Assessment/students`
      );

      const data = await res.json();

      setStudents(
        Array.isArray(data) ? data : []
      );

    } catch {

      setStudents([]);
    }
  };

  const readResponse = async (res: Response) => {

    const text = await res.text();

    if (!text) {

      return null;
    }

    try {

      return JSON.parse(text);

    } catch {

      return text;
    }
  };

  const getResponseMessage = (
    data: unknown,
    fallback: string
  ) => {

    if (typeof data === "string") {

      return data || fallback;
    }

    if (
      data &&
      typeof data === "object" &&
      "message" in data &&
      typeof (data as { message?: unknown }).message === "string"
    ) {

      return (data as { message: string }).message || fallback;
    }

    return fallback;
  };

  const getNumberValue = (
    data: unknown,
    keys: string[]
  ) => {

    if (!data || typeof data !== "object") {

      return null;
    }

    const record = data as Record<string, unknown>;

    for (const key of keys) {

      const value = record[key];

      if (typeof value === "number") {

        return value;
      }

      if (
        typeof value === "string" &&
        value.trim() !== "" &&
        !Number.isNaN(Number(value))
      ) {

        return Number(value);
      }
    }

    return null;
  };

  const getAssessmentIdsFromResponse = (data: unknown) => {

    const singleId = getNumberValue(
      data,
      [
        "assessmentId",
        "AssessmentId",
        "id",
        "Id",
        "assignedAssessmentId",
        "AssignedAssessmentId"
      ]
    );

    if (singleId) {

      return [singleId];
    }

    if (!data || typeof data !== "object") {

      return [];
    }

    const record = data as Record<string, unknown>;
    const ids = record.assessmentIds ?? record.AssessmentIds;

    if (!Array.isArray(ids)) {

      return [];
    }

    return ids
      .map(id =>
        typeof id === "number" ? id : Number(id)
      )
      .filter(id => !Number.isNaN(id));
  };

  const getStudentName = (id: number) => {

    return students.find(s => s.id === id)?.fullName ?? `Student ${id}`;
  };

  const getTestName = (id: number) => {

    return tests.find(t => t.id === id)?.title ?? `Test ${id}`;
  };

  const fetchLatestAssessmentIds = async (
    testName: string,
    studentIds: number[],
    selectedStatus: string,
    scheduledDate: string
  ) => {

    try {

      const ids = await Promise.all(
        studentIds.map(async studentId => {

          const params = new URLSearchParams({
            fromDate: scheduledDate,
            toDate: scheduledDate
          });

          const res = await fetch(
            `${WEBAPI_DOTNET_URL}/Assessment/user/${studentId}?${params.toString()}`
          );

          if (!res.ok) {

            return null;
          }

          const data = await readResponse(res);

          if (!Array.isArray(data)) {

            return null;
          }

          const matchingAssessment = data
            .filter(item => {

              if (!item || typeof item !== "object") {

                return false;
              }

              const record = item as Record<string, unknown>;
              const title = String(record.AssessmentName ?? "").toLowerCase();
              const itemStatus = String(record.Status ?? "").toLowerCase();

              return (
                title === testName.toLowerCase() &&
                itemStatus === selectedStatus.toLowerCase()
              );
            })
            .sort((a, b) => {

              const firstId = getNumberValue(a, ["AssessmentId", "assessmentId"]) ?? 0;
              const secondId = getNumberValue(b, ["AssessmentId", "assessmentId"]) ?? 0;

              return secondId - firstId;
            })[0];

          return getNumberValue(
            matchingAssessment,
            ["AssessmentId", "assessmentId"]
          );
        })
      );

      return ids.filter((id): id is number => id !== null);

    } catch {

      return [];
    }
  };

  // FETCH TESTS
  const fetchTests = async () => {

    try {

      const res = await fetch(
        `${WEBAPI_DOTNET_URL}/Assessment/tests`
      );

      const data = await res.json();

      setTests(
        Array.isArray(data) ? data : []
      );

    } catch {

      setTests([]);
    }
  };

  // SELECT / UNSELECT STUDENT
  const toggleStudent = (id: number) => {

    setSelectedStudents(prev =>

      prev.includes(id)
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };

  // FILTER STUDENTS
  const filteredStudents = students.filter(s =>

    (s?.fullName ?? "")
      .toLowerCase()
      .includes(searchStudent.toLowerCase())
  );

  // FILTER TESTS
  const filteredTests = tests.filter(t =>

    (t?.title ?? "")
      .toLowerCase()
      .includes(searchTest.toLowerCase())
  );

  // ASSIGN / CANCEL
  const handleAssign = async () => {

    setSuccessMessage(null);
    setErrorMessage(null);
    const currentUser = JSON.parse(
      sessionStorage.getItem("current") || "{}"
    );

    try {

      // VALIDATION
      if (!selectedTest) {

        setErrorMessage("Please select a test.");
        return;
      }

      if (
        status !== "Cancelled" &&
        selectedStudents.length === 0
      ) {

        setErrorMessage(
          "Please select at least one student."
        );

        return;
      }
        const assignedBy =
          currentUser.userid;

      // CANCEL FLOW
      if (status === "Cancelled") {

        const res = await fetch(
          `${WEBAPI_DOTNET_URL}/Assessment/cancel/test/${selectedTest}`,
          {
            method: "POST"
          }
        );

        if (!res.ok) {

          const errorData = await readResponse(res);

          const message = getResponseMessage(
            errorData,
            "Failed to cancel assessment"
          );

          throw new Error(message);
        }

        const result = await readResponse(res);

        const cancelledCount = Number(
          result &&
            typeof result === "object" &&
            "cancelledCount" in result
            ? (result as { cancelledCount?: number }).cancelledCount ?? 0
            : 0
        );

        setErrorMessage(null);
        // GET USER FROM SESSION STORAGE
        const userData =
          sessionStorage.getItem("currentuser");

        console.log("RAW SESSION => ", userData);

        // PARSE USER
        const currentUser =
          userData ? JSON.parse(userData) : {};

        console.log("PARSED USER => ", currentUser);

        // GET USER ID
        const assignedBy =currentUser.userid ??currentUser.userId ?? currentUser.id;
        console.log("CURRENT USER OBJECT => ", currentUser);

console.log("USER ID VALUES => ", {userid: currentUser.userid,userId: currentUser.userId,id: currentUser.id
});

        // VALIDATE USER
        if (!assignedBy) {

          setErrorMessage(
            "User Id not found in session storage"
          );

          return;
        }

        console.log("ASSIGNED BY => ", assignedBy);

        setSuccessMessage(
          getResponseMessage(
            result,
            `Assessment cancelled successfully. ${cancelledCount} record(s) updated.`
          )
        );

        return;
      }

      // // ASSIGN DTO
      // const dto = {

      //   StudentIds: selectedStudents,

      //   TestId: selectedTest,

      //   ScheduledAt: new Date(
      //     `${date}T${time}:00`
      //   ).toISOString(),

      //   Status: status
      // };

      // DTO
      const dto = {

        StudentIds: selectedStudents,

        TestId: selectedTest,

        AssignedBy: assignedBy,

        ScheduledAt: new Date(
          `${date}T${time}:00`
        ).toISOString(),

        Status: status
      };

      console.log("ASSIGN DTO => ", dto);
      console.log("ASSIGN DTO => ", dto);

      // API CALL
      const res = await fetch(
        `${WEBAPI_DOTNET_URL}/Assessment/assigned`,
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(dto)
        }
      );

      // HANDLE ERROR
      if (!res.ok) {

        const errorData = await readResponse(res);

        const message = getResponseMessage(
          errorData,
          "Failed to assign assessment"
        );

        throw new Error(message);
      }

      // HANDLE SUCCESS
      const result = await readResponse(res);

      console.log("ASSIGN RESULT => ", result);

      // IF BACKEND RETURNS FAILURE
      if (
        result &&
        typeof result === "object" &&
        "success" in result &&
        (result as { success?: boolean }).success === false
      ) {

        setErrorMessage(
          getResponseMessage(
            result,
            "Failed to assign assessment"
          )
        );

        return;
      }

      // CLEAR OLD ERROR MESSAGE
      setErrorMessage(null);

      const testName = getTestName(selectedTest);
      const studentNames = selectedStudents.map(getStudentName);
      const responseAssessmentIds = getAssessmentIdsFromResponse(result);
      const assessmentIds = responseAssessmentIds.length > 0
        ? responseAssessmentIds
        : await fetchLatestAssessmentIds(
          testName,
          selectedStudents,
          dto.Status,
          date
        );

      // SHOW SUCCESS MESSAGE
      setSummary({
        AssessmentIds: assessmentIds,
        TestName: testName,
        Status: dto.Status,
        ScheduledAt: dto.ScheduledAt,
        StudentNames: studentNames
      });

      setSuccessMessage(
        getResponseMessage(
          result,
          "Assessment Assigned Successfully"
        )
      );

    } catch (err: unknown) {

      setErrorMessage(

        err instanceof Error
          ? err.message
          : "Failed to assign assessment"
      );
    }
  };

  // RESET FORM
  const reset = () => {

    setStatus("");

    setSearchStudent("");
    setSearchTest("");

    setSelectedStudents([]);

    setSelectedTest(null);

    setIsStudentListOpen(false);

    const currentSchedule = getCurrentSchedule();

    setDate(currentSchedule.date);

    setTime(currentSchedule.time);
    setSummary(null);
  };

  return (

    <div className="min-h-screen bg-orange-50 flex justify-center p-6 overflow-auto">

      <div className="w-full max-w-4xl">

        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-6 text-orange-600">
          Assign Assessment
        </h1>

        {/* SUCCESS MESSAGE */}
        {successMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="w-full max-w-4xl rounded-lg border border-green-300 bg-green-50 p-8 text-green-800 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold">
                  ✅ {successMessage}
                </span>
              </div>

              {summary && (
                <div className="bg-white border border-green-200 rounded-md p-4 space-y-2 text-sm">
                  <h3 className="font-bold border-b pb-1 mb-2 uppercase tracking-wider text-green-700">Assignment Summary</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-semibold">
                        {summary.AssessmentIds.length > 1 ? "Assessment IDs:" : "Assessment ID:"}
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {summary.AssessmentIds.length > 0 ? (
                          summary.AssessmentIds.map(id => (
                            <span key={id.toString()} className="bg-green-100 px-2 py-0.5 rounded border border-green-200">{id}</span>
                          ))
                        ) : (
                          <span className="text-green-700">Not returned by API</span>
                        )}
                      </div>
                    </div>
                    <p><span className="font-semibold">Status:</span> {summary.Status}</p>
                    <p className="col-span-2"><span className="font-semibold">Test Name:</span> {summary.TestName}</p>
                    <p className="col-span-2"><span className="font-semibold">Scheduled At:</span> {new Date(summary.ScheduledAt).toLocaleString()}</p>
                    <div className="col-span-2">
                      <span className="font-semibold">Students:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {summary.StudentNames.map(name => (
                          <span key={name} className="bg-green-100 px-2 py-0.5 rounded border border-green-200">{name}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() => {

                  setSuccessMessage(null);
                  setSummary(null);
                  reset();
                }}
                className="mt-4 w-full rounded-md bg-green-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-700"
              >
                OK
              </button>

            </div>
          </div>
        )}

        {/* ERROR MESSAGE */}
        {errorMessage && (

          <div className="mb-4 flex items-center justify-between rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-red-800 shadow-sm">

            <span className="text-sm font-medium">
              {errorMessage}
            </span>

            <button
              type="button"
              onClick={() => setErrorMessage(null)}
              className="rounded-md bg-red-600 px-3 py-1 text-sm font-medium text-white transition hover:bg-red-700"
            >
              OK
            </button>

          </div>
        )}

        {/* MAIN CARD */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-200 space-y-6">

          {/* TEST SECTION */}
          <section>

            <h2 className="text-lg font-bold mb-3 text-gray-800">
              1. Select Test
            </h2>

            <input
              placeholder="Search tests..."
              className="border p-2 w-full mb-3 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
              value={searchTest}
              onChange={(e) =>
                setSearchTest(e.target.value)
              }
            />

            <div className="max-h-60 overflow-y-auto border rounded-md p-2">

              {filteredTests.map(t => (

                <label
                  key={t.id}
                  className={`flex items-center gap-3 p-3 mb-2 rounded-lg cursor-pointer transition ${selectedTest === t.id
                      ? "bg-orange-100 border-orange-400 border"
                      : "bg-gray-50 border border-transparent hover:bg-gray-100"
                    }`}
                >

                  <input
                    type="radio"
                    name="test"
                    className="accent-orange-600"
                    checked={selectedTest === t.id}
                    onChange={() =>
                      setSelectedTest(t.id)
                    }
                  />

                  <div>

                    <span className="font-semibold block">
                      {t.title}
                    </span>

                    <span className="text-xs text-gray-500">
                      ⏱ {t.duration} min | 🎯 {t.difficulty}
                    </span>

                  </div>

                </label>
              ))}
            </div>
          </section>

          {/* STUDENT SECTION */}
          <section
            className={
              status === "Cancelled"
                ? "opacity-50 pointer-events-none"
                : ""
            }
          >

            <h2 className="text-lg font-bold mb-3 text-gray-800">
              2. Select Students
            </h2>

            <div
              className="relative"
              ref={dropdownRef}
            >

              {/* SINGLE INPUT + SELECT BOX */}
              <div
                onClick={() =>
                  setIsStudentListOpen(true)
                }
                className="border p-2 w-full rounded-md bg-white flex flex-wrap items-center gap-2 min-h-[42px] cursor-text focus-within:ring-2 focus-within:ring-orange-500"
              >

                {/* SELECTED STUDENTS */}
                {selectedStudents.map(id => (

                  <span
                    key={id}
                    className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1"
                  >

                    {
                      students.find(s => s.id === id)
                        ?.fullName
                    }

                    <button
                      onClick={(e) => {

                        e.stopPropagation();

                        toggleStudent(id);
                      }}
                      className="hover:text-orange-900 ml-1"
                    >
                      ×
                    </button>

                  </span>
                ))}

                {/* SEARCH INPUT */}
                <input
                  type="text"
                  placeholder={
                    selectedStudents.length === 0
                      ? (
                        status === "Cancelled"
                          ? "Students are not required for cancellation"
                          : "Search and select students..."
                      )
                      : ""
                  }
                  value={searchStudent}
                  onChange={(e) =>
                    setSearchStudent(e.target.value)
                  }
                  onFocus={() =>
                    setIsStudentListOpen(true)
                  }
                  onClick={(e) =>
                    e.stopPropagation()
                  }
                  className="flex-1 min-w-[150px] outline-none"
                />
              </div>

              {/* DROPDOWN */}
              {isStudentListOpen && (

                <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-xl max-h-60 overflow-y-auto">

                  {filteredStudents.length > 0 ? (

                    filteredStudents.map(s => (

                      <div
                        key={s.id}
                        onClick={() =>
                          toggleStudent(s.id)
                        }
                        className={`p-2 hover:bg-orange-50 cursor-pointer flex items-center gap-2 ${selectedStudents.includes(s.id)
                            ? "bg-orange-50 font-bold"
                            : ""
                          }`}
                      >

                        <input
                          type="checkbox"
                          checked={selectedStudents.includes(s.id)}
                          readOnly
                          className="accent-orange-600"
                        />

                        <span className="text-sm">
                          {s.fullName}
                        </span>

                      </div>
                    ))

                  ) : (

                    <div className="p-3 text-sm text-gray-500">
                      No students found
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* STATUS + SCHEDULE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* STATUS */}
            <section>

              <h2 className="text-lg font-bold mb-3 text-gray-800">
                3. Status
              </h2>

              <div className="flex gap-3">

                {["Assigned", "Cancelled"].map(s => (

                  <button
                    key={s}
                    onClick={() => setStatus(s)}
                    className={`flex-1 py-2 rounded-md border font-medium transition ${status === s
                        ? "bg-orange-600 text-white border-orange-600"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                      }`}
                  >

                    {s}

                  </button>
                ))}
              </div>
            </section>

            {/* DATE + TIME */}
            <section>

              <h2 className="text-lg font-bold mb-3 text-gray-800">
                4. Schedule
              </h2>

              <div className="flex gap-2">

                <input
                  type="date"
                  className="border p-2 flex-1 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                  value={date}
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                />

                <input
                  type="time"
                  className="border p-2 flex-1 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                  value={time}
                  onChange={(e) =>
                    setTime(e.target.value)
                  }
                />

              </div>
            </section>
          </div>

          {/* BUTTONS */}
          <div className="pt-6 border-t flex gap-4">

            <button
              onClick={handleAssign}
              disabled={
                !selectedTest ||
                !status ||
                (
                  status !== "Cancelled" &&
                  selectedStudents.length === 0
                ) ||
                !date ||
                !time
              }
              className="flex-[2] bg-orange-600 text-white py-3 rounded-lg font-bold text-lg shadow-md hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >

              {
                status === "Cancelled"
                  ? "Confirm Cancellation"
                  : "Assign Assessment"
              }

            </button>

            <button
              onClick={reset}
              className="flex-1 border-2 border-gray-300 text-gray-600 py-3 rounded-lg font-bold hover:bg-gray-50 transition"
            >
              Reset
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
