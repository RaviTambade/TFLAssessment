package com.transflower.tflcomentor.fileio.FileIO;

import java.util.List;

public interface DataIO {
    public <T> List <T> deserialize(String filename, Class<T> clazz);
}
