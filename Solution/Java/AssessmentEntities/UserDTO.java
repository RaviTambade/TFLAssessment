import Transflower.TFLAssessment.Entities;

public class UserDTO
{
    private int Id ;
    private string Firstname;
    private string Lastname;
    private string Email;
    private List<string> Roles;


public UserDTO (){

}

public UserDTO(int Id ,string Firstname,string Lastname,string Email,List<string> Roles){

    this.id=id;
    this.Firstname=Firstname;
    this.Lastname=Lastname;
    this.Email=Email;
    this.Roles=Roles;
}

public int getId (){
return Id ;
}

public void setId(int id){
    this.id=id;

}
public String getFirstname(){
    return Firstname;
}
public void setFirstname(string Firstname){
    this.Firstname=Firstname;
}

public String getLastname(){
    return Lastname;
}

public void setLastname(string Lastname){
    this.Lastname=Lastname;
}

public String getEmail(){
    return Email;
}

public void setEmail(string Email){
    this.Email=Email;
}

public List<string>getRoles(){
    return Roles;
}

public void setRoles (List<string>Roles){
    this.roles=roles;
}
}



