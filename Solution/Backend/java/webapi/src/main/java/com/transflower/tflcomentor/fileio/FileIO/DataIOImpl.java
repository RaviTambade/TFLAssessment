package com.transflower.tflcomentor.fileio.FileIO;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.io.File;

import tools.jackson.databind.ObjectMapper;

public class DataIOImpl implements DataIO{
    @Override
    public <T> void serialize(String filename, List<T> data) {
    ObjectMapper mapper = new ObjectMapper();
    try {
        mapper.writeValue(new File(filename),data);
    } 
    catch (Exception e) {
        e.printStackTrace();
    }
}

    
    @Override
    public <T> List<T> deserialize(String filename, Class<T> clazz) {
        ObjectMapper mapper = new ObjectMapper();
        InputStream input = getClass().getClassLoader().getResourceAsStream(filename);
        try {
            return mapper.readValue(input,mapper.getTypeFactory().constructCollectionType(List.class, clazz));
        } 
        catch (Exception e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }
}
