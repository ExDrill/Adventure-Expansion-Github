tp @s[scores={south_count=6}] ~ ~ ~16
event entity @s south_start
tp @s ~ ~ ~16
event entity @s[scores={south_count=1..10}] frw_placeSouthHallway
event entity @s[scores={south_count=11}] frw_goToWestStageTwo
