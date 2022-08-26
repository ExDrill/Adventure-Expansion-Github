import { world, Vector } from 'mojang-minecraft'

world.events.entityHit.subscribe(param => {
    const target = param.hitEntity
    const attacker = param.entity

    if (attacker.id == "exdrill:revenant") {

        const x = target.location.x - attacker.location.x
        const z = target.location.z - attacker.location.z
        let vector = new Vector(x, 0, z)

        let actualVector = new Vector(vector.x * 1.5, 0, vector.z * 1.5)

        target.setVelocity(actualVector)
    }
}) 