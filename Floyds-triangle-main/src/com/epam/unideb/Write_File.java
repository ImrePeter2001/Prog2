package com.epam.unideb;

import java.io.FileWriter;
import java.io.PrintWriter;
import java.io.IOException;
import java.util.ArrayList;


public class Write_File {
    private String path;

    public Write_File(String file_path) {
        path = file_path;
    }

    public void writeToFile(ArrayList<Integer> data) throws IOException {

        FileWriter write = new FileWriter(path);

        PrintWriter print_line = new PrintWriter(write);

        for(int i = 0; i < data.size(); i++) {
            if(data.get(i) == 0) {
                print_line.printf("\n");
            } else {
                print_line.printf("%d ", data.get(i));
            }
        }

        print_line.close();
    }


}
