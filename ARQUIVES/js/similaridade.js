const fuzzySimilarity = (word1, word2) => {
    const generateNGrams = (word, n) => {
        const nGrams = [];
        for (let i = 0; i < word.length - n + 1; i++) {
            nGrams.push(word.slice(i, i + n));
        }
        return nGrams;
    };
    const nGrams1 = generateNGrams(word1, 2);
    const nGrams2 = generateNGrams(word2, 2);
    const commonNGrams = nGrams1.filter(nGram => nGrams2.includes(nGram));
    return Math.round((2 * commonNGrams.length) / (nGrams1.length + nGrams2.length) * 100) || 0;
};

module.exports = (allCases, targetWord, prefix = '/') => {
    let mostSimilarCommand = "";
    let highestSimilarity = -1;
    const cleanTarget = targetWord.toLowerCase().trim();

    for (const cmd of allCases) {
        if (!cmd) continue;
        const similarity = fuzzySimilarity(cleanTarget, cmd.toLowerCase());
        if (similarity > highestSimilarity) {
            highestSimilarity = similarity;
            mostSimilarCommand = cmd;
        }
    }

    return {
        nome: mostSimilarCommand,
        porcentagem: highestSimilarity
    };
};
