package array;

public class MaxConsecutiveOnes {
    public int findMaxConsecutiveOnes(int[] nums) {
        int[] tempArr = new int[nums.length];
        int length = 0;

        for(int i = 0; i < nums.length; i++) {
            if(nums[i] == 1) {
                length++;
                //System.out.println(i + " " + nums[i]);
            }
            else {
                length = 0;
            }

            tempArr[i] = length;
            //System.out.println(length);
        }

        int maxValue = tempArr[0];
        for(int j=0; j < tempArr.length; j++) {
            if(tempArr[j] > maxValue) {
                maxValue = tempArr[j];
            }
        }

        System.out.println(maxValue);
        return maxValue;    
    }

    public static void main(String[] args) {
        int[] nums = {1, 0, 1, 1, 0, 1};
        MaxConsecutiveOnes  mco = new MaxConsecutiveOnes();
        mco.findMaxConsecutiveOnes(nums);
    }
}
