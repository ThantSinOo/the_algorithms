function rodCut(prices, n) {
  const dp = new Array(n + 1).fill(0); // Create an array to store maximum profit for each rod length

  for (let i = 1; i <= n; i++) { // Loop through each rod length
    for (let j = 0; j < i; j++) { // Loop through each possible cut
      dp[i] = Math.max(dp[i], prices[j] + dp[i - j - 1]); // Calculate maximum profit for this cut
    }
  }

  return dp[n]; // Return the maximum profit for the given rod length
}