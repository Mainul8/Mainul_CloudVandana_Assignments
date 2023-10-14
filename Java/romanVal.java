import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
public class romanVal {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Roman Number: ");
        String romanNumeral = sc.next();
        int result = romanToInteger(romanNumeral);
        System.out.println("Roman number " + romanNumeral + " is equal to " + result);
    }

    public static int romanToInteger(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }

        // Create a map to store Roman numeral values
        Map<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char c = s.charAt(i);
            int value = romanValues.get(c);

            if (value < prevValue) {
                result -= value;
            } else {
                result += value;
            }

            prevValue = value;
        }

        return result;
    }
}

