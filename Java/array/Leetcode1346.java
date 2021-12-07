package array;

class Leetcode1346 {

    public boolean checkIfExist(int[] arr) {
        boolean val = false;

        for(int i=0; i < arr.length; i++) {
            for(int j=0; j < arr.length; j++) {
                if(i != j && arr[i] == 2 * arr[j]) {
                    val = true;
                    break;
                }
            }
        }
        System.out.println(val);
        return val;
    }

    public static void main(String[] args) {
        int[] arr = {10,2,5,3};
        Leetcode1346 obj = new Leetcode1346();
        obj.checkIfExist(arr);
    }
}