import { useEffect, useState } from "react"
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { WEBAPI_NODE_URL } from "@/lib/utils";
import User from "./entities/User";
import ApiUser from "./entities/ApiUser";
import ApiRole from "./entities/ApiRole";


type Role = {
  id: number
  name: string
}


const formatDate = (value?: string) => {
  if (!value) return "—"
  const d = new Date(value)
  return isNaN(d.getTime()) ? value : d.toLocaleDateString()
}

const ManageUsers = () => {

  const [users, setUsers] = useState<User[]>([])
  const [roles, setRoles] = useState<Role[]>([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [editingUser, setEditingUser] = useState<number | null>(null)
  const [editingRoles, setEditingRoles] = useState<number[]>([])

  const getRoleIdsFromRoleString = (roleString?: string) => {
    if (!roleString) return []
    const names = roleString.split(/[,;|]/).map(s => s.trim())
    return roles.filter(r => names.includes(r.name)).map(r => r.id)
  }
  
  // Fetch user roles as a comma-separated string
  const fetchUserRoles = async (userId: number) => {
    try {
      const res = await fetch(
        `${WEBAPI_NODE_URL}/roles/getUserRolesByUserId/${userId}`
      )
      if (!res.ok) throw new Error()
      const json = await res.json()
      let payload = []
      if (Array.isArray(json?.data)) {
        payload = json.data
      }
      return payload[0]?.role_name ?? ""
    } catch (err) { console.error(err)
      return "" }
  }

  const fetchUsers = async () => {
  setLoading(true)
  setError(null)

  try {

    // Get all users
    const res = await fetch(`${WEBAPI_NODE_URL}/users/getAllUsers`)

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    const json = await res.json()

    console.log("Users API:", json)

    let payload: ApiUser[] = []

    if (Array.isArray(json?.data)) {

      payload = Array.isArray(json.data[0])
        ? json.data[0]
        : json.data

    } else if (Array.isArray(json)) {

      payload = json

    } else {

      console.error("Unexpected API structure:", json)

      payload = []

    }

    const uniqueUsers = Array.from(
    new Map(
        payload.map((u) => [u.user_id, u])
      ).values()
    )

    // Fetch fresh roles for every user
    const mapped: User[] = await Promise.all(
      uniqueUsers.map(async (u: ApiUser, i: number) => {
        const roleNames = await fetchUserRoles(u.user_id)
        return {
          id: u.user_id ?? i + 1,
          name: u.full_name ?? "—",
          role: roleNames,
          joiningDate: u.created_at ?? "",
          status: u.status ?? "",
        }
      })
      )
      setUsers(mapped)
    } catch (err: unknown) {
      console.error(err)
      setError("Failed to load users")
    } finally {
      setLoading(false)
    }
  }

  // Helper functions to assign/unassign roles
  const assignRoles = async (userId: number, roleIds: number[]) => {
    const requests = roleIds.map(rid =>
      fetch(`${WEBAPI_NODE_URL}/roles/assignRole/${userId}/role/${rid}`, {
        method: 'POST'
      })
    )
    return Promise.all(requests)
  }

  // Unassign roles by setting them to INACTIVE
  const unAssignRoles = async (userId: number, roleIds: number[]) => {
    const requests = roleIds.map(rid =>
      fetch(`${WEBAPI_NODE_URL}/roles/unAssignRole/${userId}/role/${rid}`, {
        method: 'PUT'
      })
    )
    return Promise.all(requests)
  }

  const handleUserRole = async (id: number, roleString: string) => {

    const existingRoleIds = getRoleIdsFromRoleString(roleString)

    const currentRoles = editingRoles

    // Roles added
    const addedRoles = currentRoles.filter(
      rid => !existingRoleIds.includes(rid)
    )

    // Roles removed
    const removedRoles = existingRoleIds.filter(
      rid => !currentRoles.includes(rid)
    )

    console.log("Added:", addedRoles)
    console.log("Removed:", removedRoles)

    try {

      // FIRST remove roles
      if (removedRoles.length > 0) {
        await unAssignRoles(id, removedRoles)
      }

      // THEN add new roles
      if (addedRoles.length > 0) {
        await assignRoles(id, addedRoles)
      }

      await fetchUsers()

      setEditingUser(null)
      setEditingRoles([])

    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await fetch(`${WEBAPI_NODE_URL}/roles/getAllRoles`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const json = await res.json()
        console.log("Roles API:", json)

        let rolesData: ApiRole[] = []

        if (Array.isArray(json?.data)) {
          rolesData = json.data
        } else if (Array.isArray(json)) {
          rolesData = json
        } else {
          console.error("Unexpected roles API structure:", json)
          rolesData = []
        }

        const mappedRoles: Role[] = (rolesData || []).map((r: ApiRole) => ({
          id: r.role_id ?? r.id,
          name: r.role_name ?? r.name,
        }))

        setRoles(mappedRoles)

      } catch (err: unknown) {
        console.error("Failed to load roles:", err)
        setError("Failed to load roles")
      }
    }

    fetchRoles()
  }, [])

  return (
    <div className="min-h-screen p-6">

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage User Roles</h1>
      </div>

      <Card>
        <CardContent className="p-4">

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joining Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={6}>Loading...</TableCell></TableRow>
              ) : error ? (
                <TableRow><TableCell colSpan={6}>{error}</TableCell></TableRow>
              ) : users.length === 0 ? (
                <TableRow><TableCell colSpan={6}>No users</TableCell></TableRow>
              ) : (
                users.map((user, index) => {
                  const isInactive = user.status?.toUpperCase() === "INACTIVE"

                  return (
                    <TableRow key={`${user.id}-${index}`}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.role || "—"}</TableCell>
                      <TableCell>{user.status}</TableCell>
                      <TableCell>{formatDate(user.joiningDate)}</TableCell>

                      <TableCell>
                        {isInactive ? (
                          <Button disabled>Locked</Button>
                        ) : editingUser === user.id ? (
                          <div>
                            <div className="mb-2">
                              {roles.map((r, idx) => (
                                <span key={r.id}>
                                  <span
                                    className={`cursor-pointer px-2 py-1 rounded ${editingRoles.includes(r.id)
                                        ? 'bg-blue-100 text-blue-800 font-semibold'
                                        : 'text-gray-600 hover:bg-gray-100'
                                      }`}
                                    onClick={() => {
                                      setEditingRoles(prev =>
                                        prev.includes(r.id)
                                          ? prev.filter(x => x !== r.id)
                                          : [...prev, r.id]
                                      )
                                    }}
                                  >
                                    {r.name}
                                  </span>
                                  {idx < roles.length - 1 && <span className="text-gray-400">, </span>}
                                </span>
                              ))}
                            </div>

                            <div>

                              <Button onClick={() => handleUserRole(user.id, user.role)}>
                                Save
                              </Button>
                              <Button onClick={() => {
                                setEditingUser(null)
                                setEditingRoles([])
                              }}>
                                Cancel
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <Button
                            onClick={() => {
                              setEditingUser(user.id)
                              setEditingRoles(getRoleIdsFromRoleString(user.role))
                            }}
                          >
                            Change Role
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  )
                })
              )}
            </TableBody>

          </Table>

        </CardContent>
      </Card>
    </div>
  )
}

export default ManageUsers
