package array;

import java.util.ArrayList;
import java.util.List;

class FizzBuzz {
    List<String> answer = new ArrayList<String>(); 

    public List<String> fizzBuzz(int n) {
         
        for(int i=1; i <= n; i++) {
            if(i % 3 == 0 && i % 5 != 0) {
                answer.add("Fizz");
            } 
            else if(i % 5 == 0 && i % 3 != 0) {
                answer.add("Buzz");
            }
            else if(i % 3 == 0 && i % 5 == 0) {
                answer.add("FizzBuzz");
            }
            else {
                answer.add(Integer.toString(i));
            }
            
        }

        System.out.println(answer);
        return answer;
    }

    public static void main(String[] args) {
        FizzBuzz fb = new FizzBuzz();
        fb.fizzBuzz(15);

    }
}
