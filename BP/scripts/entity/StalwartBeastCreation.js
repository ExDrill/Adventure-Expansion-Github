import { world, MinecraftBlockTypes, BlockLocation, Location, ExplosionOptions } from 'mojang-minecraft'

world.events.blockPlace.subscribe(blockPlace => {

    const placedBlock = blockPlace.block
    const dimension = blockPlace.dimension

    if (placedBlock.hasTag('pumpkin')) {

        const blockAboveLoc = dimension.getBlock(new BlockLocation(placedBlock.x, placedBlock.y + 1, placedBlock.z))
        const blockBelowLoc = dimension.getBlock(new BlockLocation(placedBlock.x, placedBlock.y - 1, placedBlock.z))

        if (blockAboveLoc.id == 'exdrill:stalwart_rock_block' && blockBelowLoc.id == 'exdrill:stalwart_rock_block') {

            for (let i = 0; i < 3; i++) {
                const blockLoc = dimension.getBlock(new BlockLocation(placedBlock.x, placedBlock.y + i - 1, placedBlock.z))
                blockLoc.setType(MinecraftBlockTypes.air)
            }
            dimension.spawnEntity("exdrill:stalwart_beast", new Location(placedBlock.x + 0.5, placedBlock.y, placedBlock.z + 0.5))
            
        }
    }
})

