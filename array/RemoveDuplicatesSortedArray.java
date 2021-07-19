package array;

public class RemoveDuplicatesSortedArray {
    public int removeDuplicates(int[] nums) {
        int count = 0;

        for(int i=0; i < nums.length; i++) {
            for(int j=i+1; j < nums.length - 1; j++) {
                
            }
        }

        for(int i=0; i < nums.length; i++) {
            System.out.println(nums[i]);
        }
        return count;
    }

    public static void main(String[] args) {
        int[] nums = {0,0,1,1,1,2,2,3,3,4};
        RemoveDuplicatesSortedArray obj = new RemoveDuplicatesSortedArray(); 
        obj.removeDuplicates(nums);
    }
}
