import { world } from 'mojang-minecraft'

let firstLocation = [null, null, null]
let secondLocation = [null, null, null]


world.events.beforeItemUseOn.subscribe(param => {
    const item = param.item
    const player = param.source
    const dimension = param.source.dimension
    const block = dimension.getBlock(param.blockLocation)

    if (item.id == 'minecraft:blaze_rod' && player.getTags().includes('voidFiller')) {
        if (player.isSneaking == true) {
            secondLocation = [block.x, block.y, block.z]
            player.runCommand('title @s actionbar Marked second location!')
            
        } else {
            firstLocation = [block.x, block.y, block.z]
            player.runCommand('title @s actionbar Marked first location!')
        }   
    }
})

world.events.beforeChat.subscribe(param => {
    const message = param.message
    const player = param.sender

    const firstLocX = firstLocation[0]
    const firstLocY = firstLocation[1]
    const firstLocZ = firstLocation[2]
    const secondLocX = secondLocation[0]
    const secondLocY = secondLocation[1]
    const secondLocZ = secondLocation[2]
    
    if (message == '!void') {
        player.runCommand(`fill ${firstLocX} ${firstLocY} ${firstLocZ} ${secondLocX} ${secondLocY} ${secondLocZ} structure_void`)
    }
})