package array;

// 26. Remove Duplicates from Sorted Array
public class Leetcode26 {
    public int removeDuplicates(int[] nums) {
        int wpointer = 1;
  
        for(int rpointer = 1; rpointer < nums.length; rpointer++) {
            if(nums[rpointer] != nums[rpointer - 1]) {
                nums[wpointer] = nums[rpointer];
                wpointer++;
            }
        }
        //System.out.println(wpointer);
        return wpointer;
    }
    public static void main(String[] args) {
        int[] nums = {1,1,2};
        Leetcode26 obj = new Leetcode26();
        obj.removeDuplicates(nums);
    }
}
