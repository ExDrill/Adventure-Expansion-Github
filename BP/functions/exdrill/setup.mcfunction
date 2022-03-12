execute @a[c=1,tag=!finished] ~ ~ ~ gamerule commandblockoutput false
execute @a[c=1,tag=!finished] ~ ~ ~ scoreboard objectives add stalwart_hammer dummy
tag @a[c=1,tag=!finished] add finished