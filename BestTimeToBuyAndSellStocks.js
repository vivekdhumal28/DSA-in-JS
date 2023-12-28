/**
 *  You are given an array prices where prices[i] is the price of a given stock on the ith day.
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different 
    day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction. 
    If you cannot achieve any profit, return 0.
 * 

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 */

//Brute Force Solution

var maxProfit = function (prices) {
  let globalProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > globalProfit) globalProfit = profit;
    }
  }
  return globalProfit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));

//-----------------------------------------------------------------------
// Grredy Algorithms
/**
 *  [7,1,5,3,6,4]
 *  min = arr[0] = 7
 *  profit = 0
 *  after loop check next value which is (1)
 *  check greter or lesser than min value if min assign that to min
 * profit = 1 - 7 = less than 0
 *  7 = 1 (7 replace with 1) No profit return zero
 *
 *  Now Min 1
 *  check for 5
 *  5 is greter than 1 Min is not updated
 *  5 -1 = 4 profit
 *  Now profit = 4
 *
 * check next value and So On;
 *
 * at value  6
 * Min = 1
 * 6 > 1 So Min = 1
 * Profit = 6 -1 = 5
 * this profit > than previous current profit YES
 * profit = 5
 *
 */

var maxProfit = function (prices) {
  let minStockValuePrice = prices[0] || 0; // first elem of array
  let profit = 0; // initially it's 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockValuePrice) {
      minStockValuePrice = prices[i];
    }
    let currentProfit = prices[i] - minStockValuePrice;
    profit = Math.max(profit, currentProfit);
  }
  return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
