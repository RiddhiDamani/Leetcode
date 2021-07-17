package array;

public class DuplicateZeros {
    public void duplicateZeros(int[] arr) {
        int[] tempArr = new int[arr.length];
        int s = 0;
        int d = 0;

        for(int i=0; i < arr.length; i++) {     
            if(arr[i] == 0) {
                tempArr[i] = arr[i];
                tempArr[i + 1] = d;
            }
            else {
                tempArr[i] = arr[i];
            }

            System.out.println(tempArr[i]);
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 0, 2, 3, 0, 4, 5, 0};
        DuplicateZeros obj = new DuplicateZeros();
        obj.duplicateZeros(arr);
    }
}
