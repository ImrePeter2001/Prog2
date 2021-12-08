package com.epam.unideb;

import java.io.IOException;
import java.util.ArrayList;

public class Floyd_T {
    public void triangle(int N) throws IOException {
        Write_File data = new Write_File("Triangle.txt");
        ArrayList<Integer> dataArrayList = new ArrayList<>();
        int num = 1;
        int row = 1;
        int br = 1;
        while (row <= N) {
            dataArrayList.add(num);
            if (br == row) {
                dataArrayList.add(0);
                if(row == N) {
                    System.out.print(num);
                } else {
                    System.out.println(num);
                }
                num++;
                row++;
                br = 1;
            } else {
                System.out.print(num + " ");
                num++;
                br++;
            }
        }
        data.writeToFile(dataArrayList);

        int sum = 0;

        for(int i = 0; i < dataArrayList.size(); i++) {
            if(dataArrayList.get(i) != 0) {
                sum += dataArrayList.get(i);
            }
        }
        System.out.println("");
        System.out.print("sum: " + sum);
    }
}
