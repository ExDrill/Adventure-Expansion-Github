execute as @a[c=1,tag=!finished] run gamerule commandblockoutput false
execute as @a[c=1,tag=!finished] run scoreboard objectives add stalwart_hammer dummy
tag @a[c=1,tag=!finished] add finished