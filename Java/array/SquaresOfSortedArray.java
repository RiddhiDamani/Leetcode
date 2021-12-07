package array;

public class SquaresOfSortedArray {
    public int[] sortedSquares(int[] nums) {
        int[] tempArr = new int[nums.length];

        for(int i=0; i < nums.length; i++) {
            int square = nums[i] * nums[i];
            tempArr[i] = square;
        }

        //int sortVal = tempArr[0];
        for(int j=0; j < tempArr.length; j++) {
            for(int k= j + 1; k < tempArr.length; k++) {
                int tmp = 0;
                if (tempArr[j] > tempArr[k]) {
                    tmp = tempArr[j];
                    tempArr[j] = tempArr[k];
                    tempArr[k] = tmp;
                }   
        }
        System.out.println(tempArr[j]);
    }
    return tempArr;
}

    public static void main(String[] args) {
        int[] nums = {-4, -1, 0, 3, 10};
        SquaresOfSortedArray obj = new SquaresOfSortedArray();
        obj.sortedSquares(nums);
    }
    
}
