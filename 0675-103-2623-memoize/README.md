<h2> 675 103
2623. Memoize</h2><hr><div><p>Given a function <code>fn</code>, return a&nbsp;<strong>memoized</strong>&nbsp;version of that function.</p>

<p>A&nbsp;<strong>memoized&nbsp;</strong>function is a function that will never be called twice with&nbsp;the same inputs. Instead it will return&nbsp;a cached value.</p>

<p>You can assume there are&nbsp;<strong>3&nbsp;</strong>possible input functions:&nbsp;<code>sum</code><strong>, </strong><code>fib</code><strong>,&nbsp;</strong>and&nbsp;<code>factorial</code><strong>.</strong></p>

<ul>
	<li><code>sum</code><strong>&nbsp;</strong>accepts two integers&nbsp;<code>a</code> and <code>b</code> and returns <code>a + b</code>.&nbsp;Assume that if a value has already been cached for the arguments <code>(b, a)</code> where <code>a != b</code>, it cannot be used for the arguments <code>(a, b)</code>. For example, if the arguments are <code>(3, 2)</code> and <code>(2, 3)</code>, two separate calls should be made.</li>
	<li><code>fib</code><strong>&nbsp;</strong>accepts a&nbsp;single integer&nbsp;<code>n</code> and&nbsp;returns&nbsp;<code>1</code> if <font face="monospace"><code>n &lt;= 1</code> </font>or<font face="monospace">&nbsp;<code>fib(n - 1) + fib(n - 2)</code>&nbsp;</font>otherwise.</li>
	<li><code>factorial</code>&nbsp;accepts a single integer&nbsp;<code>n</code> and returns <code>1</code>&nbsp;if&nbsp;<code>n &lt;= 1</code>&nbsp;or&nbsp;<code>factorial(n - 1) * n</code>&nbsp;otherwise.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong>
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
<strong>Output:</strong> [4,4,1,3,2]
<strong>Explanation:</strong>
const sum = (a, b) =&gt; a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:
</strong>fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
<strong>Output:</strong> [2,6,2,2,6,2]
<strong>Explanation:</strong>
const factorial = (n) =&gt; (n &lt;= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // "call" - returns 2.
memoFactorial(3); // "call" - returns 6.
memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// "getCallCount" - total call count: 2
memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// "getCallCount" - total call count: 2
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:
</strong>fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]
<strong>Output:</strong> [8,1]
<strong>Explanation:
</strong>fib(5) = 8 // "call"
// "getCallCount" - total call count: 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= a, b &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= n &lt;= 10</code></li>
	<li><code>1 &lt;= actions.length &lt;= 10<sup>5</sup></code></li>
	<li><code>actions.length === values.length</code></li>
	<li><code>actions[i]</code> is one of "call" and "getCallCount"</li>
	<li><code>fnName</code> is one of "sum", "factorial" and&nbsp;"fib"</li>
</ul>
</div>