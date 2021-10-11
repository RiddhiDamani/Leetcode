package array;

class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        int[] sol = new int[2];
        int[] tempArr = new int[2];
        boolean flag = false;
        for(int i=0; i < nums.length; i++) {
            for(int j=0; j < nums.length; j++) {
                if(i != j) {
                    int total = nums[i] + nums[j];
                    if(total == target) {
                        tempArr[0] = i;
                        tempArr[1] = j;
                        sol[0] = i;
                        sol[1] = j;
                        System.out.println("[" + sol[0] + "," + sol[1] + "]");
                        flag = true;
                        
                    }
                    if(flag == true) {
                        break;
                    }

                }
            }
            if(flag == true) {
                break;
            }
        }
        return sol;
    }
    
    public static void main(String[] args) {
        int[] nums = {3,3};
        int target = 6;

        twoSum(nums, target);
    }
}