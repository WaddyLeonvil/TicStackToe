export const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

export const renderXPieces = (Piece, handleToggle) => {
    let arr = []

    for (let i = 0; i < 5; i++) {
        arr.push(<Piece size='1' player={'stackX'} handleToggle={handleToggle} />);
    }

    for (let i = 0; i < 4; i++) {
        arr.push(<Piece size='2' player={'stackX'} handleToggle={handleToggle} />);
    }

    for (let i = 0; i < 2; i++) {
        arr.push(<Piece size='3' player={'stackX'} handleToggle={handleToggle} />);
    }

    arr.push(<Piece size='5' player={'stackX'} handleToggle={handleToggle} />);
    return arr;
}


export const renderOPieces = (Piece, handleToggle) => {
    let arr = [];

    for (let i = 0; i < 5; i++) {
        arr.push(<Piece size='1' player={'stackO'} handleToggle={handleToggle} />);
    }

    for (let i = 0; i < 4; i++) {
        arr.push(<Piece size='2' player={'stackO'} handleToggle={handleToggle} />);
    }

    for (let i = 0; i < 2; i++) {
        arr.push(<Piece size='3' player={'stackO'} handleToggle={handleToggle} />);
    }

    arr.push(<Piece size='5' player={'stackO'} handleToggle={handleToggle} />);
    return arr;
}

