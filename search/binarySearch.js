function binarySearch(nums, target) {
    // create the lowest possible index 0
    var lowIndex = 0;
    // create the highest possible index nums.length - 1
    var highIndex = nums.length - 1;
    // create a variable to track the middle
    var middle;
    // while the high index - low index is bigger than 1 (I.E. while there are elements in the array)
    while (highIndex - lowIndex > 1) {
        // if the value is equal to the target return true
        middle = Math.round((lowIndex - highIndex) / 2);
        console.log(middle);
        if (nums[middle] === target) {
            return true;
        } else if (nums[middle] < target) {
            // else if the value is smaller than the target set the low index to the middle + 1
            lowIndex = middle + 1;
        } else if (nums[middle] > target) {
            // else if the value is higher than the target set the high index to middle - 1
            highIndex = middle - 1;
        }
    }
    return false;
}
var arr = [3, 6, 10, 22, 36, 50, 90, 102];
console.log(binarySearch(arr, 20));
console.log(binarySearch(arr, 22));
