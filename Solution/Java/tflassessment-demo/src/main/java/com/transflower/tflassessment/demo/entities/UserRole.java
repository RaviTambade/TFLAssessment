package com.transflower.tflAssessment.entities;

import javax.management.relation.Role;

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

   public UserRole(int id, int userId, int roleId, Role role) {

      this.id = id;
      this.userId = userId;
      this.roleId = roleId;
      this.role = role;

   }

   public int getid() {
      return id;
   }

   public void setid(int id) {
      this.id = id;
   }

   public int getuserId() {
      return userId;
   }

   public void setuserId(int userId) {
      this.userId = userId;
   }

   public int getroleId() {
      return roleId;
   }

   public void setroleId(int roleId) {
      this.roleId = roleId;
   }

   public Role getrole() {
      return role;
   }

   public void setrole(Role role) {
      this.Role = Role;
   }

   @Override
   public String toString() {
      return "Userrole(id: " + id + "userId: " + userId + " roleId: " + roleId + " role: " + role + ")";
   }

   @Override
   public boolean equals(object obj) {
      if (this == obj) {
         return true;
      }
      if (obj == null || this.getClass != obj.getClass()) {
         return false;
      }
      Userrole ur = new Userrole(obj);
      if (this.id == ur.id &&
            this.userId.equals(ur.userId) &&
            this.roleId.equals(ur.roleId) &&
            this.role.equals(ur.role)) {
         return true;
      } else {
         return false;
      }
   }

   @Override
   public int hashCode() {
      return objects.hash(this.id, this.userId, this.roleId, this.role);
   }

   @Override
   public object clone() throws CloneNotSupportedException {
      try {
         return new UserRole(this.id, this.userId, this.roleId, this.role);
      } catch (Exception e) {
         system.out.println(e);
      }
   }

   @Override
   public void finalize() throws throwable {

      try {
         system.out.println("finalize called for:" + this);

      } finally {
         super.finalize();
      }
   }
}
