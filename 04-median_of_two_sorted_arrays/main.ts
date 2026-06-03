function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let nums1Length = nums1.length
    let nums2Length = nums2.length

    if (nums1Length > nums2Length)
        return findMedianSortedArrays(nums2, nums1)

    const mergeLength = nums1Length + nums2Length
    /* we now if we merge sorted both lists, the item in the middle is the median
       but also, that means, left to the median, all items are sorted, and on the right too.
       So, if we want a O(log(n + m)) time complexity, we need to find the left side of both lists
    */

    const leftLength = Math.floor((mergeLength + 1) / 2)
    // therefore, the sum of the portions of both lists must always be on the leftLength

    let sliceStart = 0
    let sliceEnd = nums1Length

    // try all the possibles slices combinations w/both lists
    while (sliceStart <= sliceEnd) {
        const mid = Math.floor((sliceStart + sliceEnd) / 2)
        const nums2Mid = leftLength - mid

        // Declartions to validate if left side is sorted well
        const nums1MaxLeftValue = nums1[mid - 1] !== undefined
            ? nums1[mid - 1]
            : Number.NEGATIVE_INFINITY
        const nums1MinRightValue = nums1[mid] !== undefined
            ? nums1[mid]
            : Number.POSITIVE_INFINITY
        const nums2MaxLeftValue = nums2[nums2Mid - 1] !== undefined
            ? nums2[nums2Mid - 1]
            : Number.NEGATIVE_INFINITY
        const nums2MinRightValue = nums2[nums2Mid] !== undefined
            ? nums2[nums2Mid]
            : Number.POSITIVE_INFINITY

        if (nums1MaxLeftValue > nums2MinRightValue) {
            sliceEnd = mid - 1
            continue
        }

        if (nums2MaxLeftValue > nums1MinRightValue) {
            // This means we need to increase the left slice and decrease right slice
            sliceStart = mid + 1
            continue
        }

        // If whe are in this part of the code, means we find the correct slices
        const midValues = [
            Math.max(nums1MaxLeftValue, nums2MaxLeftValue),
            Math.min(nums1MinRightValue, nums2MinRightValue)
        ]

        // if merge list is even
        if (mergeLength % 2 === 0) {
            if (midValues[0] + midValues[1] === 0) return 0 // because we can not divide zero
            return (midValues[0] + midValues[1]) / 2
        }

        return midValues[0]
    }

    throw new Error('Something went wrong')
}

let nums1: number[] = []
let nums2: number[] = []
let median: number = 0


// nums1 = [2, 3, 5, 8, 15, 16]
// nums2 = [1, 4, 6, 7, 9, 10, 11, 12, 13, 14]
// median = findMedianSortedArrays(nums1, nums2)
// console.log('TEST: ', median, ' should be: 8.5')


nums1 = [1, 3, 8]
nums2 = [7, 9, 10, 11]
median = findMedianSortedArrays(nums1, nums2)
console.log('Case A: ', median, ' should be: 8')

// nums1 = [1, 2]
// nums2 = [3, 4]
// median = findMedianSortedArrays(nums1, nums2)
// console.log('Case B: ', median, ' should be: 2.5')

// nums1 = [1, 2, 3]
// nums2 = [10, 20, 30, 40]
// median = findMedianSortedArrays(nums1, nums2)
// console.log('Case C: ', median, ' should be: 10')

// nums1 = [1, 5, 9]
// nums2 = [2, 3, 6, 7]
// median = findMedianSortedArrays(nums1, nums2)
// console.log('Case D: ', median, ' should be: 5')

// nums1 = []
// nums2 = [1, 2, 3, 4, 5]
// median = findMedianSortedArrays(nums1, nums2)
// console.log('Case E: ', median, ' should be: 3')

// nums1 = [4, 5]
// nums2 = [1, 2, 3, 6, 7, 8]
// median = findMedianSortedArrays(nums1, nums2)
// console.log('Case F: ', median, ' should be: 4.5')

// nums1 = [1, 1, 1]
// nums2 = [1, 1, 1, 1]
// median = findMedianSortedArrays(nums1, nums2)
// console.log('Case G: ', median, ' should be: 1')

// nums1 = [0, 0]
// nums2 = [0, 0]
// median = findMedianSortedArrays(nums1, nums2)
// console.log('Case H: ', median, ' should be: 0')

// nums1 = [2, 5]
// nums2 = [1, 3, 4, 6, 7, 8, 9]
// median = findMedianSortedArrays(nums1, nums2)
// console.log('Case I: ', median, ' shoud be: 5')