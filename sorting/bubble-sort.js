/**
 * BUBBLE SORT
 *
 * Simplest sorting algorithm
 *
 * On Each Pass
 * 		Compare each array item to it's right neighbor
 * 		If the right neighbor is smaller then swap right and left
 * 		Repeat for the remaining array items
 * 		With every comparision the larger value moves further to the right
 * Perform subsequent passes until no swaps are performed
 *
 * PERFORMANCE
 * 	Worst case for bubble sort - O(n^2)
 * 		not appropriate for large data sets
 * 	Average case performance - O(n^2)
 * 		not appropriate for large data sets
 * 	Best case performance - O(n)
 * 		very good best case performance and can efficiently sort small and nearly sorted data sets
 * 	Space Required - O(n)
 * 		Bubble sort operates directly on the input array meaning it is a candidate
 * 		algorithm when minimizing space is paramount
 */
