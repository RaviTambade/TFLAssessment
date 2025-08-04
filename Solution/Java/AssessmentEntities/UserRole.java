package com.transflower.tflAssessment.entities;

public class userRole {
   private int id;
   private int userId;
   private int roleId;
   private Role role;
}

public UserRole(){
    this.id=0;
    this.userId=0;
    this.roleId=0;
    this.role=null;
}

public UserRole(int id,int userId,int roleId,Role role){

this.id=id;
this.userId=userId;
this.roleId=roleId;
this.role=role;

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

 public void setrole(Role role){
    this.Role=Role;
 }
