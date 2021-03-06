export const getUnitLife = (u: unit) => GetUnitState(u, ConvertUnitState(0))
export const getUnitMana = (u: unit) => GetUnitState(u, ConvertUnitState(2))
export const setUnitLife = (u: unit, value: real) => SetUnitState(u, ConvertUnitState(0), value)
export const setUnitMana = (u: unit, value: real) => SetUnitState(u, ConvertUnitState(2), value)
export const addUnitLife = (u: unit, value: real) => setUnitLife(u, getUnitLife(u) + value)
export const addUnitMana = (u: unit, value: real) => setUnitMana(u, getUnitMana(u) + value)
export const addUnitMaxHP = (u: unit, value: real) => BlzSetUnitMaxHP(u, BlzGetUnitMaxHP(u) + value)
export const addUnitMaxMP = (u: unit, value: real) =>
    BlzSetUnitMaxMana(u, BlzGetUnitMaxMana(u) + value)