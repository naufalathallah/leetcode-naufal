public class Solution {
    // you need treat n as an unsigned value
    public int reverseBits(int n) {
        int result = 0;
        for (int i = 0; i < 32; i++){
            // ambil bit paling kanan dari n
            int bit = n & 1;
            // geser
            result = (result << 1) | bit;
            n >>= 1;
        }
        return result;
    }
}