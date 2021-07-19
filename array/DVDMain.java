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

    // --------------- INSERTING ITEMS INTO AN ARRAY --------------------------------- 

    // 1. Inserting element at the end of the array
    // Declaring an integer array of 6 elements
    int[] intArray = new int[6];
    // using the length variable to track the number of items stored in the array
    int length1 = 0;

    // Adding 3 elements to the array
        for(int i=0; i < 3; i++) {
            intArray[length1] = i;
            System.out.println(intArray[length1]);
            length1++;
        }


    // Insert a new element at the end of the Array. Again,
    // it's important to ensure that there is enough space
    // in the array for inserting a new element.
    // Mandatory to increment the length++, else next time if we try to add item, it will overwrite an item
        intArray[length] = 10;
        length++;

    // Notice how indexes 3, 4, and 5 all contain 0? This is because Java fills unused int Array slots with 0s.
        for (int i = 0; i < intArray.length; i++) {
            System.out.println("Index " + i + " contains " + intArray[i]);
        }

    // 2. Inserting at the Start of an Array
    
    // Steps:
    // 1. need to shift all other elements in the Array to the right by one index to create space for the new element. This is a very costly operation, since each of the existing elements has to be shifted one step to the right. The need to shift everything implies that this is not a constant time operation. In fact, the time taken for insertion at the beginning of an Array will be proportional to the length of the Array. In terms of time complexity analysis, this is a linear time complexity: O(N), where NN is the length of the Array.
    
    // First, we will have to create space for a new element.
    // We do that by shifting each element one index to the right.
    // This will firstly move the element at index 3, then 2, then 1, then finally 0.
    // We need to go backwards to avoid overwriting any elements.
        for (int i = 3; i >= 0; i--) {
            intArray[i + 1] = intArray[i];
            System.out.println(intArray[i + 1]);
        }

    // Now that we have created space for the new element,
    // we can insert it at the beginning.
        intArray[0] = 20;

        for (int i = 0; i < intArray.length; i++) {
            System.out.println("Index " + i + " contains " + intArray[i]);
        } 
    
    // 3. Inserting anywhere in the array    
    // Steps: 
    // 1. For inserting at any given index, we first need to shift all the elements from that index onwards one position to the right.  
    // 2. Once the space is created for the new element, we proceed with the insertion.
    // 3. If you think about it, insertion at the beginning is basically a special case of inserting an element at a given index—in that case, the given index was 0.
    // 4. Again, this is also a costly operation since we could potentially have to shift almost all the other elements to the right before actually inserting the new element.
    // 5. Shifting lots of elements one place to the right adds to the time complexity of the insertion task.

    // Say we want to insert the element at index 2.
    // First, we will have to create space for the new element.
        for (int i = 4; i >= 2; i--)
            {
                // Shift each element one position to the right.
                intArray[i + 1] = intArray[i];
            }

    // Now that we have created space for the new element,
    // we can insert it at the required index.
        intArray[2] = 30;
        
        for (int i = 0; i < intArray.length; i++) {
            System.out.println("Index " + i + " contains " + intArray[i]);
        } 


    // Deletion from the array: 
    // 1. Deleting last element from the array: 

    //declaring an integer array of 10 elements
        int[] intArray2 = new int[10];

    // array currently contains 0 = elements
        int length2 = 0;

    // Adding elements at the first 6 indexes of the array
    // Essentially, this variable keeps track of the next index that is free for inserting a new element. This is always the same value as the overall length of the Array. 
        for(int i=0; i < 6; i++) {
            intArray2[length2] = i;
            length2++;
        }

        // Deletion from the end is as simple as reducing the length
        // of the array by 1.
        length2--;


        // Would not delete the last element in the array. Why? 'coz When we use intArray.length, we're looking every valid index of the Array. 
        //for (int i = 0; i < intArray2.length; i++) {
        //    System.out.println("Index " + i + " contains " + intArray2[i]);
        //}
        
        System.out.println("-------------IntArray2-------------------");

        // Code should have been
        // When in fact, we only want to look at the ones that we've put values into. The fix is easy, we just iterate up to our own length variable instead.
        for (int i = 0; i < length2; i++) {
            System.out.println("Index " + i + " contains " + intArray2[i]);
        }

        length2++;
        intArray2[5] = 25;

        for (int i = 0; i < length2; i++) {
            System.out.println("Index " + i + " contains " + intArray2[i]);
        }


        // Deleting the first element of array : index[0]
        // Starting at index 1, we shift each element one position to the left.
        for(int i = 1; i < length2; i++) {
            // shift each element one position to the left
            intArray2[i-1] = intArray2[i];
        }

        // Note that it's important to reduce the length of the array by 1.
        // Otherwise, we'll lose consistency of the size. This length
        // variable is the only thing controlling where new elements might
        // get added.
        length2--;

        System.out.println("------- Deleting element at 1st position ---------");

        for (int i = 0; i < length2; i++) {
            System.out.println("Index " + i + " contains " + intArray2[i]);
        }

        System.out.println("------- Deleting element at index 1 ---------");

        // Say we want to delete the element at index 1
        for (int i = 2; i < length2; i++) {
             // Shift each element one position to the left
            intArray2[i - 1] = intArray2[i];
        }

        // Again, the length needs to be consistent with the current
        // state of the array.
        length2--;

        for (int i = 0; i < length2; i++) {
            System.out.println("Index " + i + " contains " + intArray2[i]);
        }

    }
}

