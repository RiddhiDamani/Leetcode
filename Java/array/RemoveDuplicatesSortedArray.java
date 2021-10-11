package array;

// Time Complexity : O(N)
// Space Complexity : O(1)
public class RemoveDuplicatesSortedArray {

    // Since the array is already sorted, we can keep two pointers ii and jj, where ii is the slow-runner while jj is the fast-runner. As long as nums[i] = nums[j]nums[i]=nums[j], we increment jj to skip the duplicate.

    //When we encounter nums[j] != nums[i] the duplicate run has ended so we must copy its value to nums[i + 1]nums[i+1]. ii is then incremented and we repeat the same process again until jj reaches the end of array.
    public int removeDuplicates(int[] nums) {
        int i = 0;

        for(int j=1; j < nums.length; j++) {
            if(nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }

        for(int k=0; k < nums.length; k++) {
            System.out.println(nums[k]);
        }
        return i + 1;
    }

    public static void main(String[] args) {
        int[] nums = {0,0,1,1,1,2,2,3,3,4};
        RemoveDuplicatesSortedArray obj = new RemoveDuplicatesSortedArray(); 
        obj.removeDuplicates(nums);
    }
}
