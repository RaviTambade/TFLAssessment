import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { WEBAPI_NODE_URL } from "@/lib/utils";

import Role from "./entities/Role";
import User from "./entities/User";

const ManageSingleUser = () => {
    const { userId } = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [roles, setRoles] = useState<Role[]>([]);
    const [selectedRoles, setSelectedRoles] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const getRoleIdsFromRoleString = (roleString?: string) => {
        if (!roleString) return [];
        const names = roleString.split(/[,;|]/).map(r => r.trim());
        return roles.filter(r => names.includes(r.name)).map(r => r.id);
    };

    useEffect(() => {
        fetchRoles();
    }, []);

    useEffect(() => {
        if (roles.length > 0) {
            fetchUser();
        }
    }, [roles]);

    const fetchRoles = async () => {
        const res = await fetch(`${WEBAPI_NODE_URL}/roles/getAllRoles`);
        const json = await res.json();
        const data = Array.isArray(json.data) ? json.data : [];
        setRoles( data.map((r: any) => ({
                id: r.role_id,
                name: r.role_name,
            }))
        );
    };

    const fetchUser = async () => {
        setLoading(true);

        try {
            const res = await fetch(`${WEBAPI_NODE_URL}/users/getAllUsers`);
            const json = await res.json();
            const users = Array.isArray(json.data)? Array.isArray(json.data[0]) ? json.data[0]: json.data: [];
            const u = users.find((x: any) => x.user_id === Number(userId));

            if (!u) {
                setLoading(false);
                return;
            }

            const roleRes = await fetch(`${WEBAPI_NODE_URL}/roles/getUserRolesByUserId/${userId}`);
            const roleJson = await roleRes.json();
            const roleString =roleJson.data?.[0]?.role_name ?? "";
            
            const currentUser = {
                id: u.user_id,
                name: u.full_name,
                role: roleString,
                status: u.status,
                joiningDate: u.created_at,
            };

            setUser(currentUser);
            setSelectedRoles(getRoleIdsFromRoleString(roleString));
        }
        finally {
            setLoading(false);
        }
    };

    const assignRoles = async () => {
        if (!user) return;

        await Promise.all(
            selectedRoles.map(roleId =>
                fetch(`${WEBAPI_NODE_URL}/roles/assignRole/${user.id}/role/${roleId}`,{method: "POST",})
            )
        );

        alert("Roles updated successfully");
        navigate("/membership/ManageUsers");
    };

    if (loading)
        return <div className="p-8">Loading...</div>;

    if (!user)
        return <div className="p-8">User not found.</div>;

    return (
        <div className="min-h-screen p-8 flex justify-center">
            <Card className="w-full max-w-2xl">
                <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6">
                        Manage User Role
                    </h2>
                    <div className="space-y-3 mb-8">
                        <p><b>ID:</b> {user.id}</p>
                        <p><b>Name:</b> {user.name}</p>
                        <p><b>Status:</b> {user.status}</p>
                        <p><b>Current Roles:</b> {user.role || "None"}</p>
                    </div>
                    <h3 className="font-semibold mb-4">
                        Select Roles
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-8">
                        {roles.map(role => (
                            <Button key={role.id} variant={selectedRoles.includes(role.id)? "default": "outline"}
                                onClick={() => {
                                    setSelectedRoles(prev =>prev.includes(role.id)? prev.filter(r => r !== role.id): [...prev, role.id]);
                                }}>
                                {role.name}
                            </Button>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <Button onClick={async () => { await assignRoles();navigate("/models/membership/Unassigned/Users");}}>
                        Save Roles
                        </Button>
                        <Button variant="outline" onClick={() => navigate(-1)} >
                            Cancel
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ManageSingleUser;