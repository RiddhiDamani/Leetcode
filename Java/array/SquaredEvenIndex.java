package array;

public class SquaredEvenIndex {
    public int[] squareEven(int[] array, int length) {

        // Check for edge cases
        if(array == null) {
            return null;
        }
          // Iterate through the original array.
        for(int i=0; i < length; i++) {
            // If the index is an even number, then we need to square the element
            // and replace the original value in the Array.
            if(i % 2 == 0) {
                array[i] = array[i] * array[i];
            }
              // Notice how we don't need to do *anything* for the odd indexes? :-)
        }

        return array;
    }

    public static void main(String[] args) {
        int[] array = {9, -2, -9, 11, 56, -12, -3};
        int length = 7;
        SquaredEvenIndex obj = new SquaredEvenIndex();
        obj.squareEven(array, length);
        for(int i=0; i < array.length; i++) {
            System.out.println(array[i]);
        }

    }
}
