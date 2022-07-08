redShirts = [6, 9, 2, 4, 5, 1];
blueShirts = [5, 8, 1, 3, 4, 9];

const classPhoto = () => {
    const arr = [];
    redShirts.sort((a, b) => b - a);
    blueShirts.sort((a, b) => b - a);
    for (let i = 0; i < redShirts.length; i++) {
        console.log(redShirts > blueShirts);
        arr.push(redShirts[i] > blueShirts[i]);
    }
    if (arr.every(value => value === true) || arr.every(value => value === false)) {
        return true;
    } else {
        return false;
    }
};

console.log(classPhoto());
