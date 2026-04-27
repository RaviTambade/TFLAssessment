package com.transflower.tflassessment.demo.entities;
import java.util.Objects;


public class UserRole {

   private int id;
   private int userId;
   private int roleId;
   private Role role;

   public UserRole() {
      this.id = 0;
      this.userId = 0;
      this.roleId = 0;
      this.role = null;
   }

   public UserRole(Role role) {
      
      this.role = role;
   }

   public UserRole(int id, int userId, int roleId, Role role) {

      this.id = id;
      this.userId = userId;
      this.roleId = roleId;
      this.role = role;
   }



   @Override
   public String toString() {
      return "Userrole(id: " + id + "userId: " + userId + " roleId: " + roleId + " role: " + role + ")";
   }

   @Override
   public boolean equals(Object obj) {
      if (this == obj) {
         return true;
      }
      if (obj == null || this.getClass() != obj.getClass()) {
         return false;
      }
      UserRole userRole = (UserRole)obj;
      if (this.id == userRole.id && this.role.equals(userRole.role)) {
         return true;
      } else {
         return false;
      }
   }

   @Override
   public int hashCode() {
      return Objects.hash(this.id, this.userId, this.roleId, this.role);
   }

   @Override
   public Object clone() throws CloneNotSupportedException {
      
      Object theObject=null;
      try {
        theObject= new UserRole(this.id, this.userId, this.roleId, this.role);
      } 
      catch (Exception e) {
         System.out.println(e);
      }
      return theObject;
   }

   @Override
   public void finalize() throws Throwable {

      try {
         System.out.println("finalize called for:" + this);

      } finally {
       
      }
   }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

}

//    public String getPassword() {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'getPassword'");
//    }

//    public void setName(String string) {
//     // TODO Auto-generated method stub
//     throw new UnsupportedOperationException("Unimplemented method 'setName'");
//    }
// }
