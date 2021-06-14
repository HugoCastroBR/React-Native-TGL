const inRange = (N: number) => {
    // eslint-disable-next-line prefer-const
    let Arr = []
    while (Arr.length < N) {
        Arr.push(Arr.length ? Arr.length + 1 : 1)
    }
    return Arr
}

export default inRange;