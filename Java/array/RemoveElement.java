package array;

public class RemoveElement {
    public int removeElement(int[] nums, int val) {

        int temp;
        int count=0;

        // Removing element 
        for(int i=0; i < nums.length; i++) {
            if(nums[i] == val) {
                for(int j = nums.length - 1; j >= i; j--) {
                    //System.out.println(nums[i] + " " + nums[j]);
                    if(nums[i] != nums[j]) {
                        temp = nums[i];
                        nums[i] = nums[j];
                        nums[j] = temp;
                        break;
                    }
                }
            }
        }

        for(int i=0; i < nums.length; i++) {
            if(nums[i] != val) {
                count++;
            }
        }

        System.out.println(count);
        // Sorting of the array in ascending order
        // for(int i=0; i < nums.length; i++) {
        //     for(int j=i+1; j <nums.length; j++) {
        //         if(nums[i] > nums[j]) {
        //             temp = nums[i];
        //             nums[i] = nums[j];
        //             nums[j] = temp;
        //         }
        //     }
        // }

        //for (int i = 0; i < nums.length; i++) {
        //    System.out.println("Index " + i + " contains " + nums[i]);
        //}
        return count;
        
    }

    public static void main(String[] args) {
        int[] nums = {0,1,2,2,3,0,4,2};
        int val = 2;
        RemoveElement obj = new RemoveElement();
        obj.removeElement(nums, val);
    }
}
