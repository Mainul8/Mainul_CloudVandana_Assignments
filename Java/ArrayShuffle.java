package com.mainul;

import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

//or we can simply use this library

//import java.util.*;

public class ArrayShuffle {
    public static void main(String[] args) {
        Integer[] arr = {1,2,3,4,5,6,7};
        List<Integer> list = new ArrayList<>(Arrays.asList(arr));
        Collections.shuffle(list);
        Integer[] shuffledArray = list.toArray(new Integer[0]);
        System.out.println(Arrays.toString(shuffledArray));

    }
}
