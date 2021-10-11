package array;

import java.lang.reflect.Array;
import java.util.Arrays;

public class Leetcode88 {
    
    public void merge(int[] nums1, int m, int[] nums2, int n) {
       for(int i=0; i < n; i++) {
            nums1[i + m] = nums2[i];
       }
       Arrays.sort(nums1);

       for(int i=0; i < nums1.length; i++) {
           System.out.println(nums1[i]);
       }
    }

    public static void main(String[] args) {
        int[] nums1 = {1,2,3,0,0,0};
        int[] nums2 = {2,5,6};
        int m = 3;
        int n = 3;
        Leetcode88 obj = new Leetcode88();
        obj.merge(nums1, m, nums2, n);
    }
}
