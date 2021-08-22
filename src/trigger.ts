import { forGroup, getCondition, triggerAddAction } from "@write-coin/ceres-ts-template/src/debug"
import { ObjectOptions } from "./object"
import { AllPlayers } from "./players"

abstract class Trigger {
    handle: trigger = CreateTrigger()

    addAction(actionFunc: code) {
        triggerAddAction(this.handle, actionFunc)
    }
}

export class DialogTrigger extends Trigger {
    register(dialog: dialog) {
        return TriggerRegisterDialogEvent(this.handle, dialog)
    }
}

export class DialogButtonTrigger extends Trigger {
    register(button: button) {
        return TriggerRegisterDialogButtonEvent(this.handle, button)
    }
}

export class GameTrigger extends Trigger {
    register(event: gameevent) {
        return TriggerRegisterGameEvent(this.handle, event)
    }
}

const getGameTriggerClass = (event: gameevent) =>
    class extends Trigger {
        register() {
            return TriggerRegisterGameEvent(this.handle, event)
        }
    }

export const GameEnterRegionTrigger = getGameTriggerClass(EVENT_GAME_ENTER_REGION)
export const GameLeaveRegionTrigger = getGameTriggerClass(EVENT_GAME_LEAVE_REGION)
export const GameSaveTrigger = getGameTriggerClass(EVENT_GAME_SAVE)
export const GameStateLimitTrigger = getGameTriggerClass(EVENT_GAME_STATE_LIMIT)
export const GameTournamentFinishNowTrigger = getGameTriggerClass(EVENT_GAME_TOURNAMENT_FINISH_NOW)
export const GameTournamentFinishSoonTrigger = getGameTriggerClass(
    EVENT_GAME_TOURNAMENT_FINISH_SOON
)
export const GameTrackableHitTrigger = getGameTriggerClass(EVENT_GAME_TRACKABLE_HIT)
export const GameTrackableTrackTrigger = getGameTriggerClass(EVENT_GAME_TRACKABLE_TRACK)
export const GameVictoryTrigger = getGameTriggerClass(EVENT_GAME_VICTORY)
export const GameBuildSubmenuTrigger = getGameTriggerClass(EVENT_GAME_BUILD_SUBMENU)
export const GameCustomUIFrameTrigger = getGameTriggerClass(EVENT_GAME_CUSTOM_UI_FRAME)
export const GameEndLevelTrigger = getGameTriggerClass(EVENT_GAME_END_LEVEL)
export const GameLoadedTrigger = getGameTriggerClass(EVENT_GAME_LOADED)
export const GameShowSkillTrigger = getGameTriggerClass(EVENT_GAME_SHOW_SKILL)
export const GameTimerExpiredTrigger = getGameTriggerClass(EVENT_GAME_TIMER_EXPIRED)
export const GameVariableLimitTrigger = getGameTriggerClass(EVENT_GAME_VARIABLE_LIMIT)

export class TimerTrigger extends Trigger {
    register(t: timer) {
        return TriggerRegisterTimerExpireEvent(this.handle, t)
    }
}

export class TimeTrigger extends Trigger {
    register(timeout: real, periodic: boolean) {
        return TriggerRegisterTimerEvent(this.handle, timeout, periodic)
    }
}

export class VariableTrigger extends Trigger {
    register(varName: string, opcode: limitop, limitval: real) {
        return TriggerRegisterVariableEvent(this.handle, varName, opcode, limitval)
    }
}

export class CommandTrigger extends Trigger {
    register(whichAbility: integer, order: string) {
        return TriggerRegisterCommandEvent(this.handle, whichAbility, order)
    }
}

export class FrameTrigger extends Trigger {
    register(frame: framehandle, eventId: frameeventtype) {
        return BlzTriggerRegisterFrameEvent(this.handle, frame, eventId)
    }
}

export class UpgradeCommandTrigger extends Trigger {
    register(whichUpgrade: number) {
        return TriggerRegisterUpgradeCommandEvent(this.handle, whichUpgrade)
    }
}

export class PlayerAllianceChangeTrigger extends Trigger {
    register(whichPlayer: player, whichAlliance: alliancetype) {
        return TriggerRegisterPlayerAllianceChange(this.handle, whichPlayer, whichAlliance)
    }

    registerAll(whichAlliance: alliancetype) {
        AllPlayers.forEach(p => this.register(p, whichAlliance))
    }
}

export class PlayerChatTrigger extends Trigger {
    register(whichPlayer: player, chatMessageToDetect: string, exactMatchOnly: boolean) {
        return TriggerRegisterPlayerChatEvent(
            this.handle,
            whichPlayer,
            chatMessageToDetect,
            exactMatchOnly
        )
    }

    registerAll(chatMessageToDetect: string, exactMatchOnly: boolean) {
        AllPlayers.forEach(p => this.register(p, chatMessageToDetect, exactMatchOnly))
    }
}

export class PlayerKeyTrigger extends Trigger {
    register(whichPlayer: player, key: oskeytype, metaKey: integer, keyDown: boolean) {
        return BlzTriggerRegisterPlayerKeyEvent(this.handle, whichPlayer, key, metaKey, keyDown)
    }

    registerAll(key: oskeytype, metaKey: integer, keyDown: boolean) {
        AllPlayers.forEach(p => this.register(p, key, metaKey, keyDown))
    }
}

export class PlayerStateTrigger extends Trigger {
    register(whichPlayer: player, whichState: playerstate, opcode: limitop, limitval: real) {
        return TriggerRegisterPlayerStateEvent(
            this.handle,
            whichPlayer,
            whichState,
            opcode,
            limitval
        )
    }

    registerAll(whichState: playerstate, opcode: limitop, limitval: real) {
        AllPlayers.forEach(p => this.register(p, whichState, opcode, limitval))
    }
}

export class PlayerSyncTrigger extends Trigger {
    register(whichPlayer: player, prefix: string, fromServer: boolean) {
        return BlzTriggerRegisterPlayerSyncEvent(this.handle, whichPlayer, prefix, fromServer)
    }

    registerAll(prefix: string, fromServer: boolean) {
        AllPlayers.forEach(p => this.register(p, prefix, fromServer))
    }
}

export class PlayerTrigger extends Trigger {
    register(player: player, event: playerevent) {
        return TriggerRegisterPlayerEvent(this.handle, player, event)
    }

    registerAll(event: playerevent) {
        AllPlayers.forEach(p => this.register(p, event))
    }
}

const getPlayerTriggerClass = (event: playerevent) =>
    class extends Trigger {
        register(player: player) {
            return TriggerRegisterPlayerEvent(this.handle, player, event)
        }

        registerAll() {
            AllPlayers.forEach(p => this.register(p))
        }
    }

export const PlayerAllianceChangedTrigger = getPlayerTriggerClass(EVENT_PLAYER_ALLIANCE_CHANGED)
export const PlayerArrowDownDownTrigger = getPlayerTriggerClass(EVENT_PLAYER_ARROW_DOWN_DOWN)
export const PlayerArrowDownUpTrigger = getPlayerTriggerClass(EVENT_PLAYER_ARROW_DOWN_UP)
export const PlayerArrowUpDownTrigger = getPlayerTriggerClass(EVENT_PLAYER_ARROW_UP_DOWN)
export const PlayerArrowUpUpTrigger = getPlayerTriggerClass(EVENT_PLAYER_ARROW_UP_UP)
export const PlayerArrowLeftDownTrigger = getPlayerTriggerClass(EVENT_PLAYER_ARROW_LEFT_DOWN)
export const PlayerArrowLeftUpTrigger = getPlayerTriggerClass(EVENT_PLAYER_ARROW_LEFT_UP)
export const PlayerArrowRightDownTrigger = getPlayerTriggerClass(EVENT_PLAYER_ARROW_RIGHT_DOWN)
export const PlayerArrowRightUpTrigger = getPlayerTriggerClass(EVENT_PLAYER_ARROW_RIGHT_UP)
export const PlayerChatEventTrigger = getPlayerTriggerClass(EVENT_PLAYER_CHAT)
export const PlayerDefeatTrigger = getPlayerTriggerClass(EVENT_PLAYER_DEFEAT)
export const PlayerEndCinematicTrigger = getPlayerTriggerClass(EVENT_PLAYER_END_CINEMATIC)
export const PlayerKeyDownTrigger = getPlayerTriggerClass(EVENT_PLAYER_KEY_DOWN)
export const PlayerKeyEventTrigger = getPlayerTriggerClass(EVENT_PLAYER_KEY)
export const PlayerKeyUpTrigger = getPlayerTriggerClass(EVENT_PLAYER_KEY_UP)
export const PlayerLeaveTrigger = getPlayerTriggerClass(EVENT_PLAYER_LEAVE)
export const PlayerMouseDownTrigger = getPlayerTriggerClass(EVENT_PLAYER_MOUSE_DOWN)
export const PlayerMouseMoveTrigger = getPlayerTriggerClass(EVENT_PLAYER_MOUSE_MOVE)
export const PlayerMouseUpTrigger = getPlayerTriggerClass(EVENT_PLAYER_MOUSE_UP)
export const PlayerStateLimitTrigger = getPlayerTriggerClass(EVENT_PLAYER_STATE_LIMIT)
export const PlayerSyncDataTrigger = getPlayerTriggerClass(EVENT_PLAYER_SYNC_DATA)
export const PlayerVictoryTrigger = getPlayerTriggerClass(EVENT_PLAYER_VICTORY)

export class PlayerUnitInRangeTrigger extends Trigger {
    register(player: player, range: real, filter: codeboolexpr) {
        const g = CreateGroup()
        GroupEnumUnitsOfPlayer(
            g,
            player,
            getCondition(() => RectContainsUnit(bj_mapInitialPlayableArea, GetFilterUnit()))
        )
        forGroup(g, () =>
            TriggerRegisterUnitInRange(this.handle, GetEnumUnit(), range, getCondition(filter))
        )
    }

    registerAll(range: real, filter: codeboolexpr) {
        AllPlayers.forEach(p => this.register(p, range, filter))
    }
}

export class PlayerUnitStateTrigger extends Trigger {
    register(player: player, state: unitstate, opcode: limitop, limitval: real) {
        const g = CreateGroup()
        GroupEnumUnitsOfPlayer(
            g,
            player,
            getCondition(() => RectContainsUnit(bj_mapInitialPlayableArea, GetFilterUnit()))
        )
        forGroup(g, () =>
            TriggerRegisterUnitStateEvent(this.handle, GetEnumUnit(), state, opcode, limitval)
        )
    }

    registerAll(state: unitstate, opcode: limitop, limitval: real) {
        AllPlayers.forEach(p => this.register(p, state, opcode, limitval))
    }
}

export class PlayerUnitTrigger extends Trigger {
    register(player: player, event: playerunitevent, filter: codeboolexpr) {
        return TriggerRegisterPlayerUnitEvent(this.handle, player, event, getCondition(filter))
    }

    registerAll(event: playerunitevent, filter: codeboolexpr) {
        AllPlayers.forEach(p => this.register(p, event, filter))
    }
}

const getPlayerUnitTriggerClass = (event: playerunitevent) =>
    class extends Trigger {
        register(player: player, filter: codeboolexpr) {
            return TriggerRegisterPlayerUnitEvent(this.handle, player, event, getCondition(filter))
        }

        registerAll(filter: codeboolexpr) {
            AllPlayers.forEach(p => this.register(p, filter))
        }
    }

export const PlayerHeroLevelTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_HERO_LEVEL)
export const PlayerHeroSkillTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_HERO_SKILL)
export const PlayerHeroRevivableTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_HERO_REVIVABLE)
export const PlayerHeroReviveStartTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_HERO_REVIVE_START
)
export const PlayerHeroReviveCancelTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_HERO_REVIVE_CANCEL
)
export const PlayerHeroReviveFinishTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_HERO_REVIVE_FINISH
)
export const PlayerUnitAttackedTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_ATTACKED)
export const PlayerUnitRescuedTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_RESCUED)
export const PlayerUnitDeathTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_DEATH)
export const PlayerUnitDecayTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_DECAY)
export const PlayerUnitSelectedTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_SELECTED)
export const PlayerUnitConstructStartTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_CONSTRUCT_START
)
export const PlayerUnitConstructCancelTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL
)
export const PlayerUnitConstructFinishTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_CONSTRUCT_FINISH
)
export const PlayerUnitResearchStartTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_RESEARCH_START
)
export const PlayerUnitResearchCancelTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_RESEARCH_CANCEL
)
export const PlayerUnitResearchFinishTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_RESEARCH_FINISH
)
export const PlayerUnitTrainStartTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_TRAIN_START)
export const PlayerUnitTrainCancelTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_TRAIN_CANCEL
)
export const PlayerUnitTrainFinishTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_TRAIN_FINISH
)
export const PlayerUnitDetectedTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_DETECTED)
export const PlayerUnitSummonTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_SUMMON)
export const PlayerUnitLoadedTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_LOADED)
export const PlayerUnitSellTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_SELL)
export const PlayerUnitSellItemTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_SELL_ITEM)
export const PlayerUnitChangeOwnerTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_CHANGE_OWNER
)
export const PlayerUnitDropItemTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_DROP_ITEM)
export const PlayerUnitPickupItemTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_PICKUP_ITEM)
export const PlayerUnitUseItemTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_USE_ITEM)
export const PlayerUnitIssuedOrderTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_ISSUED_ORDER
)
export const PlayerUnitIssuedPointOrderTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER
)
export const PlayerUnitIssuedTargetOrderTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER
)
export const PlayerUnitSpellChannelTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_SPELL_CHANNEL
)
export const PlayerUnitSpellCastTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_SPELL_CAST)
export const PlayerUnitSpellEffectTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_SPELL_EFFECT
)
export const PlayerUnitSpellFinishTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_SPELL_FINISH
)
export const PlayerUnitSpellEndcastTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_SPELL_ENDCAST
)
export const PlayerUnitDamagedTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_DAMAGED)
export const PlayerUnitDamagingTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_DAMAGING)
export const PlayerUnitDeselectedTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_DESELECTED)
export const PlayerUnitHiddenTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_HIDDEN)
export const PlayerUnitPawnItemTrigger = getPlayerUnitTriggerClass(EVENT_PLAYER_UNIT_PAWN_ITEM)
export const PlayerUnitUpgradeStartTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_UPGRADE_START
)
export const PlayerUnitUpgradeCancelTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_UPGRADE_CANCEL
)
export const PlayerUnitUpgradeFinishTrigger = getPlayerUnitTriggerClass(
    EVENT_PLAYER_UNIT_UPGRADE_FINISH
)

export class EnterRegionTrigger extends Trigger {
    register(region: region, filter: codeboolexpr) {
        return TriggerRegisterEnterRegion(this.handle, region, getCondition(filter))
    }
}

export class LeaveRegionTrigger extends Trigger {
    register(region: region, filter: codeboolexpr) {
        return TriggerRegisterLeaveRegion(this.handle, region, getCondition(filter))
    }
}

export const mapRegions = new Map<rect, region>()
export const rectToRegion = (rect: rect) => {
    if (!mapRegions.has(rect)) {
        const region = CreateRegion()
        RegionAddRect(region, rect)
        mapRegions.set(rect, region)
        return region
    } else return mapRegions.get(rect) as region
}

export class EnterRectTrigger extends Trigger {
    register(rect: rect, filter: codeboolexpr) {
        return TriggerRegisterEnterRegion(this.handle, rectToRegion(rect), getCondition(filter))
    }
}

export class LeaveRectTrigger extends Trigger {
    register(rect: rect, filter: codeboolexpr) {
        return TriggerRegisterLeaveRegion(this.handle, rectToRegion(rect), getCondition(filter))
    }
}

export class TrackableHitTrigger extends Trigger {
    register(t: trackable) {
        return TriggerRegisterTrackableHitEvent(this.handle, t)
    }
}

export class TrackableTrackTrigger extends Trigger {
    register(t: trackable) {
        return TriggerRegisterTrackableTrackEvent(this.handle, t)
    }
}

export class UnitInRangeTrigger extends Trigger {
    register(unit: unit, range: real, filter: codeboolexpr) {
        return TriggerRegisterUnitInRange(this.handle, unit, range, getCondition(filter))
    }
}

export class UnitStateTrigger extends Trigger {
    register(unit: unit, state: unitstate, opcode: limitop, limitval: real) {
        return TriggerRegisterUnitStateEvent(this.handle, unit, state, opcode, limitval)
    }
}

export class UnitTrigger extends Trigger {
    register(unit: unit, event: unitevent) {
        return TriggerRegisterUnitEvent(this.handle, unit, event)
    }
}

const getUnitTriggerClass = (event: unitevent) =>
    class extends Trigger {
        register(unit: unit) {
            return TriggerRegisterUnitEvent(this.handle, unit, event)
        }
    }

export const UnitAcquiredTargetTrigger = getUnitTriggerClass(EVENT_UNIT_ACQUIRED_TARGET)
export const UnitAttackedTrigger = getUnitTriggerClass(EVENT_UNIT_ATTACKED)
export const UnitChangeOwnerTrigger = getUnitTriggerClass(EVENT_UNIT_CHANGE_OWNER)
export const UnitConstructCancelTrigger = getUnitTriggerClass(EVENT_UNIT_CONSTRUCT_CANCEL)
export const UnitConstructFinishTrigger = getUnitTriggerClass(EVENT_UNIT_CONSTRUCT_FINISH)
export const UnitDamagedTrigger = getUnitTriggerClass(EVENT_UNIT_DAMAGED)
export const UnitDamagingTrigger = getUnitTriggerClass(EVENT_UNIT_DAMAGING)
export const UnitDeathTrigger = getUnitTriggerClass(EVENT_UNIT_DEATH)
export const UnitDecayTrigger = getUnitTriggerClass(EVENT_UNIT_DECAY)
export const UnitDeselectedTrigger = getUnitTriggerClass(EVENT_UNIT_DESELECTED)
export const UnitDetectedTrigger = getUnitTriggerClass(EVENT_UNIT_DETECTED)
export const UnitDropItemTrigger = getUnitTriggerClass(EVENT_UNIT_DROP_ITEM)
export const HeroLevelTrigger = getUnitTriggerClass(EVENT_UNIT_HERO_LEVEL)
export const HeroRevivableTrigger = getUnitTriggerClass(EVENT_UNIT_HERO_REVIVABLE)
export const HeroReviveStartTrigger = getUnitTriggerClass(EVENT_UNIT_HERO_REVIVE_START)
export const HeroReviveCancelTrigger = getUnitTriggerClass(EVENT_UNIT_HERO_REVIVE_CANCEL)
export const HeroReviveFinishTrigger = getUnitTriggerClass(EVENT_UNIT_HERO_REVIVE_FINISH)
export const HeroSkillTrigger = getUnitTriggerClass(EVENT_UNIT_HERO_SKILL)
export const UnitHiddenTrigger = getUnitTriggerClass(EVENT_UNIT_HIDDEN)
export const UnitIssuedOrderTrigger = getUnitTriggerClass(EVENT_UNIT_ISSUED_ORDER)
export const UnitIssuedPointOrderTrigger = getUnitTriggerClass(EVENT_UNIT_ISSUED_POINT_ORDER)
export const UnitIssuedTargetOrderTrigger = getUnitTriggerClass(EVENT_UNIT_ISSUED_TARGET_ORDER)
export const UnitLoadedTrigger = getUnitTriggerClass(EVENT_UNIT_LOADED)
export const UnitPawnItemTrigger = getUnitTriggerClass(EVENT_UNIT_PAWN_ITEM)
export const UnitPickupItemTrigger = getUnitTriggerClass(EVENT_UNIT_PICKUP_ITEM)
export const UnitRescuedTrigger = getUnitTriggerClass(EVENT_UNIT_RESCUED)
export const UnitResearchStartTrigger = getUnitTriggerClass(EVENT_UNIT_RESEARCH_START)
export const UnitResearchCancelTrigger = getUnitTriggerClass(EVENT_UNIT_RESEARCH_CANCEL)
export const UnitResearchFinishTrigger = getUnitTriggerClass(EVENT_UNIT_RESEARCH_FINISH)
export const UnitSelectedTrigger = getUnitTriggerClass(EVENT_UNIT_SELECTED)
export const UnitSellTrigger = getUnitTriggerClass(EVENT_UNIT_SELL)
export const UnitSellItemTrigger = getUnitTriggerClass(EVENT_UNIT_SELL_ITEM)
export const UnitSpellCastTrigger = getUnitTriggerClass(EVENT_UNIT_SPELL_CAST)
export const UnitSpellChannelTrigger = getUnitTriggerClass(EVENT_UNIT_SPELL_CHANNEL)
export const UnitSpellEffectTrigger = getUnitTriggerClass(EVENT_UNIT_SPELL_EFFECT)
export const UnitSpellEndcastTrigger = getUnitTriggerClass(EVENT_UNIT_SPELL_ENDCAST)
export const UnitSpellFinishTrigger = getUnitTriggerClass(EVENT_UNIT_SPELL_FINISH)
export const UnitStateLimitTrigger = getUnitTriggerClass(EVENT_UNIT_STATE_LIMIT)
export const UnitSummonTrigger = getUnitTriggerClass(EVENT_UNIT_SUMMON)
export const UnitTargetInRangeTrigger = getUnitTriggerClass(EVENT_UNIT_TARGET_IN_RANGE)
export const UnitTrainStartTrigger = getUnitTriggerClass(EVENT_UNIT_TRAIN_START)
export const UnitTrainCancelTrigger = getUnitTriggerClass(EVENT_UNIT_TRAIN_CANCEL)
export const UnitTrainFinishTrigger = getUnitTriggerClass(EVENT_UNIT_TRAIN_FINISH)
export const UnitUpgradeStartTrigger = getUnitTriggerClass(EVENT_UNIT_UPGRADE_START)
export const UnitUpgradeCancelTrigger = getUnitTriggerClass(EVENT_UNIT_UPGRADE_CANCEL)
export const UnitUpgradeFinishTrigger = getUnitTriggerClass(EVENT_UNIT_UPGRADE_FINISH)
export const UnitUseItemTrigger = getUnitTriggerClass(EVENT_UNIT_USE_ITEM)

export class WidgetDeathTrigger extends Trigger {
    register(widget: widget) {
        return TriggerRegisterDeathEvent(this.handle, widget)
    }
}

export const newOtherTriggers = () => {
    return {
        dialog: new DialogTrigger(),
        dialogButton: new DialogButtonTrigger(),
        timer: new TimerTrigger(),
        time: new TimeTrigger(),
        variable: new VariableTrigger(),
        enterRegion: new EnterRegionTrigger(),
        leaveRegion: new LeaveRegionTrigger(),
        enterRect: new EnterRectTrigger(),
        leaveRect: new LeaveRectTrigger(),
        command: new CommandTrigger(),
        frame: new FrameTrigger(),
        upgradeCommand: new UpgradeCommandTrigger(),
        trackableHit: new TrackableHitTrigger(),
        trackableTrack: new TrackableTrackTrigger(),
        widgetDeath: new WidgetDeathTrigger()
    }
}

export const otherTriggers = newOtherTriggers()

export const newGameTriggers = () => {
    return {
        save: new GameSaveTrigger(),
        stateLimit: new GameStateLimitTrigger(),
        tournamentFinishSoon: new GameTournamentFinishSoonTrigger(),
        tournamentFinishNow: new GameTournamentFinishNowTrigger(),
        trackableHit: new GameTrackableHitTrigger(),
        trackableTrack: new GameTrackableTrackTrigger(),
        victory: new GameVictoryTrigger(),
        buildSubmenu: new GameBuildSubmenuTrigger(),
        customUIFrame: new GameCustomUIFrameTrigger(),
        endLevel: new GameEndLevelTrigger(),
        loaded: new GameLoadedTrigger(),
        showSkill: new GameShowSkillTrigger(),
        timerExpired: new GameTimerExpiredTrigger(),
        variableLimit: new GameVariableLimitTrigger()
    }
}

export const gameTriggers = newGameTriggers()

export const newPlayerTriggers = () => {
    const obj = {
        allianceChanged: new PlayerAllianceChangedTrigger(),
        arrowDownDown: new PlayerArrowDownDownTrigger(),
        arrowDownUp: new PlayerArrowDownUpTrigger(),
        arrowUpDown: new PlayerArrowUpDownTrigger(),
        arrowUpUp: new PlayerArrowUpUpTrigger(),
        arrowLeftUp: new PlayerArrowLeftUpTrigger(),
        arrowLeftDown: new PlayerArrowLeftDownTrigger(),
        arrowRightUp: new PlayerArrowRightUpTrigger(),
        arrowRightDown: new PlayerArrowRightDownTrigger(),
        chatEvent: new PlayerChatEventTrigger(),
        defeat: new PlayerDefeatTrigger(),
        endCinematic: new PlayerEndCinematicTrigger(),
        keyDown: new PlayerKeyDownTrigger(),
        keyEvent: new PlayerKeyEventTrigger(),
        keyUp: new PlayerKeyUpTrigger(),
        leave: new PlayerLeaveTrigger(),
        mouseDown: new PlayerMouseDownTrigger(),
        mouseMove: new PlayerMouseMoveTrigger(),
        mouseUp: new PlayerMouseUpTrigger(),
        stateLimit: new PlayerStateLimitTrigger(),
        syncData: new PlayerSyncDataTrigger(),
        victory: new PlayerVictoryTrigger()
    }
    for (const trigger of ObjectOptions.values(obj)) {
        trigger.registerAll()
    }
    return obj
}

export const playerTriggers = newPlayerTriggers()

export const newPlayerOtherTriggers = () => {
    return {
        allianceChange: new PlayerAllianceChangeTrigger(),
        chat: new PlayerChatTrigger(),
        key: new PlayerKeyTrigger(),
        state: new PlayerStateTrigger(),
        sync: new PlayerSyncTrigger()
    }
}

export const playerOtherTriggers = newPlayerOtherTriggers()

export const newPlayerUnitTriggers = () => {
    const obj = {
        heroLevel: new PlayerHeroLevelTrigger(),
        heroSkill: new PlayerHeroSkillTrigger(),
        heroRevivable: new PlayerHeroRevivableTrigger(),
        heroReviveStart: new PlayerHeroReviveStartTrigger(),
        heroReviveCancel: new PlayerHeroReviveCancelTrigger(),
        heroReviveFinish: new PlayerHeroReviveFinishTrigger(),
        attacked: new PlayerUnitAttackedTrigger(),
        rescued: new PlayerUnitRescuedTrigger(),
        death: new PlayerUnitDeathTrigger(),
        decay: new PlayerUnitDecayTrigger(),
        selected: new PlayerUnitSelectedTrigger(),
        constructStart: new PlayerUnitConstructStartTrigger(),
        constructCancel: new PlayerUnitConstructCancelTrigger(),
        constructFinish: new PlayerUnitConstructFinishTrigger(),
        reserachStart: new PlayerUnitResearchStartTrigger(),
        reserachCancel: new PlayerUnitResearchCancelTrigger(),
        reserachFinish: new PlayerUnitResearchFinishTrigger(),
        trainStart: new PlayerUnitTrainStartTrigger(),
        trainCancel: new PlayerUnitTrainCancelTrigger(),
        trainFinish: new PlayerUnitTrainFinishTrigger(),
        detected: new PlayerUnitDetectedTrigger(),
        summon: new PlayerUnitSummonTrigger(),
        loaded: new PlayerUnitLoadedTrigger(),
        sell: new PlayerUnitSellTrigger(),
        sellItem: new PlayerUnitSellItemTrigger(),
        changeOwner: new PlayerUnitChangeOwnerTrigger(),
        dropItem: new PlayerUnitDropItemTrigger(),
        pickupItem: new PlayerUnitPickupItemTrigger(),
        useItem: new PlayerUnitUseItemTrigger(),
        issuedOrder: new PlayerUnitIssuedOrderTrigger(),
        issuedPointOrder: new PlayerUnitIssuedPointOrderTrigger(),
        issuedTargetOrder: new PlayerUnitIssuedTargetOrderTrigger(),
        spellChannel: new PlayerUnitSpellChannelTrigger(),
        spellCast: new PlayerUnitSpellCastTrigger(),
        spellEffect: new PlayerUnitSpellEffectTrigger(),
        spellFinish: new PlayerUnitSpellFinishTrigger(),
        spellEndcast: new PlayerUnitSpellEndcastTrigger(),
        damaged: new PlayerUnitDamagedTrigger(),
        damaging: new PlayerUnitDamagingTrigger(),
        deselected: new PlayerUnitDeselectedTrigger(),
        hidden: new PlayerUnitHiddenTrigger(),
        pawnItem: new PlayerUnitPawnItemTrigger(),
        upgradeStart: new PlayerUnitUpgradeStartTrigger(),
        upgradeCancel: new PlayerUnitUpgradeCancelTrigger(),
        upgradeFinish: new PlayerUnitUpgradeFinishTrigger()
    }
    for (const trigger of ObjectOptions.values(obj)) {
        trigger.registerAll(() => true)
    }
    return obj
}

export const playerUnitTriggers = newPlayerUnitTriggers()

export const newPlayerUnitOtherTriggers = () => {
    return {
        inRange: new PlayerUnitInRangeTrigger(),
        state: new PlayerUnitStateTrigger()
    }
}

export const playerUnitOtherTriggers = newPlayerUnitOtherTriggers()

export const newUnitTriggers = () => {
    const obj = {
        acquiredTarget: new UnitAcquiredTargetTrigger(),
        attacked: new UnitAttackedTrigger(),
        changeOwner: new UnitChangeOwnerTrigger(),
        constructCancel: new UnitConstructCancelTrigger(),
        constructFinish: new UnitConstructFinishTrigger(),
        damaged: new UnitDamagedTrigger(),
        damaging: new UnitDamagingTrigger(),
        death: new UnitDeathTrigger(),
        decay: new UnitDecayTrigger(),
        deselected: new UnitDeselectedTrigger(),
        detected: new UnitDetectedTrigger(),
        dropItem: new UnitDropItemTrigger(),
        heroLevel: new HeroLevelTrigger(),
        heroRevivable: new HeroRevivableTrigger(),
        heroReviveStart: new HeroReviveStartTrigger(),
        heroReviveCancel: new HeroReviveCancelTrigger(),
        heroReviveFinish: new HeroReviveFinishTrigger(),
        heroSkill: new HeroSkillTrigger(),
        hidden: new UnitHiddenTrigger(),
        issuedOrder: new UnitIssuedOrderTrigger(),
        issuedPointOrder: new UnitIssuedPointOrderTrigger(),
        issuedTargetOrder: new UnitIssuedTargetOrderTrigger(),
        loaded: new UnitLoadedTrigger(),
        pawnItem: new UnitPawnItemTrigger(),
        pickupItem: new UnitPickupItemTrigger(),
        rescued: new UnitRescuedTrigger(),
        researchStart: new UnitResearchStartTrigger(),
        researchCancel: new UnitResearchCancelTrigger(),
        researchFinish: new UnitResearchFinishTrigger(),
        selected: new UnitSelectedTrigger(),
        sell: new UnitSellTrigger(),
        sellItem: new UnitSellItemTrigger(),
        spellCast: new UnitSpellCastTrigger(),
        spellChannel: new UnitSpellChannelTrigger(),
        spellEffect: new UnitSpellEffectTrigger(),
        spellEndcast: new UnitSpellEndcastTrigger(),
        spellFinish: new UnitSpellFinishTrigger(),
        stateLimit: new UnitStateLimitTrigger(),
        summon: new UnitSummonTrigger(),
        trainStart: new UnitTrainStartTrigger(),
        trainCancel: new UnitTrainCancelTrigger(),
        trainFinish: new UnitTrainFinishTrigger(),
        upgradeStart: new UnitUpgradeStartTrigger(),
        upgradeCancel: new UnitUpgradeCancelTrigger(),
        upgradeFinish: new UnitUpgradeFinishTrigger(),
        useItem: new UnitUseItemTrigger()
    }
    return obj
}

export const unitTriggers = newUnitTriggers()

export const newUnitOtherTriggers = () => {
    return {
        inRange: new UnitInRangeTrigger(),
        state: new UnitStateTrigger()
    }
}

export const unitOtherTriggers = newUnitOtherTriggers()
