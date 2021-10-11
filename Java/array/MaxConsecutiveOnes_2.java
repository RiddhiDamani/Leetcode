package array;

public class MaxConsecutiveOnes_2 {
    public int findMaxConsecutiveOnes(int[] nums) {
        int length = 0;
        int maxLen = 0;

        for(int i = 0; i < nums.length; i++) {
            if(nums[i] == 1) {
                length++;
                //System.out.println(i + " " + nums[i]);
            }
            else {
                maxLen = Math.max(maxLen, length);
                length = 0;
            }
        }

        //System.out.println(maxLen);
        return Math.max(maxLen, length);    
    }

    public static void main(String[] args) {
        int[] nums = {1, 1, 1, 1, 0, 1};
        MaxConsecutiveOnes  mco = new MaxConsecutiveOnes();
        mco.findMaxConsecutiveOnes(nums);
    }
}
