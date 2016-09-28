/**
 * MERGE SORT - Divide and conquor
 *
 * Array is recursively split in half
 * When the array is in groups of 1, it is reconstructed in sort order
 * Each reconstructed array is merged with the other half
 *
 * PERFORMANCE
 * 	Worst case - O(n log n)
 * 		appropriate for large unsorted data sets
 * 		data splitting means the algorithm can be made paralell
 * 	Average case performance - O(n log n)
 * 		appropriate for large unsorted data sets
 * 	Best case performance - O(n log n)
 * 		appropriate for large unsorted data sets
 * 		merge sort is very predictable
 * 	Space Required - O(n)
 * 		Merge can be but is often not performed in place. These extra allocations
 * 		increase the memory footprint required to sort data
 */
