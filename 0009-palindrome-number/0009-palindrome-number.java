class Solution {
    public boolean isPalindrome(int x) {
        String strNum = Integer.toString(x);

        if (strNum.charAt(0) == '-') {
            return false;
        }

        String reversedStrNum = new StringBuilder(strNum).reverse().toString();
        return strNum.equals(reversedStrNum);
    }
}