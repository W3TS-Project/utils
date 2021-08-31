type DecomposedID = {
    i1: integer
    i2: integer
    i3: integer
    i4: integer
}

export let divNum: (div: number, by: number) => number

let decomposeID: (id: rawcode) => DecomposedID

let isInvalidCharID: (char: integer) => boolean

export let nextID: (ID: DecomposedID) => integer

export let UNIT_ID_START: DecomposedID
export let HERO_ID_START: DecomposedID
export let ABIL_ID_START: DecomposedID
export let BUFF_ID_START: DecomposedID
export let ITEM_ID_START: DecomposedID
export let UPGD_ID_START: DecomposedID

// export let generateObject: (name: string, type: objectType, data: UnitDataInput) => UnitDataOutput

compiletime(() => {
    const refs: { name: string; id: string }[] = []
    
    divNum = (val: number, by: number) => (val - (val % by)) / by

    decomposeID = (id: rawcode): DecomposedID => {
        if (typeof id === "string") id = FourCC(id)
        return {
            i1: id % 256,
            i2: divNum(id % 65536, 256),
            i3: divNum(id % 16777216, 65536),
            i4: divNum(id, 16777216)
        }
    }

    UNIT_ID_START = decomposeID("x000")
    HERO_ID_START = decomposeID("HM00")
    ABIL_ID_START = decomposeID("AM00")
    BUFF_ID_START = decomposeID("BM00")
    ITEM_ID_START = decomposeID("IM00")
    UPGD_ID_START = decomposeID("RM00")

    isInvalidCharID = (char: integer) => (char < 48 || (char > 57 && char < 97))

    nextID = (ID: DecomposedID): integer => {
        let i1 = ID.i1
        let i2 = ID.i2
        let i3 = ID.i3
        let i4 = ID.i4
        const max_char = '~'.charCodeAt(0)
        const end_char = '!'.charCodeAt(0)
        if (i1 < max_char) {
            i1++
            while (isInvalidCharID(i1)) i1++
        } else if (i2 < max_char) {
            i1 = end_char
            i2++
            while (isInvalidCharID(i2)) i2++
        } else if (i3 < max_char) {
            i1 = end_char
            i2 = end_char
            i3++
            while (isInvalidCharID(i3)) i3++
        } else if (i4 < max_char) {
            i1 = end_char
            i2 = end_char
            i3 = end_char
            i4++
            while (isInvalidCharID(i4)) i4++
        } else {
            error('Переполнение ID разрядной сетки', 2)
        }
        let id = i1 + (i2 * 256) + (i3 * 65536) + (i4 * 16777216)
        return id
    }

    
})