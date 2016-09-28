/**
 * INSERTION SORT
 *
 *
 * Sorts each item in the array as they are encountered
 * 	As the current item works from left to right
 * 		Everything left of the item is known to be sorted
 * 		Everything to the right is unsorted
 *  The current item is "inserted" into place within the sorted section
 *
 * PERFORMANCE
 * 	Worst case - O(n^2)
 * 		not appropriate for large unsorted data sets
 * 	Average case performance - O(n^2)
 * 		not appropriate for large data sets
 * 	Best case performance - O(n)
 * 		very good best case performance and can efficiently sort small and nearly sorted data sets
 * 	Space Required - O(n)
 * 		Bubble sort operates directly on the input array meaning it is a candidate
 * 		algorithm when minimizing space is paramount
 */
