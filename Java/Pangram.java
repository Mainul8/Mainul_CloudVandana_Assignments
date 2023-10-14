package com.mainul;

import java.util.Scanner;

public class Pangram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String input = scanner.nextLine();

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {

        boolean[] alphabetCount = new boolean[26];
        int totalAlphabets = 26;

        input = input.toLowerCase();

        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                int index = ch - 'a';
                if (!alphabetCount[index]) {
                    alphabetCount[index] = true;
                    totalAlphabets--;
                }
            }

            if (totalAlphabets == 0) {
                return true;
            }
        }

        return false;
    }
}
