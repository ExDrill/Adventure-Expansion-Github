tp @s[scores={south_count=6}] ~ ~ ~16
event entity @s south_start
tp @s ~ ~ ~16
event entity @s[scores={south_count=1..9}] frw_placeSouthHallway
event entity @s[scores={south_count=10}] frw_goToWestStageTwo
