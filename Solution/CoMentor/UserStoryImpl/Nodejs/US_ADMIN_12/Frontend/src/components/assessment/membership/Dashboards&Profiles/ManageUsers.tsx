import { useEffect, useState } from "react"
import { Button } from "../../../ui/button";
import { Card, CardContent } from "../../../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../ui/select";

type User = {
  id: number
  name: string
  role: string
  joiningDate: string
  status?: string
}

const initialUsers: User[] = []

const roles = ["Student", "Mentor", "SME", "Employer"]

const formatDate = (value?: string) => {
  if (!value) return "—"
  const d = new Date(value)
  if (isNaN(d.getTime())) return value
  return d.toLocaleDateString()
}

const ManageUsers = () => {

  const [users, setUsers] = useState(initialUsers)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [editingUser, setEditingUser] = useState<number | null>(null)

  const updateRole = (id: number, role: string) => {

    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, role } : user
    )

    setUsers(updatedUsers)
    setEditingUser(null)
  }

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch("http://localhost:4000/api/users/getAllUsers")
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()

        // handle stored-procedure style results (sometimes wrapped)
        const payload = Array.isArray(json) && json.length && Array.isArray(json[0]) ? json[0] : json

        // debug: show raw payload shape in console to help mapping
        console.debug("ManageUsers payload:", payload)

        // map to our User type if needed (robust fallbacks)
        const mapped: User[] = (payload || []).map((u: any, idx: number) => {
          const id = u.id ?? u.userId ?? u.user_id ?? idx + 1

          // name fallbacks (combine first/last when available)
          const first = u.firstName ?? u.first_name ?? u.givenName ?? u.given_name
          const last = u.lastName ?? u.last_name ?? u.familyName ?? u.family_name
          const combined = first || last ? `${first ?? ""} ${last ?? ""}`.trim() : ""
          // avoid mixing `??` and `||` without parentheses — group OR fallbacks together
          const name = u.name ?? u.fullName ?? u.full_name ?? (combined || u.username || u.email || "")

          // role fallbacks (handle arrays and different key names)
          let role: any = ""
          if (u.role) role = u.role
          else if (u.userRole) role = u.userRole
          else if (u.roleName) role = u.roleName
          else if (u.role_name) role = u.role_name
          else if (u.RoleName) role = u.RoleName
          else if (u.Role) role = u.Role
          else if (Array.isArray(u.roles) && u.roles.length) {
            const r0 = u.roles[0]
            role = (typeof r0 === "string") ? r0 : r0.name ?? r0.roleName ?? r0.role ?? ""
          } else if (typeof u.roles === "string") {
            // comma/pipe/semicolon separated role names
            role = (u.roles || "").split(/[;,|]/)[0].trim()
          } else if (u.roles && typeof u.roles === "object") {
            // roles as object { name: 'X' } or { role: 'X' }
            role = u.roles.name ?? u.roles.role ?? Object.values(u.roles)[0] ?? ""
          }

          // joining date fallbacks
          const joiningDate = u.joiningDate ?? u.joining_date ?? u.joinedAt ?? u.joined_at ?? u.createdAt ?? u.created_at ?? u.dateOfJoining ?? u.date_of_joining ?? ""

          // status fallbacks
          const status = u.status ?? u.user_status ?? u.state ?? ""

          // normalize role to string (handle arrays/objects)
          if (Array.isArray(role)) {
            role = role.map((r: any) => (typeof r === "string" ? r : r.name ?? r.role ?? String(r))).join(", ")
          } else if (role && typeof role === "object") {
            role = role.name ?? role.role ?? Object.values(role)[0] ?? JSON.stringify(role)
          } else if (!role) {
            role = ""
          }

          return {
            id,
            name,
            role,
            joiningDate,
            status,
          }
        })

        console.debug("ManageUsers mapped:", mapped)
        setUsers(mapped)
      } catch (err: any) {
        console.error("Failed to fetch users:", err)
        setError(err.message || "Failed to load users")
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-hero p-6 select-none">

      {/* Title */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold text-primary">
          Manage Users
        </h1>

        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filters" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="role">Sort by Role</SelectItem>
            <SelectItem value="date">Sort by Date</SelectItem>
          </SelectContent>
        </Select>

      </div>

      {/* Table */}
      <Card className="shadow-[var(--shadow-elegant)] border-border">
        <CardContent className="p-6">

          <Table>

            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joining Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>

              {loading ? (
                <TableRow>
                  <TableCell colSpan={5}>Loading users…</TableCell>
                </TableRow>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={5}>Error: {error}</TableCell>
                </TableRow>
              ) : users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5}>No users found</TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell className="font-medium">{user.name || "—"}</TableCell>
                    <TableCell>{user.role || "—"}</TableCell>
                    <TableCell>{(user.status && String(user.status).toUpperCase()) || "—"}</TableCell>
                    <TableCell>{formatDate(user.joiningDate)}</TableCell>
                    <TableCell className="text-right">
                      <div className="inline-block w-[160px]">
                        {(() => {
                          const isInactive = (user.status ?? "").toString().toUpperCase() === "INACTIVE"

                          if (isInactive) {
                            return (
                              <Button size="sm" variant="ghost" className="w-full" disabled>
                                Role Locked
                              </Button>
                            )
                          }

                          if (editingUser === user.id) {
                            return (
                              <Select
                                defaultValue={user.role}
                                onValueChange={(value) => updateRole(user.id, value)}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Change Role" />
                                </SelectTrigger>
                                <SelectContent>
                                  {roles.map((role) => (
                                    <SelectItem key={role} value={role}>
                                      {role}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )
                          }

                          return (
                            <Button size="sm" variant="outline" className="w-full" onClick={() => setEditingUser(user.id)}>
                              Change Role
                            </Button>
                          )
                        })()}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}

            </TableBody>

          </Table>

        </CardContent>
      </Card>

      {/* Bottom Buttons */}

      <div className="flex justify-center gap-6 mt-10">

        <Button variant="hero" size="lg">
          Add User
        </Button>

        <Button variant="hero" size="lg">
          Remove User
        </Button>

      </div>

    </div>
  )
}

export default ManageUsers