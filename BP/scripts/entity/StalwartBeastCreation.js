import { world, MinecraftBlockTypes, BlockLocation, Location, ExplosionOptions } from 'mojang-minecraft'

const possibleDir = [
    [0, 0, 0], [0, 0, 0],
    [0, 0, 0], [0, 0, 0],
    [0, 0, 0], [0, 0, 0]
]

world.events.blockPlace.subscribe(blockPlace => {

    const placedBlock = blockPlace.block
    const dimension = blockPlace.dimension

    if (placedBlock.hasTag('pumpkin')) {
        
        let count = 0
        for (let i = 0; i < 3; i++) {

            
            const blockAtLocation = dimension.getBlock(placedBlock.location.offset(0, -i, 0))

            if (blockAtLocation.id == 'exdrill:stalwart_rock_block') {
                count++
            }
            console.error(count)
        }
        if (count == 2) {
            for (let i = 0; i < 3; i++) {

                const blockAtLocation = dimension.getBlock(placedBlock.location.offset(0, -i, 0))
                blockAtLocation.setType(MinecraftBlockTypes.air)
            }
            dimension.spawnEntity('exdrill:stalwart_beast', placedBlock.location)
        }
    }
})

