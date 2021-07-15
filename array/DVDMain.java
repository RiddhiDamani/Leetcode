package array;

public class DVDMain {
    public static void main(String[] args) {
        // The actual code for creating an Array to hold DVD's.
        DVD[] dvdCollection = new DVD[15];
        int[] squareNumbers = new int[10];
        int[] array = new int[6];
       
        DVD incrediblesDVD = new DVD("The Incredibles", 2004, "Brad Bird");
        DVD findingDoryDVD = new DVD("Finding Dory", 2016, "Andrew Stanton");
        DVD lionKingDVD = new DVD("The Lion King", 2019, "Jon Favreau");

        // Firstly, we need to actually create a DVD object for The Avengers.
        DVD avengersDVD = new DVD("The Avengers", 2012, "Joss Whedon");

        DVD starWarsDVD = new DVD("Star Wars", 1977, "George Lucas");

        // Next, we'll put it into the 8th place of the Array. Remember, because we
        // started numbering from 0, the index we want is 7.
        dvdCollection[7] = avengersDVD;

        // Put "The Incredibles" into the 4th place: index 3.
        dvdCollection[3] = incrediblesDVD;

        // Put "Finding Dory" into the 10th place: index 9.
        dvdCollection[9] = findingDoryDVD;

        // Put "The Lion King" into the 3rd place: index 2.
        dvdCollection[2] = lionKingDVD;

        dvdCollection[3] = starWarsDVD;

        // Print out what's in indexes 7, 10, and 3.
        System.out.println(dvdCollection[7]);
        System.out.println(dvdCollection[10]);
        System.out.println(dvdCollection[3]);

        // Will print:

        // The Avengers, directed by Joss Whedon, released in 2012
        // null
        // Star Wars, directed by George Lucas, released in 1977

        for(int i = 0; i < 10; i++) {
            int square = (i + 1) * (i + 1);
            squareNumbers[i] = square;
        }

        for (int square: squareNumbers) {
            System.out.println(square);
        }

        int length = 0;

        for (int i=0; i < 3; i++) {
            array[i] = i * i;
            length++;
        }

        System.out.println("The capacity of Array is: " + array.length);
        System.out.println("The length of Array is: " + length);

        int capacity = squareNumbers.length;
        System.out.println("The capacity of the array is : " + capacity);
    }
}

