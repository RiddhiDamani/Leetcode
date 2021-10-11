package array;

public class MergeSortedArray {
    
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int temp = 0;
        for(int i=0; i < m; i++) {
            for(int j=0; j < n; j++) {
                if(nums1[i] > nums2[j] && nums2.length != 0) {
                    temp = nums1[i];
                    nums1[i] = nums2[j];
                    nums2[j] = temp;
                }
                else if(nums1[i] < nums2[j]) {
                    nums1[i] = nums1[i];
                }
                else {
                    nums1[i] = nums2[j];
                    j++;
                }
            }
        }

        if(n != 0) {
            for(int k = n - 1; k >= 0; k--) {
                System.out.println("Index: " + k + " value: " + nums2[k]);
                nums1[m + n - k - 1] = nums2[k];
            }
        }

        for(int z=0; z < nums1.length; z++) {
            System.out.println(nums1[z]);
        }
    }

    public static void main(String[] args) {
        int[] nums1 = {1,2,3,0,0,0};
        int[] nums2 = {2,5,6};
        int m = 3;
        int n = 3;
        MergeSortedArray obj = new MergeSortedArray();
        obj.merge(nums1, m, nums2, n);
    }
}
