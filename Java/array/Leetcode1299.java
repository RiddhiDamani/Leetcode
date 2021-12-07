package array;

class Leetcode1299 {
    public int[] replaceElements(int[] arr) {
        int greatestNum = 0;

        if(arr.length == 0) {
            return arr;
        }
        
        if(arr.length == 1) {
            arr[0] = -1;
        }

        for(int i=0; i < arr.length; i++) {
            if(i < arr.length) {
                greatestNum = 0;
                for(int j=i+1; j < arr.length; j++) {
                    if(arr[j] > greatestNum) {
                        greatestNum = arr[j];
                    }
                    else if(j == arr.length - 1) {
                        arr[j] = arr[arr.length -1];
                    }
                }
                //System.out.println(greatestNum);
                arr[i] = greatestNum;
            }
            if(i == arr.length - 1) {
                    arr[arr.length - 1] = -1;
            }
        }

        //System.out.println(arr.length);
        for(int i=0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] arr = {17,18,5,4,6,1};
        Leetcode1299 obj = new Leetcode1299();
        obj.replaceElements(arr);
    }
}