const getHandledCallback = (callback: code | codeboolexpr) => () => {
    const result = pcall(callback)
    if (!result[0]) {
        print(result[1])
        return result[0]
    } else {
        return result[1]
    }
}

export const timerStart = (
    whichTimer: timer,
    timeout: real,
    periodic: boolean,
    handlerFunc: code
) => TimerStart(whichTimer, timeout, periodic, getHandledCallback(handlerFunc))

export const triggerAddAction = (whichTrigger: trigger, actionFunc: code) =>
    TriggerAddAction(whichTrigger, getHandledCallback(actionFunc))

export const getCondition = (func: codeboolexpr) =>
    Condition(getHandledCallback(func) as codeboolexpr)

export const getFilter = (func: codeboolexpr) => Filter(getHandledCallback(func) as codeboolexpr)

export const forForce = (whichForce: force, callback: code) =>
    ForForce(whichForce, getHandledCallback(callback))

export const forGroup = (whichGroup: group, callback: code) =>
    ForGroup(whichGroup, getHandledCallback(callback))

export const enumDestructablesInRect = (r: rect, filter: boolexpr, actionFunc: code) =>
    EnumDestructablesInRect(r, filter, getHandledCallback(actionFunc))

export const enumItemsInRect = (r: rect, filter: boolexpr, actionFunc: code) =>
    EnumItemsInRect(r, filter, getHandledCallback(actionFunc))

