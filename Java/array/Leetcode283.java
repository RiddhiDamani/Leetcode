package array;

public class Leetcode283 {
    public void moveZeroes(int[] nums) {
        int j = 0;
        int[] result = new int[nums.length];
        for(int i=0; i < nums.length; i++) {
            if(nums[i] == 0) {
                continue;
            }
            else if(nums[i] != 0) {
                result[j] = nums[i];
                j++;
            }
        }

        for(int k=0; k < result.length; k++) {
            nums[k] = result[k];
            System.out.println(nums[k]);
        }
        
    }
    public static void main(String[] args) {
        int[] nums = {0};
        Leetcode283 obj = new Leetcode283();
        obj.moveZeroes(nums);
    }
}
