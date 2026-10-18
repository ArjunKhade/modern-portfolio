import { Component, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface DsaCodeSolution {
  language: 'java' | 'javascript' | 'python';
  code: string;
}

export interface DsaProblem {
  id: string;
  number: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  tags: string[];
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
  approach: string;
  timeComplexity: string;
  spaceComplexity: string;
  solutions: DsaCodeSolution[];
  youtubeVideoId: string;
  youtubeUrl: string;
  videoTitle: string;
}

@Component({
  selector: 'app-dsa',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dsa.html',
  styleUrl: './dsa.css',
})
export class DsaComponent {
  searchQuery = signal('');
  selectedCategory = signal('All');
  selectedDifficulty = signal('All');
  activeProblemId = signal('factorial-of-a-number');
  selectedCodeLang = signal<'java' | 'javascript' | 'python'>('java');
  copiedCodeId = signal<string | null>(null);

  // Video Popup State
  activeVideoProblem = signal<DsaProblem | null>(null);

  readonly categories: string[] = [
    'All',
    'Recursion & Math',
    'Arrays & Hashing',
    'Two Pointers',
    'Sliding Window',
    'Stack',
    'Linked List',
    'Binary Search',
    'Trees',
    'Dynamic Programming',
  ];

  readonly problems: DsaProblem[] = [
    {
      id: 'factorial-of-a-number',
      number: 1,
      title: 'Factorial of a Number',
      difficulty: 'Easy',
      category: 'Recursion & Math',
      tags: ['Recursion', 'Math', 'Algorithms'],
      description:
        'Given a non-negative integer <code>n</code>, compute its factorial <code>n!</code>. The factorial of a number is the product of all positive integers less than or equal to <code>n</code>. By mathematical definition, <code>0! = 1</code>.',
      examples: [
        {
          input: 'n = 5',
          output: '120',
          explanation: '5! = 5 * 4 * 3 * 2 * 1 = 120.',
        },
        {
          input: 'n = 4',
          output: '24',
          explanation: '4! = 4 * 3 * 2 * 1 = 24.',
        },
        {
          input: 'n = 0',
          output: '1',
          explanation: '0! is defined as 1.',
        },
      ],
      constraints: [
        '0 <= n <= 20 (fits in standard 64-bit integer limits)',
        'For n > 20, BigInteger / BigInt is used to prevent integer overflow.',
      ],
      approach:
        'Can be solved iteratively with a loop from 2 to n (O(1) auxiliary space) or recursively using the recurrence relation <code>factorial(n) = n * factorial(n - 1)</code> with base case <code>n <= 1 -> 1</code>.',
      timeComplexity: 'O(n) - Linear time complexity',
      spaceComplexity: 'O(1) Iterative / O(n) Recursive call stack',
      youtubeVideoId: '0YiA9IukcFY',
      youtubeUrl: 'https://www.youtube.com/watch?v=0YiA9IukcFY',
      videoTitle: 'Factorial of a Number - Video Solution & Code Walkthrough',
      solutions: [
        {
          language: 'java',
          code: `class Solution {
    // Approach 1: Iterative (Optimal O(1) space)
    public long factorialIterative(int n) {
        if (n <= 1) return 1;
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    // Approach 2: Recursive (O(n) call stack)
    public long factorialRecursive(int n) {
        if (n <= 1) {
            return 1;
        }
        return (long) n * factorialRecursive(n - 1);
    }
}`,
        },
        {
          language: 'javascript',
          code: `/**
 * Calculate Factorial of a Number
 * @param {number} n
 * @return {number}
 */
// Iterative Solution (O(1) Space)
function factorial(n) {
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Recursive Solution (O(n) Call Stack)
function factorialRecursive(n) {
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
}`,
        },
        {
          language: 'python',
          code: `class Solution:
    # Approach 1: Iterative (O(1) space)
    def factorial(self, n: int) -> int:
        if n <= 1:
            return 1
        result = 1
        for i in range(2, n + 1):
            result *= i
        return result

    # Approach 2: Recursive (O(n) call stack)
    def factorial_recursive(self, n: int) -> int:
        if n <= 1:
            return 1
        return n * self.factorial_recursive(n - 1)`,
        },
      ],
    },
    {
      id: 'two-sum',
      number: 2,
      title: 'Two Sum',
      difficulty: 'Easy',
      category: 'Arrays & Hashing',
      tags: ['Array', 'Hash Table'],
      description:
        'Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
      examples: [
        {
          input: 'nums = [2,7,11,15], target = 9',
          output: '[0,1]',
          explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
        },
        {
          input: 'nums = [3,2,4], target = 6',
          output: '[1,2]',
        },
      ],
      constraints: [
        '2 <= nums.length <= 10^4',
        '-10^9 <= nums[i] <= 10^9',
        '-10^9 <= target <= 10^9',
        'Only one valid answer exists.',
      ],
      approach:
        'Use a Hash Map to store elements and their indices in a single pass. For each element <code>x</code>, compute its complement <code>target - x</code>. If the complement exists in the map, return both indices immediately.',
      timeComplexity: 'O(n) - Single pass through the array',
      spaceComplexity: 'O(n) - Up to n elements in the hash map',
      youtubeVideoId: 'KLlXCFG5TnA',
      youtubeUrl: 'https://www.youtube.com/watch?v=KLlXCFG5TnA',
      videoTitle: 'Two Sum - LeetCode 1 - HashMap Optimal Solution Walkthrough',
      solutions: [
        {
          language: 'java',
          code: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Map to store value -> index
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }

            map.put(nums[i], i);
        }

        return new int[] {}; // No solution found
    }
}`,
        },
        {
          language: 'javascript',
          code: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
};`,
        },
        {
          language: 'python',
          code: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []`,
        },
      ],
    },
    {
      id: 'best-time-to-buy-and-sell-stock',
      number: 121,
      title: 'Best Time to Buy and Sell Stock',
      difficulty: 'Easy',
      category: 'Arrays & Hashing',
      tags: ['Array', 'Greedy', 'Dynamic Programming'],
      description:
        'You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i-th</code> day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve.',
      examples: [
        {
          input: 'prices = [7,1,5,3,6,4]',
          output: '5',
          explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.',
        },
        {
          input: 'prices = [7,6,4,3,1]',
          output: '0',
          explanation: 'In this case, no transactions are done and the max profit = 0.',
        },
      ],
      constraints: ['1 <= prices.length <= 10^5', '0 <= prices[i] <= 10^4'],
      approach:
        'Keep track of the minimum price seen so far and the maximum profit obtained. For each day, update <code>minPrice</code> and calculate <code>currentProfit = price - minPrice</code>.',
      timeComplexity: 'O(n) - Single pass',
      spaceComplexity: 'O(1) - Constant auxiliary space',
      youtubeVideoId: '1pkOgXD63yU',
      youtubeUrl: 'https://www.youtube.com/watch?v=1pkOgXD63yU',
      videoTitle: 'Best Time to Buy and Sell Stock - Leetcode 121',
      solutions: [
        {
          language: 'java',
          code: `class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;

        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }

        return maxProfit;
    }
}`,
        },
        {
          language: 'javascript',
          code: `var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }

    return maxProfit;
};`,
        },
        {
          language: 'python',
          code: `class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = float('inf')
        max_profit = 0
        for price in prices:
            min_price = min(min_price, price)
            max_profit = max(max_profit, price - min_price)
        return max_profit`,
        },
      ],
    },
    {
      id: 'valid-parentheses',
      number: 20,
      title: 'Valid Parentheses',
      difficulty: 'Easy',
      category: 'Stack',
      tags: ['String', 'Stack'],
      description:
        'Given a string <code>s</code> containing just the characters <code>\'(\'</code>, <code>\')\'</code>, <code>\'{\'</code>, <code>\'}\'</code>, <code>\'[\'</code> and <code>\']\'</code>, determine if the input string is valid. Open brackets must be closed by the same type of brackets and in the correct order.',
      examples: [
        { input: 's = "()"', output: 'true' },
        { input: 's = "()[]{}"', output: 'true' },
        { input: 's = "(]"', output: 'false' },
      ],
      constraints: ['1 <= s.length <= 10^4', 's consists of parentheses only \'()[]{}\''],
      approach:
        'Push opening brackets onto a stack. When encountering a closing bracket, check whether the top of the stack matches its corresponding opening bracket. The string is valid if the stack is empty at the end.',
      timeComplexity: 'O(n) - Single pass through string',
      spaceComplexity: 'O(n) - Stack can hold up to n characters',
      youtubeVideoId: 'WTzjTskDFMg',
      youtubeUrl: 'https://www.youtube.com/watch?v=WTzjTskDFMg',
      videoTitle: 'Valid Parentheses - Stack - Leetcode 20',
      solutions: [
        {
          language: 'java',
          code: `class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }

        return stack.isEmpty();
    }
}`,
        },
        {
          language: 'javascript',
          code: `var isValid = function(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };

    for (const char of s) {
        if (char in map) {
            if (stack.pop() !== map[char]) return false;
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};`,
        },
        {
          language: 'python',
          code: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {")": "(", "}": "{", "]": "["}
        for char in s:
            if char in mapping:
                top = stack.pop() if stack else '#'
                if mapping[char] != top:
                    return False
            else:
                stack.append(char)
        return not stack`,
        },
      ],
    },
    {
      id: 'maximum-subarray',
      number: 53,
      title: 'Maximum Subarray (Kadane\'s Algorithm)',
      difficulty: 'Medium',
      category: 'Dynamic Programming',
      tags: ['Array', 'Divide and Conquer', 'Dynamic Programming'],
      description:
        'Given an integer array <code>nums</code>, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.',
      examples: [
        {
          input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
          output: '6',
          explanation: 'The contiguous subarray [4,-1,2,1] has the largest sum = 6.',
        },
        { input: 'nums = [1]', output: '1' },
        { input: 'nums = [5,4,-1,7,8]', output: '23' },
      ],
      constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
      approach:
        'Kadane\'s Algorithm: iterate through the array maintaining <code>currentSum</code>. At each element, decide whether to add it to <code>currentSum</code> or start a fresh subarray at <code>nums[i]</code>. Update <code>maxSum</code> on each step.',
      timeComplexity: 'O(n) - Single linear pass',
      spaceComplexity: 'O(1) - Constant auxiliary space',
      youtubeVideoId: '5WZl3MMT0Eg',
      youtubeUrl: 'https://www.youtube.com/watch?v=5WZl3MMT0Eg',
      videoTitle: 'Maximum Subarray - Kadane\'s Algorithm - Leetcode 53',
      solutions: [
        {
          language: 'java',
          code: `class Solution {
    public int maxSubArray(int[] nums) {
        int currentSum = nums[0];
        int maxSum = nums[0];

        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }
}`,
        },
        {
          language: 'javascript',
          code: `var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};`,
        },
        {
          language: 'python',
          code: `class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        cur_sum = max_sum = nums[0]
        for num in nums[1:]:
            cur_sum = max(num, cur_sum + num)
            max_sum = max(max_sum, cur_sum)
        return max_sum`,
        },
      ],
    },
    {
      id: 'reverse-linked-list',
      number: 206,
      title: 'Reverse Linked List',
      difficulty: 'Easy',
      category: 'Linked List',
      tags: ['Linked List', 'Recursion'],
      description:
        'Given the <code>head</code> of a singly linked list, reverse the list, and return the reversed list.',
      examples: [
        { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' },
        { input: 'head = [1,2]', output: '[2,1]' },
        { input: 'head = []', output: '[]' },
      ],
      constraints: ['The number of nodes in the list is the range [0, 5000]', '-5000 <= Node.val <= 5000'],
      approach:
        'Maintain three pointers: <code>prev = null</code>, <code>curr = head</code>, and <code>next</code>. In each step, save <code>next = curr.next</code>, point <code>curr.next = prev</code>, advance <code>prev = curr</code>, and advance <code>curr = next</code>.',
      timeComplexity: 'O(n) - Visits every node once',
      spaceComplexity: 'O(1) - In-place pointer reversal',
      youtubeVideoId: 'G0_I-ZF0S38',
      youtubeUrl: 'https://www.youtube.com/watch?v=G0_I-ZF0S38',
      videoTitle: 'Reverse Linked List - Iterative & Recursive - Leetcode 206',
      solutions: [
        {
          language: 'java',
          code: `class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}`,
        },
        {
          language: 'javascript',
          code: `var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};`,
        },
        {
          language: 'python',
          code: `class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        curr = head
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        return prev`,
        },
      ],
    },
    {
      id: 'longest-substring-without-repeating-characters',
      number: 3,
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium',
      category: 'Sliding Window',
      tags: ['Hash Table', 'String', 'Sliding Window'],
      description:
        'Given a string <code>s</code>, find the length of the longest substring without repeating characters.',
      examples: [
        {
          input: 's = "abcabcbb"',
          output: '3',
          explanation: 'The answer is "abc", with the length of 3.',
        },
        { input: 's = "bbbbb"', output: '1', explanation: 'The answer is "b", with the length of 1.' },
        { input: 's = "pwwkew"', output: '3', explanation: 'The answer is "wke", with length 3.' },
      ],
      constraints: ['0 <= s.length <= 5 * 10^4', 's consists of English letters, digits, symbols and spaces.'],
      approach:
        'Sliding Window technique: Maintain a window <code>[left, right]</code>. Use a Map to store each character\'s latest index. When a repeating character is found inside the window, slide <code>left</code> to <code>lastIndex + 1</code>.',
      timeComplexity: 'O(n) - Each character processed at most twice',
      spaceComplexity: 'O(min(n, m)) - Map stores unique characters in alphabet',
      youtubeVideoId: 'wiGpQwVHdE0',
      youtubeUrl: 'https://www.youtube.com/watch?v=wiGpQwVHdE0',
      videoTitle: 'Longest Substring Without Repeating Characters - Leetcode 3',
      solutions: [
        {
          language: 'java',
          code: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        int maxLength = 0;
        Map<Character, Integer> map = new HashMap<>();

        for (int left = 0, right = 0; right < s.length(); right++) {
            char c = s.charAt(right);

            if (map.containsKey(c)) {
                left = Math.max(left, map.get(c) + 1);
            }

            map.put(c, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}`,
        },
        {
          language: 'javascript',
          code: `var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    const map = new Map();

    for (let left = 0, right = 0; right < s.length; right++) {
        const char = s[right];

        if (map.has(char)) {
            left = Math.max(left, map.get(char) + 1);
        }

        map.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};`,
        },
        {
          language: 'python',
          code: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_map = {}
        left = 0
        max_len = 0
        for right, char in enumerate(s):
            if char in char_map:
                left = max(left, char_map[char] + 1)
            char_map[char] = right
            max_len = max(max_len, right - left + 1)
        return max_len`,
        },
      ],
    },
    {
      id: 'binary-search',
      number: 704,
      title: 'Binary Search',
      difficulty: 'Easy',
      category: 'Binary Search',
      tags: ['Array', 'Binary Search'],
      description:
        'Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, return its index. Otherwise, return <code>-1</code> in <code>O(log n)</code> runtime complexity.',
      examples: [
        { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4', explanation: '9 exists in nums and its index is 4' },
        { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1', explanation: '2 does not exist in nums so return -1' },
      ],
      constraints: ['1 <= nums.length <= 10^4', '-10^4 < nums[i], target < 10^4', 'All elements are unique and sorted'],
      approach:
        'Initialize two pointers <code>low = 0</code> and <code>high = nums.length - 1</code>. Calculate <code>mid = low + (high - low) / 2</code> to prevent overflow. Discard the half that cannot contain the target until found.',
      timeComplexity: 'O(log n) - Search space halved on each iteration',
      spaceComplexity: 'O(1) - Constant auxiliary space',
      youtubeVideoId: 's4DPM8ct1pI',
      youtubeUrl: 'https://www.youtube.com/watch?v=s4DPM8ct1pI',
      videoTitle: 'Binary Search - Leetcode 704 - Python & Java',
      solutions: [
        {
          language: 'java',
          code: `class Solution {
    public int search(int[] nums, int target) {
        int low = 0;
        int high = nums.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return -1;
    }
}`,
        },
        {
          language: 'javascript',
          code: `var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (nums[mid] === target) return mid;
        if (nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }

    return -1;
};`,
        },
        {
          language: 'python',
          code: `class Solution:
    def search(self, nums: List[int], target: int) -> int:
        low, high = 0, len(nums) - 1
        while low <= high:
            mid = (low + high) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
        return -1`,
        },
      ],
    },
    {
      id: 'invert-binary-tree',
      number: 226,
      title: 'Invert Binary Tree',
      difficulty: 'Easy',
      category: 'Trees',
      tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
      description:
        'Given the <code>root</code> of a binary tree, invert the tree (swap left and right child pointers at every node), and return its root.',
      examples: [
        { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' },
        { input: 'root = [2,1,3]', output: '[2,3,1]' },
        { input: 'root = []', output: '[]' },
      ],
      constraints: ['The number of nodes in the tree is in the range [0, 100]', '-100 <= Node.val <= 100'],
      approach:
        'Recursively traverse each node. For the current node, swap its left and right subtrees, then recursively call <code>invertTree(root.left)</code> and <code>invertTree(root.right)</code>.',
      timeComplexity: 'O(n) - Every node is visited once',
      spaceComplexity: 'O(h) - Call stack equal to tree height',
      youtubeVideoId: 'OnSn2XEQ4MY',
      youtubeUrl: 'https://www.youtube.com/watch?v=OnSn2XEQ4MY',
      videoTitle: 'Invert Binary Tree - Depth First Search - Leetcode 226',
      solutions: [
        {
          language: 'java',
          code: `class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;

        // Swap children
        TreeNode temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);

        return root;
    }
}`,
        },
        {
          language: 'javascript',
          code: `var invertTree = function(root) {
    if (!root) return null;

    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;
};`,
        },
        {
          language: 'python',
          code: `class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None
        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root`,
        },
      ],
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  filteredProblems = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    const cat = this.selectedCategory();
    const diff = this.selectedDifficulty();

    return this.problems.filter((p) => {
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.number.toString().includes(q);

      const matchesCat = cat === 'All' || p.category === cat;
      const matchesDiff = diff === 'All' || p.difficulty === diff;

      return matchesSearch && matchesCat && matchesDiff;
    });
  });

  activeProblem = computed(() => {
    const found = this.filteredProblems().find((p) => p.id === this.activeProblemId());
    return found ?? this.filteredProblems()[0] ?? this.problems[0];
  });

  activeCode = computed(() => {
    const prob = this.activeProblem();
    if (!prob) return '';
    const sol = prob.solutions.find((s) => s.language === this.selectedCodeLang());
    return sol ? sol.code : prob.solutions[0].code;
  });

  setActiveProblem(id: string) {
    this.activeProblemId.set(id);
    const element = document.getElementById('problem-detail-section');
    if (element && window.innerWidth <= 900) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  setCategory(cat: string) {
    this.selectedCategory.set(cat);
  }

  setDifficulty(diff: string) {
    this.selectedDifficulty.set(diff);
  }

  setCodeLang(lang: 'java' | 'javascript' | 'python') {
    this.selectedCodeLang.set(lang);
  }

  async copyCurrentCode() {
    const code = this.activeCode();
    try {
      await navigator.clipboard.writeText(code);
      this.copiedCodeId.set(this.activeProblem().id);
      setTimeout(() => this.copiedCodeId.set(null), 2000);
    } catch {}
  }

  // ── Video Popup Methods ──
  openVideoModal(problem: DsaProblem) {
    this.activeVideoProblem.set(problem);
    document.body.style.overflow = 'hidden';
  }

  closeVideoModal() {
    this.activeVideoProblem.set(null);
    document.body.style.overflow = '';
  }

  getSafeEmbedUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getThumbnailUrl(videoId: string): string {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }

  getDifficultyClass(diff: string): string {
    switch (diff) {
      case 'Easy':
        return 'diff-easy';
      case 'Medium':
        return 'diff-medium';
      case 'Hard':
        return 'diff-hard';
      default:
        return '';
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.activeVideoProblem()) {
      this.closeVideoModal();
    }
  }
}
