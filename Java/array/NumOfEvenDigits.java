package array;

class NumOfEvenDigits {
    public int findNumbers(int[] nums) {
        String num;
        int count = 0; 

        for(int i=0; i < nums.length; i++) {
            num = Integer.toString(nums[i]); 
            if(num.length() % 2 == 0) {
                count++;
            }
        }

        System.out.println(count);

        return count;
    }
    
    public static void main(String[] args) {
        int[] nums = {555, 901, 482, 1771, 121271};
        NumOfEvenDigits obj = new NumOfEvenDigits();
        obj.findNumbers(nums);
    }
}