namespace ObjEdit {
    export type UpgradeVal = integer | real | boolean

    /**
     * Класс
     * Нет - _
     * Броня - armor
     * Артиллерия - artillery
     * Ближний бой - melee
     * Дальний бой - ranged
     * Магия - caster
     */
    export type UpgradeClass =
        | '_'
        | 'armor'
        | 'artillery'
        | 'melee'
        | 'ranged'
        | 'caster'

    type UpgradeDataBody = {
        /**
         * Графика - Положение кнопки (X)
         */
        gbpx: ButtonPosX
        /**
         * Графика - Положение кнопки (Y)
         */
        gbpy: ButtonPosY
        /**
         * Данные - Эффект 1
         */
        effect1: string
        /**
         * Данные - Эффект 1 - изначально
         */
        base1: UpgradeVal
        /**
         * Данные - Эффект 1 - прирост
         */
        mod1: UpgradeVal
        /**
         * Данные - Эффект 2
         */
        effect2: string
        /**
         * Данные - Эффект 2 - изначально
         */
        base2: UpgradeVal
        /**
         * Данные - Эффект 2 - прирост
         */
        mod2: UpgradeVal
        /**
         * Данные - Эффект 3
         */
        effect3: string
        /**
         * Данные - Эффект 3 - изначально
         */
        base3: UpgradeVal
        /**
         * Данные - Эффект 3 - прирост
         */
        mod3: UpgradeVal
        /**
         * Данные - Эффект 4
         */
        effect4: string
        /**
         * Данные - Эффект 4 - изначально
         */
        base4: UpgradeVal
        /**
         * Данные - Эффект 4 - прирост
         */
        mod4: UpgradeVal
        /**
         * Характеристики - Класс
         */
        class: UpgradeClass
        /**
         * Характеристики - Относится ко всем войскам
         */
        global: boolean
        /**
         * Характеристики - Раса
         */
        race: Race
        /**
         * Характеристики - Требуется времени (первое улучшение)
         */
        timebase: integer
        /**
         * Характеристики - Требуется времени (последующие улучшения)
         */
        timemod: integer
        /**
         * Характеристики - Требуется древесины (первое улучшение)
         */
        lumberbase: integer
        /**
         * Характеристики - Требуется древесины (следующие улучшения)
         */
        lumbermod: integer
        /**
         * Характеристики - Требуется золота (первое улучшение)
         */
        goldbase: integer
        /**
         * Характеристики - Требуется золота (следующие улучшения)
         */
        goldmod: integer
        /**
         * Характеристики - Уровни
         */
        maxlevel: integer
        /**
         * Характеристики - Фиксированная зависимость
         */
        inherit: boolean
        /**
         * Уровень N - Графика - Пиктограмма
         */
        Art: StringList
        /**
         * Уровень N - Текст - Горячая клавиша
         */
        Hotkey: StringList
        /**
         * Уровень N - Текст - Название
         */
        Name: StringList
        /**
         * Уровень N - Текст - Подсказка
         */
        Tip: StringList
        /**
         * Уровень N - Текст - Подсказка: подробная
         */
        Ubertip: StringList
        /**
         * Уровень N - Текст - Суффикс редактора
         */
        EditorSuffix: StringList
        /**
         * Уровень N - Технологии - Требования
         */
        Requires: StringList
        /**
         * Уровень N - Технологии - Требования: уровни
         */
        Requiresamount: IntegerList
    }

    export type UpgradeDataInput = {
        parentId: codeboolexpr
    } & Partial<UpgradeDataBody>

    export type UpgradeDataKeys = keyof UpgradeDataBody
}