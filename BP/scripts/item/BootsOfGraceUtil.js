import { BlockLocation, MinecraftEffectTypes, world } from 'mojang-minecraft'


let airTicks = 0
let airBlocks = 0


world.events.tick.subscribe(tick => {

    const players = world.getPlayers()


    for (let player of players) {

        const dimension = world.getDimension(player.dimension.id)


        if (player.getTags().includes('bootsOfGrace')) {


            const blockBelowPlayer = dimension.getBlock(new BlockLocation(player.location.x, player.location.y, player.location.z))
            

            const blockBelowPlayer1 = dimension.getBlock(new BlockLocation(player.location.x, player.location.y - 1, player.location.z))
            const blockBelowPlayer2 = dimension.getBlock(new BlockLocation(player.location.x, player.location.y - 2, player.location.z))
            const blockBelowPlayer3 = dimension.getBlock(new BlockLocation(player.location.x, player.location.y - 3, player.location.z))

            if (blockBelowPlayer1.id == 'minecraft:air' &&  blockBelowPlayer2.id == 'minecraft:air' && blockBelowPlayer3.id == 'minecraft:air') {
                if (player.getItemCooldown('boots_of_grace') == 0) {
                    if (airTicks < 40) {
                        airTicks++
                        player.addEffect(MinecraftEffectTypes.slowFalling, 5, 0, false)
                    }
                }
            } else if (blockBelowPlayer1.id != 'minecraft:air') {

                let airTicksOnLand = airTicks
                if (airTicksOnLand > 0) {
                    player.startItemCooldown('boots_of_grace', (airTicksOnLand * 10) - (airTicksOnLand * 4))
                }
                airTicks = 0
            }

        }
    }
})