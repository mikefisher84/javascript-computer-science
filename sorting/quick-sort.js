/**
 * QUICK SORT - Divide and conquor
 * one of the most commonly used general purpose sorting algorithms
 * Pick a pivot point and parition the array
 * Array isnt' neccesarily split, but a pivot point is set
 * Perform pivot and partition algorithm on the left and right paritions
 * Repeat until sorted
 *
 * PERFORMANCE
 * 	Worst case - O(n^2)
 * 		not appropriate for large pathologically sorted (inverse sorted) data sets
 * 		data splitting means the algorithm can be made paralell
 * 	Average case performance - O(n log n)
 * 		appropriate for large unsorted data sets
 * 	Best case performance - O(n log n)
 * 		Very good best case performance and can efficiently sort small and nearly sorted data sets
 * 	Space Required - O(n)
 * 		As a recursive algorithm the array space as well as the stack space must be considered.
 * 		There exist optimizations to reduce space usage further
 */
