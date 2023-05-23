// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

// With hash Map

const containsDuplicateUsingMap = function(nums) {
    let duplicates = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (duplicates.has(nums[i])) {
            return true;
        }
        duplicates.set(nums[i], true);
    }
    return false;
};

// With Set

const containsDuplicateUsingSet = function (nums) {
  let duplicates = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (duplicates.has(nums[i])) {
      return true;
    }
    duplicates.add(nums[i]);
  }
  return false;
};