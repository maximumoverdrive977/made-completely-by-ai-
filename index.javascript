document.addEventListener('DOMContentLoaded', () => {
    // Function to unlock content when a puzzle piece is clicked
    const unlockPiece = (piece) => {
        piece.querySelectorAll('.hidden').forEach(element => {
            element.classList.remove('hidden');
        });
        piece.classList.add('unlocked');
    };

    // Add event listeners to puzzle pieces
    const puzzlePieces = document.querySelectorAll('.puzzle-piece');
    puzzlePieces.forEach(piece => {
        piece.addEventListener('click', () => unlockPiece(piece));
    });
});
