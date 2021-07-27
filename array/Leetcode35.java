package array;

public class Leetcode35 {
    
    public int searchInsert(int[] nums, int target) {
        int index = 0;

        for(int i=0; i < nums.length; i++) {
            if(target == nums[i]) {
                index = i;
                break;
            }
            else if (target > nums[i] && i == nums.length - 1) {
                index = i + 1;
                break;
            }
            else if(target < nums[i]) {
                index = i;
                break;
            }
        }
 
        return index;
    }

    public static void main(String[] args) {
        int[] nums = {1,3,5,6};
        int target = 5;
        Leetcode35 obj = new Leetcode35();
        int index = obj.searchInsert(nums, target);
        System.out.println(index);
    }
}
