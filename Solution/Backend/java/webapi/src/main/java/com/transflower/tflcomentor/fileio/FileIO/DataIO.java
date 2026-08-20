package com.transflower.tflcomentor.fileio.FileIO;

import java.util.List;

public interface DataIO {
   <T> void serialize(String filename, List<T> data);
    public <T> List <T> deserialize(String filename, Class<T> clazz);
}
