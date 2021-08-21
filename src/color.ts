export class Color {
    red: integer
    green: integer
    blue: integer
    alpha: integer

    constructor(red: integer, green: integer, blue: integer, alpha: integer = 0) {
        this.red = red
        this.green = green
        this.blue = blue
        this.alpha = alpha
    }
}

export const getLightningColor = (whichBolt: lightning) =>
    new Color(
        GetLightningColorR(whichBolt),
        GetLightningColorG(whichBolt),
        GetLightningColorB(whichBolt),
        GetLightningColorA(whichBolt)
    )
