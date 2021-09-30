function MyBoard(request, response) {
    const placa = 'AAA0000';

    response.json({board: placa})
}

export default MyBoard;