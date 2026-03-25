package com.transflower.tflcomentor.Backend.Repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Backend.Entity.Concepts;
import com.transflower.tflcomentor.Backend.Entity.Frameworks;
import com.transflower.tflcomentor.Backend.Entity.Runtimes;
import com.transflower.tflcomentor.Backend.Entity.Languages;
import com.transflower.tflcomentor.Backend.Entity.Layers;

@Repository
public class ConceptsRepository implements IConceptsRepository{

    private Concepts concepts;
    private static Connection connection;
    private static String url="jdbc:mysql://192.168.1.149:3306/tflcomentor_db";
    private static String password="password";
    private static String username="root";

    public ConceptsRepository(){
        this.concepts=new Concepts();
    }
    
    public ConceptsRepository(Concepts concepts){
        this.concepts=concepts;
    }

    static{        
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection=DriverManager.getConnection(url,username,password);
            System.out.println("Connection established successfully!");
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

   
    public List<Concepts> getAllConcepts(){
        String query="SELECT  DISTINCT c.id, c.name, c.description FROM concepts c";
        List<Concepts> conceptsList=new ArrayList<>();
        try{
             Statement statement=connection.createStatement();
             ResultSet resultSet = statement.executeQuery(query);

             while(resultSet.next()){
                Concepts concepts=new Concepts();
                concepts.setId(resultSet.getInt("id"));
                concepts.setName(resultSet.getString("name"));
                concepts.setDescription(resultSet.getString("description"));
                conceptsList.add(concepts);
             }
            return conceptsList;
        }catch(Exception e){
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    public List<Runtimes> getAllRuntimes(){
        String query="SELECT  DISTINCT r.id, r.runtime_name FROM runtimes r";
        List<Runtimes> runtimesList=new ArrayList<>();
        try{
            Statement statement=connection.createStatement();
            ResultSet resultSet=statement.executeQuery(query);

            while(resultSet.next()){
                Runtimes runtime=new Runtimes();
                runtime.setId(resultSet.getInt("id"));
                runtime.setRuntimeName(resultSet.getString("runtime_name"));
                runtimesList.add(runtime);
            }
            return runtimesList;
        }catch(Exception e){
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    public List<Languages> getAllLanguages(int runtimeId){

        String query="SELECT DISTINCT l.id, l.language, l.runtime_id FROM languages l WHERE l.runtime_id=?";
        List<Languages> languagesList = new ArrayList<>();

        try{
            PreparedStatement preparedStatement =  connection.prepareStatement(query);
            preparedStatement.setInt(1, runtimeId);
            ResultSet resultSet = preparedStatement.executeQuery();
            while(resultSet.next()){
                Languages language = new Languages();
                language.setId(resultSet.getInt("id"));
                language.setLanguageName(resultSet.getString("language"));
                language.setRuntimeId(resultSet.getInt("runtime_id"));
                languagesList.add(language);
            }
            return languagesList;
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }

    public List<Layers> getAllLayers(){
        String query="SELECT DISTINCT l.id, l.layers from layers l ";

        PreparedStatement preparedStatement;
        List<Layers> layersList=new ArrayList<>();
        try {
            Statement statement=connection.createStatement();
            ResultSet resultSet=statement.executeQuery(query);
            while(resultSet.next()){
                Layers layer=new Layers();
                layer.setId(resultSet.getInt("id"));
                layer.setLayerName(resultSet.getString("layers"));
                layersList.add(layer);
            }
            return layersList;
        } catch (SQLException e) {  
            e.printStackTrace();  
            return new ArrayList<>();
        }
    }

    public List<Frameworks> getAllFrameworks(int languageId){
        String query="SELECT DISTINCT f.id, f.name from frameworks f WHERE f.language_id = ?";

        PreparedStatement preparedStatement;
        List<Frameworks> frameworksList=new ArrayList<>();
        try {
            preparedStatement=connection.prepareStatement(query);
            preparedStatement.setInt(1, languageId);
            ResultSet resultSet=preparedStatement.executeQuery();
            while(resultSet.next()){
                Frameworks framework=new Frameworks();
                framework.setId(resultSet.getInt("id"));
                framework.setRuntimeName(resultSet.getString("name"));
                System.out.println("Framework found: " + framework.getRuntimeName());
                frameworksList.add(framework);
            }
            return frameworksList;
        } catch (SQLException e) {  
            e.printStackTrace();  
            return new ArrayList<>();
        }
    }
     
    public List<Frameworks> getAllFrameworksByLanguageAndLayer(int languageId, int layerId) {
        String query="SELECT DISTINCT f.id, f.name from frameworks f WHERE f.language_id = ? AND f.layer_id = ?";

        PreparedStatement preparedStatement;
        List<Frameworks> frameworksList=new ArrayList<>();
        try {
            preparedStatement=connection.prepareStatement(query);
            preparedStatement.setInt(1, languageId);
            preparedStatement.setInt(2, layerId);
            ResultSet resultSet=preparedStatement.executeQuery();
            while(resultSet.next()){
                Frameworks framework=new Frameworks();
                framework.setId(resultSet.getInt("id"));
                framework.setRuntimeName(resultSet.getString("name"));
                System.out.println("Framework found: " + framework.getRuntimeName());
                frameworksList.add(framework);
            }
            return frameworksList;
        }catch (SQLException e) {  
            e.printStackTrace();  
            return new ArrayList<>();
        }
    }
     
     public List<Concepts> getAllConceptsforFramework(String framework){
        String query="SELECT DISTINCT c.id, c.name, c.description from concepts c "+
                    "JOIN framework_concepts fc "+
                    "ON fc.concept_id=c.id "+
                    "JOIN frameworks f "+
                    "ON f.id=fc.framework_id "+
                    "WHERE f.name=?";

        PreparedStatement preparedStatement;
        List<Concepts> conceptsList=new ArrayList<>();
        try {
            preparedStatement=connection.prepareStatement(query);
            preparedStatement.setString(1, framework);
            ResultSet resultSet=preparedStatement.executeQuery();
            while(resultSet.next()){
                Concepts concept=new Concepts();
                concept.setId(resultSet.getInt("id"));
                concept.setName(resultSet.getString("name"));
                concept.setDescription(resultSet.getString("description"));
                conceptsList.add(concept);
            }
            return conceptsList;
        } catch (SQLException e) {  
            e.printStackTrace();  
            return new ArrayList<>();
        }
    }


}
