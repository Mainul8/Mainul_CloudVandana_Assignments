import java.util.Scanner;

public class PangramProgram {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String input = sc.nextLine();

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        // Define an array to count the occurrence of each alphabet (A to Z)
        boolean[] alphabetCount = new boolean[26];
        int totalAlphabets = 26;

        // Convert the input to lowercase to ensure case-insensitivity
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

            // If all alphabets are found, no need to continue checking
            if (totalAlphabets == 0) {
                return true;
            }
        }

        return false;
    }
    
}
