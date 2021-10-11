package array;

public class Leetcode66 {
    public int[] plusOne(int[] digits) {

        //System.out.println(digits.length);

        for(int i = digits.length - 1; i > digits.length - 2; i--) {
            //System.out.println("Hello");
            if(digits[i] != 9) {
                int sum = 0;
                sum = digits[i] + 1;
                digits[i] = sum;
            }
            if(digits[i] == 9) {
                int sum = 0;
                sum = digits[i] + 1;
                digits[i] = sum;
                //digits[i - 1] =  digits[i - 1] + 1;
            }    
        }
        
        for(int i=0; i < digits.length; i++) {
            System.out.println(digits[i]);
        }
        return digits;
    }

    public static void main(String[] args) {
        int[] digits = {9};
        Leetcode66 obj = new Leetcode66();
        obj.plusOne(digits);
    }
}
