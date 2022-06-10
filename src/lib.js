/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

const options = [`hidden`, 1, 2, 3, 5, 8, 13];

const recalculateAllViews = (voting) => {
    playerViews = players.map((player) => ({
        player,
        view: [
            {
                type: `CARD_LIST`,
                data: gameState.storyPoints
                    .filter((points) => points.points !== `hidden`)
                    .map((points) => ({
                        text: `${voting ? `?` : points.points}\\n${
                            points.player.name
                        }`,
                        selected: !points.points,
                    })),
            },
            {
                type: `CARD_LIST`,
                data: options.map((option) => {
                    const points = gameState.storyPoints.find(
                        (points) => points.player._id === player._id,
                    );
                    const isSelected = points && points.points === option;

                    return {
                        text: option,
                        selected: isSelected,
                    };
                }),
                settings: {
                    maxSelectable: 1,
                },
            },
            {
                type: `SUBMIT_BUTTON`,
                data: voting ? `view` : `restart`,
            },
        ],
    }));
};
