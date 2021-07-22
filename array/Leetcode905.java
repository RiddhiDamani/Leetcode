package array;

public class Leetcode905 {

    public int[] sortArrayByParity(int[] nums) {
        int i = 0;
        int j = nums.length - 1;

        while(i < j) {
            if(nums[i] % 2 > nums[j] % 2) {
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }

            if(nums[i] % 2 == 0) 
                i++;

            if(nums[j] % 2 == 1)
                j--;
        }
        
        return nums;
    }
    
    public static void main(String[] args) {
        int[] nums = {3,1,2,4};
        Leetcode905 obj = new Leetcode905();
        obj.sortArrayByParity(nums);
    }
}
