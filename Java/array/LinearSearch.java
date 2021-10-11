package array;

public class LinearSearch {
    public boolean linearSearch(int[] array, int length, int element) {
        // Check for edge cases. Is the array null or empty?
        // If it is, then we return false because the element we're
        // searching for couldn't possibly be in it.
        if (array == null || length == 0) {
            return false;
        }
    
        // Carry out the linear search by checking each element,
        // starting from the first one.
        for (int i = 0; i < length; i++) {
            // We found the element at index i.
            // So we return true to say it exists.
            if (array[i] == element) {
                return true;
            }
        }
    
        // We didn't find the element in the array.
        return false;
    }

    public static void main(String[] args) {
        int[] array = {1,2,3,4,5,6};
        int length = 6;
        int element = 50;
        LinearSearch obj = new LinearSearch();
        boolean output = obj.linearSearch(array, length, element);
        System.out.println(output);
    }
}
