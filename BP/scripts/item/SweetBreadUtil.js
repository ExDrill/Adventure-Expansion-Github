import { world, EntityHealthComponent } from 'mojang-minecraft'

world.events.itemCompleteCharge.subscribe(param => {

    const item = param.itemStack
    const player = param.source
    const healthComponent = player.getComponent('minecraft:health')



    if (item.id == 'exdrill:sweet_bread') {

        healthComponent.setCurrent(healthComponent.current + 1)
        player.runCommand('particle minecraft:heart_particle ~ ~2 ~')
    }
})