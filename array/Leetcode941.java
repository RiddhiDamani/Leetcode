package array;

public class Leetcode941 {
    public boolean validMountainArray(int[] arr) {
        boolean val = false;
        int temp = arr[0];
        int index = 0;
        boolean flag1 = false;
        boolean flag2 = false;

        if(arr.length < 3) {
            val = false;
        }
        else {
            for(int i=0; i < arr.length; i++) {
                //System.out.println(arr[i]);
                if(temp < arr[i]) {
                    temp = arr[i];
                    index = i;
                }
            }
            for(int i=0; i < arr.length; i++) {
                if(arr[i] == arr[index]) {
                    for(int j=0; j < index; j++) {
                        if(arr[j] < arr[index]) {
                            flag1 = true;
                            break;
                        }
                        else {
                            flag1 = false;
                        }
                    }
                    for(int j=index + 1; j > arr.length; j++) {
                        if(arr[index] > arr[j]) {
                            flag2 = true;
                            break;
                        }
                        else {
                            flag2 = false;
                        }
                    }
                }
            }
            if(flag1 && flag2) {
                System.out.println(true);
            }
        }

        return val;
    }

    public static void main(String[] args) {
        int[] arr = {0,3,5,2,1};
        Leetcode941 obj = new Leetcode941();
        obj.validMountainArray(arr);
    }
}
