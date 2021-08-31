namespace ObjEdit {
    /**
     * Сценарий воздействия
     */
    export type TargetAttachCount =
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6

    /**
     * Точки приложения заклинания
     */
    export type CasterAttachCount =
        | 0
        | 1
        | 2

    type AbilityDataBody = {
        /**
         * Графика - Анимации
         */
        Animnames: StringList
        /**
         * Графика - Анимация дистанционной атаки
         */
        Missileart: StringList
        /**
         * Графика - Включено автоматическое наведение
         */
        MissileHoming: boolean
        /**
         * Графика - Воздействие на цель 1
         */
        Targetattach: StringList
        /**
         * Графика - Воздействие на цель 2
         */
        Targetattach1: StringList
        /**
         * Графика - Воздействие на цель 3
         */
        Targetattach2: StringList
        /**
         * Графика - Воздействие на цель 4
         */
        Targetattach3: StringList
        /**
         * Графика - Воздействие на цель 5
         */
        Targetattach4: StringList
        /**
         * Графика - Воздействие на цель 6
         */
        Targetattach5: StringList
        /**
         * Графика - Задать сценарий воздействия
         */
        Targetattachcount: TargetAttachCount
        /**
         * Графика - Маг
         */
        CasterArt: StringList
        /**
         * Графика - Область воздействия
         */
        Areaeffectart: StringList
        /**
         * Графика - Особые
         */
        SpecialArt: StringList
        /**
         * Графика - Особый объект воздействия
         */
        Specialattach: StringList
        /**
         * Графика - Пиктограмма: используется
         */
        Art: string
        /**
         * Графика - Пиктограмма: не используется
         */
        Unart: string
        /**
         * Графика - Положение кнопки: используется (X)
         */
        abpx: ButtonPosX
        /**
         * Графика - Положение кнопки: используется (Y)
         */
        abpy: ButtonPosY
        /**
         * Графика - Положение кнопки: не используется (X)
         */
        aubx: ButtonPosX
        /**
         * Графика - Положение кнопки: не используется (Y)
         */
        auby: ButtonPosY
        /**
         * Графика - Скорость дистанционной атаки
         */
        Missilespeed: real
        /**
         * Графика - Точка приложения заклинания 1
         */
        Casterattach: StringList
        /**
         * Графика - Точка приложения заклинания 2
         */
        Casterattach1: StringList
        /**
         * Графика - Точки приложения заклинания
         */
        Casterattachcount: CasterAttachCount
        /**
         * Графика - Траектория ракеты
         */
        Missilearc: real
        /**
         * Графика - Цель
         */
        TargetArt: StringList
        /**
         * Графика - Эффект
         */
        EffectArt: StringList
        /**
         * Графика - Эффекты молнии
         */
        LightningEffect: StringList
        /**
         * Звук - Звук эффекта
         */
        Effectsound: string
        /**
         * Звук - Звук эффекта (повтор)
         */
        Effectsoundlooped: string
        /**
         * Текст - Горячая клавиша: используется
         */
        Hotkey: string
        /**
         * Текст - Горячая клавиша: не используется
         */
        Unhotkey: string
        /**
         * Текст - Название
         */
        Name: string
        /**
         * Текст - Подсказка: используется, нормальная
         */
        Tip: StringList
        /**
         * Текст - Подсказка: используется, подробная
         */
        Ubertip: StringList
        /**
         * Текст - Подсказка: не используется
         */
        Untip: StringList
        /**
         * Текст - Подсказка: не используется, подробная
         */
        Unubertip: StringList
        /**
         * Текст - Порядок строк: включен
         */
        Order: order
        /**
         * Текст - Порядок строк: выключен
         */
        Unorder: order
        /**
         * Текст - Порядок строк: используется
         */
        Orderon: order
        /**
         * Текст - Порядок строк: не используется
         */
        Orderoff: order
        /**
         * Текст - Суффикс редактора
         */
        EditorSuffix: string
        /**
         * Технологии - Проверять зависимости
         */
        checkDep: boolean
        /**
         * Технологии - Требования
         */
        Requires: StringList
        /**
         * Технологии - Требования: уровни
         */
        Requiresamount: StringList
        /**
         * Характеристики - Время подготовки заклинания
         */
        Cast: RealList
        /**
         * Характеристики - Длительность воздействия: герой
         */
        HeroDur: RealList
        /**
         * Характеристики - Длительность: нормальная
         */
        Dur: RealList
        /**
         * Характеристики - Заклинания
         */
        BuffID: StringList
        /**
         * Характеристики - Затрачиваемая мана
         */
        Cost: IntegerList
        /**
         * Характеристики - Область воздействия
         */
        Area: RealList
        /**
         * Характеристики - Относится к герою
         */
        hero: boolean
        /**
         * Характеристики - Относится к предмету
         */
        item: boolean
        /**
         * Характеристики - Перезарядка
         */
        Cool: RealList
        /**
         * Характеристики - Приоритет для кражи заклятия
         */
        priority: integer
        /**
         * Характеристики - Радиус действия
         */
        Rng: RealList
        /**
         * Характеристики - Разрешенные цели
         */
        targs: List<TargetType>
        /**
         * Характеристики - Раса
         */
        race: Race
        /**
         * Характеристики - Уровни
         */
        levels: integer
        /**
         * Характеристики - Эффекты
         */
        EfctID: StringList
    }

    export type AbilityDataInput = {
        parentId: rawcode
    } & Partial<AbilityDataBody>

    export type AbilityDataKeys = keyof AbilityDataBody
}
