package com.transflower.tflcomentor.Backend.Entity;

    public class Runtimes {
        private int id ;
        private String runtimeName;

        public Runtimes(){
            this.id = 0;
            this.runtimeName = " ";
        }

        public Runtimes(int id, String runtimeName) {
            this.id = id;
            this.runtimeName = runtimeName;
        }   

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getRuntimeName() {
            return runtimeName;
        }
        
        public void setRuntimeName(String runtimeName) {
            this.runtimeName = runtimeName;
        }

        @Override
        public String toString() {
            return "Runtimes [id=" + id + ", runtimeName=" + runtimeName + "]";
        }
    }
    