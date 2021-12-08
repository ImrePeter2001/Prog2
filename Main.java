package com.epam.unideb;

import java.io.IOException;

public class Main {

    public static void main(String[] args) throws IOException {
        Input_Intake inputIntake = new Input_Intake();
        Floyd_T floydT = new Floyd_T();

        int user_number = inputIntake.input();

        floydT.triangle(user_number);
    }
}
