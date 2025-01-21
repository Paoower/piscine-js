function neuron(arr) {
    const res = {};

    const addEntry = (key, statement, response) => {
        const baseKey = statement.toLowerCase().replace(/[?!]/g, '').replace(/\s+/g, '_');
        res[key] ||= {};
        res[key][baseKey] ||= { [key.slice(0, -1)]: statement, responses: [] };
        res[key][baseKey].responses.push(response);
    };

    const parseItem = (arr) => {
        const fullText = arr.join(' ');
        const [statementPart, responsePart = ''] = fullText.split(' - ');
        const statement = statementPart.trim();
        const response = responsePart.replace(/^response:\s*/i, '').trim();
        return [statement, response];
    };

    for (const item of arr) {
        const [type, ...rest] = item.split(' ');
        const [statement, response] = parseItem(rest);

        const typeKey = type.toLowerCase().replace(/:$/, '');
        if (['questions', 'orders', 'affirmations'].includes(typeKey)) {
            addEntry(typeKey, statement, response);
        }
    }

    return res;
}
