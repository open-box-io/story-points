/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

const onInitialisation = () => {
    gameState.storyPoints = players.map((player) => ({
        player,
    }));

    recalculateAllViews(true);
};

const onSubmit = () => {
    if (context.component === 2) {
        phaseName = `view`;
    } else {
        gameState.storyPoints = gameState.storyPoints.filter(
            (points) => points.player._id !== context.playerView.player._id,
        );

        const newPoints = context.playerView.view[1].data.find(
            (card) => card.selected,
        );

        if (newPoints) {
            gameState.storyPoints.push({
                player: context.action.sender,
                points: newPoints.text,
            });
        }

        recalculateAllViews(true);
    }
};

const onTimeout = () => {};

const onPlayerJoined = () => {};

const onPlayerLeft = () => {};
