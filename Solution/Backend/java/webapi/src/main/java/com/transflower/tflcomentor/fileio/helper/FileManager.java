package com.transflower.tflcomentor.fileio.helper;

import java.util.List;

public interface FileManager {
   <T> void serialize(String filename, List<T> data);
    public <T> List <T> deserialize(String filename, Class<T> clazz);
}
