import { useState } from "react"
import { Button } from "../../../ui/button";
import { Card, CardContent } from "../../../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../ui/select";

type User = {
  id: number
  name: string
  role: string
  joiningDate: string
}

const initialUsers: User[] = [
  { id: 1, name: "Sai Jagdale", role: "Student", joiningDate: "2023-01-15" },
  { id: 2, name: "Tejas Navkudkar", role: "SME", joiningDate: "2023-02-20" },
  { id: 3, name: "Sumit Bhor", role: "Admin", joiningDate: "2023-03-10" },
  { id: 4, name: "Samruddhi Rasal", role: "Mentor", joiningDate: "2023-04-05" },
  { id: 5, name: "Chaitrali Patil", role: "Employer", joiningDate: "2023-05-12" },
]

const roles = ["Student", "Mentor", "SME", "Employer"]

const ManageUsers = () => {

  const [users, setUsers] = useState(initialUsers)
  const [editingUser, setEditingUser] = useState<number | null>(null)

  const updateRole = (id: number, role: string) => {

    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, role } : user
    )

    setUsers(updatedUsers)
    setEditingUser(null)
  }

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
                <TableHead>Joining Date</TableHead>
                <TableHead className="text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>

              {users.map((user) => (

                <TableRow key={user.id}>

                  <TableCell>{user.id}</TableCell>

                  <TableCell className="font-medium">
                    {user.name}
                  </TableCell>

                  <TableCell>
                    {user.role}
                  </TableCell>
                  <TableCell>
                    {user.joiningDate}
                  </TableCell>

                  {/* ACTION COLUMN */}
                  <TableCell className="text-right">

                    {/* FIXED WIDTH CONTAINER → prevents shifting */}
                    <div className="inline-block w-[160px]">

                      {editingUser === user.id ? (

                        <Select
                          defaultValue={user.role}
                          onValueChange={(value) =>
                            updateRole(user.id, value)
                          }
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

                      ) : (

                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full"
                          onClick={() => setEditingUser(user.id)}
                        >
                          Change Role
                        </Button>

                      )}

                    </div>

                  </TableCell>

                </TableRow>

              ))}

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