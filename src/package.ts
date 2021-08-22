import { AllPlayers } from "./players"
import { playerUnitTriggers } from "./trigger"

export const init = () => {
    AllPlayers.forEach(p => print(GetPlayerName(p)))

    const unit = CreateUnit(Player(0), FourCC("hpea"), 0, 0, 0)

    playerUnitTriggers.death.addAction(() => {
        print("убит: ", GetUnitName(GetTriggerUnit()))
    })

    KillUnit(unit)
}
