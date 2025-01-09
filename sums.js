function sums(num) {
    if (num < 2) return [];
    const result = [];
    const current = [];

    function addPartition() {
        result.push(current.slice());
    }

    function searchPartitions(start, remaining) {
        if (remaining === 0) {
            addPartition();
        } else {
            for (let i = start; i <= remaining; i++) {
                current.push(i);
                searchPartitions(i, remaining - i);
                current.pop();
            }
        }
    }

    searchPartitions(1, num);

    return result.slice(0, -1);
}
