package array;

public class BasicArrayOperation {
    public static void main(String[] args) {
        
        int[] array = new int[10];

        // 1. Displaying 1 to 10
        for(int i=0; i<10; i++) {
            array[i] = i + 1;
            System.out.println("Number: " + array[i]);
        }

        System.out.println("Array Length: " + array.length);

        // 2. Reverse display of 10 to 1
        for(int i=array.length - 1; i >= 0; i--) {
            System.out.println("Number: " + array[i]);
        }

        // 3. Two Pointers -> displaying all combinations
        for(int i=0; i < array.length; i++) {
            for(int j=0; j < array.length; j++) {
                System.out.println("Number: " + array[i] + " " + array[j]);
            }
        }
    }
}
