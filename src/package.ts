export let AllPlayers: player[]

export const init = () => {
    const max_slots = GetBJMaxPlayerSlots()
    for (let i = 0; i < max_slots; i++) {
        AllPlayers.push(Player(i))
    }
}
