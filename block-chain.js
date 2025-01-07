function blockChain(data, prev = { index: 0, hash: '0' }) {
    const block = {
        data,                              // Block's data
        prev,                              // Reference to the previous block
        index: prev.index + 1,             // Increment index from the previous block
        hash: hashCode(prev.index + 1 + prev.hash + JSON.stringify(data)), // Compute unique hash
        chain: (newData) => blockChain(newData, block) // Method to create the next block
    };
    return block;
}
