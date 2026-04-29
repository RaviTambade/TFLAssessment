import { useEffect, useState } from "react"
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";

type User = {
  id: number
  name: string
  role: string
  joiningDate: string
  status?: string
}

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
  const [savingRolesFor, setSavingRolesFor] = useState<number | null>(null)

  const getRoleIdsFromRoleString = (roleString?: string) => {
    if (!roleString) return []
    const names = roleString.split(/[,;|]/).map(s => s.trim())
    return roles.filter(r => names.includes(r.name)).map(r => r.id)
  }

  const updateLocalRoles = (id: number, roleIds: number[]) => {
    const names = roles.filter(r => roleIds.includes(r.id)).map(r => r.name)
    setUsers(prev =>
      prev.map(u => u.id === id ? { ...u, role: names.join(", ") } : u)
    )
  }

  const saveRoles = async (userId: number, roleIds: number[]) => {
    setSavingRolesFor(userId)
    setError(null)

    try {
      const res = await fetch(`http://localhost:3000/api/roles/assignRoles/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({role_ids: roleIds }),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      updateLocalRoles(userId, roleIds)
      setEditingUser(null)
      setEditingRoles([])

    } catch (err: any) {
      console.error(err)
      setError("Failed to save roles")
    } finally {
      setSavingRolesFor(null)
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch("http://localhost:3000/api/users/getAllUsers")
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const json = await res.json()
        console.log("API:", json)

        let payload: any[] = []

        if (Array.isArray(json?.data)) {
          // handle nested arrays (common in MySQL/SP)
          payload = Array.isArray(json.data[0]) ? json.data[0] : json.data
        } else if (Array.isArray(json)) {
          payload = json
        } else {
          console.error("Unexpected API structure:", json)
          payload = []
        }

        // Ensure payload is always an array before mapping
        if (!Array.isArray(payload)) {
          console.error("Payload is not an array:", payload)
          payload = []
        }
const userMap = new Map<string, User>()

;(payload || []).forEach((u: any, i: number) => {
  const name = u.full_name ?? "—"
  const role = u.role_name ?? ""

  if (userMap.has(name)) {
    const existing = userMap.get(name)!

    // avoid duplicate roles
    const rolesSet = new Set(
      existing.role.split(",").map(r => r.trim()).filter(Boolean)
    )
    rolesSet.add(role)

    existing.role = Array.from(rolesSet).join(", ")
  } else {
    userMap.set(name, {
      id: u.user_id ?? i + 1,
      name,
      role,
      joiningDate: u.created_at ?? "",
      status: u.status ?? "",
    })
  }
})

const mapped: User[] = Array.from(userMap.values())

        setUsers(mapped)

      } catch (err: any) {
        console.error(err)
        setError("Failed to load users")
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/roles/getallroles")
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const json = await res.json()
        console.log("Roles API:", json)

        let rolesData: any[] = []

        if (Array.isArray(json?.data)) {
          rolesData = json.data
        } else if (Array.isArray(json)) {
          rolesData = json
        } else {
          console.error("Unexpected roles API structure:", json)
          rolesData = []
        }

        const mappedRoles: Role[] = (rolesData || []).map((r: any) => ({
          id: r.role_id ?? r.id,
          name: r.role_name ?? r.name,
        }))

        setRoles(mappedRoles)

      } catch (err: any) {
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
                                    className={`cursor-pointer px-2 py-1 rounded ${
                                      editingRoles.includes(r.id)
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
                              
                              <Button onClick={() => saveRoles(user.id, editingRoles)}>
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