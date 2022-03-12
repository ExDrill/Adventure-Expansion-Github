tp @s[scores={east_count=10}] ~16 ~ ~
event entity @s east_start
tp @s ~16 ~ ~
event entity @s[scores={east_count=6..13}] frw_placeEastHallway
event entity @s[scores={east_count=14}] frw_goToSouthStageTwo
