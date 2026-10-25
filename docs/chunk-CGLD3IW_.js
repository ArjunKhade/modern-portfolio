import"./chunk-zSsmmLLa.js";import{En as mu,Et as Uv,It as Zp,Jn as tv,K as Mp,Nn as pf,O as HI,Ot as VI,Pn as py,Q as OE,Rn as ru,Sn as kp,T as GI,V as Lc,an as hf,cr as yy,f as Bp,gn as kI,kn as nu,lt as Qp,m as Bv,nt as PD,on as hi,or as yD,pr as zs,pt as Rc,rn as gu,rt as PI,un as jI,ur as zI,v as Dr,x as FI,yt as Sp}from"./chunk-C5GIxfrr.js";import{i as ts,l as se$1,n as ia,s as ce$1,t as $c}from"./main-63EQHPIM.js";import{l as pn,o as je,r as _n,t as Lt}from"./chunk-B0VuVsaS.js";var Z=(l,s)=>s.id;function ee(l,s){if(l&1){let t=GI();hi(0,`button`,47),kp(`click`,function(){nu(t);let o=zI();return ru(o.searchQuery.set(``))}),Sp(1,`i`,48),Rc()}}function te(l,s){if(l&1){let t=GI();hi(0,`button`,49),kp(`click`,function(){let o=nu(t).$implicit,c=zI();return ru(c.setCategory(o))}),yD(1),Rc()}if(l&2){let t=s.$implicit,r=zI();Bp(`active`,r.selectedCategory()===t),tv(),Lc(` `,t,` `)}}function ne(l,s){if(l&1){let t=GI();hi(0,`button`,50),kp(`click`,function(){let o=nu(t).$implicit,c=zI();return ru(c.setActiveProblem(o.id))}),hi(1,`div`,51)(2,`span`,52),yD(3),Rc(),hi(4,`span`,53),yD(5),Rc()(),hi(6,`h4`,54),yD(7),Rc(),hi(8,`div`,55)(9,`span`,56),Sp(10,`i`,57),yD(11),Rc(),hi(12,`span`,58),Sp(13,`i`,59),yD(14,` Video `),Rc()()()}if(l&2){let t=s.$implicit,r=zI();Bp(`active`,r.activeProblem().id===t.id),tv(3),Lc(`#`,t.number),tv(),Mp(`ngClass`,r.getDifficultyClass(t.difficulty)),tv(),Lc(` `,t.difficulty,` `),tv(2),Qp(t.title),tv(4),Lc(` `,t.category,` `)}}function ie(l,s){if(l&1){let t=GI();hi(0,`div`,44),Sp(1,`i`,60),hi(2,`p`),yD(3,`No problems match your filter`),Rc(),hi(4,`button`,61),kp(`click`,function(){nu(t);let o=zI();return o.searchQuery.set(``),o.selectedCategory.set(`All`),ru(o.selectedDifficulty.set(`All`))}),yD(5,` Reset Filters `),Rc()()}}function oe(l,s){if(l&1&&(hi(0,`span`,73),yD(1),Rc()),l&2){let t=s.$implicit;tv(),Lc(`#`,t)}}function re(l,s){if(l&1&&(hi(0,`div`,130)(1,`span`,131),yD(2,`Explanation:`),Rc(),hi(3,`span`,133),yD(4),Rc()()),l&2){let t=zI().$implicit;tv(4),Qp(t.explanation)}}function ae(l,s){if(l&1&&(hi(0,`div`,80)(1,`div`,129),yD(2),Rc(),hi(3,`div`,130)(4,`span`,131),yD(5,`Input:`),Rc(),hi(6,`code`,132),yD(7),Rc()(),hi(8,`div`,130)(9,`span`,131),yD(10,`Output:`),Rc(),hi(11,`code`,132),yD(12),Rc()(),kI(13,re,5,1,`div`,130),Rc()),l&2){let t=s.$implicit,r=s.$index;tv(2),Lc(`Example `,r+1,`:`),tv(5),Qp(t.input),tv(5),Qp(t.output),tv(),PI(t.explanation?13:-1)}}function le(l,s){if(l&1&&Sp(0,`li`,83),l&2){let t=s.$implicit;Mp(`innerHTML`,t,py)}}function de(l,s){l&1&&(Sp(0,`i`,134),hi(1,`span`),yD(2,`Copied!`),Rc())}function ce(l,s){l&1&&(Sp(0,`i`,135),hi(1,`span`),yD(2,`Copy Code`),Rc())}function se(l,s){if(l&1){let t=GI();hi(0,`section`,45)(1,`div`,62)(2,`div`,63)(3,`div`,64)(4,`div`,65)(5,`span`,66),yD(6),Rc(),hi(7,`span`,53),yD(8),Rc(),hi(9,`span`,67),Sp(10,`i`,68),yD(11),Rc()(),hi(12,`h2`,69),yD(13),Rc()(),hi(14,`button`,70),kp(`click`,function(){let o=nu(t),c=zI();return ru(c.openVideoModal(o))}),Sp(15,`i`,71),hi(16,`span`),yD(17,`Watch Video`),Rc()()(),hi(18,`div`,72),VI(19,oe,2,1,`span`,73,jI),Rc(),hi(21,`div`,74)(22,`h3`,75),Sp(23,`i`,76),yD(24,` Problem Statement `),Rc(),Sp(25,`p`,77),Rc(),hi(26,`div`,74)(27,`h3`,75),Sp(28,`i`,78),yD(29,` Examples `),Rc(),hi(30,`div`,79),VI(31,ae,14,4,`div`,80,FI),Rc()(),hi(33,`div`,74)(34,`h3`,75),Sp(35,`i`,81),yD(36,` Constraints `),Rc(),hi(37,`ul`,82),VI(38,le,1,1,`li`,83,jI),Rc()(),hi(40,`div`,84)(41,`h3`,75),Sp(42,`i`,85),yD(43,` Optimal Approach & Intuition `),Rc(),Sp(44,`p`,86),hi(45,`div`,87)(46,`div`,88),Sp(47,`i`,89),hi(48,`span`,90),yD(49,`Time Complexity:`),Rc(),hi(50,`span`,91),yD(51),Rc()(),hi(52,`div`,92),Sp(53,`i`,93),hi(54,`span`,90),yD(55,`Space Complexity:`),Rc(),hi(56,`span`,91),yD(57),Rc()()()(),hi(58,`div`,94)(59,`div`,95)(60,`h3`,96),Sp(61,`i`,97),yD(62,` Optimal Solution Code `),Rc(),hi(63,`div`,98)(64,`button`,99),kp(`click`,function(){nu(t);let o=zI();return ru(o.setCodeLang(`java`))}),yD(65,` Java `),Rc(),hi(66,`button`,99),kp(`click`,function(){nu(t);let o=zI();return ru(o.setCodeLang(`javascript`))}),yD(67,` JavaScript `),Rc(),hi(68,`button`,99),kp(`click`,function(){nu(t);let o=zI();return ru(o.setCodeLang(`python`))}),yD(69,` Python `),Rc()()(),hi(70,`div`,100)(71,`div`,101)(72,`div`,102),Sp(73,`span`,103)(74,`span`,104)(75,`span`,105),Rc(),hi(76,`span`,106),yD(77),Rc(),hi(78,`button`,107),kp(`click`,function(){nu(t);let o=zI();return ru(o.copyCurrentCode())}),kI(79,de,3,0)(80,ce,3,0),Rc()(),hi(81,`pre`,108)(82,`code`,109),yD(83),Rc()()()(),hi(84,`div`,110)(85,`div`,111)(86,`div`,112),Sp(87,`i`,59),hi(88,`span`),yD(89,`Video Solution & Detailed Explanation`),Rc()(),hi(90,`span`,113),yD(91,`Click to watch in interactive popup`),Rc()(),hi(92,`div`,114)(93,`div`,115),kp(`click`,function(){let o=nu(t),c=zI();return ru(c.openVideoModal(o))}),Sp(94,`img`,116),hi(95,`div`,117)(96,`div`,118),Sp(97,`i`,119),Rc(),hi(98,`span`,120),yD(99,`Watch Video Walkthrough`),Rc()()(),hi(100,`div`,121)(101,`h4`,122),yD(102),Rc(),hi(103,`p`,123),yD(104,` Step-by-step visual intuition, edge cases, dry run, and time/space complexity analysis for `),hi(105,`strong`),yD(106),Rc(),yD(107,`. `),Rc(),hi(108,`div`,124)(109,`button`,125),kp(`click`,function(){let o=nu(t),c=zI();return ru(c.openVideoModal(o))}),Sp(110,`i`,71),hi(111,`span`),yD(112,`Watch Video Solution`),Rc()(),hi(113,`a`,126),Sp(114,`i`,127),hi(115,`span`),yD(116,`Open in YouTube`),Rc(),Sp(117,`i`,128),Rc()()()()()()()}if(l&2){let t=s,r=zI();tv(6),Lc(`LeetCode #`,t.number),tv(),Mp(`ngClass`,r.getDifficultyClass(t.difficulty)),tv(),Lc(` `,t.difficulty,` `),tv(3),Lc(` `,t.category,` `),tv(2),Qp(t.title),tv(6),HI(t.tags),tv(6),Mp(`innerHTML`,t.description,py),tv(6),HI(t.examples),tv(7),HI(t.constraints),tv(6),Mp(`innerHTML`,t.approach,py),tv(7),Qp(t.timeComplexity),tv(6),Qp(t.spaceComplexity),tv(7),Bp(`active`,r.selectedCodeLang()===`java`),tv(2),Bp(`active`,r.selectedCodeLang()===`javascript`),tv(2),Bp(`active`,r.selectedCodeLang()===`python`),tv(9),Lc(`Solution.`,r.selectedCodeLang()===`java`?`java`:r.selectedCodeLang()===`javascript`?`js`:`py`),tv(2),PI(r.copiedCodeId()===t.id?79:80),tv(4),Qp(r.activeCode()),tv(11),Mp(`src`,r.getThumbnailUrl(t.youtubeVideoId),pf)(`alt`,t.videoTitle),tv(8),Qp(t.videoTitle),tv(4),Qp(t.title),tv(7),Mp(`href`,t.youtubeUrl,pf)}}function me(l,s){if(l&1){let t=GI();hi(0,`div`,136),kp(`click`,function(){nu(t);let o=zI();return ru(o.closeVideoModal())}),hi(1,`div`,137),kp(`click`,function(o){return o.stopPropagation()}),hi(2,`div`,138)(3,`div`,139)(4,`span`,140),yD(5),Rc(),hi(6,`h3`,141),yD(7),Rc()(),hi(8,`button`,142),kp(`click`,function(){nu(t);let o=zI();return ru(o.closeVideoModal())}),Sp(9,`i`,48),Rc()(),hi(10,`div`,143),Sp(11,`iframe`,144),Rc(),hi(12,`div`,145)(13,`div`,146)(14,`span`,147),yD(15),Rc(),hi(16,`span`,148),yD(17),Rc()(),hi(18,`a`,149),Sp(19,`i`,150),yD(20,` Watch on YouTube `),Rc()()()()}if(l&2){let t=s,r=zI();tv(5),Lc(`LeetCode #`,t.number),tv(2),Qp(t.videoTitle),tv(4),Mp(`src`,r.getSafeEmbedUrl(t.youtubeVideoId),hf)(`title`,t.videoTitle),tv(4),Lc(`Problem: `,t.title),tv(),Mp(`ngClass`,r.getDifficultyClass(t.difficulty)),tv(),Qp(t.difficulty),tv(),Mp(`href`,t.youtubeUrl,pf)}}var we=(()=>{class l{constructor(t){this.sanitizer=t,this.searchQuery=zs(``),this.selectedCategory=zs(`All`),this.selectedDifficulty=zs(`All`),this.activeProblemId=zs(`factorial-of-a-number`),this.selectedCodeLang=zs(`java`),this.copiedCodeId=zs(null),this.activeVideoProblem=zs(null),this.categories=[`All`,`Recursion & Math`,`Arrays & Hashing`,`Two Pointers`,`Sliding Window`,`Stack`,`Linked List`,`Binary Search`,`Trees`,`Dynamic Programming`],this.problems=[{id:`factorial-of-a-number`,number:1,title:`Factorial of a Number`,difficulty:`Easy`,category:`Recursion & Math`,tags:[`Recursion`,`Math`,`Algorithms`],description:`Given a non-negative integer <code>n</code>, compute its factorial <code>n!</code>. The factorial of a number is the product of all positive integers less than or equal to <code>n</code>. By mathematical definition, <code>0! = 1</code>.`,examples:[{input:`n = 5`,output:`120`,explanation:`5! = 5 * 4 * 3 * 2 * 1 = 120.`},{input:`n = 4`,output:`24`,explanation:`4! = 4 * 3 * 2 * 1 = 24.`},{input:`n = 0`,output:`1`,explanation:`0! is defined as 1.`}],constraints:[`0 <= n <= 20 (fits in standard 64-bit integer limits)`,`For n > 20, BigInteger / BigInt is used to prevent integer overflow.`],approach:`Can be solved iteratively with a loop from 2 to n (O(1) auxiliary space) or recursively using the recurrence relation <code>factorial(n) = n * factorial(n - 1)</code> with base case <code>n <= 1 -> 1</code>.`,timeComplexity:`O(n) - Linear time complexity`,spaceComplexity:`O(1) Iterative / O(n) Recursive call stack`,youtubeVideoId:`0YiA9IukcFY`,youtubeUrl:`https://www.youtube.com/watch?v=0YiA9IukcFY`,videoTitle:`Factorial of a Number - Video Solution & Code Walkthrough`,solutions:[{language:`java`,code:`class Solution {
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
}`},{language:`javascript`,code:`/**
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
}`},{language:`python`,code:`class Solution:
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
        return n * self.factorial_recursive(n - 1)`}]},{id:`two-sum`,number:2,title:`Two Sum`,difficulty:`Easy`,category:`Arrays & Hashing`,tags:[`Array`,`Hash Table`],description:`Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>. You may assume that each input would have exactly one solution, and you may not use the same element twice.`,examples:[{input:`nums = [2,7,11,15], target = 9`,output:`[0,1]`,explanation:`Because nums[0] + nums[1] == 9, we return [0, 1].`},{input:`nums = [3,2,4], target = 6`,output:`[1,2]`}],constraints:[`2 <= nums.length <= 10^4`,`-10^9 <= nums[i] <= 10^9`,`-10^9 <= target <= 10^9`,`Only one valid answer exists.`],approach:`Use a Hash Map to store elements and their indices in a single pass. For each element <code>x</code>, compute its complement <code>target - x</code>. If the complement exists in the map, return both indices immediately.`,timeComplexity:`O(n) - Single pass through the array`,spaceComplexity:`O(n) - Up to n elements in the hash map`,youtubeVideoId:`KLlXCFG5TnA`,youtubeUrl:`https://www.youtube.com/watch?v=KLlXCFG5TnA`,videoTitle:`Two Sum - LeetCode 1 - HashMap Optimal Solution Walkthrough`,solutions:[{language:`java`,code:`class Solution {
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
}`},{language:`javascript`,code:`/**
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
};`},{language:`python`,code:`class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []`}]},{id:`best-time-to-buy-and-sell-stock`,number:121,title:`Best Time to Buy and Sell Stock`,difficulty:`Easy`,category:`Arrays & Hashing`,tags:[`Array`,`Greedy`,`Dynamic Programming`],description:`You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i-th</code> day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve.`,examples:[{input:`prices = [7,1,5,3,6,4]`,output:`5`,explanation:`Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.`},{input:`prices = [7,6,4,3,1]`,output:`0`,explanation:`In this case, no transactions are done and the max profit = 0.`}],constraints:[`1 <= prices.length <= 10^5`,`0 <= prices[i] <= 10^4`],approach:`Keep track of the minimum price seen so far and the maximum profit obtained. For each day, update <code>minPrice</code> and calculate <code>currentProfit = price - minPrice</code>.`,timeComplexity:`O(n) - Single pass`,spaceComplexity:`O(1) - Constant auxiliary space`,youtubeVideoId:`1pkOgXD63yU`,youtubeUrl:`https://www.youtube.com/watch?v=1pkOgXD63yU`,videoTitle:`Best Time to Buy and Sell Stock - Leetcode 121`,solutions:[{language:`java`,code:`class Solution {
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
}`},{language:`javascript`,code:`var maxProfit = function(prices) {
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
};`},{language:`python`,code:`class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = float('inf')
        max_profit = 0
        for price in prices:
            min_price = min(min_price, price)
            max_profit = max(max_profit, price - min_price)
        return max_profit`}]},{id:`valid-parentheses`,number:20,title:`Valid Parentheses`,difficulty:`Easy`,category:`Stack`,tags:[`String`,`Stack`],description:`Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid. Open brackets must be closed by the same type of brackets and in the correct order.`,examples:[{input:`s = "()"`,output:`true`},{input:`s = "()[]{}"`,output:`true`},{input:`s = "(]"`,output:`false`}],constraints:[`1 <= s.length <= 10^4`,`s consists of parentheses only '()[]{}'`],approach:`Push opening brackets onto a stack. When encountering a closing bracket, check whether the top of the stack matches its corresponding opening bracket. The string is valid if the stack is empty at the end.`,timeComplexity:`O(n) - Single pass through string`,spaceComplexity:`O(n) - Stack can hold up to n characters`,youtubeVideoId:`WTzjTskDFMg`,youtubeUrl:`https://www.youtube.com/watch?v=WTzjTskDFMg`,videoTitle:`Valid Parentheses - Stack - Leetcode 20`,solutions:[{language:`java`,code:`class Solution {
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
}`},{language:`javascript`,code:`var isValid = function(s) {
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
};`},{language:`python`,code:`class Solution:
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
        return not stack`}]},{id:`maximum-subarray`,number:53,title:`Maximum Subarray (Kadane's Algorithm)`,difficulty:`Medium`,category:`Dynamic Programming`,tags:[`Array`,`Divide and Conquer`,`Dynamic Programming`],description:`Given an integer array <code>nums</code>, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.`,examples:[{input:`nums = [-2,1,-3,4,-1,2,1,-5,4]`,output:`6`,explanation:`The contiguous subarray [4,-1,2,1] has the largest sum = 6.`},{input:`nums = [1]`,output:`1`},{input:`nums = [5,4,-1,7,8]`,output:`23`}],constraints:[`1 <= nums.length <= 10^5`,`-10^4 <= nums[i] <= 10^4`],approach:`Kadane's Algorithm: iterate through the array maintaining <code>currentSum</code>. At each element, decide whether to add it to <code>currentSum</code> or start a fresh subarray at <code>nums[i]</code>. Update <code>maxSum</code> on each step.`,timeComplexity:`O(n) - Single linear pass`,spaceComplexity:`O(1) - Constant auxiliary space`,youtubeVideoId:`5WZl3MMT0Eg`,youtubeUrl:`https://www.youtube.com/watch?v=5WZl3MMT0Eg`,videoTitle:`Maximum Subarray - Kadane's Algorithm - Leetcode 53`,solutions:[{language:`java`,code:`class Solution {
    public int maxSubArray(int[] nums) {
        int currentSum = nums[0];
        int maxSum = nums[0];

        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }
}`},{language:`javascript`,code:`var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};`},{language:`python`,code:`class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        cur_sum = max_sum = nums[0]
        for num in nums[1:]:
            cur_sum = max(num, cur_sum + num)
            max_sum = max(max_sum, cur_sum)
        return max_sum`}]},{id:`reverse-linked-list`,number:206,title:`Reverse Linked List`,difficulty:`Easy`,category:`Linked List`,tags:[`Linked List`,`Recursion`],description:`Given the <code>head</code> of a singly linked list, reverse the list, and return the reversed list.`,examples:[{input:`head = [1,2,3,4,5]`,output:`[5,4,3,2,1]`},{input:`head = [1,2]`,output:`[2,1]`},{input:`head = []`,output:`[]`}],constraints:[`The number of nodes in the list is the range [0, 5000]`,`-5000 <= Node.val <= 5000`],approach:`Maintain three pointers: <code>prev = null</code>, <code>curr = head</code>, and <code>next</code>. In each step, save <code>next = curr.next</code>, point <code>curr.next = prev</code>, advance <code>prev = curr</code>, and advance <code>curr = next</code>.`,timeComplexity:`O(n) - Visits every node once`,spaceComplexity:`O(1) - In-place pointer reversal`,youtubeVideoId:`G0_I-ZF0S38`,youtubeUrl:`https://www.youtube.com/watch?v=G0_I-ZF0S38`,videoTitle:`Reverse Linked List - Iterative & Recursive - Leetcode 206`,solutions:[{language:`java`,code:`class Solution {
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
}`},{language:`javascript`,code:`var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};`},{language:`python`,code:`class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        curr = head
        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        return prev`}]},{id:`longest-substring-without-repeating-characters`,number:3,title:`Longest Substring Without Repeating Characters`,difficulty:`Medium`,category:`Sliding Window`,tags:[`Hash Table`,`String`,`Sliding Window`],description:`Given a string <code>s</code>, find the length of the longest substring without repeating characters.`,examples:[{input:`s = "abcabcbb"`,output:`3`,explanation:`The answer is "abc", with the length of 3.`},{input:`s = "bbbbb"`,output:`1`,explanation:`The answer is "b", with the length of 1.`},{input:`s = "pwwkew"`,output:`3`,explanation:`The answer is "wke", with length 3.`}],constraints:[`0 <= s.length <= 5 * 10^4`,`s consists of English letters, digits, symbols and spaces.`],approach:`Sliding Window technique: Maintain a window <code>[left, right]</code>. Use a Map to store each character's latest index. When a repeating character is found inside the window, slide <code>left</code> to <code>lastIndex + 1</code>.`,timeComplexity:`O(n) - Each character processed at most twice`,spaceComplexity:`O(min(n, m)) - Map stores unique characters in alphabet`,youtubeVideoId:`wiGpQwVHdE0`,youtubeUrl:`https://www.youtube.com/watch?v=wiGpQwVHdE0`,videoTitle:`Longest Substring Without Repeating Characters - Leetcode 3`,solutions:[{language:`java`,code:`class Solution {
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
}`},{language:`javascript`,code:`var lengthOfLongestSubstring = function(s) {
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
};`},{language:`python`,code:`class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_map = {}
        left = 0
        max_len = 0
        for right, char in enumerate(s):
            if char in char_map:
                left = max(left, char_map[char] + 1)
            char_map[char] = right
            max_len = max(max_len, right - left + 1)
        return max_len`}]},{id:`binary-search`,number:704,title:`Binary Search`,difficulty:`Easy`,category:`Binary Search`,tags:[`Array`,`Binary Search`],description:`Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, return its index. Otherwise, return <code>-1</code> in <code>O(log n)</code> runtime complexity.`,examples:[{input:`nums = [-1,0,3,5,9,12], target = 9`,output:`4`,explanation:`9 exists in nums and its index is 4`},{input:`nums = [-1,0,3,5,9,12], target = 2`,output:`-1`,explanation:`2 does not exist in nums so return -1`}],constraints:[`1 <= nums.length <= 10^4`,`-10^4 < nums[i], target < 10^4`,`All elements are unique and sorted`],approach:`Initialize two pointers <code>low = 0</code> and <code>high = nums.length - 1</code>. Calculate <code>mid = low + (high - low) / 2</code> to prevent overflow. Discard the half that cannot contain the target until found.`,timeComplexity:`O(log n) - Search space halved on each iteration`,spaceComplexity:`O(1) - Constant auxiliary space`,youtubeVideoId:`s4DPM8ct1pI`,youtubeUrl:`https://www.youtube.com/watch?v=s4DPM8ct1pI`,videoTitle:`Binary Search - Leetcode 704 - Python & Java`,solutions:[{language:`java`,code:`class Solution {
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
}`},{language:`javascript`,code:`var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (nums[mid] === target) return mid;
        if (nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }

    return -1;
};`},{language:`python`,code:`class Solution:
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
        return -1`}]},{id:`invert-binary-tree`,number:226,title:`Invert Binary Tree`,difficulty:`Easy`,category:`Trees`,tags:[`Tree`,`Depth-First Search`,`Breadth-First Search`,`Binary Tree`],description:`Given the <code>root</code> of a binary tree, invert the tree (swap left and right child pointers at every node), and return its root.`,examples:[{input:`root = [4,2,7,1,3,6,9]`,output:`[4,7,2,9,6,3,1]`},{input:`root = [2,1,3]`,output:`[2,3,1]`},{input:`root = []`,output:`[]`}],constraints:[`The number of nodes in the tree is in the range [0, 100]`,`-100 <= Node.val <= 100`],approach:`Recursively traverse each node. For the current node, swap its left and right subtrees, then recursively call <code>invertTree(root.left)</code> and <code>invertTree(root.right)</code>.`,timeComplexity:`O(n) - Every node is visited once`,spaceComplexity:`O(h) - Call stack equal to tree height`,youtubeVideoId:`OnSn2XEQ4MY`,youtubeUrl:`https://www.youtube.com/watch?v=OnSn2XEQ4MY`,videoTitle:`Invert Binary Tree - Depth First Search - Leetcode 226`,solutions:[{language:`java`,code:`class Solution {
    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;

        // Swap children
        TreeNode temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);

        return root;
    }
}`},{language:`javascript`,code:`var invertTree = function(root) {
    if (!root) return null;

    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;
};`},{language:`python`,code:`class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None
        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root`}]}],this.filteredProblems=PD(()=>{let r=this.searchQuery().toLowerCase().trim(),o=this.selectedCategory(),c=this.selectedDifficulty();return this.problems.filter(b=>{let $=!r||b.title.toLowerCase().includes(r)||b.category.toLowerCase().includes(r)||b.tags.some(J=>J.toLowerCase().includes(r))||b.number.toString().includes(r),K=o===`All`||b.category===o,X=c===`All`||b.difficulty===c;return $&&K&&X})}),this.activeProblem=PD(()=>this.filteredProblems().find(o=>o.id===this.activeProblemId())??this.filteredProblems()[0]??this.problems[0]),this.activeCode=PD(()=>{let r=this.activeProblem();if(!r)return``;let o=r.solutions.find(c=>c.language===this.selectedCodeLang());return o?o.code:r.solutions[0].code})}setActiveProblem(t){this.activeProblemId.set(t);let r=document.getElementById(`problem-detail-section`);r&&window.innerWidth<=900&&r.scrollIntoView({behavior:`smooth`})}setCategory(t){this.selectedCategory.set(t)}setDifficulty(t){this.selectedDifficulty.set(t)}setCodeLang(t){this.selectedCodeLang.set(t)}async copyCurrentCode(){let t=this.activeCode();try{await navigator.clipboard.writeText(t),this.copiedCodeId.set(this.activeProblem().id),setTimeout(()=>this.copiedCodeId.set(null),2e3)}catch{}}openVideoModal(t){this.activeVideoProblem.set(t),document.body.style.overflow=`hidden`}closeVideoModal(){this.activeVideoProblem.set(null),document.body.style.overflow=``}getSafeEmbedUrl(t){let r=`https://www.youtube.com/embed/${t}?autoplay=1&rel=0&modestbranding=1`;return this.sanitizer.bypassSecurityTrustResourceUrl(r)}getThumbnailUrl(t){return`https://img.youtube.com/vi/${t}/hqdefault.jpg`}getDifficultyClass(t){switch(t){case`Easy`:return`diff-easy`;case`Medium`:return`diff-medium`;case`Hard`:return`diff-hard`;default:return``}}handleKeyDown(t){t.key===`Escape`&&this.activeVideoProblem()&&this.closeVideoModal()}static{this.ɵfac=function(r){return new(r||l)(Dr(ia))}}static{this.ɵcmp=OE({type:l,selectors:[[`app-dsa`]],hostBindings:function(r,o){r&1&&kp(`keydown`,function(b){return o.handleKeyDown(b)},yy)},decls:75,vars:16,consts:[[1,`dsa-page`],[1,`dsa-hero`],[1,`dsa-hero-inner`],[`aria-label`,`Breadcrumb`,1,`dsa-breadcrumb`],[`routerLink`,`/upskill`,1,`breadcrumb-back-btn`],[1,`bx`,`bx-left-arrow-alt`],[1,`breadcrumb-separator`],[1,`breadcrumb-current`],[1,`dsa-hero-badge`],[`viewBox`,`0 0 32 32`,`fill`,`none`,`xmlns`,`http://www.w3.org/2000/svg`,1,`dsa-badge-svg`],[`cx`,`16`,`cy`,`6`,`r`,`3.5`,`fill`,`#a855f7`,`stroke`,`#c084fc`,`stroke-width`,`1.5`],[`cx`,`8`,`cy`,`18`,`r`,`3`,`fill`,`#a855f7`,`stroke`,`#c084fc`,`stroke-width`,`1.5`],[`cx`,`24`,`cy`,`18`,`r`,`3`,`fill`,`#a855f7`,`stroke`,`#c084fc`,`stroke-width`,`1.5`],[`d`,`M14 9l-4.5 6.5M18 9l4.5 6.5`,`stroke`,`#c084fc`,`stroke-width`,`1.5`,`stroke-linecap`,`round`],[1,`dsa-hero-title`],[1,`gradient-text-purple`],[1,`dsa-hero-subtitle`],[1,`dsa-stats`],[1,`dsa-stat`],[1,`dsa-stat-num`],[1,`dsa-stat-label`],[1,`dsa-stat-divider`],[1,`dsa-controls-section`],[1,`dsa-container`],[1,`dsa-toolbar`,`glass-card`],[1,`dsa-search-wrap`],[1,`bx`,`bx-search`,`dsa-search-icon`],[`type`,`text`,`placeholder`,`Search problem (e.g. Two Sum, Kadane, Stack...)`,1,`dsa-search-input`,3,`ngModelChange`,`ngModel`],[`aria-label`,`Clear search`,1,`dsa-search-clear`],[1,`dsa-filter-group`],[1,`dsa-category-pills`],[1,`dsa-cat-pill`,3,`active`],[1,`dsa-diff-pills`],[1,`dsa-diff-pill`,3,`click`],[1,`dsa-diff-pill`,`diff-easy-btn`,3,`click`],[1,`dsa-diff-pill`,`diff-med-btn`,3,`click`],[1,`dsa-diff-pill`,`diff-hard-btn`,3,`click`],[1,`dsa-main-layout`],[1,`dsa-container`,`dsa-grid-layout`],[`aria-label`,`DSA Problem List`,1,`dsa-sidebar`],[1,`dsa-sidebar-header`],[1,`dsa-list-count`],[1,`dsa-problem-list`],[1,`dsa-problem-item`,3,`active`],[1,`dsa-empty-state`],[`id`,`problem-detail-section`,1,`dsa-detail-area`],[`role`,`dialog`,`aria-modal`,`true`,`aria-label`,`Video Solution Popup`,1,`video-modal-backdrop`],[`aria-label`,`Clear search`,1,`dsa-search-clear`,3,`click`],[1,`bx`,`bx-x`],[1,`dsa-cat-pill`,3,`click`],[1,`dsa-problem-item`,3,`click`],[1,`prob-item-top`],[1,`prob-number`,`font-mono`],[1,`dsa-diff-badge`,3,`ngClass`],[1,`prob-title`],[1,`prob-item-footer`],[1,`prob-category`,`font-mono`],[1,`bx`,`bx-folder`],[`title`,`Has video solution`,1,`prob-video-indicator`],[1,`bx`,`bxs-video`],[1,`bx`,`bx-search-alt`],[1,`reset-filter-btn`,3,`click`],[1,`prob-detail-card`,`glass-card`],[1,`prob-detail-header`],[1,`prob-header-left`],[1,`prob-badge-group`],[1,`prob-num-tag`,`font-mono`],[1,`prob-cat-tag`],[1,`bx`,`bx-category`],[1,`prob-detail-title`],[1,`prob-quick-video-btn`,3,`click`],[1,`bx`,`bx-play-circle`],[1,`prob-tags-row`],[1,`prob-tag`,`font-mono`],[1,`prob-section-block`],[1,`prob-section-heading`],[1,`bx`,`bx-file`],[1,`prob-description-text`,3,`innerHTML`],[1,`bx`,`bx-code-curly`],[1,`prob-examples-list`],[1,`example-box`],[1,`bx`,`bx-shield`],[1,`constraints-list`],[3,`innerHTML`],[1,`prob-section-block`,`approach-block`],[1,`bx`,`bx-bulb`],[1,`approach-text`,3,`innerHTML`],[1,`complexity-pills`],[1,`complexity-pill`,`time`],[1,`bx`,`bx-time-five`],[1,`comp-label`],[1,`comp-val`,`font-mono`],[1,`complexity-pill`,`space`],[1,`bx`,`bx-hdd`],[1,`prob-section-block`,`code-section-block`],[1,`code-section-header`],[1,`prob-section-heading`,`no-margin`],[1,`bx`,`bx-code-alt`],[1,`lang-selector`],[1,`lang-tab`,3,`click`],[1,`code-editor-box`],[1,`code-editor-top`],[1,`code-mac-dots`],[1,`mac-dot`,`red`],[1,`mac-dot`,`yellow`],[1,`mac-dot`,`green`],[1,`code-lang-label`,`font-mono`],[`aria-label`,`Copy code`,1,`code-copy-btn`,3,`click`],[1,`code-pre`],[1,`font-mono`],[1,`prob-section-block`,`video-section-block`],[1,`video-section-header`],[1,`video-badge`],[1,`video-tip`,`font-mono`],[1,`video-preview-card`],[1,`video-thumb-wrap`,3,`click`],[`loading`,`lazy`,1,`video-thumb-img`,3,`src`,`alt`],[1,`video-thumb-overlay`],[1,`video-play-pulse`],[1,`bx`,`bx-play`],[1,`video-play-hint`],[1,`video-info-content`],[1,`video-card-title`],[1,`video-card-desc`],[1,`video-actions-row`],[1,`btn-primary-purple`,`video-popup-trigger-btn`,3,`click`],[`target`,`_blank`,`rel`,`noopener noreferrer`,1,`btn-outline-glass`,`youtube-external-btn`,3,`href`],[1,`bx`,`bxl-youtube`,`text-red`],[1,`bx`,`bx-external-link`],[1,`example-title`,`font-mono`],[1,`example-row`],[1,`example-label`],[1,`example-code`],[1,`example-exp`],[1,`bx`,`bx-check`],[1,`bx`,`bx-copy`],[`role`,`dialog`,`aria-modal`,`true`,`aria-label`,`Video Solution Popup`,1,`video-modal-backdrop`,3,`click`],[1,`video-modal-container`,3,`click`],[1,`video-modal-header`],[1,`modal-header-info`],[1,`modal-badge`,`font-mono`],[1,`modal-title`],[`aria-label`,`Close video modal`,1,`modal-close-btn`,3,`click`],[1,`video-iframe-responsive`],[`frameborder`,`0`,`allow`,`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,`allowfullscreen`,``,3,`src`,`title`],[1,`video-modal-footer`],[1,`modal-footer-meta`],[1,`font-mono`,`text-muted`],[1,`modal-diff-pill`,3,`ngClass`],[`target`,`_blank`,`rel`,`noopener noreferrer`,1,`modal-youtube-link`,3,`href`],[1,`bx`,`bxl-youtube`]],template:function(r,o){if(r&1&&(hi(0,`div`,0)(1,`header`,1)(2,`div`,2)(3,`nav`,3)(4,`a`,4),Sp(5,`i`,5),yD(6,` Back to Upskill Hub `),Rc(),hi(7,`span`,6),yD(8,`/`),Rc(),hi(9,`span`,7),yD(10,`DSA Problem Solving`),Rc()(),hi(11,`div`,8),gu(),hi(12,`svg`,9),Sp(13,`circle`,10)(14,`circle`,11)(15,`circle`,12)(16,`path`,13),Rc(),mu(),hi(17,`span`),yD(18,`Data Structures & Algorithms`),Rc()(),hi(19,`h1`,14),yD(20,` Famous Interview `),hi(21,`span`,15),yD(22,`DSA Questions`),Rc()(),hi(23,`p`,16),yD(24,` Curated collection of the most frequently asked LeetCode interview problems with optimal multi-language code solutions and comprehensive video explanations. `),Rc(),hi(25,`div`,17)(26,`div`,18)(27,`span`,19),yD(28),Rc(),hi(29,`span`,20),yD(30,`Core Problems`),Rc()(),Sp(31,`div`,21),hi(32,`div`,18)(33,`span`,19),yD(34,`3`),Rc(),hi(35,`span`,20),yD(36,`Languages (Java, JS, Python)`),Rc()(),Sp(37,`div`,21),hi(38,`div`,18)(39,`span`,19),yD(40,`100%`),Rc(),hi(41,`span`,20),yD(42,`With Video Solution`),Rc()()()()(),hi(43,`section`,22)(44,`div`,23)(45,`div`,24)(46,`div`,25),Sp(47,`i`,26),hi(48,`input`,27),Bv(),kp(`ngModelChange`,function(b){return o.searchQuery.set(b)}),Rc(),kI(49,ee,2,0,`button`,28),Rc(),hi(50,`div`,29)(51,`div`,30),VI(52,te,2,3,`button`,31,jI),Rc()(),hi(54,`div`,32)(55,`button`,33),kp(`click`,function(){return o.setDifficulty(`All`)}),yD(56,` All Difficulties `),Rc(),hi(57,`button`,34),kp(`click`,function(){return o.setDifficulty(`Easy`)}),yD(58,` Easy `),Rc(),hi(59,`button`,35),kp(`click`,function(){return o.setDifficulty(`Medium`)}),yD(60,` Medium `),Rc(),hi(61,`button`,36),kp(`click`,function(){return o.setDifficulty(`Hard`)}),yD(62,` Hard `),Rc()()()()(),hi(63,`main`,37)(64,`div`,38)(65,`aside`,39)(66,`div`,40)(67,`span`,41),yD(68),Rc()(),hi(69,`div`,42),VI(70,ne,15,7,`button`,43,Z),kI(72,ie,6,0,`div`,44),Rc()(),kI(73,se,118,23,`section`,45),Rc()(),kI(74,me,21,8,`div`,46),Rc()),r&2){let c,b;tv(28),Qp(o.problems.length),tv(20),Mp(`ngModel`,o.searchQuery()),Uv(),tv(),PI(o.searchQuery()?49:-1),tv(3),HI(o.categories),tv(3),Bp(`active`,o.selectedDifficulty()===`All`),tv(2),Bp(`active`,o.selectedDifficulty()===`Easy`),tv(2),Bp(`active`,o.selectedDifficulty()===`Medium`),tv(2),Bp(`active`,o.selectedDifficulty()===`Hard`),tv(7),Zp(` Showing `,o.filteredProblems().length,` of `,o.problems.length,` problems `),tv(2),HI(o.filteredProblems()),tv(2),PI(o.filteredProblems().length===0?72:-1),tv(),PI((c=o.activeProblem())?73:-1,c),tv(),PI((b=o.activeVideoProblem())?74:-1,b)}},dependencies:[ce$1,se$1,_n,je,pn,Lt,$c,ts],styles:[`.dsa-page[_ngcontent-%COMP%]{min-height:100vh;color:var(--%NS%text-main);padding-top:80px;background-color:var(--%NS%bg-dark)}.dsa-container[_ngcontent-%COMP%]{max-width:1360px;margin:0 auto;padding:0 1.5rem}.dsa-hero[_ngcontent-%COMP%]{padding:3.5rem 0 2.5rem;text-align:center;position:relative;background:linear-gradient(180deg,rgba(168,85,247,.06) 0%,transparent 100%);border-bottom:1px solid var(--%NS%border-glass)}.dsa-hero-inner[_ngcontent-%COMP%]{max-width:820px;margin:0 auto;padding:0 1.5rem}.dsa-breadcrumb[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.6rem;margin-bottom:1.5rem;font-size:.85rem}.breadcrumb-back-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;color:var(--%NS%text-muted);text-decoration:none;font-weight:500;padding:.35rem .85rem;background:#ffffff0a;border:1px solid rgba(255,255,255,.08);border-radius:var(--%NS%radius-full);transition:all .2s ease}.breadcrumb-back-btn[_ngcontent-%COMP%]:hover{color:#c084fc;border-color:#a855f74d;background:#a855f714;transform:translate(-2px)}.breadcrumb-separator[_ngcontent-%COMP%]{color:var(--%NS%text-dim)}.breadcrumb-current[_ngcontent-%COMP%]{color:var(--%NS%text-main);font-weight:600}.dsa-hero-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1.1rem;font-size:.82rem;font-family:var(--%NS%font-mono);color:#c084fc;background:#a855f714;border:1px solid rgba(168,85,247,.25);border-radius:var(--%NS%radius-full);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:1.25rem}.dsa-badge-svg[_ngcontent-%COMP%]{width:18px;height:18px;flex-shrink:0}.dsa-hero-title[_ngcontent-%COMP%]{font-size:clamp(2rem,5vw,3.25rem);font-weight:800;letter-spacing:-.03em;margin-bottom:1rem;line-height:1.2}.gradient-text-purple[_ngcontent-%COMP%]{background:linear-gradient(135deg,#c084fc,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.dsa-hero-subtitle[_ngcontent-%COMP%]{color:var(--%NS%text-muted);font-size:1.05rem;line-height:1.65;margin-bottom:2rem}.dsa-stats[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:1.5rem;padding:.75rem 2rem;background:#ffffff08;border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-full);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.dsa-stat[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.dsa-stat-num[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:800;color:#c084fc;font-family:var(--%NS%font-mono)}.dsa-stat-label[_ngcontent-%COMP%]{font-size:.8rem;color:var(--%NS%text-muted)}.dsa-stat-divider[_ngcontent-%COMP%]{width:1px;height:20px;background:#ffffff1a}.dsa-controls-section[_ngcontent-%COMP%]{padding:1.75rem 0 1rem}.dsa-toolbar[_ngcontent-%COMP%]{padding:1.25rem 1.5rem;display:flex;flex-direction:column;gap:1rem}.dsa-search-wrap[_ngcontent-%COMP%]{position:relative;width:100%}.dsa-search-icon[_ngcontent-%COMP%]{position:absolute;left:1rem;top:50%;transform:translateY(-50%);color:var(--%NS%text-muted);font-size:1.2rem}.dsa-search-input[_ngcontent-%COMP%]{width:100%;padding:.75rem 2.8rem;background:#ffffff0a;border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-md);color:var(--%NS%text-main);font-size:.95rem;font-family:var(--%NS%font-sans);transition:all .2s ease}.dsa-search-input[_ngcontent-%COMP%]:focus{outline:none;border-color:#a855f7;background:#a855f70a;box-shadow:0 0 0 3px #a855f726}.dsa-search-clear[_ngcontent-%COMP%]{position:absolute;right:1rem;top:50%;transform:translateY(-50%);background:transparent;border:none;color:var(--%NS%text-muted);cursor:pointer;font-size:1.2rem}.dsa-category-pills[_ngcontent-%COMP%], .dsa-diff-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.dsa-diff-pills[_ngcontent-%COMP%]{padding-top:.5rem;border-top:1px solid rgba(255,255,255,.06)}.dsa-cat-pill[_ngcontent-%COMP%], .dsa-diff-pill[_ngcontent-%COMP%]{padding:.35rem .85rem;font-size:.8rem;font-weight:500;color:var(--%NS%text-muted);background:#ffffff0a;border:1px solid rgba(255,255,255,.08);border-radius:var(--%NS%radius-full);cursor:pointer;transition:all .2s ease}.dsa-cat-pill[_ngcontent-%COMP%]:hover, .dsa-diff-pill[_ngcontent-%COMP%]:hover{color:var(--%NS%text-main);border-color:#a855f74d;background:#a855f70f}.dsa-cat-pill.active[_ngcontent-%COMP%]{color:#fff;background:#a855f740;border-color:#a855f7;box-shadow:0 0 12px #a855f740}.dsa-diff-pill.active[_ngcontent-%COMP%]{color:var(--%NS%text-main);background:#ffffff1a;border-color:#fff3}.diff-easy-btn.active[_ngcontent-%COMP%]{color:#00f5a0;background:#00f5a026;border-color:#00f5a0}.diff-med-btn.active[_ngcontent-%COMP%]{color:#f7df1e;background:#f7df1e26;border-color:#f7df1e}.diff-hard-btn.active[_ngcontent-%COMP%]{color:#f87171;background:#f8717126;border-color:#f87171}.dsa-main-layout[_ngcontent-%COMP%]{padding-bottom:5rem}.dsa-grid-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:360px 1fr;gap:1.5rem;align-items:start}.dsa-sidebar[_ngcontent-%COMP%]{background:#0a0e19cc;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-lg);padding:1rem;max-height:calc(100vh - 120px);position:sticky;top:90px;display:flex;flex-direction:column}.dsa-sidebar-header[_ngcontent-%COMP%]{padding:.25rem .5rem .75rem;border-bottom:1px solid rgba(255,255,255,.06)}.dsa-list-count[_ngcontent-%COMP%]{font-size:.75rem;font-family:var(--%NS%font-mono);color:var(--%NS%text-dim)}.dsa-problem-list[_ngcontent-%COMP%]{overflow-y:auto;display:flex;flex-direction:column;gap:.5rem;padding-top:.75rem;padding-right:.25rem}.dsa-problem-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.dsa-problem-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#ffffff1a;border-radius:4px}.dsa-problem-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.35rem;padding:.85rem 1rem;background:#ffffff05;border:1px solid rgba(255,255,255,.06);border-radius:var(--%NS%radius-md);cursor:pointer;text-align:left;transition:all .2s ease}.dsa-problem-item[_ngcontent-%COMP%]:hover{background:#a855f70f;border-color:#a855f74d;transform:translate(2px)}.dsa-problem-item.active[_ngcontent-%COMP%]{background:linear-gradient(135deg,#a855f726,#c084fc0d);border-color:#a855f7;box-shadow:0 0 16px #a855f726}.prob-item-top[_ngcontent-%COMP%], .prob-item-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.prob-number[_ngcontent-%COMP%]{font-size:.75rem;color:var(--%NS%text-dim);font-weight:600}.prob-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:var(--%NS%text-main);line-height:1.3}.prob-category[_ngcontent-%COMP%]{font-size:.72rem;color:var(--%NS%text-muted);display:flex;align-items:center;gap:.25rem}.prob-video-indicator[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.25rem;font-size:.68rem;font-family:var(--%NS%font-mono);color:#f03;background:#ff00331a;padding:.1rem .4rem;border-radius:var(--%NS%radius-full)}.dsa-diff-badge[_ngcontent-%COMP%]{font-size:.7rem;font-family:var(--%NS%font-mono);font-weight:600;padding:.15rem .5rem;border-radius:var(--%NS%radius-full);text-transform:uppercase;letter-spacing:.5px}.diff-easy[_ngcontent-%COMP%]{color:#00f5a0;background:#00f5a01f;border:1px solid rgba(0,245,160,.25)}.diff-medium[_ngcontent-%COMP%]{color:#f7df1e;background:#f7df1e1f;border:1px solid rgba(247,223,30,.25)}.diff-hard[_ngcontent-%COMP%]{color:#f87171;background:#f871711f;border:1px solid rgba(248,113,113,.25)}.dsa-empty-state[_ngcontent-%COMP%]{text-align:center;padding:3rem 1rem;color:var(--%NS%text-muted)}.dsa-empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2.5rem;color:var(--%NS%text-dim);margin-bottom:.5rem}.reset-filter-btn[_ngcontent-%COMP%]{margin-top:1rem;padding:.4rem 1rem;background:#a855f726;border:1px solid #a855f7;color:#c084fc;border-radius:var(--%NS%radius-md);cursor:pointer}.prob-detail-card[_ngcontent-%COMP%]{padding:2.5rem;background:#0a0e19d9;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border:1px solid var(--%NS%border-glass);border-radius:var(--%NS%radius-lg)}.prob-detail-header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:1.5rem;margin-bottom:1rem}.prob-badge-group[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:.5rem;margin-bottom:.6rem}.prob-num-tag[_ngcontent-%COMP%]{font-size:.75rem;color:var(--%NS%text-dim);background:#ffffff0d;padding:.15rem .55rem;border-radius:var(--%NS%radius-sm)}.prob-cat-tag[_ngcontent-%COMP%]{font-size:.75rem;color:#c084fc;background:#a855f71a;padding:.15rem .55rem;border-radius:var(--%NS%radius-sm);display:inline-flex;align-items:center;gap:.3rem}.prob-detail-title[_ngcontent-%COMP%]{font-size:1.85rem;font-weight:800;color:var(--%NS%text-main);letter-spacing:-.02em}.prob-quick-video-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.45rem;padding:.6rem 1.15rem;background:linear-gradient(135deg,#f03,#c00);color:#fff;border:none;border-radius:var(--%NS%radius-full);font-size:.85rem;font-weight:600;cursor:pointer;flex-shrink:0;box-shadow:0 4px 16px #ff003359;transition:all .25s ease}.prob-quick-video-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 24px #ff003380}.prob-tags-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:2rem;padding-bottom:1.25rem;border-bottom:1px solid rgba(255,255,255,.06)}.prob-tag[_ngcontent-%COMP%]{font-size:.75rem;color:var(--%NS%text-dim);background:#ffffff08;border:1px solid rgba(255,255,255,.06);padding:.15rem .5rem;border-radius:var(--%NS%radius-full)}.prob-section-block[_ngcontent-%COMP%]{margin-bottom:2.25rem}.prob-section-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;font-size:1.15rem;font-weight:700;color:var(--%NS%text-main);margin-bottom:1rem}.prob-section-heading.no-margin[_ngcontent-%COMP%]{margin-bottom:0}.prob-section-heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#c084fc}.prob-description-text[_ngcontent-%COMP%]{font-size:1rem;color:var(--%NS%text-muted);line-height:1.7}.prob-description-text[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#ffffff14;color:#f7df1e;padding:.15rem .4rem;border-radius:var(--%NS%radius-sm);font-family:var(--%NS%font-mono);font-size:.9em}.prob-examples-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.85rem}.example-box[_ngcontent-%COMP%]{padding:1rem 1.25rem;background:#0000004d;border:1px solid rgba(255,255,255,.06);border-radius:var(--%NS%radius-md);border-left:3px solid #c084fc}.example-title[_ngcontent-%COMP%]{font-size:.78rem;color:#c084fc;font-weight:700;margin-bottom:.5rem}.example-row[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:.5rem;margin-bottom:.35rem;font-size:.9rem}.example-label[_ngcontent-%COMP%]{font-weight:600;color:var(--%NS%text-dim);font-size:.82rem;min-width:55px}.example-code[_ngcontent-%COMP%]{font-family:var(--%NS%font-mono);color:#00d2ff;font-size:.85rem;word-break:break-all}.example-exp[_ngcontent-%COMP%]{color:var(--%NS%text-muted);font-size:.88rem}.constraints-list[_ngcontent-%COMP%]{list-style:none;padding-left:0;display:flex;flex-direction:column;gap:.4rem}.constraints-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.88rem;font-family:var(--%NS%font-mono);color:var(--%NS%text-muted);padding-left:1.2rem;position:relative}.constraints-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#c084fc;font-size:1.2rem;line-height:1}.approach-block[_ngcontent-%COMP%]{padding:1.5rem;background:#a855f70d;border:1px solid rgba(168,85,247,.2);border-radius:var(--%NS%radius-md)}.approach-text[_ngcontent-%COMP%]{font-size:.95rem;color:var(--%NS%text-muted);line-height:1.7;margin-bottom:1.25rem}.complexity-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem}.complexity-pill[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.45rem;padding:.45rem 1rem;border-radius:var(--%NS%radius-full);font-size:.85rem}.complexity-pill.time[_ngcontent-%COMP%]{background:#00f5a01a;border:1px solid rgba(0,245,160,.3);color:#00f5a0}.complexity-pill.space[_ngcontent-%COMP%]{background:#00d2ff1a;border:1px solid rgba(0,210,255,.3);color:#00d2ff}.comp-label[_ngcontent-%COMP%]{font-weight:600;color:var(--%NS%text-dim)}.code-section-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;flex-wrap:wrap;gap:.75rem}.lang-selector[_ngcontent-%COMP%]{display:flex;background:#ffffff0a;padding:.2rem;border-radius:var(--%NS%radius-md);border:1px solid rgba(255,255,255,.08)}.lang-tab[_ngcontent-%COMP%]{padding:.35rem .9rem;font-size:.8rem;font-weight:600;color:var(--%NS%text-muted);background:transparent;border:none;border-radius:var(--%NS%radius-sm);cursor:pointer;transition:all .2s ease}.lang-tab[_ngcontent-%COMP%]:hover{color:var(--%NS%text-main)}.lang-tab.active[_ngcontent-%COMP%]{color:#fff;background:#a855f759;box-shadow:0 2px 8px #a855f74d}.code-editor-box[_ngcontent-%COMP%]{background:#050810;border:1px solid rgba(255,255,255,.1);border-radius:var(--%NS%radius-md);overflow:hidden}.code-editor-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:.65rem 1rem;background:#ffffff08;border-bottom:1px solid rgba(255,255,255,.07)}.code-mac-dots[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem}.mac-dot[_ngcontent-%COMP%]{width:11px;height:11px;border-radius:50%}.mac-dot.red[_ngcontent-%COMP%]{background:#ff5f56}.mac-dot.yellow[_ngcontent-%COMP%]{background:#ffbd2e}.mac-dot.green[_ngcontent-%COMP%]{background:#27c93f}.code-lang-label[_ngcontent-%COMP%]{font-size:.75rem;color:var(--%NS%text-dim)}.code-copy-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;padding:.3rem .75rem;font-size:.78rem;color:var(--%NS%text-muted);background:#ffffff0d;border:1px solid rgba(255,255,255,.1);border-radius:var(--%NS%radius-sm);cursor:pointer;transition:all .2s ease}.code-copy-btn[_ngcontent-%COMP%]:hover{color:#fff;background:#ffffff1a;border-color:#fff3}.code-pre[_ngcontent-%COMP%]{margin:0;padding:1.25rem;overflow-x:auto;font-size:.88rem;line-height:1.65;color:#e2e8f0}.video-section-block[_ngcontent-%COMP%]{padding:1.75rem;background:linear-gradient(135deg,#ff00330f,#a855f70f);border:1px solid rgba(255,0,51,.25);border-radius:var(--%NS%radius-lg);position:relative;overflow:hidden}.video-section-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;flex-wrap:wrap;gap:.5rem}.video-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;font-size:.95rem;font-weight:700;color:#f34}.video-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.25rem}.video-tip[_ngcontent-%COMP%]{font-size:.75rem;color:var(--%NS%text-dim)}.video-preview-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:280px 1fr;gap:1.5rem;align-items:center;background:#0006;border:1px solid rgba(255,255,255,.08);border-radius:var(--%NS%radius-md);padding:1.25rem}.video-thumb-wrap[_ngcontent-%COMP%]{position:relative;border-radius:var(--%NS%radius-md);overflow:hidden;aspect-ratio:16 / 9;cursor:pointer;box-shadow:0 8px 24px #00000080}.video-thumb-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .35s ease}.video-thumb-wrap[_ngcontent-%COMP%]:hover   .video-thumb-img[_ngcontent-%COMP%]{transform:scale(1.06)}.video-thumb-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:#00000073;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;transition:background .25s ease}.video-thumb-wrap[_ngcontent-%COMP%]:hover   .video-thumb-overlay[_ngcontent-%COMP%]{background:#00000040}.video-play-pulse[_ngcontent-%COMP%]{width:52px;height:52px;border-radius:50%;background:#f03;color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.75rem;box-shadow:0 0 24px #f039;transition:transform .25s ease,box-shadow .25s ease}.video-thumb-wrap[_ngcontent-%COMP%]:hover   .video-play-pulse[_ngcontent-%COMP%]{transform:scale(1.15);box-shadow:0 0 32px #ff0033e6}.video-play-hint[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.8)}.video-info-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.video-card-title[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:700;color:var(--%NS%text-main);line-height:1.35}.video-card-desc[_ngcontent-%COMP%]{font-size:.88rem;color:var(--%NS%text-muted);line-height:1.6}.video-actions-row[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:.75rem;margin-top:.5rem}.btn-primary-purple[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.45rem;padding:.65rem 1.35rem;background:linear-gradient(135deg,#f03,#a855f7);color:#fff;border:none;border-radius:var(--%NS%radius-md);font-size:.88rem;font-weight:600;cursor:pointer;transition:all .25s ease;box-shadow:0 4px 16px #a855f759}.btn-primary-purple[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 6px 20px #a855f780}.btn-outline-glass[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.45rem;padding:.65rem 1.2rem;background:#ffffff0a;border:1px solid rgba(255,255,255,.12);border-radius:var(--%NS%radius-md);color:var(--%NS%text-main);text-decoration:none;font-size:.88rem;font-weight:600;transition:all .2s ease}.btn-outline-glass[_ngcontent-%COMP%]:hover{background:#ffffff14;border-color:#ffffff40;transform:translateY(-2px)}.text-red[_ngcontent-%COMP%]{color:#f03}.video-modal-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:9999;background:#04070fd9;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);display:flex;align-items:center;justify-content:center;padding:1.5rem;animation:_ngcontent-%COMP%_modalFadeIn .25s ease-out}@keyframes _ngcontent-%COMP%_modalFadeIn{0%{opacity:0}to{opacity:1}}.video-modal-container[_ngcontent-%COMP%]{width:100%;max-width:900px;background:#0a0e19fa;border:1px solid rgba(168,85,247,.35);border-radius:var(--%NS%radius-lg);box-shadow:0 24px 64px #000000d9,0 0 40px #a855f733;overflow:hidden;animation:_ngcontent-%COMP%_modalSlideUp .3s cubic-bezier(.16,1,.3,1)}@keyframes _ngcontent-%COMP%_modalSlideUp{0%{transform:translateY(24px) scale(.96);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}.video-modal-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;background:#ffffff08;border-bottom:1px solid rgba(255,255,255,.08)}.modal-header-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem}.modal-badge[_ngcontent-%COMP%]{font-size:.72rem;color:#c084fc;background:#a855f726;padding:.2rem .5rem;border-radius:var(--%NS%radius-sm);border:1px solid rgba(168,85,247,.3)}.modal-title[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:var(--%NS%text-main);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:600px}.modal-close-btn[_ngcontent-%COMP%]{background:transparent;border:1px solid rgba(255,255,255,.1);color:var(--%NS%text-muted);width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.35rem;cursor:pointer;transition:all .2s ease}.modal-close-btn[_ngcontent-%COMP%]:hover{color:#fff;background:#f033;border-color:#f03}.video-iframe-responsive[_ngcontent-%COMP%]{position:relative;width:100%;padding-bottom:56.25%;background:#000}.video-iframe-responsive[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border:none}.video-modal-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:.85rem 1.5rem;background:#ffffff05;border-top:1px solid rgba(255,255,255,.08)}.modal-footer-meta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;font-size:.82rem}.modal-diff-pill[_ngcontent-%COMP%]{font-size:.68rem;font-family:var(--%NS%font-mono);padding:.1rem .45rem;border-radius:var(--%NS%radius-full)}.modal-youtube-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;font-size:.82rem;color:#f03;text-decoration:none;font-weight:600}.modal-youtube-link[_ngcontent-%COMP%]:hover{text-decoration:underline}@media(max-width:1024px){.dsa-grid-layout[_ngcontent-%COMP%]{grid-template-columns:300px 1fr}.video-preview-card[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media(max-width:900px){.dsa-grid-layout[_ngcontent-%COMP%]{grid-template-columns:1fr}.dsa-sidebar[_ngcontent-%COMP%]{max-height:320px;position:static}.prob-detail-card[_ngcontent-%COMP%]{padding:1.5rem}.prob-detail-header[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.prob-quick-video-btn[_ngcontent-%COMP%]{width:100%;justify-content:center}.dsa-stats[_ngcontent-%COMP%]{flex-wrap:wrap;gap:.75rem 1.5rem;justify-content:center;border-radius:var(--%NS%radius-md);padding:.75rem 1.25rem}.dsa-stat-divider[_ngcontent-%COMP%]{display:none}}@media(max-width:768px){.dsa-page[_ngcontent-%COMP%]{padding-top:70px}.dsa-hero[_ngcontent-%COMP%]{padding:2.25rem 0 1.5rem}.dsa-hero-title[_ngcontent-%COMP%]{font-size:clamp(1.65rem,6vw,2.25rem)}.dsa-hero-subtitle[_ngcontent-%COMP%]{font-size:.95rem}.dsa-breadcrumb[_ngcontent-%COMP%]{flex-wrap:wrap;gap:.4rem}.dsa-toolbar[_ngcontent-%COMP%]{padding:1rem;gap:.75rem}.dsa-category-pills[_ngcontent-%COMP%], .dsa-diff-pills[_ngcontent-%COMP%]{flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:.35rem;scrollbar-width:thin}.dsa-cat-pill[_ngcontent-%COMP%], .dsa-diff-pill[_ngcontent-%COMP%]{white-space:nowrap;flex-shrink:0}.code-section-header[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;gap:.65rem}.lang-selector[_ngcontent-%COMP%]{width:100%;display:flex}.lang-tab[_ngcontent-%COMP%]{flex:1;text-align:center;justify-content:center}.video-preview-card[_ngcontent-%COMP%]{grid-template-columns:1fr;padding:1rem;gap:1rem}.video-actions-row[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;gap:.5rem}.btn-primary-purple[_ngcontent-%COMP%], .btn-outline-glass[_ngcontent-%COMP%]{width:100%;justify-content:center}}@media(max-width:480px){.dsa-page[_ngcontent-%COMP%]{padding-top:65px}.dsa-container[_ngcontent-%COMP%]{padding:0 .85rem}.dsa-hero-badge[_ngcontent-%COMP%]{font-size:.75rem;padding:.3rem .85rem;letter-spacing:1px}.dsa-hero-title[_ngcontent-%COMP%]{font-size:1.55rem;line-height:1.25}.prob-detail-card[_ngcontent-%COMP%]{padding:1rem .85rem}.prob-detail-title[_ngcontent-%COMP%]{font-size:1.35rem}.prob-section-block[_ngcontent-%COMP%]{margin-bottom:1.5rem}.example-box[_ngcontent-%COMP%]{padding:.75rem .85rem}.example-row[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:.2rem}.example-code[_ngcontent-%COMP%]{word-break:break-word}.approach-block[_ngcontent-%COMP%]{padding:1rem .85rem}.complexity-pills[_ngcontent-%COMP%]{flex-direction:column;gap:.5rem}.complexity-pill[_ngcontent-%COMP%]{width:100%;justify-content:space-between}.code-pre[_ngcontent-%COMP%]{padding:.85rem .75rem;font-size:.78rem}.video-section-block[_ngcontent-%COMP%]{padding:1rem .85rem}.video-modal-backdrop[_ngcontent-%COMP%]{padding:.5rem}.video-modal-header[_ngcontent-%COMP%]{padding:.75rem 1rem}.modal-title[_ngcontent-%COMP%]{max-width:calc(100vw - 120px);font-size:.85rem}.video-modal-footer[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:.5rem;padding:.75rem 1rem}.modal-youtube-link[_ngcontent-%COMP%]{width:100%;justify-content:center}}`]})}}return l})();export{we as DsaComponent};