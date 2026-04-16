package com.transflower.tflcomentor.Backend.repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.transflower.tflcomentor.Backend.entity.Concept;
import com.transflower.tflcomentor.Backend.entity.Framework;
import com.transflower.tflcomentor.Backend.entity.Language;
import com.transflower.tflcomentor.Backend.entity.Layer;
import com.transflower.tflcomentor.Backend.entity.Runtime;

@Repository
public class ConceptsRepository implements IConceptsRepository{

    private Concept concepts;
    private static Connection connection;
    private static String url="jdbc:mysql://192.168.1.149:3306/tflcomentor_db";
    private static String password="password";
    private static String username="root";

    public ConceptsRepository(){
        this.concepts=new Concept();
    }
    
    public ConceptsRepository(Concept concepts){
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

   
    public List<Concept> getAllConcepts(){
        String query="SELECT  DISTINCT c.id, c.name, c.description FROM concepts c";
        List<Concept> conceptsList=new ArrayList<>();
        try{
             Statement statement=connection.createStatement();
             ResultSet resultSet = statement.executeQuery(query);

             while(resultSet.next()){
                Concept concepts=new Concept();
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

    public List<Runtime> getAllRuntimes(){
        String query="SELECT  DISTINCT r.id, r.runtime_name FROM runtimes r";
        List<Runtime> runtimesList=new ArrayList<>();
        try{
            Statement statement=connection.createStatement();
            ResultSet resultSet=statement.executeQuery(query);

            while(resultSet.next()){
                Runtime runtime=new Runtime();
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

    public List<Language> getAllLanguages(int runtimeId){

        String query="SELECT DISTINCT l.id, l.language, l.runtime_id FROM languages l WHERE l.runtime_id=?";
        List<Language> languagesList = new ArrayList<>();

        try{
            PreparedStatement preparedStatement =  connection.prepareStatement(query);
            preparedStatement.setInt(1, runtimeId);
            ResultSet resultSet = preparedStatement.executeQuery();
            while(resultSet.next()){
                Language language = new Language();
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

    public List<Layer> getAllLayers(){
        String query="SELECT DISTINCT l.id, l.layers from layers l ";

        PreparedStatement preparedStatement;
        List<Layer> layersList=new ArrayList<>();
        try {
            Statement statement=connection.createStatement();
            ResultSet resultSet=statement.executeQuery(query);
            while(resultSet.next()){
                Layer layer=new Layer();
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

    // public List<Frameworks> getAllFrameworksByLanguageId(int languageId){
    //     String query="SELECT DISTINCT f.id, f.name from frameworks f WHERE f.language_id = ?";

    //     PreparedStatement preparedStatement;
    //     List<Frameworks> frameworksList=new ArrayList<>();
    //     try {
    //         preparedStatement=connection.prepareStatement(query);
    //         preparedStatement.setInt(1, languageId);
    //         ResultSet resultSet=preparedStatement.executeQuery();
    //         while(resultSet.next()){
    //             Frameworks framework=new Frameworks();
    //             framework.setId(resultSet.getInt("id"));
    //             framework.setRuntimeName(resultSet.getString("name"));
    //             System.out.println("Framework found: " + framework.getRuntimeName());
    //             frameworksList.add(framework);
    //         }
    //         return frameworksList;
    //     } catch (SQLException e) {  
    //         e.printStackTrace();  
    //         return new ArrayList<>();
    //     }
    // }
     
    public List<Framework> getAllFrameworksByLanguageAndLayer(int languageId, int layerId) {
        String query="SELECT DISTINCT f.id, f.name from frameworks f WHERE f.language_id = ? AND f.layer_id = ?";

        PreparedStatement preparedStatement;
        List<Framework> frameworksList=new ArrayList<>();
        try {
            preparedStatement=connection.prepareStatement(query);
            preparedStatement.setInt(1, languageId);
            preparedStatement.setInt(2, layerId);
            ResultSet resultSet=preparedStatement.executeQuery();
            while(resultSet.next()){
                Framework framework=new Framework();
                framework.setId(resultSet.getInt("id"));
                framework.setFrameworkName(resultSet.getString("name"));
                System.out.println("Framework found: " + framework.getFrameworkName());
                frameworksList.add(framework);
            }
            return frameworksList;
        }catch (SQLException e) {  
            e.printStackTrace();  
            return new ArrayList<>();
        }
    }
     
     public List<Concept> getAllConceptsforFramework(String framework){
        String query="SELECT DISTINCT c.id, c.name, c.description from concepts c "+
                    "JOIN framework_concepts fc "+
                    "ON fc.concept_id=c.id "+
                    "JOIN frameworks f "+
                    "ON f.id=fc.framework_id "+
                    "WHERE f.name=?";

        PreparedStatement preparedStatement;
        List<Concept> conceptsList=new ArrayList<>();
        try {
            preparedStatement=connection.prepareStatement(query);
            preparedStatement.setString(1, framework);
            ResultSet resultSet=preparedStatement.executeQuery();
            while(resultSet.next()){
                Concept concept=new Concept();
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
