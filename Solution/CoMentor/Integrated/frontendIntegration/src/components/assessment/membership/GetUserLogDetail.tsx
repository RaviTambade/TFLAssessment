import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserLogDetails, UserLog } from '../../../services/RolesManagement/GetUserLogDetail';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Skeleton } from "@/components/ui/skeleton";

const GetUserLogDetail: React.FC = () => {
  const { userId: routeUserId } = useParams<{ userId: string }>();
  const { ref, isVisible } = useScrollAnimation();
  const [userId, setUserId] = useState<string>(routeUserId ?? '');
  const [userLogs, setUserLogs] = useState<UserLog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>(routeUserId ?? '');

  useEffect(() => {
    const fetchUserLogs = async () => {
      if (!userId) return;
      try {
        setLoading(true);
        const logs = await getUserLogDetails(parseInt(userId, 10));
        setUserLogs(logs);
        setError(null);
      } catch (err) {
        setError('Failed to fetch user log details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserLogs();
    }
  }, [userId]);

  const handleFetchLogs = async () => {
    if (!inputValue.trim()) {
      setError('Please enter a valid user ID.');
      return;
    }

    setUserId(inputValue.trim());
  };

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            User Log Details
          </h2>
          <p className="text-lg text-muted-foreground">
            {userId
              ? `Viewing logs for User ID: ${userId}`
              : 'Enter a user ID below to fetch log history.'}
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-8">
          <div className="grid gap-4 md:grid-cols-[1fr_auto]">
            <input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setError(null);
              }}
              type="text"
              placeholder="Enter user ID"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base shadow-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            />
            <button
              type="button"
              onClick={handleFetchLogs}
              className="rounded-lg bg-primary px-6 py-3 text-white transition hover:bg-primary/90"
            >
              Load Logs
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="max-w-6xl mx-auto">
          <Card
            ref={ref}
            className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle>Login/Logout History</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {loading ? (
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <p className="text-red-500 text-lg">{error}</p>
                </div>
              ) : userLogs.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-lg">No log details found for this user.</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User ID</TableHead>
                      <TableHead>Login Time</TableHead>
                      <TableHead>Logout Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userLogs.map((log, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{log.user_id}</TableCell>
                        <TableCell>{new Date(log.login_time).toLocaleString()}</TableCell>
                        <TableCell>
                          {log.logout_time ? new Date(log.logout_time).toLocaleString() : 'N/A'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetUserLogDetail;
