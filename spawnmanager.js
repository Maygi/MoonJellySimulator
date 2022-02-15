
function spawnWave(game, number) {
	var objects = [];
	var powerups = [];
	var platforms = [];
	var instances = [];
	var enemies = [];
	switch(number) {
		case 3:
			instances = [
new Powerup(game, -344, 864, JELLY_COIN),

new Powerup(game, 2136, 2368, JELLY_COIN),

new Powerup(game, 504, 2496, JELLY_COIN),

new Powerup(game, 1016, 2672, JELLY_COIN),

new Powerup(game, 2968, 2800, JELLY_COIN),

new Powerup(game, -1752, 400, JELLY_COIN_SM),

new Powerup(game, -1656, 384, JELLY_COIN_SM),

new Powerup(game, -1576, 496, JELLY_COIN_SM),

new Powerup(game, -1560, 608, JELLY_COIN_SM),

new Powerup(game, -1560, 752, JELLY_COIN_SM),

new Powerup(game, -968, 1136, JELLY_COIN_SM),

new Powerup(game, -1112, 1136, JELLY_COIN_SM),

new Powerup(game, -1208, 1136, JELLY_COIN_SM),

new Powerup(game, -1304, 1136, JELLY_COIN_SM),

new Powerup(game, -1416, 1056, JELLY_COIN_SM),

new Powerup(game, -1416, 976, JELLY_COIN_SM),

new Powerup(game, -1336, 960, JELLY_COIN_SM),

new Powerup(game, -1272, 960, JELLY_COIN_SM),

new Powerup(game, -1208, 960, JELLY_COIN_SM),

new Powerup(game, -1144, 960, JELLY_COIN_SM),

new Powerup(game, -1080, 960, JELLY_COIN_SM),

new Powerup(game, -600, 816, JELLY_COIN_SM),

new Powerup(game, -600, 896, JELLY_COIN_SM),

new Powerup(game, -584, 976, JELLY_COIN_SM),

new Powerup(game, -584, 1056, JELLY_COIN_SM),

new Powerup(game, -584, 1136, JELLY_COIN_SM),

new Powerup(game, -568, 1216, JELLY_COIN_SM),

new Powerup(game, -568, 1296, JELLY_COIN_SM),

new Powerup(game, -568, 1376, JELLY_COIN_SM),

new Powerup(game, -568, 1456, JELLY_COIN_SM),

new Powerup(game, -568, 1536, JELLY_COIN_SM),

new Powerup(game, -456, 1568, JELLY_COIN_SM),

new Powerup(game, 232, 1680, JELLY_COIN_SM),

new Powerup(game, 616, 1680, JELLY_COIN_SM),

new Powerup(game, 696, 1616, JELLY_COIN_SM),

new Powerup(game, 792, 1568, JELLY_COIN_SM),

new Powerup(game, 904, 1584, JELLY_COIN_SM),

new Powerup(game, -72, 1232, JELLY_COIN_SM),

new Powerup(game, -8, 1360, JELLY_COIN_SM),

new Powerup(game, -120, 1120, JELLY_COIN_SM),

new Powerup(game, -168, 1024, JELLY_COIN_SM),

new Powerup(game, 40, 1456, JELLY_COIN_SM),

new Powerup(game, 88, 1568, JELLY_COIN_SM),

new Powerup(game, 152, 1680, JELLY_COIN_SM),

new Powerup(game, 312, 1680, JELLY_COIN_SM),

new Powerup(game, 392, 1680, JELLY_COIN_SM),

new Powerup(game, 472, 1680, JELLY_COIN_SM),

new Powerup(game, 568, 1680, JELLY_COIN_SM),

new Powerup(game, 1160, 1968, JELLY_COIN_SM),

new Powerup(game, 1224, 1968, JELLY_COIN_SM),

new Powerup(game, -136, 1936, JELLY_COIN_SM),

new Powerup(game, -184, 1936, JELLY_COIN_SM),

new Powerup(game, -232, 1936, JELLY_COIN_SM),

new Powerup(game, -280, 1936, JELLY_COIN_SM),

new Powerup(game, -264, 2096, JELLY_COIN_SM),

new Powerup(game, -312, 2096, JELLY_COIN_SM),

new Powerup(game, -360, 2096, JELLY_COIN_SM),

new Powerup(game, -216, 2224, JELLY_COIN_SM),

new Powerup(game, -408, 2096, JELLY_COIN_SM),

new Powerup(game, -264, 2224, JELLY_COIN_SM),

new Powerup(game, -312, 2224, JELLY_COIN_SM),

new Powerup(game, -360, 2224, JELLY_COIN_SM),

new Powerup(game, -408, 2224, JELLY_COIN_SM),

new Powerup(game, -456, 2224, JELLY_COIN_SM),

new Powerup(game, -504, 2224, JELLY_COIN_SM),

new Powerup(game, -600, 2576, JELLY_COIN_SM),

new Powerup(game, -520, 2576, JELLY_COIN_SM),

new Powerup(game, -440, 2576, JELLY_COIN_SM),

new Powerup(game, -360, 2576, JELLY_COIN_SM),

new Powerup(game, -280, 2576, JELLY_COIN_SM),

new Powerup(game, -200, 2576, JELLY_COIN_SM),

new Powerup(game, -24, 2592, JELLY_COIN_SM),

new Powerup(game, 72, 2592, JELLY_COIN_SM),

new Powerup(game, 184, 2560, JELLY_COIN_SM),

new Powerup(game, 296, 2528, JELLY_COIN_SM),

new Powerup(game, 408, 2512, JELLY_COIN_SM),

new Powerup(game, 600, 2512, JELLY_COIN_SM),

new Powerup(game, 680, 2528, JELLY_COIN_SM),

new Powerup(game, 776, 2560, JELLY_COIN_SM),

new Powerup(game, 856, 2608, JELLY_COIN_SM),

new Powerup(game, 936, 2656, JELLY_COIN_SM),

new Powerup(game, 1112, 2656, JELLY_COIN_SM),

new Powerup(game, 1160, 2512, JELLY_COIN_SM),

new Powerup(game, 1208, 2400, JELLY_COIN_SM),

new Powerup(game, 1272, 2304, JELLY_COIN_SM),

new Powerup(game, 1416, 2224, JELLY_COIN_SM),

new Powerup(game, 1656, 2352, JELLY_COIN_SM),

new Powerup(game, 1592, 2352, JELLY_COIN_SM),

new Powerup(game, 1608, 2496, JELLY_COIN_SM),

new Powerup(game, 1672, 2496, JELLY_COIN_SM),

new Powerup(game, 1592, 2800, JELLY_COIN_SM),

new Powerup(game, 1656, 2800, JELLY_COIN_SM),

new Powerup(game, 1720, 2800, JELLY_COIN_SM),

new Powerup(game, 1784, 2800, JELLY_COIN_SM),

new Powerup(game, 1992, 2704, JELLY_COIN_SM),

new Powerup(game, 2072, 2704, JELLY_COIN_SM),

new Powerup(game, 2152, 2704, JELLY_COIN_SM),

new Powerup(game, 2232, 2704, JELLY_COIN_SM),

new Powerup(game, 2312, 2704, JELLY_COIN_SM),

new Powerup(game, 2392, 2704, JELLY_COIN_SM),

new Powerup(game, 2344, 2464, JELLY_COIN_SM),

new Powerup(game, 2216, 2464, JELLY_COIN_SM),

new Powerup(game, 2088, 2464, JELLY_COIN_SM),

new Powerup(game, 1960, 2464, JELLY_COIN_SM),

new Powerup(game, 1976, 2208, JELLY_COIN_SM),

new Powerup(game, 2104, 2208, JELLY_COIN_SM),

new Powerup(game, 2232, 2208, JELLY_COIN_SM),

new Powerup(game, 2360, 2208, JELLY_COIN_SM),

new Powerup(game, 2488, 2208, JELLY_COIN_SM),

new Powerup(game, 2664, 2640, JELLY_COIN_SM),

new Powerup(game, 2712, 2640, JELLY_COIN_SM),

new Powerup(game, 2760, 2640, JELLY_COIN_SM),

new Powerup(game, 2808, 2640, JELLY_COIN_SM),

new Powerup(game, 2856, 2640, JELLY_COIN_SM),

new Powerup(game, 2984, 3184, JELLY_COIN_SM),

new Powerup(game, 2920, 3184, JELLY_COIN_SM),

new Powerup(game, 2856, 3184, JELLY_COIN_SM),

new Powerup(game, 2808, 3136, JELLY_COIN_SM),

new Powerup(game, 2728, 3120, JELLY_COIN_SM),

new Powerup(game, 2648, 3152, JELLY_COIN_SM),

new Powerup(game, 2488, 3152, JELLY_COIN_SM),

new Powerup(game, 2440, 3088, JELLY_COIN_SM),

new Powerup(game, 2344, 3072, JELLY_COIN_SM),

new Powerup(game, 2248, 3088, JELLY_COIN_SM),

new Powerup(game, 2200, 3152, JELLY_COIN_SM),

new Powerup(game, 2136, 3152, JELLY_COIN_SM),

new Powerup(game, 2072, 3152, JELLY_COIN_SM),

new Powerup(game, 1896, 3152, JELLY_COIN_SM),

new Powerup(game, 1832, 3152, JELLY_COIN_SM),

new Powerup(game, 1768, 3152, JELLY_COIN_SM),

new Powerup(game, 1496, 2304, ENTITY_MARKER),

new BubbleCurrent(game, 1912, 3232, -8),

new BubbleCurrent(game, 1912, 3296, -8),

new BubbleCurrent(game, -984, 928, 8),

new BubbleCurrent(game, 632, 1664, 8),

new BubbleCurrent(game, 632, 1600, 8),

new GasVent(game, -1256, 1376, 60, 0),

new GasVent(game, -1160, 1376, 60, 30),

new GasVent(game, -1064, 1376, 60, 0),

new GasVent(game, 552, 1728, 60, 0),

new GasVent(game, 584, 1728, 60, 0),

new GasVent(game, -488, 2656, 60, 0),

new GasVent(game, -328, 2656, 60, 0),

new GasVent(game, -568, 2656, 60, 30),

new GasVent(game, -408, 2656, 60, 30),

new GasVent(game, -248, 2656, 60, 30),

new GasVent(game, 2040, 2880, 60, 0),

new GasVent(game, 2104, 2880, 60, 30),

new GasVent(game, 2168, 2880, 60, 0),

new GasVent(game, 2232, 2880, 60, 30),

new GasVent(game, 2296, 2880, 60, 0),

new GasVent(game, 2360, 2880, 60, 30),

new GasVent(game, 2424, 2880, 60, 0),

new GasVent(game, 1976, 2880, 60, 30),

new GasVent(game, 2648, 2688, 60, 30),

new GasVent(game, 2680, 2688, 60, 30),

new GasVent(game, 2712, 2688, 60, 30),

new GasVent(game, 2744, 2688, 60, 0),

new GasVent(game, 2776, 2688, 60, 0),

new GasVent(game, 2808, 2688, 60, 0),

new GasVent(game, 1624, 3536, 60, 0),

new GasVent(game, 1752, 3536, 60, 30),

new AnglerSlime(game, -424, 1664),

new AnglerSlime(game, -1400, 1280),

new AnglerSlime(game, 1128, 1600),

new AnglerSlime(game, -568, 2080),

new AnglerSlime(game, 1592, 2624),

new AnglerSlime(game, 2648, 2272),

new AnglerSlime(game, 1640, 3136),

new AnglerSlime2(game, 24, 992),

new AnglerSlime2(game, 440, 1520),

new AnglerSlime2(game, -440, 1856),

new AnglerSlime2(game, -248, 2336),

new AnglerSlime2(game, 1912, 3104),

new AnglerSlime2(game, 1752, 3008),

new Virus(game, -136, 2576),

new Platform(game, -1432, 1088),

new Platform(game, -1432, 1008),

new Platform(game, -1368, 1008, 2, 0, 160),

new Platform(game, -504, 1600, 2, 0, 96),

new Platform(game, -376, 1472, -2, 0, 64),

new Platform(game, -312, 1408, -2, 0, 96),

new Platform(game, -376, 1344, -2, 0, 64),

new Platform(game, -440, 1280, -1, 0, 64),

new Platform(game, -504, 1216, 2, 0, 96),

new Platform(game, -440, 1152, -1, 0, 64),

new Platform(game, -440, 1536, 1, 0, 64),

new Platform(game, 1944, 2752, 2, 0, 224),

new Wall(game, -2104, 496, 32, 32),

new Wall(game, -2072, 496, 32, 32),

new Wall(game, -2040, 496, 32, 32),

new Wall(game, -2008, 496, 32, 32),

new Wall(game, -1976, 496, 32, 32),

new Wall(game, -1944, 496, 32, 32),

new Wall(game, -1912, 496, 32, 32),

new Wall(game, -1880, 496, 32, 32),

new Wall(game, -1848, 496, 32, 32),

new Wall(game, -1816, 496, 32, 32),

new Wall(game, -1656, 1344, 32, 32),

new Wall(game, -1624, 1344, 32, 32),

new Wall(game, -1592, 1344, 32, 32),

new Wall(game, -1560, 1344, 32, 32),

new Wall(game, -1528, 1344, 32, 32),

new Wall(game, -1496, 1344, 32, 32),

new Wall(game, -1464, 1344, 32, 32),

new Wall(game, -1432, 1344, 32, 32),

new Wall(game, -1400, 1344, 32, 32),

new Wall(game, -1368, 1344, 32, 32),

new Wall(game, -792, 1024, 32, 32),

new Wall(game, -792, 1056, 32, 32),

new Wall(game, -792, 1088, 32, 32),

new Wall(game, -792, 1120, 32, 32),

new Wall(game, -792, 1152, 32, 32),

new Wall(game, -792, 1184, 32, 32),

new Wall(game, -792, 1216, 32, 32),

new Wall(game, -792, 1248, 32, 32),

new Wall(game, -792, 1280, 32, 32),

new Wall(game, -792, 1312, 32, 32),

new Wall(game, -792, 1344, 32, 32),

new Wall(game, -1144, 704, 32, 32),

new Wall(game, -1112, 704, 32, 32),

new Wall(game, -1080, 704, 32, 32),

new Wall(game, -1048, 704, 32, 32),

new Wall(game, -1016, 704, 32, 32),

new Wall(game, -984, 704, 32, 32),

new Wall(game, -952, 704, 32, 32),

new Wall(game, -920, 704, 32, 32),

new Wall(game, -888, 704, 32, 32),

new Wall(game, -856, 704, 32, 32),

new Wall(game, -824, 704, 32, 32),

new Wall(game, -792, 704, 32, 32),

new Wall(game, -1144, 672, 32, 32),

new Wall(game, -1112, 672, 32, 32),

new Wall(game, -1080, 672, 32, 32),

new Wall(game, -1048, 672, 32, 32),

new Wall(game, -1016, 672, 32, 32),

new Wall(game, -984, 672, 32, 32),

new Wall(game, -952, 672, 32, 32),

new Wall(game, -920, 672, 32, 32),

new Wall(game, -888, 672, 32, 32),

new Wall(game, -856, 672, 32, 32),

new Wall(game, -824, 672, 32, 32),

new Wall(game, -792, 672, 32, 32),

new Wall(game, -760, 704, 32, 32),

new Wall(game, -728, 704, 32, 32),

new Wall(game, -696, 704, 32, 32),

new Wall(game, -664, 704, 32, 32),

new Wall(game, -632, 704, 32, 32),

new Wall(game, -600, 704, 32, 32),

new Wall(game, -568, 704, 32, 32),

new Wall(game, -536, 704, 32, 32),

new Wall(game, -536, 736, 32, 32),

new Wall(game, -536, 768, 32, 32),

new Wall(game, -536, 800, 32, 32),

new Wall(game, -536, 832, 32, 32),

new Wall(game, -536, 864, 32, 32),

new Wall(game, -536, 896, 32, 32),

new Wall(game, -536, 928, 32, 32),

new Wall(game, -536, 960, 32, 32),

new Wall(game, -536, 992, 32, 32),

new Wall(game, -536, 1024, 32, 32),

new Wall(game, -536, 1056, 32, 32),

new Wall(game, -536, 1088, 32, 32),

new Wall(game, -536, 1120, 32, 32),

new Wall(game, -536, 1152, 32, 32),

new Wall(game, -536, 1184, 32, 32),

new Wall(game, -536, 1216, 32, 32),

new Wall(game, -536, 1248, 32, 32),

new Wall(game, -536, 1280, 32, 32),

new Wall(game, -536, 1312, 32, 32),

new Wall(game, -536, 1344, 32, 32),

new Wall(game, -536, 1376, 32, 32),

new Wall(game, -680, 1344, 32, 32),

new Wall(game, -696, 1344, 32, 32),

new Wall(game, -680, 1376, 32, 32),

new Wall(game, -680, 1408, 32, 32),

new Wall(game, -680, 1440, 32, 32),

new Wall(game, -680, 1472, 32, 32),

new Wall(game, -680, 1504, 32, 32),

new Wall(game, -680, 1536, 32, 32),

new Wall(game, -680, 1568, 32, 32),

new Wall(game, -680, 1600, 32, 32),

new Wall(game, -536, 1408, 32, 32),

new Wall(game, -536, 1440, 32, 32),

new Wall(game, -536, 1472, 32, 32),

new Wall(game, -536, 1504, 32, 32),

new Wall(game, -536, 1536, 32, 32),

new Wall(game, -536, 1568, 32, 32),

new Wall(game, -536, 1600, 32, 32),

new Wall(game, -680, 1632, 32, 32),

new Wall(game, -680, 1664, 32, 32),

new Wall(game, -680, 1728, 32, 32),

new Wall(game, -648, 1728, 32, 32),

new Wall(game, -616, 1728, 32, 32),

new Wall(game, -584, 1728, 32, 32),

new Wall(game, -552, 1728, 32, 32),

new Wall(game, -520, 1728, 32, 32),

new Wall(game, -488, 1728, 32, 32),

new Wall(game, -456, 1728, 32, 32),

new Wall(game, -424, 1728, 32, 32),

new Wall(game, -680, 1696, 32, 32),

new Wall(game, -392, 1728, 32, 32),

new Wall(game, -360, 1728, 32, 32),

new Wall(game, -360, 1696, 32, 32),

new Wall(game, -360, 928, 32, 32),

new Wall(game, -360, 960, 32, 32),

new Wall(game, -360, 1120, 32, 32),

new Wall(game, -360, 1152, 32, 32),

new Wall(game, -360, 1184, 32, 32),

new Wall(game, -360, 1216, 32, 32),

new Wall(game, -360, 1248, 32, 32),

new Wall(game, -360, 1280, 32, 32),

new Wall(game, -360, 1312, 32, 32),

new Wall(game, -360, 1344, 32, 32),

new Wall(game, -360, 1376, 32, 32),

new Wall(game, -360, 1408, 32, 32),

new Wall(game, -360, 1440, 32, 32),

new Wall(game, -360, 1472, 32, 32),

new Wall(game, -360, 1504, 32, 32),

new Wall(game, -360, 1536, 32, 32),

new Wall(game, -360, 1568, 32, 32),

new Wall(game, -360, 1600, 32, 32),

new Wall(game, -360, 1632, 32, 32),

new Wall(game, -360, 1664, 32, 32),

new Wall(game, -504, 704, 32, 32),

new Wall(game, -472, 704, 32, 32),

new Wall(game, -440, 704, 32, 32),

new Wall(game, -408, 704, 32, 32),

new Wall(game, -376, 704, 32, 32),

new Wall(game, -344, 704, 32, 32),

new Wall(game, -312, 704, 32, 32),

new Wall(game, -280, 704, 32, 32),

new Wall(game, -248, 704, 32, 32),

new Wall(game, -216, 704, 32, 32),

new Wall(game, -184, 704, 32, 32),

new Wall(game, -152, 704, 32, 32),

new Wall(game, -120, 704, 32, 32),

new Wall(game, -88, 704, 32, 32),

new Wall(game, -56, 704, 32, 32),

new Wall(game, -24, 704, 32, 32),

new Wall(game, 8, 704, 32, 32),

new Wall(game, 40, 704, 32, 32),

new Wall(game, 72, 704, 32, 32),

new Wall(game, 104, 704, 32, 32),

new Wall(game, 136, 704, 32, 32),

new Wall(game, 168, 704, 32, 32),

new Wall(game, -328, 928, 32, 32),

new Wall(game, -328, 960, 32, 32),

new Wall(game, -328, 1120, 32, 32),

new Wall(game, -328, 1152, 32, 32),

new Wall(game, -328, 1184, 32, 32),

new Wall(game, -328, 1216, 32, 32),

new Wall(game, -328, 1248, 32, 32),

new Wall(game, -328, 1280, 32, 32),

new Wall(game, -328, 1312, 32, 32),

new Wall(game, -328, 1344, 32, 32),

new Wall(game, -328, 1376, 32, 32),

new Wall(game, -328, 1408, 32, 32),

new Wall(game, -328, 1440, 32, 32),

new Wall(game, -328, 1472, 32, 32),

new Wall(game, -328, 1504, 32, 32),

new Wall(game, -328, 1536, 32, 32),

new Wall(game, -328, 1568, 32, 32),

new Wall(game, -328, 1600, 32, 32),

new Wall(game, -328, 1632, 32, 32),

new Wall(game, -328, 1664, 32, 32),

new Wall(game, -328, 1696, 32, 32),

new Wall(game, -328, 1728, 32, 32),

new Wall(game, -296, 1120, 32, 32),

new Wall(game, -296, 1152, 32, 32),

new Wall(game, -296, 1184, 32, 32),

new Wall(game, -296, 1216, 32, 32),

new Wall(game, -296, 1248, 32, 32),

new Wall(game, -296, 1280, 32, 32),

new Wall(game, -296, 1312, 32, 32),

new Wall(game, -296, 1344, 32, 32),

new Wall(game, -296, 1376, 32, 32),

new Wall(game, -296, 1408, 32, 32),

new Wall(game, -296, 1440, 32, 32),

new Wall(game, -296, 1472, 32, 32),

new Wall(game, -296, 1504, 32, 32),

new Wall(game, -296, 1536, 32, 32),

new Wall(game, -296, 1568, 32, 32),

new Wall(game, -296, 1600, 32, 32),

new Wall(game, -296, 1632, 32, 32),

new Wall(game, -296, 1664, 32, 32),

new Wall(game, -296, 1696, 32, 32),

new Wall(game, -296, 1728, 32, 32),

new Wall(game, -264, 1056, 32, 32),

new Wall(game, -264, 1088, 32, 32),

new Wall(game, -264, 1120, 32, 32),

new Wall(game, -264, 1152, 32, 32),

new Wall(game, -264, 1184, 32, 32),

new Wall(game, -264, 1216, 32, 32),

new Wall(game, -264, 1248, 32, 32),

new Wall(game, -264, 1280, 32, 32),

new Wall(game, -264, 1312, 32, 32),

new Wall(game, -264, 1344, 32, 32),

new Wall(game, -264, 1376, 32, 32),

new Wall(game, -264, 1408, 32, 32),

new Wall(game, -264, 1440, 32, 32),

new Wall(game, -264, 1472, 32, 32),

new Wall(game, -264, 1504, 32, 32),

new Wall(game, -264, 1536, 32, 32),

new Wall(game, -264, 1568, 32, 32),

new Wall(game, -264, 1600, 32, 32),

new Wall(game, -264, 1632, 32, 32),

new Wall(game, -264, 1664, 32, 32),

new Wall(game, -264, 1696, 32, 32),

new Wall(game, -264, 1728, 32, 32),

new Wall(game, -232, 1120, 32, 32),

new Wall(game, -232, 1152, 32, 32),

new Wall(game, -232, 1184, 32, 32),

new Wall(game, -232, 1216, 32, 32),

new Wall(game, -232, 1248, 32, 32),

new Wall(game, -232, 1280, 32, 32),

new Wall(game, -232, 1312, 32, 32),

new Wall(game, -232, 1344, 32, 32),

new Wall(game, -232, 1376, 32, 32),

new Wall(game, -232, 1408, 32, 32),

new Wall(game, -232, 1440, 32, 32),

new Wall(game, -232, 1472, 32, 32),

new Wall(game, -232, 1504, 32, 32),

new Wall(game, -232, 1536, 32, 32),

new Wall(game, -232, 1568, 32, 32),

new Wall(game, -232, 1600, 32, 32),

new Wall(game, -232, 1632, 32, 32),

new Wall(game, -232, 1664, 32, 32),

new Wall(game, -232, 1696, 32, 32),

new Wall(game, -232, 1728, 32, 32),

new Wall(game, -200, 1184, 32, 32),

new Wall(game, -200, 1216, 32, 32),

new Wall(game, -200, 1248, 32, 32),

new Wall(game, -200, 1280, 32, 32),

new Wall(game, -200, 1312, 32, 32),

new Wall(game, -200, 1344, 32, 32),

new Wall(game, -200, 1376, 32, 32),

new Wall(game, -200, 1408, 32, 32),

new Wall(game, -200, 1440, 32, 32),

new Wall(game, -200, 1472, 32, 32),

new Wall(game, -200, 1504, 32, 32),

new Wall(game, -200, 1536, 32, 32),

new Wall(game, -200, 1568, 32, 32),

new Wall(game, -200, 1600, 32, 32),

new Wall(game, -200, 1632, 32, 32),

new Wall(game, -200, 1664, 32, 32),

new Wall(game, -200, 1696, 32, 32),

new Wall(game, -200, 1728, 32, 32),

new Wall(game, -168, 1248, 32, 32),

new Wall(game, -168, 1280, 32, 32),

new Wall(game, -168, 1312, 32, 32),

new Wall(game, -168, 1344, 32, 32),

new Wall(game, -168, 1376, 32, 32),

new Wall(game, -168, 1408, 32, 32),

new Wall(game, -168, 1440, 32, 32),

new Wall(game, -168, 1472, 32, 32),

new Wall(game, -168, 1504, 32, 32),

new Wall(game, -168, 1536, 32, 32),

new Wall(game, -168, 1568, 32, 32),

new Wall(game, -168, 1600, 32, 32),

new Wall(game, -168, 1632, 32, 32),

new Wall(game, -168, 1664, 32, 32),

new Wall(game, -168, 1696, 32, 32),

new Wall(game, -168, 1728, 32, 32),

new Wall(game, -136, 1312, 32, 32),

new Wall(game, -136, 1344, 32, 32),

new Wall(game, -136, 1376, 32, 32),

new Wall(game, -136, 1408, 32, 32),

new Wall(game, -136, 1440, 32, 32),

new Wall(game, -136, 1472, 32, 32),

new Wall(game, -136, 1504, 32, 32),

new Wall(game, -136, 1536, 32, 32),

new Wall(game, -136, 1568, 32, 32),

new Wall(game, -136, 1600, 32, 32),

new Wall(game, -136, 1632, 32, 32),

new Wall(game, -136, 1664, 32, 32),

new Wall(game, -136, 1696, 32, 32),

new Wall(game, -136, 1728, 32, 32),

new Wall(game, -104, 1376, 32, 32),

new Wall(game, -104, 1408, 32, 32),

new Wall(game, -104, 1440, 32, 32),

new Wall(game, -104, 1472, 32, 32),

new Wall(game, -104, 1504, 32, 32),

new Wall(game, -104, 1536, 32, 32),

new Wall(game, -104, 1568, 32, 32),

new Wall(game, -104, 1600, 32, 32),

new Wall(game, -104, 1632, 32, 32),

new Wall(game, -104, 1664, 32, 32),

new Wall(game, -104, 1696, 32, 32),

new Wall(game, -104, 1728, 32, 32),

new Wall(game, -72, 1440, 32, 32),

new Wall(game, -72, 1472, 32, 32),

new Wall(game, -72, 1504, 32, 32),

new Wall(game, -72, 1536, 32, 32),

new Wall(game, -72, 1568, 32, 32),

new Wall(game, -72, 1600, 32, 32),

new Wall(game, -72, 1632, 32, 32),

new Wall(game, -72, 1664, 32, 32),

new Wall(game, -72, 1696, 32, 32),

new Wall(game, -72, 1728, 32, 32),

new Wall(game, -40, 1504, 32, 32),

new Wall(game, -40, 1536, 32, 32),

new Wall(game, -40, 1568, 32, 32),

new Wall(game, -40, 1600, 32, 32),

new Wall(game, -40, 1632, 32, 32),

new Wall(game, -40, 1664, 32, 32),

new Wall(game, -40, 1696, 32, 32),

new Wall(game, -40, 1728, 32, 32),

new Wall(game, -8, 1568, 32, 32),

new Wall(game, -8, 1600, 32, 32),

new Wall(game, -8, 1632, 32, 32),

new Wall(game, -8, 1664, 32, 32),

new Wall(game, -8, 1696, 32, 32),

new Wall(game, -8, 1728, 32, 32),

new Wall(game, 24, 1632, 32, 32),

new Wall(game, 24, 1664, 32, 32),

new Wall(game, 24, 1696, 32, 32),

new Wall(game, 24, 1728, 32, 32),

new Wall(game, 56, 1696, 32, 32),

new Wall(game, 56, 1728, 32, 32),

new Wall(game, 88, 1728, 32, 32),

new Wall(game, 120, 1728, 32, 32),

new Wall(game, 152, 1728, 32, 32),

new Wall(game, 184, 1728, 32, 32),

new Wall(game, 216, 1728, 32, 32),

new Wall(game, 248, 1728, 32, 32),

new Wall(game, 280, 1728, 32, 32),

new Wall(game, 312, 1728, 32, 32),

new Wall(game, 344, 1728, 32, 32),

new Wall(game, 376, 1728, 32, 32),

new Wall(game, 408, 1728, 32, 32),

new Wall(game, 440, 1728, 32, 32),

new Wall(game, 472, 1728, 32, 32),

new Wall(game, 1272, 1664, 32, 32),

new Wall(game, 1272, 1632, 32, 32),

new Wall(game, 1272, 1440, 32, 32),

new Wall(game, 1272, 1472, 32, 32),

new Wall(game, 1272, 1504, 32, 32),

new Wall(game, 1272, 1536, 32, 32),

new Wall(game, 1272, 1568, 32, 32),

new Wall(game, 1272, 1600, 32, 32),

new Wall(game, 1240, 1440, 32, 32),

new Wall(game, 632, 1440, 32, 32),

new Wall(game, 664, 1440, 32, 32),

new Wall(game, 696, 1440, 32, 32),

new Wall(game, 728, 1440, 32, 32),

new Wall(game, 760, 1440, 32, 32),

new Wall(game, 792, 1440, 32, 32),

new Wall(game, 824, 1440, 32, 32),

new Wall(game, 856, 1440, 32, 32),

new Wall(game, 1048, 1440, 32, 32),

new Wall(game, 1080, 1440, 32, 32),

new Wall(game, 1112, 1440, 32, 32),

new Wall(game, 1144, 1440, 32, 32),

new Wall(game, 1176, 1440, 32, 32),

new Wall(game, 1208, 1440, 32, 32),

new Wall(game, 888, 1440, 32, 32),

new Wall(game, 920, 1440, 32, 32),

new Wall(game, 952, 1440, 32, 32),

new Wall(game, 984, 1440, 32, 32),

new Wall(game, 1016, 1440, 32, 32),

new Wall(game, 1272, 1696, 32, 32),

new Wall(game, 1272, 1728, 32, 32),

new Wall(game, 1272, 1760, 32, 32),

new Wall(game, 1272, 1792, 32, 32),

new Wall(game, 1272, 1824, 32, 32),

new Wall(game, 1272, 1856, 32, 32),

new Wall(game, 1272, 1888, 32, 32),

new Wall(game, 1272, 1920, 32, 32),

new Wall(game, 1272, 1952, 32, 32),

new Wall(game, 1272, 1984, 32, 32),

new Wall(game, 1272, 2016, 32, 32),

new Wall(game, 1272, 2048, 32, 32),

new Wall(game, 1272, 2080, 32, 32),

new Wall(game, 1272, 2112, 32, 32),

new Wall(game, 632, 2112, 32, 32),

new Wall(game, 664, 2112, 32, 32),

new Wall(game, 696, 2112, 32, 32),

new Wall(game, 728, 2112, 32, 32),

new Wall(game, 760, 2112, 32, 32),

new Wall(game, 792, 2112, 32, 32),

new Wall(game, 824, 2112, 32, 32),

new Wall(game, 856, 2112, 32, 32),

new Wall(game, 888, 2112, 32, 32),

new Wall(game, 920, 2112, 32, 32),

new Wall(game, 952, 2112, 32, 32),

new Wall(game, 984, 2112, 32, 32),

new Wall(game, 1016, 2112, 32, 32),

new Wall(game, 1048, 2112, 32, 32),

new Wall(game, 1080, 2112, 32, 32),

new Wall(game, 1112, 2112, 32, 32),

new Wall(game, 1144, 2112, 32, 32),

new Wall(game, 1176, 2112, 32, 32),

new Wall(game, 1208, 2112, 32, 32),

new Wall(game, 1240, 2112, 32, 32),

new Wall(game, -104, 2112, 32, 32),

new Wall(game, -72, 2112, 32, 32),

new Wall(game, -40, 2112, 32, 32),

new Wall(game, -8, 2112, 32, 32),

new Wall(game, 24, 2112, 32, 32),

new Wall(game, 56, 2112, 32, 32),

new Wall(game, 88, 2112, 32, 32),

new Wall(game, 120, 2112, 32, 32),

new Wall(game, 152, 2112, 32, 32),

new Wall(game, 184, 2112, 32, 32),

new Wall(game, 216, 2112, 32, 32),

new Wall(game, 248, 2112, 32, 32),

new Wall(game, 280, 2112, 32, 32),

new Wall(game, 312, 2112, 32, 32),

new Wall(game, 344, 2112, 32, 32),

new Wall(game, 376, 2112, 32, 32),

new Wall(game, 408, 2112, 32, 32),

new Wall(game, 440, 2112, 32, 32),

new Wall(game, 472, 2112, 32, 32),

new Wall(game, 504, 2112, 32, 32),

new Wall(game, 536, 2112, 32, 32),

new Wall(game, 568, 2112, 32, 32),

new Wall(game, 600, 2112, 32, 32),

new Wall(game, -136, 2112, 32, 32),

new Wall(game, -136, 2080, 32, 32),

new Wall(game, -136, 2048, 32, 32),

new Wall(game, -136, 2016, 32, 32),

new Wall(game, -136, 1984, 32, 32),

new Wall(game, -168, 1984, 32, 32),

new Wall(game, -200, 1984, 32, 32),

new Wall(game, -232, 1984, 32, 32),

new Wall(game, -264, 1984, 32, 32),

new Wall(game, -296, 1984, 32, 32),

new Wall(game, -360, 992, 32, 32),

new Wall(game, -360, 1024, 32, 32),

new Wall(game, -360, 1056, 32, 32),

new Wall(game, -360, 1088, 32, 32),

new Wall(game, -328, 992, 32, 32),

new Wall(game, -328, 1024, 32, 32),

new Wall(game, -328, 1056, 32, 32),

new Wall(game, -328, 1088, 32, 32),

new Wall(game, -296, 1024, 32, 32),

new Wall(game, -296, 1056, 32, 32),

new Wall(game, -296, 1088, 32, 32),

new Wall(game, 1144, 1664, 32, 32),

new Wall(game, 1176, 1664, 32, 32),

new Wall(game, -136, 2144, 32, 32),

new Wall(game, -136, 2176, 32, 32),

new Wall(game, -136, 2208, 32, 32),

new Wall(game, -136, 2240, 32, 32),

new Wall(game, -136, 2272, 32, 32),

new Wall(game, -680, 2432, 32, 32),

new Wall(game, -680, 2464, 32, 32),

new Wall(game, -680, 2496, 32, 32),

new Wall(game, -680, 2528, 32, 32),

new Wall(game, -680, 2560, 32, 32),

new Wall(game, -680, 2592, 32, 32),

new Wall(game, -680, 2624, 32, 32),

new Wall(game, -648, 2624, 32, 32),

new Wall(game, -616, 2624, 32, 32),

new Wall(game, -168, 2624, 32, 32),

new Wall(game, -136, 2624, 32, 32),

new Wall(game, -136, 2656, 32, 32),

new Wall(game, -136, 2688, 32, 32),

new Wall(game, -136, 2720, 32, 32),

new Wall(game, -136, 2752, 32, 32),

new Wall(game, -136, 2784, 32, 32),

new Wall(game, -136, 2304, 32, 32),

new Wall(game, -136, 2336, 32, 32),

new Wall(game, -136, 2368, 32, 32),

new Wall(game, -136, 2400, 32, 32),

new Wall(game, -136, 2432, 32, 32),

new Wall(game, -136, 2464, 32, 32),

new Wall(game, -136, 2496, 32, 32),

new Wall(game, -136, 2528, 32, 32),

new Wall(game, 472, 2144, 32, 32),

new Wall(game, 472, 2176, 32, 32),

new Wall(game, 472, 2208, 32, 32),

new Wall(game, 472, 2240, 32, 32),

new Wall(game, 472, 2272, 32, 32),

new Wall(game, 472, 2304, 32, 32),

new Wall(game, 472, 2336, 32, 32),

new Wall(game, 472, 2368, 32, 32),

new Wall(game, 472, 2400, 32, 32),

new Wall(game, 472, 2432, 32, 32),

new Wall(game, 1048, 2144, 32, 32),

new Wall(game, 1048, 2176, 32, 32),

new Wall(game, 1048, 2208, 32, 32),

new Wall(game, 1048, 2240, 32, 32),

new Wall(game, 1048, 2272, 32, 32),

new Wall(game, 1048, 2304, 32, 32),

new Wall(game, 1048, 2336, 32, 32),

new Wall(game, 1048, 2368, 32, 32),

new Wall(game, 1048, 2400, 32, 32),

new Wall(game, 1048, 2432, 32, 32),

new Wall(game, 1048, 2464, 32, 32),

new Wall(game, 1048, 2496, 32, 32),

new Wall(game, 1048, 2528, 32, 32),

new Wall(game, 1048, 2560, 32, 32),

new Wall(game, 1464, 2304, 32, 32),

new Wall(game, 1496, 2272, 32, 32),

new Wall(game, 1528, 2240, 32, 32),

new Wall(game, 1560, 2240, 32, 32),

new Wall(game, 1592, 2240, 32, 32),

new Wall(game, 1624, 2240, 32, 32),

new Wall(game, 1656, 2240, 32, 32),

new Wall(game, 1304, 2112, 32, 32),

new Wall(game, 1336, 2112, 32, 32),

new Wall(game, 1368, 2112, 32, 32),

new Wall(game, 1400, 2112, 32, 32),

new Wall(game, 1432, 2112, 32, 32),

new Wall(game, 1464, 2112, 32, 32),

new Wall(game, 1496, 2112, 32, 32),

new Wall(game, 1528, 2112, 32, 32),

new Wall(game, 1560, 2112, 32, 32),

new Wall(game, 1592, 2112, 32, 32),

new Wall(game, 1624, 2112, 32, 32),

new Wall(game, 1656, 2112, 32, 32),

new Wall(game, 1688, 2112, 32, 32),

new Wall(game, 1720, 2112, 32, 32),

new Wall(game, 1752, 2112, 32, 32),

new Wall(game, 1784, 2112, 32, 32),

new Wall(game, 1784, 2144, 32, 32),

new Wall(game, 1784, 2176, 32, 32),

new Wall(game, 1784, 2208, 32, 32),

new Wall(game, 1784, 2240, 32, 32),

new Wall(game, 1784, 2272, 32, 32),

new Wall(game, 1784, 2304, 32, 32),

new Wall(game, 1784, 2336, 32, 32),

new Wall(game, 1784, 2368, 32, 32),

new Wall(game, 1784, 2400, 32, 32),

new Wall(game, 1784, 2432, 32, 32),

new Wall(game, 1784, 2464, 32, 32),

new Wall(game, 1784, 2496, 32, 32),

new Wall(game, 1784, 2528, 32, 32),

new Wall(game, 1784, 2560, 32, 32),

new Wall(game, 1528, 2272, 32, 32),

new Wall(game, 1496, 2304, 32, 32),

new Wall(game, 1784, 2592, 32, 32),

new Wall(game, 1784, 2624, 32, 32),

new Wall(game, 1784, 2656, 32, 32),

new Wall(game, 1784, 2688, 32, 32),

new Wall(game, 1464, 2816, 32, 32),

new Wall(game, 1464, 2848, 32, 32),

new Wall(game, 1496, 2848, 32, 32),

new Wall(game, 1528, 2848, 32, 32),

new Wall(game, 1560, 2848, 32, 32),

new Wall(game, 1592, 2848, 32, 32),

new Wall(game, 1624, 2848, 32, 32),

new Wall(game, 1656, 2848, 32, 32),

new Wall(game, 1688, 2848, 32, 32),

new Wall(game, 1720, 2848, 32, 32),

new Wall(game, 1752, 2848, 32, 32),

new Wall(game, 1784, 2848, 32, 32),

new Wall(game, 1752, 2240, 32, 32),

new Wall(game, 1816, 2816, 32, 32),

new Wall(game, 1816, 2848, 32, 32),

new Wall(game, 1848, 2816, 32, 32),

new Wall(game, 1848, 2848, 32, 32),

new Wall(game, 1880, 2848, 32, 32),

new Wall(game, 1880, 2816, 32, 32),

new Wall(game, 1880, 2784, 32, 32),

new Wall(game, 1880, 2752, 32, 32),

new Wall(game, 1912, 2752, 32, 32),

new Wall(game, 1912, 2784, 32, 32),

new Wall(game, 1912, 2816, 32, 32),

new Wall(game, 1912, 2848, 32, 32),

new Wall(game, 1944, 2848, 32, 32),

new Wall(game, 1976, 2848, 32, 32),

new Wall(game, 2008, 2848, 32, 32),

new Wall(game, 2040, 2848, 32, 32),

new Wall(game, 2072, 2848, 32, 32),

new Wall(game, 2104, 2848, 32, 32),

new Wall(game, 2136, 2848, 32, 32),

new Wall(game, 2168, 2848, 32, 32),

new Wall(game, 2008, 2880, 32, 32),

new Wall(game, 2072, 2880, 32, 32),

new Wall(game, 2136, 2880, 32, 32),

new Wall(game, 2200, 2848, 32, 32),

new Wall(game, 2232, 2848, 32, 32),

new Wall(game, 2264, 2848, 32, 32),

new Wall(game, 2200, 2880, 32, 32),

new Wall(game, 2296, 2848, 32, 32),

new Wall(game, 2328, 2848, 32, 32),

new Wall(game, 2360, 2848, 32, 32),

new Wall(game, 2392, 2848, 32, 32),

new Wall(game, 2424, 2848, 32, 32),

new Wall(game, 2264, 2880, 32, 32),

new Wall(game, 2328, 2880, 32, 32),

new Wall(game, 2392, 2880, 32, 32),

new Wall(game, 2456, 2848, 32, 32),

new Wall(game, 2456, 2880, 32, 32),

new Wall(game, 2456, 2816, 32, 32),

new Wall(game, 2456, 2784, 32, 32),

new Wall(game, 2488, 2784, 32, 32),

new Wall(game, 2488, 2816, 32, 32),

new Wall(game, 2488, 2848, 32, 32),

new Wall(game, 2520, 2816, 32, 32),

new Wall(game, 2520, 2848, 32, 32),

new Wall(game, 2520, 2336, 32, 32),

new Wall(game, 2520, 2368, 32, 32),

new Wall(game, 2520, 2400, 32, 32),

new Wall(game, 2520, 2432, 32, 32),

new Wall(game, 2520, 2464, 32, 32),

new Wall(game, 2520, 2496, 32, 32),

new Wall(game, 2520, 2528, 32, 32),

new Wall(game, 2520, 2560, 32, 32),

new Wall(game, 2520, 2592, 32, 32),

new Wall(game, 2520, 2624, 32, 32),

new Wall(game, 2520, 2656, 32, 32),

new Wall(game, 2520, 2688, 32, 32),

new Wall(game, 2520, 2720, 32, 32),

new Wall(game, 2520, 2752, 32, 32),

new Wall(game, 2520, 2784, 32, 32),

new Wall(game, 2552, 2336, 32, 32),

new Wall(game, 1784, 1952, 32, 32),

new Wall(game, 1784, 1984, 32, 32),

new Wall(game, 1784, 2016, 32, 32),

new Wall(game, 1784, 2048, 32, 32),

new Wall(game, 1784, 2080, 32, 32),

new Wall(game, 1816, 1952, 32, 32),

new Wall(game, 1848, 1952, 32, 32),

new Wall(game, 1880, 1952, 32, 32),

new Wall(game, 1912, 1952, 32, 32),

new Wall(game, 1944, 1952, 32, 32),

new Wall(game, 1976, 1952, 32, 32),

new Wall(game, 2008, 1952, 32, 32),

new Wall(game, 2040, 1952, 32, 32),

new Wall(game, 2072, 1952, 32, 32),

new Wall(game, 2104, 1952, 32, 32),

new Wall(game, 2136, 1952, 32, 32),

new Wall(game, 2168, 1952, 32, 32),

new Wall(game, 2200, 1952, 32, 32),

new Wall(game, 2232, 1952, 32, 32),

new Wall(game, 2264, 1952, 32, 32),

new Wall(game, 2296, 1952, 32, 32),

new Wall(game, 2328, 1952, 32, 32),

new Wall(game, 2360, 1952, 32, 32),

new Wall(game, 2392, 1952, 32, 32),

new Wall(game, 2424, 1952, 32, 32),

new Wall(game, 2456, 1952, 32, 32),

new Wall(game, 2488, 1952, 32, 32),

new Wall(game, 2520, 1952, 32, 32),

new Wall(game, 1432, 2336, 32, 32),

new Wall(game, 1400, 2368, 32, 32),

new Wall(game, 1432, 2368, 32, 32),

new Wall(game, 2552, 1952, 32, 32),

new Wall(game, 2584, 1952, 32, 32),

new Wall(game, 2616, 1952, 32, 32),

new Wall(game, 2648, 1952, 32, 32),

new Wall(game, 2680, 1952, 32, 32),

new Wall(game, 2712, 1952, 32, 32),

new Wall(game, 2744, 1952, 32, 32),

new Wall(game, 2776, 1952, 32, 32),

new Wall(game, 2808, 1952, 32, 32),

new Wall(game, 2840, 1952, 32, 32),

new Wall(game, 2872, 1952, 32, 32),

new Wall(game, 2904, 1952, 32, 32),

new Wall(game, 2904, 1984, 32, 32),

new Wall(game, 2904, 2016, 32, 32),

new Wall(game, 2904, 2048, 32, 32),

new Wall(game, 2904, 2080, 32, 32),

new Wall(game, 2904, 2112, 32, 32),

new Wall(game, 2904, 2144, 32, 32),

new Wall(game, 2904, 2176, 32, 32),

new Wall(game, 2904, 2208, 32, 32),

new Wall(game, 2904, 2240, 32, 32),

new Wall(game, 2904, 2272, 32, 32),

new Wall(game, 2904, 2304, 32, 32),

new Wall(game, 2904, 2336, 32, 32),

new Wall(game, 2904, 2368, 32, 32),

new Wall(game, 2904, 2400, 32, 32),

new Wall(game, 2904, 2432, 32, 32),

new Wall(game, 2904, 2464, 32, 32),

new Wall(game, 2904, 2496, 32, 32),

new Wall(game, 2904, 2528, 32, 32),

new Wall(game, 2904, 2560, 32, 32),

new Wall(game, 2904, 2592, 32, 32),

new Wall(game, 2904, 2624, 32, 32),

new Wall(game, 2904, 2656, 32, 32),

new Wall(game, 2936, 2688, 32, 32),

new Wall(game, 2968, 2688, 32, 32),

new Wall(game, 3000, 2688, 32, 32),

new Wall(game, 2808, 3232, 32, 32),

new Wall(game, 2840, 3232, 32, 32),

new Wall(game, 2872, 3232, 32, 32),

new Wall(game, 2904, 3232, 32, 32),

new Wall(game, 2936, 3232, 32, 32),

new Wall(game, 2968, 3232, 32, 32),

new Wall(game, 3000, 3232, 32, 32),

new Wall(game, 1624, 3200, 32, 32),

new Wall(game, 1656, 3200, 32, 32),

new Wall(game, 1688, 3200, 32, 32),

new Wall(game, 1720, 3200, 32, 32),

new Wall(game, 1752, 3200, 32, 32),

new Wall(game, 1784, 3200, 32, 32),

new Wall(game, 1464, 2880, 32, 32),

new Wall(game, 1464, 2912, 32, 32),

new Wall(game, 1464, 2944, 32, 32),

new Wall(game, 1464, 2976, 32, 32),

new Wall(game, 1464, 3008, 32, 32),

new Wall(game, 1464, 3040, 32, 32),

new Wall(game, 1464, 3072, 32, 32),

new Wall(game, 1464, 3104, 32, 32),

new Wall(game, 1464, 3136, 32, 32),

new Wall(game, 1464, 3168, 32, 32),

new Wall(game, 2424, 3424, 32, 32),

new Wall(game, 2456, 3424, 32, 32),

new Wall(game, 2488, 3424, 32, 32),

new Platform(game, -504, 1712, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, -504, 1088, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, -984, 1248, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -984, 1168, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -1224, 1168, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -1128, 1168, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -1320, 1168, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1208, 2032, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1096, 2032, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 936, 2032, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 824, 2032, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 712, 2032, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 600, 2032, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 504, 2032, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 440, 1968, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 296, 1968, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 200, 1904, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 72, 2016, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -56, 1952, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1160, 2032, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1528, 2400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1688, 2544, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1528, 2688, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1688, 2240, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2328, 2496, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2200, 2496, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2072, 2496, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1944, 2496, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1816, 2240, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1944, 2240, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2072, 2240, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2200, 2240, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2328, 2240, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2456, 2240, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -648, 2272, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2584, 2688, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -744, 928, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 1208, 1664, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 2456, 2688, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 2456, 2624, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 2456, 2560, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 1816, 2432, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 1816, 2368, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 1816, 2304, 0, 0, 0, PLATFORM_FADE, 0),

new Wall(game, -2200, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -2168, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -2136, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -2104, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -2072, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -2040, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -2008, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -1976, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -1944, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -1912, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -1880, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -1848, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -1816, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -1784, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -1752, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -1720, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -1688, 624, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -760, 1296, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -712, 1296, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -648, 1680, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -616, 1680, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 664, 1872, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 696, 1872, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 728, 1872, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 760, 1872, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 792, 1872, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 824, 1872, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 856, 1872, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 888, 1872, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 920, 1872, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -104, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -72, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -40, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -8, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 24, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 56, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 88, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 120, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 152, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 184, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 216, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 248, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 280, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 312, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 344, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 376, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 408, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 440, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 472, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 504, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 536, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 568, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 600, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 632, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 664, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 696, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 728, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 760, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 792, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 824, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 856, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 888, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 920, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 952, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 984, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1016, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1048, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1080, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1112, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1144, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1176, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1208, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1240, 2064, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -104, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -72, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -40, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -8, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 24, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 56, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 88, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 120, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 152, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 184, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 216, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 248, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 280, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 312, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 344, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 376, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 408, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 440, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 504, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 536, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 568, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 600, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 632, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 664, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 696, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 728, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 760, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 792, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 824, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 856, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 888, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 920, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 952, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 984, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1016, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1048, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1080, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1112, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1144, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1176, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1208, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1240, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1272, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1304, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1336, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1368, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1400, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1432, 2736, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1528, 2496, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1720, 2640, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1528, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1496, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1752, 2640, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1496, 2496, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1720, 2352, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1752, 2352, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1944, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 1976, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2008, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2040, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2072, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2104, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2136, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2168, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2200, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2232, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2264, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2296, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2328, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2360, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2392, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2424, 2800, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2648, 2800, 32, 32, WALL_SPIKE_UP, 1, 0),

new Wall(game, 2680, 2800, 32, 32, WALL_SPIKE_UP, 1, 0),

new Wall(game, 2712, 2800, 32, 32, WALL_SPIKE_UP, 1, 0),

new Wall(game, 2792, 2800, 32, 32, WALL_SPIKE_UP, 1, 0),

new Wall(game, 2824, 2800, 32, 32, WALL_SPIKE_UP, 1, 0),

new Wall(game, 2856, 2800, 32, 32, WALL_SPIKE_UP, 1, 0),

new Wall(game, 2616, 3184, 32, 32, WALL_SPIKE_UP, 1, 0),

new Wall(game, 2648, 3184, 32, 32, WALL_SPIKE_UP, 1, 0),

new Wall(game, 2680, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2712, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2744, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2776, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2456, 3152, 32, 32, WALL_SPIKE_UP, 1, 60),

new Wall(game, 2488, 3152, 32, 32, WALL_SPIKE_UP, 1, 60),

new Wall(game, 2520, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2552, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2584, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2424, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2392, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2360, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2328, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2296, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2264, 3152, 32, 32, WALL_SPIKE_UP, 1, 0),

new Wall(game, 2232, 3152, 32, 32, WALL_SPIKE_UP, 1, 0),

new Wall(game, 2200, 3152, 32, 32, WALL_SPIKE_UP, 1, 0),

new Wall(game, 1976, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, 2008, 3280, 32, 32, WALL_SPIKE_UP, 0, 0),

new Wall(game, -1656, 672, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1656, 720, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1656, 768, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1656, 816, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1656, 864, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1656, 912, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1656, 960, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1656, 1008, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1656, 1056, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1656, 1104, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1656, 1152, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1656, 1200, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1656, 1248, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1656, 1296, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, 2936, 2880, 32, 32, WALL_SPIKE_RIGHT, 1, 0),

new Wall(game, 2936, 2944, 32, 32, WALL_SPIKE_RIGHT, 1, 0),

new Wall(game, 1496, 3248, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, 1496, 3280, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, 1496, 3312, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, 1496, 3344, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, 1496, 3376, 32, 32, WALL_SPIKE_RIGHT, 0, 0),

new Wall(game, -1448, 0, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1448, 48, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1448, 96, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1448, 144, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1448, 192, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1448, 240, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1448, 288, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1448, 336, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1448, 384, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1448, 432, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1448, 480, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1448, 528, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1448, 576, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1448, 624, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1512, 704, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1512, 752, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1512, 800, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1512, 848, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1512, 896, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1512, 944, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1512, 992, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1512, 1040, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1512, 1088, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -1512, 1136, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -840, 1024, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -840, 1072, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -840, 1120, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -840, 1168, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -840, 1216, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -840, 1264, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 928, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 960, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 992, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1024, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1056, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1088, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1120, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1152, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1184, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1216, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1248, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1280, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1312, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1344, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1376, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1408, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1440, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1472, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1504, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1536, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -408, 1568, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 424, 2160, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 424, 2208, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 424, 2256, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 424, 2304, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 424, 2352, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 424, 2400, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 424, 2576, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 424, 2624, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 424, 2672, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1000, 2160, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1000, 2208, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1000, 2256, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1000, 2304, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1000, 2352, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1000, 2400, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1000, 2448, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1000, 2496, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1000, 2544, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1416, 2400, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1416, 2448, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1416, 2496, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1416, 2544, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1416, 2592, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1416, 2640, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 1416, 2688, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 2984, 2880, 32, 32, WALL_SPIKE_LEFT, 1, 0),

new Wall(game, 2984, 2944, 32, 32, WALL_SPIKE_LEFT, 1, 0),

new Wall(game, 2856, 2032, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 2856, 2080, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 2856, 2128, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 2856, 2176, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 2856, 2224, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, 2856, 2272, 32, 32, WALL_SPIKE_LEFT, 0, 0),

new Wall(game, -2200, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -2168, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -2136, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -2104, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -2072, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -2040, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -2008, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1976, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1944, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1912, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1880, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1848, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1816, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1784, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1752, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1720, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1688, 0, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1432, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1400, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1368, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1336, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1304, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1272, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1240, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1208, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1176, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1144, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1112, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1080, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1048, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -1016, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -984, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -952, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -920, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -888, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -856, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -824, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -792, 736, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 632, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 664, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 696, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 728, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 760, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 792, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 824, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 856, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 888, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 920, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 952, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 984, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1016, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1048, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1080, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1112, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1144, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1176, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1208, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1240, 1472, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -104, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -72, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -40, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -8, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 24, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 56, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 88, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 120, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 152, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 184, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 216, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 248, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 280, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 312, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 344, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 376, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 408, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 440, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 472, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 504, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 536, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 568, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 600, 1760, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1816, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1848, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1880, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1912, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1944, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 1976, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2008, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2040, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2072, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2104, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2136, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2168, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2200, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2232, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2264, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2296, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2328, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2360, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2392, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2424, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2456, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2488, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2520, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2072, 3360, 32, 32, WALL_SPIKE_DOWN, 1, 0),

new Wall(game, 2200, 3360, 32, 32, WALL_SPIKE_DOWN, 1, 0),

new Wall(game, 2104, 3360, 32, 32, WALL_SPIKE_DOWN, 1, 0),

new Wall(game, 2232, 3360, 32, 32, WALL_SPIKE_DOWN, 1, 0),

new Wall(game, 2552, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2584, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2616, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2648, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2680, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2712, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2744, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2776, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2808, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2840, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, 2872, 1984, 32, 32, WALL_SPIKE_DOWN, 0, 0),

new Wall(game, -2200, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -2168, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -2136, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -2104, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -2072, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -2040, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -2008, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1976, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1944, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1912, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1880, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1848, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1816, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1784, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1752, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1720, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -2200, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -2168, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -2136, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -2104, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -2072, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -2040, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -2008, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1976, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1944, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1912, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1880, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1848, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1816, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1784, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1752, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1720, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 768, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 832, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 864, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 896, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 928, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 960, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 992, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 768, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 832, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 864, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 896, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 928, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 960, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 992, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1432, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1368, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1336, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1304, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1272, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1240, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1208, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1176, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1432, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1368, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1336, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1304, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1272, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1240, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1208, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1176, 704, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 352, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 384, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 416, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 480, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 512, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 544, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 576, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 608, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 640, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 192, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 0, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 32, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 64, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 96, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 128, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 160, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 224, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 256, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 288, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1400, 320, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 1024, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 1056, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 1088, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 1120, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 1152, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 1216, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 1248, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 1280, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 1024, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 1056, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 1088, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 1120, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1464, 1152, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 1312, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -984, 992, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -952, 992, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -920, 992, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -888, 992, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -856, 992, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -824, 992, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -792, 992, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 928, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 960, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 992, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1024, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1056, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1088, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1120, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1152, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1216, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1248, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1280, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1312, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -760, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -728, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 632, 1760, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 632, 1792, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 632, 1824, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 632, 1856, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 632, 1888, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 632, 1920, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 664, 1920, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 696, 1920, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 728, 1920, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 760, 1920, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 792, 1920, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 824, 1920, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 856, 1920, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 888, 1920, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 920, 1920, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 952, 1920, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 952, 1696, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 952, 1728, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 952, 1760, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 952, 1792, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 952, 1824, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 952, 1856, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 952, 1888, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 504, 1728, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 536, 1728, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 568, 1728, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 600, 1728, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 632, 1728, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1760, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1792, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1824, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1856, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1888, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1920, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1952, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 1984, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 2016, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 2048, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 2080, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 2112, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 2176, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 2208, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 2240, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 2304, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 2336, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 2368, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 2400, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -104, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -72, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -40, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -8, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 24, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 56, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 88, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 120, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 152, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 184, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 216, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 248, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 280, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 312, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 344, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 376, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 408, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 440, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 472, 2560, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 472, 2592, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 472, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 472, 2656, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 472, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 472, 2720, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 472, 2752, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 472, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 504, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 536, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 568, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 600, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 632, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 664, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 696, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 728, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 760, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 792, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 824, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 856, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 888, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 920, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 952, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 984, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1016, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1048, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1080, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1112, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1144, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1176, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1208, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1240, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1272, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1304, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1336, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1368, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1400, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1432, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2336, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2368, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2400, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2432, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2464, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2496, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2528, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2560, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2592, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2656, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2720, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 2752, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1304, 1312, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1272, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1240, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1208, 1312, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1176, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1144, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1112, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1080, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1048, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1016, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -984, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -952, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1112, 1312, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1016, 1312, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1208, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1304, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1336, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -920, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -888, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -856, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -824, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -680, 896, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -296, 960, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -296, 992, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -264, 992, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -264, 1024, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -232, 1024, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -232, 1056, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -232, 1088, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -200, 1088, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -200, 1120, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -200, 1152, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -168, 1152, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -168, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -168, 1216, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -136, 1216, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -136, 1248, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -136, 1280, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -104, 1280, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -104, 1312, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -104, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -72, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -72, 1376, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -40, 1408, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -72, 1408, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -40, 1440, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -40, 1472, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -8, 1472, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -8, 1504, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -8, 1536, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 24, 1536, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 24, 1568, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 24, 1600, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 56, 1600, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 56, 1632, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 56, 1664, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 88, 1664, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 88, 1696, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 952, 1664, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 984, 1664, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1016, 1664, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1048, 1664, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1080, 1664, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1112, 1664, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -648, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -616, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -584, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -552, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -520, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -488, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -456, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -424, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -392, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -360, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -328, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -296, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -264, 2144, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -584, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -552, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -520, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -488, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -456, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -424, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -392, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -360, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -328, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -296, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -264, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -232, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -200, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -168, 2272, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -584, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -552, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -520, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -488, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -456, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -424, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -392, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -360, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -328, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -296, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -264, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -232, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -200, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1592, 2400, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1496, 2400, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1624, 2400, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1656, 2400, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1688, 2400, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1720, 2400, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1752, 2400, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1496, 2544, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1528, 2544, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1560, 2544, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1592, 2544, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1624, 2544, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1656, 2544, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1752, 2544, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1496, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1592, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1624, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1656, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1688, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1720, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1752, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2456, 2752, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2488, 2752, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2584, 2336, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2616, 2336, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2648, 2336, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2680, 2336, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2712, 2336, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2744, 2336, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2648, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2680, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2712, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2744, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2776, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2808, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2840, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2872, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2904, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2648, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2680, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2712, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2744, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2776, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2808, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2840, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2872, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2584, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2616, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2904, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2584, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2616, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2648, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2680, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2712, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2744, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2776, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2808, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2840, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2872, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2904, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2584, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2616, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2648, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2680, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2712, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2744, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2776, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2808, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2840, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2872, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2904, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2904, 2944, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2904, 2976, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2904, 3008, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2904, 3040, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2904, 3072, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2904, 3104, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2872, 2944, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2872, 2976, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2872, 3008, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2872, 3040, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2872, 3072, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2840, 2944, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2840, 2976, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2840, 3008, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2840, 3040, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2808, 2944, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2808, 2976, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2808, 3008, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 2720, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 2752, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 2816, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 2944, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 2976, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 3008, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 3040, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 3072, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 3104, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 2720, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 2752, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 2816, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 2944, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 2976, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 3008, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 3040, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 3072, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 3104, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 2720, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 2752, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 2816, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 2880, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 2912, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 2944, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 2976, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 3008, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 3040, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 3072, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 3104, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 3136, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 3168, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 3136, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 3168, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 3136, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 3168, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3032, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3064, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 3096, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2616, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2648, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2616, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2648, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2616, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2648, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2616, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2648, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2680, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2712, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2744, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2776, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2808, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2808, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2808, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2584, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2520, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2488, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2456, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2456, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2488, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2488, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2456, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2456, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2488, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2488, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2456, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2296, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2328, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2360, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2392, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2424, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2040, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1944, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1912, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1880, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1944, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1944, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1944, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1944, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1976, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2008, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2040, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2040, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2040, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2040, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1848, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1816, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2072, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2104, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2136, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2168, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2200, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2232, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2264, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2072, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2104, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2136, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2168, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2200, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2232, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2264, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2072, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2104, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2136, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2168, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2200, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2232, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2264, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2072, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2104, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2136, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2168, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2200, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2232, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2264, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2072, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2104, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2136, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2168, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2200, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2232, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2264, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1944, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1976, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2008, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2040, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2072, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2104, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2136, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2168, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2200, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2232, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2264, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2296, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2328, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2360, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2392, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2368, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2400, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2432, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2464, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2496, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2528, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2560, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2592, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2624, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2656, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2688, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2720, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2752, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2784, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2816, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 2552, 2848, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 3200, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 3232, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 3264, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 3296, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 3328, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 3360, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 3392, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1464, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1496, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1528, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1560, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1592, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1624, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1656, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1688, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1720, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1752, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1784, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1816, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1848, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1880, 3424, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 1912, 3424, 32, 32, WALL_NOCHECKPOINT),



			];
		break;
		case 1:
			objects = [		
				new Spaceship(game, -2400, 370),
				new LivingKelp(game, 6168, 224),
			];
			powerups = [
			];
			platforms = [
/*new Platform(game, -2144, 400, 0, 0, 0, PLATFORM_FADE, 0),
new Platform(game, -2144 + 64, 400, 0, 0, 0, PLATFORM_FADE, 0),
new Platform(game, -2144, 400 - 48, 0, 0, 0, PLATFORM_BREAK, 170),
new Platform(game, -2144 + 64, 400 - 48, 0, 0, 0, PLATFORM_BREAK, 170),
new Platform(game, -2144 + 64 + 64 + 64, 400 - 48, 2, 0, 170, PLATFORM_FIRE, 170),
new Platform(game, -2144 + 64 + 64 + 64 + 64, 400 - 48, 2, 0, 170, PLATFORM_FIRE, 170),*/

new Platform(game, -1544, 400),

new Platform(game, -1480, 400),

new Platform(game, -1416, 400),

new Platform(game, -1352, 400),

new Platform(game, -1288, 400),

new Platform(game, -1224, 368),

new Platform(game, -1160, 336),

new Platform(game, -968, 304),

new Platform(game, -1032, 304),

new Platform(game, -904, 304),

new Platform(game, -584, 304),

new Platform(game, -520, 304),

new Platform(game, -584, 352),

new Platform(game, -520, 352),

new Platform(game, -520, 400),

new Platform(game, -584, 400),

new Platform(game, -72, 352),

new Platform(game, -72, 400),

new Platform(game, 760, 256),

new Platform(game, 760, 192),

new Platform(game, 1208, 400),

new Platform(game, 1208, 336),

new Platform(game, 2568, 160),

new Platform(game, 3448, 224, 2, 0, 64),

new Platform(game, 3896, 224, 2, 0, 96),

new Platform(game, 4280, 160),

new Platform(game, 4280, 224),

new Platform(game, 4216, 272),

new Platform(game, 4920, 384),

new Platform(game, 4856, 384),

new Platform(game, 5272, 160, 2, 0, 64),

new Platform(game, 5720, 160, 0, 2, 128),

new Wall(game, -1096, 432, 32, 32),

new Wall(game, -1096, 400, 32, 32),

new Wall(game, -1096, 368, 32, 32),

new Wall(game, -1096, 336, 32, 32),

new Wall(game, -1096, 304, 32, 32),

new Wall(game, -1064, 304, 32, 32),

new Wall(game, -840, 304, 32, 32),

new Wall(game, -808, 304, 32, 32),

new Wall(game, -808, 336, 32, 32),

new Wall(game, -808, 368, 32, 32),

new Wall(game, -808, 400, 32, 32),

new Wall(game, -808, 432, 32, 32),

new Wall(game, -776, 304, 32, 32),

new Wall(game, -776, 272, 32, 32),

new Wall(game, -744, 304, 32, 32),

new Wall(game, -744, 240, 32, 32),

new Wall(game, -712, 208, 32, 32),

new Wall(game, -712, 304, 32, 32),

new Wall(game, -680, 176, 32, 32),

new Wall(game, -680, 304, 32, 32),

new Wall(game, -648, 144, 32, 32),

new Wall(game, -648, 304, 32, 32),

new Wall(game, -616, 112, 32, 32),

new Wall(game, -584, 112, 32, 32),

new Wall(game, -552, 112, 32, 32),

new Wall(game, -520, 112, 32, 32),

new Wall(game, -488, 112, 32, 32),

new Wall(game, -456, 112, 32, 32),

new Wall(game, -424, 112, 32, 32),

new Wall(game, -392, 112, 32, 32),

new Wall(game, -360, 112, 32, 32),

new Wall(game, -328, 112, 32, 32),

new Wall(game, -296, 112, 32, 32),

new Wall(game, -264, 112, 32, 32),

new Wall(game, -232, 112, 32, 32),

new Wall(game, -200, 112, 32, 32),

new Wall(game, -168, 112, 32, 32),

new Wall(game, -136, 112, 32, 32),

new Wall(game, -104, 112, 32, 32),

new Wall(game, -8, 112, 32, 32),

new Wall(game, -8, 80, 32, 32),

new Wall(game, -8, 48, 32, 32),

new Wall(game, -8, 16, 32, 32),

new Wall(game, -8, -16, 32, 32),

new Wall(game, -8, 144, 32, 32),

new Wall(game, -8, 176, 32, 32),

new Wall(game, -8, 208, 32, 32),

new Wall(game, -40, 208, 32, 32),

new Wall(game, -72, 208, 32, 32),

new Wall(game, -104, 208, 32, 32),

new Wall(game, -136, 208, 32, 32),

new Wall(game, -168, 208, 32, 32),

new Wall(game, -200, 208, 32, 32),

new Wall(game, -232, 208, 32, 32),

new Wall(game, -264, 208, 32, 32),

new Wall(game, -296, 208, 32, 32),

new Wall(game, -328, 208, 32, 32),

new Wall(game, -360, 208, 32, 32),

new Wall(game, -392, 208, 32, 32),

new Wall(game, -424, 208, 32, 32),

new Wall(game, -456, 208, 32, 32),

new Wall(game, -488, 208, 32, 32),

new Wall(game, -616, 304, 32, 32),

new Wall(game, -456, 304, 32, 32),

new Wall(game, -328, 304, 32, 32),

new Wall(game, -296, 304, 32, 32),

new Wall(game, -264, 304, 32, 32),

new Wall(game, -232, 304, 32, 32),

new Wall(game, -200, 304, 32, 32),

new Wall(game, -168, 304, 32, 32),

new Wall(game, -136, 304, 32, 32),

new Wall(game, -104, 304, 32, 32),

new Wall(game, -424, 304, 32, 32),

new Wall(game, -360, 304, 32, 32),

new Wall(game, -392, 304, 32, 32),

new Wall(game, -104, 336, 32, 32),

new Wall(game, -104, 368, 32, 32),

new Wall(game, -104, 400, 32, 32),

new Wall(game, -104, 432, 32, 32),

new Wall(game, -712, 240, 32, 32),

new Wall(game, -680, 208, 32, 32),

new Wall(game, -648, 176, 32, 32),

new Wall(game, -616, 144, 32, 32),

new Wall(game, 584, 128, 32, 32),

new Wall(game, 584, 160, 32, 32),

new Wall(game, 584, 192, 32, 32),

new Wall(game, 584, 224, 32, 32),

new Wall(game, 584, 256, 32, 32),

new Wall(game, 584, 288, 32, 32),

new Wall(game, 584, 320, 32, 32),

new Wall(game, 584, 352, 32, 32),

new Wall(game, 584, 384, 32, 32),

new Wall(game, 584, 416, 32, 32),

new Wall(game, 584, 448, 32, 32),

new Wall(game, 728, 0, 32, 32),

new Wall(game, 728, 32, 32, 32),

new Wall(game, 728, 64, 32, 32),

new Wall(game, 728, 96, 32, 32),

new Wall(game, 728, 128, 32, 32),

new Wall(game, 728, 160, 32, 32),

new Wall(game, 728, 192, 32, 32),

new Wall(game, 728, 224, 32, 32),

new Wall(game, 728, 256, 32, 32),

new Wall(game, 728, 288, 32, 32),

new Wall(game, 728, 320, 32, 32),

new Wall(game, 760, 320, 32, 32),

new Wall(game, 1272, 448, 32, 32),

new Wall(game, 1272, 416, 32, 32),

new Wall(game, 1272, 384, 32, 32),

new Wall(game, 1272, 352, 32, 32),

new Wall(game, 1272, 320, 32, 32),

new Wall(game, 1272, 288, 32, 32),

new Wall(game, 1272, 256, 32, 32),

new Wall(game, 1272, 224, 32, 32),

new Wall(game, 1272, 192, 32, 32),

new Wall(game, 1272, 160, 32, 32),

new Wall(game, 824, 144, 32, 32),

new Wall(game, 856, 144, 32, 32),

new Wall(game, 888, 144, 32, 32),

new Wall(game, 984, 144, 32, 32),

new Wall(game, 1016, 144, 32, 32),

new Wall(game, 1048, 144, 32, 32),

new Wall(game, 1080, 144, 32, 32),

new Wall(game, 1112, 144, 32, 32),

new Wall(game, 1144, 144, 32, 32),

new Wall(game, 1176, 144, 32, 32),

new Wall(game, 1208, 144, 32, 32),

new Wall(game, 1240, 144, 32, 32),

new Wall(game, 1864, 432, 32, 32),

new Wall(game, 1864, 400, 32, 32),

new Wall(game, 1864, 368, 32, 32),

new Wall(game, 1832, 400, 32, 32),

new Wall(game, 1832, 432, 32, 32),

new Wall(game, 2344, 0, 32, 32),

new Wall(game, 2376, 0, 32, 32),

new Wall(game, 2408, 0, 32, 32),

new Wall(game, 2440, 0, 32, 32),

new Wall(game, 2472, 0, 32, 32),

new Wall(game, 2504, 0, 32, 32),

new Wall(game, 2536, 0, 32, 32),

new Wall(game, 2568, 0, 32, 32),

new Wall(game, 2600, 0, 32, 32),

new Wall(game, 2312, 0, 32, 32),

new Wall(game, 2312, 32, 32, 32),

new Wall(game, 2312, 64, 32, 32),

new Wall(game, 2312, 96, 32, 32),

new Wall(game, 2312, 128, 32, 32),

new Wall(game, 2312, 160, 32, 32),

new Wall(game, 2312, 192, 32, 32),

new Wall(game, 2312, 224, 32, 32),

new Wall(game, 2312, 256, 32, 32),

new Wall(game, 2344, 256, 32, 32),

new Wall(game, 2376, 256, 32, 32),

new Wall(game, 2408, 256, 32, 32),

new Wall(game, 2440, 256, 32, 32),

new Wall(game, 2472, 256, 32, 32),

new Wall(game, 2504, 256, 32, 32),

new Wall(game, 2536, 256, 32, 32),

new Wall(game, 2568, 256, 32, 32),

new Wall(game, 2600, 256, 32, 32),

new Wall(game, -744, 272, 32, 32),

new Wall(game, -712, 272, 32, 32),

new Wall(game, -680, 240, 32, 32),

new Wall(game, -680, 272, 32, 32),

new Wall(game, -648, 208, 32, 32),

new Wall(game, -648, 240, 32, 32),

new Wall(game, -648, 272, 32, 32),

new Wall(game, -616, 176, 32, 32),

new Wall(game, -616, 208, 32, 32),

new Wall(game, -616, 240, 32, 32),

new Wall(game, -616, 272, 32, 32),

new Wall(game, 2904, 336, 32, 32),

new Wall(game, 2904, 304, 32, 32),

new Wall(game, 2904, 272, 32, 32),

new Wall(game, 2904, 240, 32, 32),

new Wall(game, 2904, 208, 32, 32),

new Wall(game, 2904, 176, 32, 32),

new Wall(game, 2904, 144, 32, 32),

new Wall(game, 2632, 144, 32, 32),

new Wall(game, 2632, 176, 32, 32),

new Wall(game, 2632, 208, 32, 32),

new Wall(game, 2632, 240, 32, 32),

new Wall(game, 3416, 224, 32, 32),

new Wall(game, 3416, 256, 32, 32),

new Wall(game, 3416, 288, 32, 32),

new Wall(game, 3416, 320, 32, 32),

new Wall(game, 3416, 352, 32, 32),

new Wall(game, 3416, 384, 32, 32),

new Wall(game, 3416, 416, 32, 32),

new Wall(game, 3416, 448, 32, 32),

new Wall(game, 2904, 112, 32, 32),

new Wall(game, 4344, 160, 32, 32),

new Wall(game, 4344, 192, 32, 32),

new Wall(game, 4344, 224, 32, 32),

new Wall(game, 4344, 256, 32, 32),

new Wall(game, 4344, 288, 32, 32),

new Wall(game, 4344, 320, 32, 32),

new Wall(game, 4344, 352, 32, 32),

new Wall(game, 4344, 384, 32, 32),

new Wall(game, 4344, 416, 32, 32),

new Wall(game, 4344, 448, 32, 32),

new Wall(game, 4696, 320, 32, 32),

new Wall(game, 4728, 320, 32, 32),

new Wall(game, 4760, 320, 32, 32),

new Wall(game, 4696, 352, 32, 32),

new Wall(game, 4696, 384, 32, 32),

new Wall(game, 4696, 416, 32, 32),

new Wall(game, 4696, 448, 32, 32),

new Wall(game, 4664, 384, 32, 32),

new Wall(game, 4664, 416, 32, 32),

new Wall(game, 4664, 448, 32, 32),

new Wall(game, 4728, 352, 32, 32),

new Wall(game, 4760, 352, 32, 32),

new Wall(game, 4728, 384, 32, 32),

new Wall(game, 4728, 416, 32, 32),

new Wall(game, 4760, 416, 32, 32),

new Wall(game, 4728, 448, 32, 32),

new Wall(game, 4760, 448, 32, 32),

new Wall(game, 4792, 0, 32, 32),

new Wall(game, 4792, 32, 32, 32),

new Wall(game, 4792, 64, 32, 32),

new Wall(game, 4792, 96, 32, 32),

new Wall(game, 4792, 128, 32, 32),

new Wall(game, 4792, 160, 32, 32),

new Wall(game, 4792, 192, 32, 32),

new Wall(game, 4824, 192, 32, 32),

new Wall(game, 4824, 160, 32, 32),

new Wall(game, 4824, 128, 32, 32),

new Wall(game, 4824, 96, 32, 32),

new Wall(game, 4824, 64, 32, 32),

new Wall(game, 4824, 32, 32, 32),

new Wall(game, 4824, 0, 32, 32),

new Wall(game, 4856, 0, 32, 32),

new Wall(game, 4856, 32, 32, 32),

new Wall(game, 4856, 64, 32, 32),

new Wall(game, 4856, 96, 32, 32),

new Wall(game, 4856, 128, 32, 32),

new Wall(game, 4856, 160, 32, 32),

new Wall(game, 4856, 192, 32, 32),

new Wall(game, 4888, 192, 32, 32),

new Wall(game, 4888, 160, 32, 32),

new Wall(game, 4888, 128, 32, 32),

new Wall(game, 4888, 96, 32, 32),

new Wall(game, 4888, 64, 32, 32),

new Wall(game, 4888, 32, 32, 32),

new Wall(game, 4888, 0, 32, 32),

new Wall(game, 4920, 0, 32, 32),

new Wall(game, 4920, 32, 32, 32),

new Wall(game, 4920, 64, 32, 32),

new Wall(game, 4920, 96, 32, 32),

new Wall(game, 4920, 128, 32, 32),

new Wall(game, 4920, 160, 32, 32),

new Wall(game, 4920, 192, 32, 32),

new Wall(game, 4952, 192, 32, 32),

new Wall(game, 4984, 192, 32, 32),

new Wall(game, 5016, 192, 32, 32),

new Wall(game, 5144, 192, 32, 32),

new Wall(game, 5176, 192, 32, 32),

new Wall(game, 5176, 160, 32, 32),

new Wall(game, 4952, 0, 32, 32),

new Wall(game, 4984, 0, 32, 32),

new Wall(game, 5016, 0, 32, 32),

new Wall(game, 5048, 0, 32, 32),

new Wall(game, 5080, 0, 32, 32),

new Wall(game, 5112, 0, 32, 32),

new Wall(game, 5144, 0, 32, 32),

new Wall(game, 5176, 0, 32, 32),

new Wall(game, 4952, 32, 32, 32),

new Wall(game, 4984, 32, 32, 32),

new Wall(game, 5016, 32, 32, 32),

new Wall(game, 5048, 32, 32, 32),

new Wall(game, 5080, 32, 32, 32),

new Wall(game, 5112, 32, 32, 32),

new Wall(game, 5144, 32, 32, 32),

new Wall(game, 5176, 32, 32, 32),

new Wall(game, 4952, 64, 32, 32),

new Wall(game, 4984, 64, 32, 32),

new Wall(game, 5016, 64, 32, 32),

new Wall(game, 4952, 96, 32, 32),

new Wall(game, 4984, 96, 32, 32),

new Wall(game, 5016, 96, 32, 32),

new Wall(game, 4952, 128, 32, 32),

new Wall(game, 4984, 128, 32, 32),

new Wall(game, 5016, 128, 32, 32),

new Wall(game, 4952, 160, 32, 32),

new Wall(game, 4984, 160, 32, 32),

new Wall(game, 5016, 160, 32, 32),

new Wall(game, 5144, 160, 32, 32),

new Wall(game, 4824, 416, 32, 32),

new Wall(game, 4792, 416, 32, 32),

new Wall(game, 4792, 448, 32, 32),

new Wall(game, 4824, 448, 32, 32),

new Wall(game, 4984, 416, 32, 32),

new Wall(game, 4984, 448, 32, 32),

new Wall(game, 5016, 416, 32, 32),

new Wall(game, 5016, 448, 32, 32),

new Wall(game, 5048, 416, 32, 32),

new Wall(game, 5048, 448, 32, 32),

new Wall(game, 5080, 416, 32, 32),

new Wall(game, 5080, 448, 32, 32),

new Wall(game, 5112, 416, 32, 32),

new Wall(game, 5112, 448, 32, 32),

new Wall(game, 5144, 416, 32, 32),

new Wall(game, 5144, 448, 32, 32),

new Wall(game, 5176, 416, 32, 32),

new Wall(game, 5176, 448, 32, 32),

new Wall(game, 5208, 160, 32, 32),

new Wall(game, 5208, 192, 32, 32),

new Wall(game, 5208, 224, 32, 32),

new Wall(game, 5208, 256, 32, 32),

new Wall(game, 5208, 288, 32, 32),

new Wall(game, 5240, 320, 32, 32),

new Wall(game, 5240, 352, 32, 32),

new Wall(game, 5208, 416, 32, 32),

new Wall(game, 5208, 448, 32, 32),

new Wall(game, 5240, 160, 32, 32),

new Wall(game, 5208, 32, 32, 32),

new Wall(game, 5208, 0, 32, 32),

new Wall(game, 5240, 0, 32, 32),

new Wall(game, 5240, 32, 32, 32),

new Wall(game, 5272, 0, 32, 32),

new Wall(game, 5272, 32, 32, 32),

new Wall(game, 5304, 0, 32, 32),

new Wall(game, 5304, 32, 32, 32),

new Wall(game, 5336, 0, 32, 32),

new Wall(game, 5336, 32, 32, 32),

new Wall(game, 5368, 0, 32, 32),

new Wall(game, 5368, 32, 32, 32),

new Wall(game, 5400, 0, 32, 32),

new Wall(game, 5400, 32, 32, 32),

new Wall(game, 5432, 0, 32, 32),

new Wall(game, 5432, 32, 32, 32),

new Wall(game, 5464, 0, 32, 32),

new Wall(game, 5464, 32, 32, 32),

new Wall(game, 5496, 0, 32, 32),

new Wall(game, 5496, 32, 32, 32),

new Wall(game, 5528, 0, 32, 32),

new Wall(game, 5528, 32, 32, 32),

new Wall(game, 5560, 0, 32, 32),

new Wall(game, 5560, 32, 32, 32),

new Wall(game, 5592, 0, 32, 32),

new Wall(game, 5592, 32, 32, 32),

new Wall(game, 5624, 0, 32, 32),

new Wall(game, 5624, 32, 32, 32),

new Wall(game, 5656, 0, 32, 32),

new Wall(game, 5656, 32, 32, 32),

new Wall(game, 5688, 0, 32, 32),

new Wall(game, 5688, 32, 32, 32),

new Wall(game, 5720, 32, 32, 32),

new Wall(game, 5720, 0, 32, 32),

new Wall(game, 5464, 160, 32, 32),

new Wall(game, 5496, 160, 32, 32),

new Wall(game, 5528, 160, 32, 32),

new Wall(game, 5528, 192, 32, 32),

new Wall(game, 5528, 224, 32, 32),

new Wall(game, 5528, 256, 32, 32),

new Wall(game, 5528, 288, 32, 32),

new Wall(game, 5528, 320, 32, 32),

new Wall(game, 5528, 352, 32, 32),

new Wall(game, 5528, 384, 32, 32),

new Wall(game, 5528, 416, 32, 32),

new Wall(game, 5528, 448, 32, 32),

new Wall(game, 5624, 160, 32, 32),

new Wall(game, 5624, 192, 32, 32),

new Wall(game, 5624, 224, 32, 32),

new Wall(game, 5624, 256, 32, 32),

new Wall(game, 5624, 288, 32, 32),

new Wall(game, 5624, 320, 32, 32),

new Wall(game, 5624, 352, 32, 32),

new Wall(game, 5624, 384, 32, 32),

new Wall(game, 5624, 416, 32, 32),

new Wall(game, 5624, 448, 32, 32),

new Wall(game, 5656, 160, 32, 32),

new Wall(game, 5656, 192, 32, 32),

new Wall(game, 5656, 224, 32, 32),

new Wall(game, 5656, 256, 32, 32),

new Wall(game, 5656, 288, 32, 32),

new Wall(game, 5656, 320, 32, 32),

new Wall(game, 5656, 352, 32, 32),

new Wall(game, 5656, 384, 32, 32),

new Wall(game, 5656, 416, 32, 32),

new Wall(game, 5656, 448, 32, 32),

new Wall(game, 5688, 448, 32, 32),

new Wall(game, 5688, 416, 32, 32),

new Wall(game, 5688, 384, 32, 32),

new Wall(game, 5688, 352, 32, 32),

new Wall(game, 5688, 320, 32, 32),

new Wall(game, 5688, 288, 32, 32),

new Wall(game, 5688, 256, 32, 32),

new Wall(game, 5688, 224, 32, 32),

new Wall(game, 5688, 192, 32, 32),

new Wall(game, 5688, 160, 32, 32),

new Wall(game, 5752, 0, 32, 32),

new Wall(game, 5752, 32, 32, 32),

new Wall(game, 5784, 0, 32, 32),

new Wall(game, 5784, 32, 32, 32),

new Wall(game, 5816, 0, 32, 32),

new Wall(game, 5816, 32, 32, 32),

new Wall(game, 5816, 64, 32, 32),

new Wall(game, 5784, 64, 32, 32),

new Wall(game, 5784, 96, 32, 32),

new Wall(game, 5784, 128, 32, 32),

new Wall(game, 5816, 96, 32, 32),

new Wall(game, 5816, 128, 32, 32),

new Wall(game, 5784, 160, 32, 32),

new Wall(game, 5816, 160, 32, 32),

new Wall(game, 5816, 192, 32, 32),

new Wall(game, 5784, 192, 32, 32),

new Wall(game, 5784, 224, 32, 32),

new Wall(game, 5816, 224, 32, 32),

new Wall(game, 5720, 448, 32, 32),

new Wall(game, 5752, 448, 32, 32),

new Wall(game, 5784, 416, 32, 32),

new Wall(game, 5784, 448, 32, 32),

new Wall(game, 5816, 448, 32, 32),

new Wall(game, 5816, 416, 32, 32),

new Wall(game, 5784, 384, 32, 32),

new Wall(game, 5784, 352, 32, 32),

new Wall(game, 5784, 320, 32, 32),

new Wall(game, 5816, 320, 32, 32),

new Wall(game, 5816, 352, 32, 32),

new Wall(game, 5816, 384, 32, 32),

new Wall(game, 5848, 352, 32, 32),

new Wall(game, 5848, 384, 32, 32),

new Wall(game, 5848, 416, 32, 32),

new Wall(game, 5848, 448, 32, 32),

new Wall(game, 5880, 448, 32, 32),

new Wall(game, 5880, 416, 32, 32),

new Wall(game, 5880, 384, 32, 32),

new Wall(game, 5912, 416, 32, 32),

new Wall(game, 5912, 448, 32, 32),

new Wall(game, 5944, 448, 32, 32),

new Wall(game, 5848, 224, 32, 32),

new Wall(game, 5848, 192, 32, 32),

new Wall(game, 5848, 0, 32, 32),

new Wall(game, 5848, 32, 32, 32),

new Wall(game, 5848, 64, 32, 32),

new Wall(game, 5848, 96, 32, 32),

new Wall(game, 5848, 128, 32, 32),

new Wall(game, 5848, 160, 32, 32),

new Wall(game, 5880, 0, 32, 32),

new Wall(game, 5880, 32, 32, 32),

new Wall(game, 5880, 64, 32, 32),

new Wall(game, 5880, 96, 32, 32),

new Wall(game, 5880, 224, 32, 32),

new Wall(game, 5880, 128, 32, 32),

new Wall(game, 5880, 160, 32, 32),

new Wall(game, 5880, 192, 32, 32),

new Wall(game, 5912, 0, 32, 32),

new Wall(game, 5912, 32, 32, 32),

new Wall(game, 5912, 64, 32, 32),

new Wall(game, 5912, 96, 32, 32),

new Wall(game, 5912, 128, 32, 32),

new Wall(game, 5912, 160, 32, 32),

new Wall(game, 5912, 192, 32, 32),

new Wall(game, 5912, 224, 32, 32),

new Wall(game, 5912, 256, 32, 32),

new Wall(game, 5944, 0, 32, 32),

new Wall(game, 5944, 32, 32, 32),

new Wall(game, 5944, 64, 32, 32),

new Wall(game, 5944, 96, 32, 32),

new Wall(game, 5944, 128, 32, 32),

new Wall(game, 5944, 160, 32, 32),

new Wall(game, 5944, 192, 32, 32),

new Wall(game, 5944, 224, 32, 32),

new Wall(game, 5944, 256, 32, 32),

new Wall(game, 5944, 288, 32, 32),

new Wall(game, 5976, 0, 32, 32),

new Wall(game, 5976, 32, 32, 32),

new Wall(game, 5976, 64, 32, 32),

new Wall(game, 5976, 96, 32, 32),

new Wall(game, 5976, 128, 32, 32),

new Wall(game, 5976, 160, 32, 32),

new Wall(game, 5976, 192, 32, 32),

new Wall(game, 5976, 224, 32, 32),

new Wall(game, 6008, 0, 32, 32),

new Wall(game, 6008, 32, 32, 32),

new Wall(game, 6008, 64, 32, 32),

new Wall(game, 6008, 96, 32, 32),

new Wall(game, 6008, 128, 32, 32),

new Wall(game, 6008, 160, 32, 32),

new Wall(game, 6008, 192, 32, 32),

new Wall(game, 6040, 0, 32, 32),

new Wall(game, 6040, 32, 32, 32),

new Wall(game, 6040, 64, 32, 32),

new Wall(game, 6040, 96, 32, 32),

new Wall(game, 6040, 128, 32, 32),

new Wall(game, 6040, 160, 32, 32),

new Wall(game, 6040, 192, 32, 32),

new Wall(game, 6072, 0, 32, 32),

new Wall(game, 6072, 32, 32, 32),

new Wall(game, 6072, 64, 32, 32),

new Wall(game, 6072, 96, 32, 32),

new Wall(game, 6072, 128, 32, 32),

new Wall(game, 6072, 160, 32, 32),

new Wall(game, 6072, 192, 32, 32),

new Wall(game, 6104, 0, 32, 32),

new Wall(game, 6104, 32, 32, 32),

new Wall(game, 6104, 64, 32, 32),

new Wall(game, 6104, 96, 32, 32),

new Wall(game, 6104, 128, 32, 32),

new Wall(game, 6104, 160, 32, 32),

new Wall(game, 6104, 192, 32, 32),

new Wall(game, 6136, 0, 32, 32),

new Wall(game, 6136, 32, 32, 32),

new Wall(game, 6136, 64, 32, 32),

new Wall(game, 6136, 96, 32, 32),

new Wall(game, 6136, 128, 32, 32),

new Wall(game, 6136, 160, 32, 32),

new Wall(game, 6136, 192, 32, 32),

new Wall(game, 6168, 0, 32, 32),

new Wall(game, 6168, 32, 32, 32),

new Wall(game, 6168, 64, 32, 32),

new Wall(game, 6168, 96, 32, 32),

new Wall(game, 6168, 128, 32, 32),

new Wall(game, 6168, 160, 32, 32),

new Wall(game, 6168, 192, 32, 32),

new Wall(game, 6200, 0, 32, 32),

new Wall(game, 6200, 32, 32, 32),

new Wall(game, 6200, 64, 32, 32),

new Wall(game, 6200, 96, 32, 32),

new Wall(game, 6200, 128, 32, 32),

new Wall(game, 6200, 160, 32, 32),

new Wall(game, 6200, 192, 32, 32),

new Wall(game, 6232, 0, 32, 32),

new Wall(game, 6232, 32, 32, 32),

new Wall(game, 6232, 64, 32, 32),

new Wall(game, 6232, 96, 32, 32),

new Wall(game, 6232, 128, 32, 32),

new Wall(game, 6232, 160, 32, 32),

new Wall(game, 6232, 192, 32, 32),

new Wall(game, 6264, 0, 32, 32),

new Wall(game, 6264, 32, 32, 32),

new Wall(game, 6264, 64, 32, 32),

new Wall(game, 6264, 96, 32, 32),

new Wall(game, 6264, 128, 32, 32),

new Wall(game, 6264, 160, 32, 32),

new Wall(game, 6264, 192, 32, 32),

new Wall(game, 6264, 224, 32, 32),

new Wall(game, 6264, 256, 32, 32),

new Wall(game, 6264, 448, 32, 32),

new Wall(game, 6264, 416, 32, 32),

new Wall(game, 3384, 224, 32, 32),

new Wall(game, 5240, 192, 32, 32),

new Wall(game, 5240, 224, 32, 32),

new Wall(game, 5240, 256, 32, 32),

new Wall(game, 5240, 288, 32, 32),

new Wall(game, 5240, 384, 32, 32),

new Wall(game, 5240, 416, 32, 32),

new Wall(game, 5240, 448, 32, 32),

new Wall(game, 2664, 432, 32, 32),

new Wall(game, 2696, 432, 32, 32),

new Wall(game, 2664, 400, 32, 32),

new Wall(game, 2696, 400, 32, 32),

new Platform(game, -968, 448, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, 376, 272, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, 1912, 352, 1, 0, 256, PLATFORM_BOUNCY),

new Platform(game, 3448, 384, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, 5080, 368, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, 5080, 208, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, 56, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 248, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 152, 336, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 56, 272, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 984, 320, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1048, 320, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1112, 320, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 856, 320, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 792, 320, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 3320, 224, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 3640, 224, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 3832, 224, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 4152, 224, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1896, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1960, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2024, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2088, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2152, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 3256, 224, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 3192, 224, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 3128, 224, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 3064, 224, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 3000, 224, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2936, 224, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 120, 208, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 24, 144, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 520, 160, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 2824, 400, 0, 0, 0, PLATFORM_FADE, 60),

new Platform(game, 2664, 352, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 2824, 288, 0, 0, 0, PLATFORM_FADE, 60),

new Platform(game, 2664, 224, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 2824, 160, 0, 0, 0, PLATFORM_FADE, 60),

new Wall(game, 2024, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2056, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2088, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2120, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2152, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2360, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2456, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2552, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3704, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3736, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3768, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3800, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3832, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3864, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3896, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3928, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3960, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3992, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4024, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4056, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4088, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4120, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4152, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4184, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4216, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4248, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4280, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4312, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 1992, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 1960, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 1928, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 1896, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2184, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5272, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5304, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5336, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5368, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5400, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5432, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5464, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5496, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5720, 400, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5752, 400, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5192, 336, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, 5192, 304, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, 2312, 288, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 2408, 288, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 2504, 288, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 2600, 288, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 4856, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 4888, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 4920, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 4952, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 4984, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 5016, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 5144, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 5176, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 4760, 384, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 4792, 384, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 4824, 384, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 4984, 384, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 5016, 384, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 5048, 384, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 5080, 384, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 5112, 384, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 5144, 384, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 5176, 384, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 5208, 384, 32, 32, WALL_NOCHECKPOINT),






			];
			enemies = [


new Powerup(game, -168, 384, 0),

new Powerup(game, 1176, 80, 0),

new Powerup(game, 2616, 384, 0),

new Powerup(game, 2472, 128, 0),

new Powerup(game, 4232, 208, 0),

new Powerup(game, 4712, 272, 0),

new SeaSlug(game, -1480, 432, -1, 32),

new SeaSlug(game, -1320, 432, 1, 32),

new SeaSlug(game, -840, 272, -1, 0),

new SeaSlug(game, -136, 176, -1, 0),

new SeaSlug(game, -328, 176, -1, 0),

new SeaSlug(game, -376, 272, -1, 0),

new SeaSlug(game, -184, 272, -1, 0),

new SeaSlug(game, 456, 432, -1, 0),

new SeaSlug(game, 136, 432, -1, 0),

new SeaSlug(game, 1592, 432, -1, 32),

new SeaSlug(game, 1688, 432, -1, 32),

new SeaSlug(game, 2952, 432, 1, 0),

new SeaSlug(game, 3048, 432, 1, 0),

new SeaSlug(game, 3192, 432, 1, 0),

new Uni(game, 2456, 176),

new Pirahna(game, -744, 400, 1, 0),

new Pirahna(game, -280, 400, -1, 0),

new Pirahna(game, 2216, 64, -1, 0),

new Pirahna(game, 2504, 64, 1, 0),

new Pirahna(game, 2424, 112, 1, 0),

new Pirahna(game, 776, 400, 1, 0),

new Pirahna(game, 1048, 400, 1, 0),

new Powerup(game, -1400, 432, JELLY_COIN),

new Powerup(game, -952, 400, JELLY_COIN),

new Powerup(game, -760, 432, JELLY_COIN),

new Powerup(game, -760, 400, JELLY_COIN),

new Powerup(game, -760, 368, JELLY_COIN),

new Powerup(game, 584, 32, JELLY_COIN),

new Powerup(game, 936, 176, JELLY_COIN),

new Powerup(game, 936, 224, JELLY_COIN),

new Powerup(game, 2360, 304, JELLY_COIN),

new Powerup(game, 2456, 304, JELLY_COIN),

new Powerup(game, 2552, 304, JELLY_COIN),

new Powerup(game, 4344, 112, JELLY_COIN),

new Powerup(game, 4904, 416, JELLY_COIN),

new Powerup(game, 5576, 432, JELLY_COIN),

new Powerup(game, -1784, 416, JELLY_COIN_SM),

new Powerup(game, -1704, 416, JELLY_COIN_SM),

new Powerup(game, -1864, 416, JELLY_COIN_SM),

new Powerup(game, -1464, 368, JELLY_COIN_SM),

new Powerup(game, -1320, 368, JELLY_COIN_SM),

new Powerup(game, -1048, 368, JELLY_COIN_SM),

new Powerup(game, -1016, 368, JELLY_COIN_SM),

new Powerup(game, -1048, 400, JELLY_COIN_SM),

new Powerup(game, -1016, 400, JELLY_COIN_SM),

new Powerup(game, -1016, 432, JELLY_COIN_SM),

new Powerup(game, -1048, 432, JELLY_COIN_SM),

new Powerup(game, -840, 368, JELLY_COIN_SM),

new Powerup(game, -840, 400, JELLY_COIN_SM),

new Powerup(game, -840, 432, JELLY_COIN_SM),

new Powerup(game, -872, 432, JELLY_COIN_SM),

new Powerup(game, -872, 400, JELLY_COIN_SM),

new Powerup(game, -872, 368, JELLY_COIN_SM),

new Powerup(game, 40, 128, JELLY_COIN_SM),

new Powerup(game, 56, 96, JELLY_COIN_SM),

new Powerup(game, 40, 64, JELLY_COIN_SM),

new Powerup(game, 56, 32, JELLY_COIN_SM),

new Powerup(game, -568, 80, JELLY_COIN_SM),

new Powerup(game, -440, 80, JELLY_COIN_SM),

new Powerup(game, -312, 80, JELLY_COIN_SM),

new Powerup(game, -184, 80, JELLY_COIN_SM),

new Powerup(game, -456, 176, JELLY_COIN_SM),

new Powerup(game, -344, 176, JELLY_COIN_SM),

new Powerup(game, -232, 176, JELLY_COIN_SM),

new Powerup(game, -136, 176, JELLY_COIN_SM),

new Powerup(game, 216, 128, JELLY_COIN_SM),

new Powerup(game, 264, 112, JELLY_COIN_SM),

new Powerup(game, 312, 128, JELLY_COIN_SM),

new Powerup(game, 360, 176, JELLY_COIN_SM),

new Powerup(game, 392, 224, JELLY_COIN_SM),

new Powerup(game, 168, 176, JELLY_COIN_SM),

new Powerup(game, 664, 80, JELLY_COIN_SM),

new Powerup(game, 664, 128, JELLY_COIN_SM),

new Powerup(game, 664, 176, JELLY_COIN_SM),

new Powerup(game, 664, 224, JELLY_COIN_SM),

new Powerup(game, 1128, 288, JELLY_COIN_SM),

new Powerup(game, 1032, 288, JELLY_COIN_SM),

new Powerup(game, 120, 432, JELLY_COIN_SM),

new Powerup(game, 200, 432, JELLY_COIN_SM),

new Powerup(game, 280, 432, JELLY_COIN_SM),

new Powerup(game, 360, 432, JELLY_COIN_SM),

new Powerup(game, 440, 432, JELLY_COIN_SM),

new Powerup(game, 504, 432, JELLY_COIN_SM),

new Powerup(game, 40, 432, JELLY_COIN_SM),

new Powerup(game, -40, 432, JELLY_COIN_SM),

new Powerup(game, 1352, 112, JELLY_COIN_SM),

new Powerup(game, 1368, 176, JELLY_COIN_SM),

new Powerup(game, 1368, 256, JELLY_COIN_SM),

new Powerup(game, 1272, 96, JELLY_COIN_SM),

new Powerup(game, 840, 96, JELLY_COIN_SM),

new Powerup(game, 888, 96, JELLY_COIN_SM),

new Powerup(game, 1032, 96, JELLY_COIN_SM),

new Powerup(game, 1112, 96, JELLY_COIN_SM),

new Powerup(game, 1944, 96, JELLY_COIN_SM),

new Powerup(game, 1992, 96, JELLY_COIN_SM),

new Powerup(game, 2040, 96, JELLY_COIN_SM),

new Powerup(game, 2088, 96, JELLY_COIN_SM),

new Powerup(game, 2136, 96, JELLY_COIN_SM),

new Powerup(game, 2184, 96, JELLY_COIN_SM),

new Powerup(game, 2232, 96, JELLY_COIN_SM),

new Powerup(game, 1896, 96, JELLY_COIN_SM),

new Powerup(game, 2280, 96, JELLY_COIN_SM),

new Powerup(game, 2312, 432, JELLY_COIN_SM),

new Powerup(game, 2280, 352, JELLY_COIN_SM),

new Powerup(game, 2296, 384, JELLY_COIN_SM),

new Powerup(game, 2408, 192, JELLY_COIN_SM),

new Powerup(game, 2376, 224, JELLY_COIN_SM),

new Powerup(game, 2440, 224, JELLY_COIN_SM),

new Powerup(game, 2536, 224, JELLY_COIN_SM),

new Powerup(game, 2568, 192, JELLY_COIN_SM),

new Powerup(game, 2600, 224, JELLY_COIN_SM),

new Powerup(game, 2840, 368, JELLY_COIN_SM),

new Powerup(game, 2696, 320, JELLY_COIN_SM),

new Powerup(game, 2840, 256, JELLY_COIN_SM),

new Powerup(game, 2696, 192, JELLY_COIN_SM),

new Powerup(game, 2840, 128, JELLY_COIN_SM),

new Powerup(game, 2920, 48, JELLY_COIN_SM),

new Powerup(game, 3032, 176, JELLY_COIN_SM),

new Powerup(game, 3208, 176, JELLY_COIN_SM),

new Powerup(game, 3384, 176, JELLY_COIN_SM),

new Powerup(game, 3496, 176, JELLY_COIN_SM),

new Powerup(game, 3544, 176, JELLY_COIN_SM),

new Powerup(game, 3592, 176, JELLY_COIN_SM),

new Powerup(game, 3640, 176, JELLY_COIN_SM),

new Powerup(game, 3704, 112, JELLY_COIN_SM),

new Powerup(game, 3768, 96, JELLY_COIN_SM),

new Powerup(game, 3832, 112, JELLY_COIN_SM),

new Powerup(game, 3896, 176, JELLY_COIN_SM),

new Powerup(game, 3960, 176, JELLY_COIN_SM),

new Powerup(game, 4024, 176, JELLY_COIN_SM),

new Powerup(game, 4088, 176, JELLY_COIN_SM),

new Powerup(game, 4152, 176, JELLY_COIN_SM),

new Powerup(game, 2856, 368, JELLY_COIN_SM),

new Powerup(game, 2680, 320, JELLY_COIN_SM),

new Powerup(game, 2856, 256, JELLY_COIN_SM),

new Powerup(game, 2680, 192, JELLY_COIN_SM),

new Powerup(game, 2856, 128, JELLY_COIN_SM),

new Powerup(game, 888, 288, JELLY_COIN_SM),

new Powerup(game, 808, 288, JELLY_COIN_SM),

new Powerup(game, 4872, 432, JELLY_COIN_SM),

new Powerup(game, 4952, 432, JELLY_COIN_SM),

new Powerup(game, 5096, 176, JELLY_COIN_SM),

new Powerup(game, 5112, 128, JELLY_COIN_SM),

new Powerup(game, 5160, 112, JELLY_COIN_SM),

new Powerup(game, 5304, 112, JELLY_COIN_SM),

new Powerup(game, 5368, 112, JELLY_COIN_SM),

new Powerup(game, 5432, 112, JELLY_COIN_SM),

new Powerup(game, 5496, 112, JELLY_COIN_SM),

new Powerup(game, 5656, 112, JELLY_COIN_SM),

new Powerup(game, 5720, 112, JELLY_COIN_SM),

new Powerup(game, 5752, 256, JELLY_COIN_SM),

new Powerup(game, 5736, 304, JELLY_COIN_SM),

new Powerup(game, 5736, 208, JELLY_COIN_SM),

new Powerup(game, 5752, 352, JELLY_COIN_SM),

new Powerup(game, -520, 176, ENTITY_MARKER),

new Powerup(game, -72, 176, ENTITY_MARKER),

new Powerup(game, -72, 272, ENTITY_MARKER),

new Powerup(game, -488, 272, ENTITY_MARKER),

new Powerup(game, -792, 352, ENTITY_MARKER),

new Powerup(game, -792, 384, ENTITY_MARKER),

new Powerup(game, -792, 416, ENTITY_MARKER),

new Powerup(game, -584, 352, ENTITY_MARKER),

new Powerup(game, -584, 384, ENTITY_MARKER),

new Powerup(game, -584, 416, ENTITY_MARKER),

new Powerup(game, -488, 352, ENTITY_MARKER),

new Powerup(game, -488, 384, ENTITY_MARKER),

new Powerup(game, -488, 416, ENTITY_MARKER),

new Powerup(game, -120, 352, ENTITY_MARKER),

new Powerup(game, -120, 384, ENTITY_MARKER),

new Powerup(game, -120, 416, ENTITY_MARKER),

new Powerup(game, -1128, 272, ENTITY_MARKER),

new Powerup(game, -776, 272, ENTITY_MARKER),

new Powerup(game, 56, 432, ENTITY_MARKER),

new Powerup(game, 584, 432, ENTITY_MARKER),

new Powerup(game, 952, 80, ENTITY_MARKER),

new Powerup(game, 1848, 48, ENTITY_MARKER),

new Powerup(game, 1848, 80, ENTITY_MARKER),

new Powerup(game, 1848, 112, ENTITY_MARKER),

new Powerup(game, 1848, 144, ENTITY_MARKER),

new Powerup(game, 1848, 176, ENTITY_MARKER),

new Powerup(game, 1848, 208, ENTITY_MARKER),

new Powerup(game, 1848, 240, ENTITY_MARKER),

new Powerup(game, 1848, 272, ENTITY_MARKER),

new Powerup(game, 2312, 48, ENTITY_MARKER),

new Powerup(game, 2312, 80, ENTITY_MARKER),

new Powerup(game, 2312, 112, ENTITY_MARKER),

new Powerup(game, 2312, 176, ENTITY_MARKER),

new Powerup(game, 2312, 144, ENTITY_MARKER),

new Powerup(game, 2312, 64, ENTITY_MARKER),

new Powerup(game, 2312, 96, ENTITY_MARKER),

new Powerup(game, 2312, 128, ENTITY_MARKER),

new Powerup(game, 2632, 64, ENTITY_MARKER),

new Powerup(game, 2632, 96, ENTITY_MARKER),

new Powerup(game, 2632, 128, ENTITY_MARKER),

new Powerup(game, 2632, 160, ENTITY_MARKER),

new Powerup(game, 2632, 192, ENTITY_MARKER),

new Powerup(game, 2904, 432, ENTITY_MARKER),

new Powerup(game, 3304, 448, ENTITY_MARKER),

new Powerup(game, 2312, 272, ENTITY_MARKER),

new Powerup(game, 2312, 240, ENTITY_MARKER),

new Powerup(game, 2312, 208, ENTITY_MARKER),

new Powerup(game, 2312, 160, ENTITY_MARKER),

new Powerup(game, 584, 400, ENTITY_MARKER),

new Powerup(game, 1272, 400, ENTITY_MARKER),

new Powerup(game, 1272, 432, ENTITY_MARKER),

new Kelp(game, -56, -48),

new Kelp(game, -1928, 224),

new Kelp(game, 664, 208),

new Kelp(game, 1336, 208),

new Kelp(game, 1368, 208),

new Kelp(game, 2280, 208),

new Kelp(game, 3416, -32),

new Kelp(game, 2584, 0),

new Kelp(game, -952, 192),

new Kelp(game, 4472, 208),

new Kelp(game, 5208, -96),

new Kelp(game, 6040, 224),

new Kelp(game, 6072, 224),

new Kelp(game, 6008, 224),

new Kelp(game, 6104, 224),

new Kelp(game, 6136, 224),

new Kelp(game, 6200, 224),

new Kelp(game, -8, 208),

new Kelp(game, 2248, 208),

new Kelp(game, 2760, 224),

new Powerup(game, -1624, 288, TIP_MARKER, 1),

new Powerup(game, -1096, 112, TIP_MARKER, 2),

new TunaChargeDropper(game, 936, 0),

new TunaChargeDropper(game, 2760, 0),

new TunaChargeDropper(game, 3656, 0),

new BubbleCurrent(game, 3320, 160, -8),

new BubbleCurrent(game, 4456, 96, -8),

new BubbleCurrent(game, 4760, 320, 8),

new Powerup(game, 5576, 448, JELLYBAIT),
/*
			new SeaSlug(game, -1944, 426, 1, 96),
			new Isopod(game, -1844, 426 - 32, 1, 96),
			new Eel(game, -1744, 426, 1, 0, 96),
			new TopRamen(game, -1644, 326, 1, 0, 96),
			new Pirahna(game, -1444, 326, 1, 96),
			new Pirahna(game, -1444 + 48 * 2, 326, 1, 96),
			new Pirahna(game, -1444 + 48 * 3, 326, 1, 96),
			new Pirahna(game, -1444 + 48 * 4, 326, 1, 96),
			new Uni(game, -1944, 400),
			new ShellSnail(game, -1544, 426 - 32, 1, 96),
			new Squid(game, -2000, 400),
			new Tentacle(game, -1444, 300),
			new Tentacle(game, -1144, 300),
*/
			];
		break;
		case GAME_LEVEL2:
		instances = [
new Powerup(game, 296, 1056, 0),

new Powerup(game, -280, 1056, 0),

new Powerup(game, -968, 1136, 0),

new Powerup(game, -1080, 912, 0),

new Powerup(game, 248, 1056, 0),

new Powerup(game, 264, 1008, 0),

new SeaSlug(game, -1864, 768, 1, 0),

new SeaSlug(game, -1688, 768, 1, 0),

new SeaSlug(game, -632, 1152, 1, 0),

new SeaSlug(game, -104, 1152, 1, 0),

new SeaSlug(game, 216, 1152, 1, 0),

new SeaSlug(game, -1608, 1184, 0, 0),

new Isopod(game, -872, 368, -1, 128),

new Eel(game, 168, 384, -1, 0, 160),

new Uni(game, -280, 864),

new Uni(game, -440, 1264),

new Pirahna(game, -2104, 848, 1, 64),

new Pirahna(game, -1944, 1136, -1, 0),

new Pirahna(game, -1816, 1136, -1, 0),

new Pirahna(game, -840, 672, 1, 64),

new Pirahna(game, -632, 672, -1, 64),

new Pirahna(game, -168, 880, -1, 0),

new Pirahna(game, -72, 880, -1, 0),

new Pirahna(game, 24, 880, -1, 0),

new Pirahna(game, -248, 640, 1, 0),

new Pirahna(game, -152, 592, 1, 0),

new Pirahna(game, -40, 640, 1, 0),

new Powerup(game, -504, 912, JELLY_COIN),

new Powerup(game, 184, 880, JELLY_COIN),

new Powerup(game, 616, 1600, JELLY_COIN),

new Powerup(game, 664, 1552, JELLY_COIN),

new Powerup(game, 712, 1504, JELLY_COIN),

new Powerup(game, 616, 1552, JELLY_COIN),

new Powerup(game, 664, 1504, JELLY_COIN),

new Powerup(game, 712, 1456, JELLY_COIN),

new Powerup(game, 664, 1456, JELLY_COIN),

new Powerup(game, 616, 1504, JELLY_COIN),

new Powerup(game, 712, 1408, JELLY_COIN),

new Powerup(game, -1720, 512, JELLY_COIN_SM),

new Powerup(game, -1576, 544, JELLY_COIN_SM),

new Powerup(game, -1640, 512, JELLY_COIN_SM),

new Powerup(game, -1560, 624, JELLY_COIN_SM),

new Powerup(game, -1560, 704, JELLY_COIN_SM),

new Powerup(game, -1656, 736, JELLY_COIN_SM),

new Powerup(game, -1736, 736, JELLY_COIN_SM),

new Powerup(game, -1816, 736, JELLY_COIN_SM),

new Powerup(game, -1896, 736, JELLY_COIN_SM),

new Powerup(game, -2168, 736, JELLY_COIN_SM),

new Powerup(game, -2088, 880, JELLY_COIN_SM),

new Powerup(game, -2168, 1008, JELLY_COIN_SM),

new Powerup(game, -2184, 1120, JELLY_COIN_SM),

new Powerup(game, -2152, 1120, JELLY_COIN_SM),

new Powerup(game, -2120, 1120, JELLY_COIN_SM),

new Powerup(game, -1976, 1152, JELLY_COIN_SM),

new Powerup(game, -1896, 1152, JELLY_COIN_SM),

new Powerup(game, -1816, 1152, JELLY_COIN_SM),

new Powerup(game, -1736, 1152, JELLY_COIN_SM),

new Powerup(game, -1496, 1120, JELLY_COIN_SM),

new Powerup(game, -1464, 1072, JELLY_COIN_SM),

new Powerup(game, -1416, 1056, JELLY_COIN_SM),

new Powerup(game, -1368, 1104, JELLY_COIN_SM),

new Powerup(game, -1240, 1024, JELLY_COIN_SM),

new Powerup(game, -1304, 1024, JELLY_COIN_SM),

new Powerup(game, -1336, 1056, JELLY_COIN_SM),

new Powerup(game, -1160, 832, JELLY_COIN_SM),

new Powerup(game, -1240, 768, JELLY_COIN_SM),

new Powerup(game, -1336, 704, JELLY_COIN_SM),

new Powerup(game, -1368, 624, JELLY_COIN_SM),

new Powerup(game, -1304, 544, JELLY_COIN_SM),

new Powerup(game, -1224, 464, JELLY_COIN_SM),

new Powerup(game, -1144, 384, JELLY_COIN_SM),

new Powerup(game, -552, 624, JELLY_COIN_SM),

new Powerup(game, -504, 624, JELLY_COIN_SM),

new Powerup(game, -648, 720, JELLY_COIN_SM),

new Powerup(game, -696, 720, JELLY_COIN_SM),

new Powerup(game, -744, 720, JELLY_COIN_SM),

new Powerup(game, -792, 720, JELLY_COIN_SM),

new Powerup(game, -584, 800, JELLY_COIN_SM),

new Powerup(game, -536, 800, JELLY_COIN_SM),

new Powerup(game, -888, 864, JELLY_COIN_SM),

new Powerup(game, -840, 864, JELLY_COIN_SM),

new Powerup(game, -808, 960, JELLY_COIN_SM),

new Powerup(game, -760, 960, JELLY_COIN_SM),

new Powerup(game, -616, 1040, JELLY_COIN_SM),

new Powerup(game, -568, 1040, JELLY_COIN_SM),

new Powerup(game, -680, 512, JELLY_COIN_SM),

new Powerup(game, -680, 1152, JELLY_COIN_SM),

new Powerup(game, -584, 1152, JELLY_COIN_SM),

new Powerup(game, -488, 1152, JELLY_COIN_SM),

new Powerup(game, -872, 1152, JELLY_COIN_SM),

new Powerup(game, -312, 960, JELLY_COIN_SM),

new Powerup(game, -328, 1024, JELLY_COIN_SM),

new Powerup(game, -312, 1088, JELLY_COIN_SM),

new Powerup(game, -328, 1168, JELLY_COIN_SM),

new Powerup(game, -312, 1232, JELLY_COIN_SM),

new Powerup(game, -328, 1296, JELLY_COIN_SM),

new Powerup(game, 56, 608, JELLY_COIN_SM),

new Powerup(game, -8, 608, JELLY_COIN_SM),

new Powerup(game, -72, 608, JELLY_COIN_SM),

new Powerup(game, -136, 608, JELLY_COIN_SM),

new Powerup(game, -200, 608, JELLY_COIN_SM),

new Powerup(game, -328, 576, JELLY_COIN_SM),

new Powerup(game, -328, 496, JELLY_COIN_SM),

new Powerup(game, -328, 416, JELLY_COIN_SM),

new Powerup(game, -216, 400, JELLY_COIN_SM),

new Powerup(game, -104, 400, JELLY_COIN_SM),

new Powerup(game, 8, 400, JELLY_COIN_SM),

new Powerup(game, 120, 400, JELLY_COIN_SM),

new Powerup(game, 248, 400, JELLY_COIN_SM),

new Powerup(game, 344, 400, JELLY_COIN_SM),

new Powerup(game, 392, 512, JELLY_COIN_SM),

new Powerup(game, 392, 576, JELLY_COIN_SM),

new Powerup(game, 392, 640, JELLY_COIN_SM),

new Powerup(game, 392, 448, JELLY_COIN_SM),

new Powerup(game, 312, 672, JELLY_COIN_SM),

new Powerup(game, 312, 736, JELLY_COIN_SM),

new Powerup(game, 312, 800, JELLY_COIN_SM),

new Powerup(game, 312, 864, JELLY_COIN_SM),

new Powerup(game, 392, 928, JELLY_COIN_SM),

new Powerup(game, 392, 992, JELLY_COIN_SM),

new Powerup(game, 392, 1056, JELLY_COIN_SM),

new Powerup(game, 168, 1152, JELLY_COIN_SM),

new Powerup(game, 88, 1152, JELLY_COIN_SM),

new Powerup(game, 8, 1152, JELLY_COIN_SM),

new Powerup(game, -72, 1152, JELLY_COIN_SM),

new Powerup(game, 248, 1152, JELLY_COIN_SM),

new Powerup(game, 328, 1152, JELLY_COIN_SM),

new Powerup(game, 824, 1456, JELLY_COIN_SM),

new Powerup(game, 936, 1456, JELLY_COIN_SM),

new Powerup(game, 1048, 1456, JELLY_COIN_SM),

new Powerup(game, 1160, 1456, JELLY_COIN_SM),

new Powerup(game, 1272, 1456, JELLY_COIN_SM),

new Powerup(game, 1384, 1456, JELLY_COIN_SM),

new Powerup(game, 1496, 1456, JELLY_COIN_SM),

new Powerup(game, 1608, 1456, JELLY_COIN_SM),

new Powerup(game, 1720, 1456, JELLY_COIN_SM),

new Powerup(game, 1832, 1456, JELLY_COIN_SM),

new Powerup(game, -2088, 1168, ENTITY_MARKER),

new Powerup(game, -2088, 1136, ENTITY_MARKER),

new Powerup(game, -2088, 1104, ENTITY_MARKER),

new Powerup(game, -1672, 1120, ENTITY_MARKER),

new Powerup(game, -1672, 1152, ENTITY_MARKER),

new Powerup(game, -1976, 768, ENTITY_MARKER),

new Powerup(game, -1496, 768, ENTITY_MARKER),

new Powerup(game, -1160, 400, ENTITY_MARKER),

new Powerup(game, -712, 400, ENTITY_MARKER),

new Powerup(game, -760, 1152, ENTITY_MARKER),

new Powerup(game, -408, 1152, ENTITY_MARKER),

new Powerup(game, -216, 880, ENTITY_MARKER),

new Powerup(game, 168, 880, ENTITY_MARKER),

new Powerup(game, -376, 592, ENTITY_MARKER),

new Powerup(game, -376, 640, ENTITY_MARKER),

new Powerup(game, 136, 592, ENTITY_MARKER),

new Powerup(game, 136, 656, ENTITY_MARKER),

new Powerup(game, -152, 1152, ENTITY_MARKER),

new Powerup(game, 424, 1152, ENTITY_MARKER),

new Kelp(game, -152, 1456),

new Kelp(game, -104, 1456),

new Kelp(game, 344, 1456),

new TunaChargeDropper(game, -1272, 224, 0),

new TunaChargeDropper(game, -232, 480, 0),

new TunaChargeDropper(game, -88, 480, 60),

new TunaChargeDropper(game, 56, 480, 0),

new BubbleCurrent(game, -456, 544, -8),

new BubbleCurrent(game, -536, 1264, -8),

new BubbleCurrent(game, 424, 1120, -8),

new BubbleCurrent(game, -936, 800, 8),

new Clam(game, 472, 1584),

new Platform(game, -2200, 800),

new Platform(game, -2120, 928),

new Platform(game, -2200, 1056),

new Platform(game, -2056, 1200, 2, 0, 160),

new Platform(game, -648, 1088),

new Platform(game, -584, 1088),

new Platform(game, -184, 928, 1, 0, 320),

new Platform(game, -344, 608),

new Platform(game, -344, 528),

new Platform(game, -344, 448),

new Platform(game, 232, 1104),

new Platform(game, 296, 1104),

new Platform(game, 360, 1104),

new Wall(game, -2200, 560, 32, 32),

new Wall(game, -2168, 560, 32, 32),

new Wall(game, -2136, 560, 32, 32),

new Wall(game, -2104, 560, 32, 32),

new Wall(game, -2072, 560, 32, 32),

new Wall(game, -2040, 560, 32, 32),

new Wall(game, -2008, 560, 32, 32),

new Wall(game, -1976, 560, 32, 32),

new Wall(game, -1944, 560, 32, 32),

new Wall(game, -1912, 560, 32, 32),

new Wall(game, -1880, 560, 32, 32),

new Wall(game, -1848, 560, 32, 32),

new Wall(game, -1816, 560, 32, 32),

new Wall(game, -1784, 560, 32, 32),

new Wall(game, -1752, 560, 32, 32),

new Wall(game, -1720, 560, 32, 32),

new Wall(game, -1688, 560, 32, 32),

new Wall(game, -1656, 560, 32, 32),

new Wall(game, -2200, 592, 32, 32),

new Wall(game, -2168, 592, 32, 32),

new Wall(game, -2136, 592, 32, 32),

new Wall(game, -2104, 592, 32, 32),

new Wall(game, -2072, 592, 32, 32),

new Wall(game, -2040, 592, 32, 32),

new Wall(game, -2008, 592, 32, 32),

new Wall(game, -1976, 592, 32, 32),

new Wall(game, -1944, 592, 32, 32),

new Wall(game, -1912, 592, 32, 32),

new Wall(game, -1880, 592, 32, 32),

new Wall(game, -1848, 592, 32, 32),

new Wall(game, -1816, 592, 32, 32),

new Wall(game, -1784, 592, 32, 32),

new Wall(game, -1752, 592, 32, 32),

new Wall(game, -1720, 592, 32, 32),

new Wall(game, -1688, 592, 32, 32),

new Wall(game, -1656, 592, 32, 32),

new Wall(game, -1496, 0, 32, 32),

new Wall(game, -1496, 32, 32, 32),

new Wall(game, -1496, 64, 32, 32),

new Wall(game, -1496, 96, 32, 32),

new Wall(game, -1496, 128, 32, 32),

new Wall(game, -1496, 160, 32, 32),

new Wall(game, -1496, 192, 32, 32),

new Wall(game, -1496, 224, 32, 32),

new Wall(game, -1496, 256, 32, 32),

new Wall(game, -1496, 288, 32, 32),

new Wall(game, -1496, 320, 32, 32),

new Wall(game, -1496, 352, 32, 32),

new Wall(game, -1496, 384, 32, 32),

new Wall(game, -1496, 416, 32, 32),

new Wall(game, -1496, 448, 32, 32),

new Wall(game, -1496, 480, 32, 32),

new Wall(game, -1496, 512, 32, 32),

new Wall(game, -1496, 544, 32, 32),

new Wall(game, -1496, 576, 32, 32),

new Wall(game, -1496, 608, 32, 32),

new Wall(game, -1496, 640, 32, 32),

new Wall(game, -1496, 672, 32, 32),

new Wall(game, -1496, 704, 32, 32),

new Wall(game, -1496, 736, 32, 32),

new Wall(game, -1496, 768, 32, 32),

new Wall(game, -1464, 0, 32, 32),

new Wall(game, -1464, 32, 32, 32),

new Wall(game, -1464, 64, 32, 32),

new Wall(game, -1464, 96, 32, 32),

new Wall(game, -1464, 128, 32, 32),

new Wall(game, -1464, 160, 32, 32),

new Wall(game, -1464, 192, 32, 32),

new Wall(game, -1464, 224, 32, 32),

new Wall(game, -1464, 256, 32, 32),

new Wall(game, -1464, 288, 32, 32),

new Wall(game, -1464, 320, 32, 32),

new Wall(game, -1464, 352, 32, 32),

new Wall(game, -1464, 384, 32, 32),

new Wall(game, -1464, 416, 32, 32),

new Wall(game, -1464, 448, 32, 32),

new Wall(game, -1464, 480, 32, 32),

new Wall(game, -1464, 512, 32, 32),

new Wall(game, -1464, 544, 32, 32),

new Wall(game, -1464, 576, 32, 32),

new Wall(game, -1464, 608, 32, 32),

new Wall(game, -1464, 640, 32, 32),

new Wall(game, -1464, 672, 32, 32),

new Wall(game, -1464, 704, 32, 32),

new Wall(game, -1464, 736, 32, 32),

new Wall(game, -1464, 768, 32, 32),

new Wall(game, -1432, 0, 32, 32),

new Wall(game, -1432, 32, 32, 32),

new Wall(game, -1432, 64, 32, 32),

new Wall(game, -1432, 96, 32, 32),

new Wall(game, -1432, 128, 32, 32),

new Wall(game, -1432, 160, 32, 32),

new Wall(game, -1432, 192, 32, 32),

new Wall(game, -1432, 224, 32, 32),

new Wall(game, -1432, 256, 32, 32),

new Wall(game, -1432, 288, 32, 32),

new Wall(game, -1432, 320, 32, 32),

new Wall(game, -1432, 352, 32, 32),

new Wall(game, -1432, 384, 32, 32),

new Wall(game, -1432, 416, 32, 32),

new Wall(game, -1432, 448, 32, 32),

new Wall(game, -1432, 480, 32, 32),

new Wall(game, -1432, 512, 32, 32),

new Wall(game, -1432, 544, 32, 32),

new Wall(game, -1432, 576, 32, 32),

new Wall(game, -1432, 608, 32, 32),

new Wall(game, -1432, 640, 32, 32),

new Wall(game, -1432, 672, 32, 32),

new Wall(game, -1432, 704, 32, 32),

new Wall(game, -1432, 736, 32, 32),

new Wall(game, -1432, 768, 32, 32),

new Wall(game, -1944, 832, 32, 32),

new Wall(game, -1912, 832, 32, 32),

new Wall(game, -1880, 832, 32, 32),

new Wall(game, -1848, 832, 32, 32),

new Wall(game, -1816, 832, 32, 32),

new Wall(game, -1784, 832, 32, 32),

new Wall(game, -1752, 832, 32, 32),

new Wall(game, -1720, 832, 32, 32),

new Wall(game, -1688, 832, 32, 32),

new Wall(game, -1656, 832, 32, 32),

new Wall(game, -1624, 832, 32, 32),

new Wall(game, -1592, 832, 32, 32),

new Wall(game, -1560, 832, 32, 32),

new Wall(game, -1528, 832, 32, 32),

new Wall(game, -1496, 832, 32, 32),

new Wall(game, -1464, 832, 32, 32),

new Wall(game, -1432, 832, 32, 32),

new Wall(game, -1496, 800, 32, 32),

new Wall(game, -1464, 800, 32, 32),

new Wall(game, -1432, 800, 32, 32),

new Wall(game, -2088, 1200, 32, 32),

new Wall(game, -2120, 1200, 32, 32),

new Wall(game, -2152, 1200, 32, 32),

new Wall(game, -2184, 1200, 32, 32),

new Wall(game, -2216, 1200, 32, 32),

new Wall(game, -2216, 1168, 32, 32),

new Wall(game, -2184, 1168, 32, 32),

new Wall(game, -2152, 1168, 32, 32),

new Wall(game, -2120, 1168, 32, 32),

new Wall(game, -2200, 1472, 32, 32),

new Wall(game, -2168, 1472, 32, 32),

new Wall(game, -2136, 1472, 32, 32),

new Wall(game, -2104, 1472, 32, 32),

new Wall(game, -2072, 1472, 32, 32),

new Wall(game, -2040, 1472, 32, 32),

new Wall(game, -2008, 1472, 32, 32),

new Wall(game, -1976, 1472, 32, 32),

new Wall(game, -1944, 1472, 32, 32),

new Wall(game, -1912, 1472, 32, 32),

new Wall(game, -1880, 1472, 32, 32),

new Wall(game, -1848, 1472, 32, 32),

new Wall(game, -1816, 1472, 32, 32),

new Wall(game, -1784, 1472, 32, 32),

new Wall(game, -1752, 1472, 32, 32),

new Wall(game, -1720, 1472, 32, 32),

new Wall(game, -1688, 1472, 32, 32),

new Wall(game, -1656, 1472, 32, 32),

new Wall(game, -1672, 1248, 32, 32),

new Wall(game, -1672, 1280, 32, 32),

new Wall(game, -1672, 1312, 32, 32),

new Wall(game, -1672, 1344, 32, 32),

new Wall(game, -1672, 1376, 32, 32),

new Wall(game, -1672, 1408, 32, 32),

new Wall(game, -1672, 1440, 32, 32),

new Wall(game, -1640, 1248, 32, 32),

new Wall(game, -1640, 1280, 32, 32),

new Wall(game, -1640, 1344, 32, 32),

new Wall(game, -1640, 1376, 32, 32),

new Wall(game, -1640, 1408, 32, 32),

new Wall(game, -1640, 1440, 32, 32),

new Wall(game, -1624, 1472, 32, 32),

new Wall(game, -1592, 1472, 32, 32),

new Wall(game, -1560, 1472, 32, 32),

new Wall(game, -1528, 1472, 32, 32),

new Wall(game, -1496, 1472, 32, 32),

new Wall(game, -1464, 1472, 32, 32),

new Wall(game, -1432, 1472, 32, 32),

new Wall(game, -1400, 1472, 32, 32),

new Wall(game, -1368, 1472, 32, 32),

new Wall(game, -1336, 1472, 32, 32),

new Wall(game, -1304, 1472, 32, 32),

new Wall(game, -1272, 1472, 32, 32),

new Wall(game, -1240, 1472, 32, 32),

new Wall(game, -1208, 1472, 32, 32),

new Wall(game, -1176, 1472, 32, 32),

new Wall(game, -1144, 1472, 32, 32),

new Wall(game, -1112, 1024, 32, 32),

new Wall(game, -1112, 1056, 32, 32),

new Wall(game, -1112, 1088, 32, 32),

new Wall(game, -1112, 1120, 32, 32),

new Wall(game, -1112, 1152, 32, 32),

new Wall(game, -1112, 1184, 32, 32),

new Wall(game, -1112, 1216, 32, 32),

new Wall(game, -1112, 1248, 32, 32),

new Wall(game, -1112, 1280, 32, 32),

new Wall(game, -1112, 1312, 32, 32),

new Wall(game, -1112, 1344, 32, 32),

new Wall(game, -1112, 1376, 32, 32),

new Wall(game, -1112, 1408, 32, 32),

new Wall(game, -1112, 1440, 32, 32),

new Wall(game, -1112, 1472, 32, 32),

new Wall(game, -1080, 992, 32, 32),

new Wall(game, -1080, 1024, 32, 32),

new Wall(game, -1080, 1056, 32, 32),

new Wall(game, -1080, 1088, 32, 32),

new Wall(game, -1080, 1120, 32, 32),

new Wall(game, -1080, 1152, 32, 32),

new Wall(game, -1080, 1184, 32, 32),

new Wall(game, -1080, 1216, 32, 32),

new Wall(game, -1080, 1248, 32, 32),

new Wall(game, -1080, 1280, 32, 32),

new Wall(game, -1080, 1312, 32, 32),

new Wall(game, -1080, 1344, 32, 32),

new Wall(game, -1080, 1376, 32, 32),

new Wall(game, -1080, 1408, 32, 32),

new Wall(game, -1080, 1440, 32, 32),

new Wall(game, -1080, 1472, 32, 32),

new Wall(game, -1048, 960, 32, 32),

new Wall(game, -1048, 992, 32, 32),

new Wall(game, -1048, 1024, 32, 32),

new Wall(game, -1048, 1056, 32, 32),

new Wall(game, -1048, 1088, 32, 32),

new Wall(game, -1048, 1120, 32, 32),

new Wall(game, -1048, 1152, 32, 32),

new Wall(game, -1048, 1184, 32, 32),

new Wall(game, -1048, 1216, 32, 32),

new Wall(game, -1048, 1248, 32, 32),

new Wall(game, -1048, 1280, 32, 32),

new Wall(game, -1048, 1312, 32, 32),

new Wall(game, -1048, 1344, 32, 32),

new Wall(game, -1048, 1376, 32, 32),

new Wall(game, -1048, 1408, 32, 32),

new Wall(game, -1048, 1440, 32, 32),

new Wall(game, -1048, 1472, 32, 32),

new Wall(game, -1128, 432, 32, 32),

new Wall(game, -1096, 432, 32, 32),

new Wall(game, -1128, 464, 32, 32),

new Wall(game, -1096, 464, 32, 32),

new Wall(game, -1064, 464, 32, 32),

new Wall(game, -1032, 464, 32, 32),

new Wall(game, -1000, 464, 32, 32),

new Wall(game, -968, 464, 32, 32),

new Wall(game, -936, 464, 32, 32),

new Wall(game, -904, 464, 32, 32),

new Wall(game, -872, 464, 32, 32),

new Wall(game, -840, 464, 32, 32),

new Wall(game, -808, 464, 32, 32),

new Wall(game, -776, 464, 32, 32),

new Wall(game, -744, 464, 32, 32),

new Wall(game, -1016, 496, 32, 32),

new Wall(game, -1016, 528, 32, 32),

new Wall(game, -1016, 560, 32, 32),

new Wall(game, -1016, 592, 32, 32),

new Wall(game, -1016, 624, 32, 32),

new Wall(game, -1016, 656, 32, 32),

new Wall(game, -1016, 688, 32, 32),

new Wall(game, -1016, 720, 32, 32),

new Wall(game, -1016, 752, 32, 32),

new Wall(game, -1016, 784, 32, 32),

new Wall(game, -1016, 816, 32, 32),

new Wall(game, -1016, 848, 32, 32),

new Wall(game, -1016, 880, 32, 32),

new Wall(game, -1016, 912, 32, 32),

new Wall(game, -1016, 944, 32, 32),

new Wall(game, -984, 496, 32, 32),

new Wall(game, -984, 528, 32, 32),

new Wall(game, -984, 560, 32, 32),

new Wall(game, -984, 592, 32, 32),

new Wall(game, -984, 624, 32, 32),

new Wall(game, -984, 656, 32, 32),

new Wall(game, -984, 688, 32, 32),

new Wall(game, -984, 720, 32, 32),

new Wall(game, -984, 752, 32, 32),

new Wall(game, -984, 784, 32, 32),

new Wall(game, -984, 816, 32, 32),

new Wall(game, -984, 848, 32, 32),

new Wall(game, -984, 880, 32, 32),

new Wall(game, -984, 912, 32, 32),

new Wall(game, -984, 944, 32, 32),

new Wall(game, -1016, 976, 32, 32),

new Wall(game, -984, 976, 32, 32),

new Wall(game, -408, 0, 32, 32),

new Wall(game, -408, 32, 32, 32),

new Wall(game, -408, 64, 32, 32),

new Wall(game, -408, 96, 32, 32),

new Wall(game, -408, 128, 32, 32),

new Wall(game, -408, 160, 32, 32),

new Wall(game, -408, 192, 32, 32),

new Wall(game, -408, 224, 32, 32),

new Wall(game, -408, 256, 32, 32),

new Wall(game, -408, 288, 32, 32),

new Wall(game, -408, 320, 32, 32),

new Wall(game, -408, 352, 32, 32),

new Wall(game, -408, 384, 32, 32),

new Wall(game, -408, 416, 32, 32),

new Wall(game, -408, 448, 32, 32),

new Wall(game, -408, 480, 32, 32),

new Wall(game, -408, 512, 32, 32),

new Wall(game, -408, 544, 32, 32),

new Wall(game, -408, 576, 32, 32),

new Wall(game, -408, 608, 32, 32),

new Wall(game, -408, 640, 32, 32),

new Wall(game, -408, 672, 32, 32),

new Wall(game, -408, 704, 32, 32),

new Wall(game, -408, 736, 32, 32),

new Wall(game, -408, 768, 32, 32),

new Wall(game, -408, 800, 32, 32),

new Wall(game, -408, 832, 32, 32),

new Wall(game, -408, 864, 32, 32),

new Wall(game, -408, 896, 32, 32),

new Wall(game, -408, 928, 32, 32),

new Wall(game, -408, 960, 32, 32),

new Wall(game, -408, 992, 32, 32),

new Wall(game, -408, 1024, 32, 32),

new Wall(game, -408, 1056, 32, 32),

new Wall(game, -408, 1088, 32, 32),

new Wall(game, -408, 1120, 32, 32),

new Wall(game, -408, 1152, 32, 32),

new Wall(game, -376, 0, 32, 32),

new Wall(game, -376, 32, 32, 32),

new Wall(game, -376, 64, 32, 32),

new Wall(game, -376, 96, 32, 32),

new Wall(game, -376, 128, 32, 32),

new Wall(game, -376, 160, 32, 32),

new Wall(game, -376, 192, 32, 32),

new Wall(game, -376, 224, 32, 32),

new Wall(game, -376, 256, 32, 32),

new Wall(game, -376, 288, 32, 32),

new Wall(game, -376, 320, 32, 32),

new Wall(game, -376, 352, 32, 32),

new Wall(game, -376, 384, 32, 32),

new Wall(game, -376, 416, 32, 32),

new Wall(game, -376, 448, 32, 32),

new Wall(game, -376, 480, 32, 32),

new Wall(game, -376, 512, 32, 32),

new Wall(game, -376, 544, 32, 32),

new Wall(game, -376, 576, 32, 32),

new Wall(game, -376, 608, 32, 32),

new Wall(game, -376, 640, 32, 32),

new Wall(game, -376, 672, 32, 32),

new Wall(game, -376, 704, 32, 32),

new Wall(game, -376, 736, 32, 32),

new Wall(game, -376, 768, 32, 32),

new Wall(game, -376, 800, 32, 32),

new Wall(game, -376, 832, 32, 32),

new Wall(game, -376, 864, 32, 32),

new Wall(game, -376, 896, 32, 32),

new Wall(game, -376, 928, 32, 32),

new Wall(game, -376, 960, 32, 32),

new Wall(game, -376, 992, 32, 32),

new Wall(game, -376, 1024, 32, 32),

new Wall(game, -376, 1056, 32, 32),

new Wall(game, -376, 1088, 32, 32),

new Wall(game, -376, 1120, 32, 32),

new Wall(game, -376, 1152, 32, 32),

new Wall(game, -408, 1184, 32, 32),

new Wall(game, -728, 1184, 32, 32),

new Wall(game, -696, 1184, 32, 32),

new Wall(game, -664, 1184, 32, 32),

new Wall(game, -632, 1184, 32, 32),

new Wall(game, -600, 1184, 32, 32),

new Wall(game, -568, 1184, 32, 32),

new Wall(game, -536, 1184, 32, 32),

new Wall(game, -504, 1184, 32, 32),

new Wall(game, -472, 1184, 32, 32),

new Wall(game, -440, 1184, 32, 32),

new Wall(game, -376, 1184, 32, 32),

new Wall(game, -728, 1216, 32, 32),

new Wall(game, -696, 1216, 32, 32),

new Wall(game, -664, 1216, 32, 32),

new Wall(game, -632, 1216, 32, 32),

new Wall(game, -600, 1216, 32, 32),

new Wall(game, -568, 1216, 32, 32),

new Wall(game, -536, 1216, 32, 32),

new Wall(game, -504, 1216, 32, 32),

new Wall(game, -472, 1216, 32, 32),

new Wall(game, -440, 1216, 32, 32),

new Wall(game, -408, 1216, 32, 32),

new Wall(game, -376, 1216, 32, 32),

new Wall(game, -1016, 1184, 32, 32),

new Wall(game, -984, 1184, 32, 32),

new Wall(game, -952, 1184, 32, 32),

new Wall(game, -1016, 1216, 32, 32),

new Wall(game, -984, 1216, 32, 32),

new Wall(game, -952, 1216, 32, 32),

new Wall(game, -1016, 1376, 32, 32),

new Wall(game, -984, 1376, 32, 32),

new Wall(game, -952, 1376, 32, 32),

new Wall(game, -920, 1376, 32, 32),

new Wall(game, -888, 1376, 32, 32),

new Wall(game, -856, 1376, 32, 32),

new Wall(game, -824, 1376, 32, 32),

new Wall(game, -792, 1376, 32, 32),

new Wall(game, -760, 1376, 32, 32),

new Wall(game, -728, 1376, 32, 32),

new Wall(game, -696, 1376, 32, 32),

new Wall(game, -664, 1376, 32, 32),

new Wall(game, -632, 1376, 32, 32),

new Wall(game, -600, 1376, 32, 32),

new Wall(game, -568, 1376, 32, 32),

new Wall(game, -536, 1376, 32, 32),

new Wall(game, -920, 1184, 32, 32),

new Wall(game, -920, 1216, 32, 32),

new Wall(game, -888, 1216, 32, 32),

new Wall(game, -888, 1184, 32, 32),

new Wall(game, -856, 1184, 32, 32),

new Wall(game, -856, 1216, 32, 32),

new Wall(game, -1608, 1360, 32, 32),

new Wall(game, -1576, 1360, 32, 32),

new Wall(game, -1544, 1360, 32, 32),

new Wall(game, -1512, 1360, 32, 32),

new Wall(game, -1480, 1360, 32, 32),

new Wall(game, -1448, 1360, 32, 32),

new Wall(game, -1416, 1360, 32, 32),

new Wall(game, -1384, 1360, 32, 32),

new Wall(game, -1352, 1360, 32, 32),

new Wall(game, -1320, 1360, 32, 32),

new Wall(game, -1288, 1360, 32, 32),

new Wall(game, -1256, 1360, 32, 32),

new Wall(game, -1224, 1360, 32, 32),

new Wall(game, -1192, 1360, 32, 32),

new Wall(game, -1160, 1360, 32, 32),

new Wall(game, -2216, 1360, 32, 32),

new Wall(game, -2216, 1392, 32, 32),

new Wall(game, -2184, 1360, 32, 32),

new Wall(game, -2152, 1360, 32, 32),

new Wall(game, -2120, 1360, 32, 32),

new Wall(game, -2088, 1360, 32, 32),

new Wall(game, -2056, 1360, 32, 32),

new Wall(game, -2024, 1360, 32, 32),

new Wall(game, -1992, 1360, 32, 32),

new Wall(game, -1960, 1360, 32, 32),

new Wall(game, -1928, 1360, 32, 32),

new Wall(game, -1896, 1360, 32, 32),

new Wall(game, -1864, 1360, 32, 32),

new Wall(game, -1832, 1360, 32, 32),

new Wall(game, -1800, 1360, 32, 32),

new Wall(game, -1768, 1360, 32, 32),

new Wall(game, -1736, 1360, 32, 32),

new Wall(game, -1704, 1360, 32, 32),

new Wall(game, -2184, 1392, 32, 32),

new Wall(game, -2152, 1392, 32, 32),

new Wall(game, -2120, 1392, 32, 32),

new Wall(game, -2088, 1392, 32, 32),

new Wall(game, -2056, 1392, 32, 32),

new Wall(game, -2024, 1392, 32, 32),

new Wall(game, -1992, 1392, 32, 32),

new Wall(game, -1960, 1392, 32, 32),

new Wall(game, -1928, 1392, 32, 32),

new Wall(game, -1896, 1392, 32, 32),

new Wall(game, -1864, 1392, 32, 32),

new Wall(game, -1832, 1392, 32, 32),

new Wall(game, -1800, 1392, 32, 32),

new Wall(game, -1768, 1392, 32, 32),

new Wall(game, -1736, 1392, 32, 32),

new Wall(game, -1704, 1392, 32, 32),

new Wall(game, -1608, 1392, 32, 32),

new Wall(game, -1576, 1392, 32, 32),

new Wall(game, -1544, 1392, 32, 32),

new Wall(game, -1512, 1392, 32, 32),

new Wall(game, -1480, 1392, 32, 32),

new Wall(game, -1448, 1392, 32, 32),

new Wall(game, -1416, 1392, 32, 32),

new Wall(game, -1384, 1392, 32, 32),

new Wall(game, -1352, 1392, 32, 32),

new Wall(game, -1320, 1392, 32, 32),

new Wall(game, -1288, 1392, 32, 32),

new Wall(game, -1256, 1392, 32, 32),

new Wall(game, -1224, 1392, 32, 32),

new Wall(game, -1192, 1392, 32, 32),

new Wall(game, -1160, 1392, 32, 32),

new Wall(game, -504, 1376, 32, 32),

new Wall(game, -504, 1344, 32, 32),

new Wall(game, -472, 1344, 32, 32),

new Wall(game, -472, 1376, 32, 32),

new Wall(game, -440, 1344, 32, 32),

new Wall(game, -440, 1376, 32, 32),

new Wall(game, -408, 1344, 32, 32),

new Wall(game, -408, 1376, 32, 32),

new Wall(game, -376, 1344, 32, 32),

new Wall(game, -376, 1376, 32, 32),

new Wall(game, -344, 1376, 32, 32),

new Wall(game, -312, 1376, 32, 32),

new Wall(game, -280, 1376, 32, 32),

new Wall(game, -280, 1344, 32, 32),

new Wall(game, -280, 1312, 32, 32),

new Wall(game, -280, 1280, 32, 32),

new Wall(game, -280, 1248, 32, 32),

new Wall(game, -280, 1216, 32, 32),

new Wall(game, -280, 1184, 32, 32),

new Wall(game, -280, 1152, 32, 32),

new Wall(game, -280, 1120, 32, 32),

new Wall(game, -248, 1120, 32, 32),

new Wall(game, -248, 1088, 32, 32),

new Wall(game, -248, 1056, 32, 32),

new Wall(game, -248, 1024, 32, 32),

new Wall(game, -280, 992, 32, 32),

new Wall(game, -280, 960, 32, 32),

new Wall(game, -280, 928, 32, 32),

new Wall(game, -248, 928, 32, 32),

new Wall(game, -248, 832, 32, 32),

new Wall(game, -280, 832, 32, 32),

new Wall(game, -312, 832, 32, 32),

new Wall(game, -344, 832, 32, 32),

new Wall(game, -248, 960, 32, 32),

new Wall(game, -248, 992, 32, 32),

new Wall(game, -216, 960, 32, 32),

new Wall(game, -216, 992, 32, 32),

new Wall(game, -216, 1024, 32, 32),

new Wall(game, -216, 1056, 32, 32),

new Wall(game, -216, 1088, 32, 32),

new Wall(game, -216, 1120, 32, 32),

new Wall(game, -248, 1152, 32, 32),

new Wall(game, -248, 1184, 32, 32),

new Wall(game, -248, 1216, 32, 32),

new Wall(game, -248, 1248, 32, 32),

new Wall(game, -248, 1280, 32, 32),

new Wall(game, -248, 1312, 32, 32),

new Wall(game, -248, 1344, 32, 32),

new Wall(game, -248, 1376, 32, 32),

new Wall(game, -216, 1152, 32, 32),

new Wall(game, -216, 1184, 32, 32),

new Wall(game, -216, 1216, 32, 32),

new Wall(game, -216, 1248, 32, 32),

new Wall(game, -216, 1280, 32, 32),

new Wall(game, -216, 1312, 32, 32),

new Wall(game, -216, 1344, 32, 32),

new Wall(game, -216, 1376, 32, 32),

new Wall(game, -216, 832, 32, 32),

new Wall(game, -184, 832, 32, 32),

new Wall(game, -152, 832, 32, 32),

new Wall(game, -120, 832, 32, 32),

new Wall(game, -88, 832, 32, 32),

new Wall(game, -56, 832, 32, 32),

new Wall(game, -216, 928, 32, 32),

new Wall(game, 168, 928, 32, 32),

new Wall(game, -184, 1056, 32, 32),

new Wall(game, -152, 1056, 32, 32),

new Wall(game, -120, 1056, 32, 32),

new Wall(game, -88, 1056, 32, 32),

new Wall(game, -56, 1056, 32, 32),

new Wall(game, -24, 1056, 32, 32),

new Wall(game, 8, 1056, 32, 32),

new Wall(game, 40, 1056, 32, 32),

new Wall(game, 72, 1056, 32, 32),

new Wall(game, 104, 1056, 32, 32),

new Wall(game, 136, 1056, 32, 32),

new Wall(game, 168, 960, 32, 32),

new Wall(game, 168, 992, 32, 32),

new Wall(game, 168, 1024, 32, 32),

new Wall(game, 168, 1056, 32, 32),

new Wall(game, -184, 1088, 32, 32),

new Wall(game, -152, 1088, 32, 32),

new Wall(game, -120, 1088, 32, 32),

new Wall(game, -88, 1088, 32, 32),

new Wall(game, -56, 1088, 32, 32),

new Wall(game, -24, 1088, 32, 32),

new Wall(game, 8, 1088, 32, 32),

new Wall(game, 40, 1088, 32, 32),

new Wall(game, 72, 1088, 32, 32),

new Wall(game, 104, 1088, 32, 32),

new Wall(game, 136, 1088, 32, 32),

new Wall(game, 168, 1088, 32, 32),

new Wall(game, 200, 928, 32, 32),

new Wall(game, 200, 960, 32, 32),

new Wall(game, 200, 992, 32, 32),

new Wall(game, 200, 1024, 32, 32),

new Wall(game, 200, 1056, 32, 32),

new Wall(game, 200, 1088, 32, 32),

new Wall(game, 232, 928, 32, 32),

new Wall(game, 232, 960, 32, 32),

new Wall(game, 264, 960, 32, 32),

new Wall(game, 264, 928, 32, 32),

new Wall(game, 232, 480, 32, 32),

new Wall(game, 232, 512, 32, 32),

new Wall(game, 232, 544, 32, 32),

new Wall(game, 232, 576, 32, 32),

new Wall(game, 232, 608, 32, 32),

new Wall(game, 232, 640, 32, 32),

new Wall(game, 232, 672, 32, 32),

new Wall(game, 232, 704, 32, 32),

new Wall(game, 232, 736, 32, 32),

new Wall(game, 232, 768, 32, 32),

new Wall(game, 232, 800, 32, 32),

new Wall(game, 232, 832, 32, 32),

new Wall(game, 232, 864, 32, 32),

new Wall(game, 232, 896, 32, 32),

new Wall(game, 264, 480, 32, 32),

new Wall(game, 264, 512, 32, 32),

new Wall(game, 264, 544, 32, 32),

new Wall(game, 264, 576, 32, 32),

new Wall(game, 264, 608, 32, 32),

new Wall(game, 264, 640, 32, 32),

new Wall(game, 264, 672, 32, 32),

new Wall(game, 264, 704, 32, 32),

new Wall(game, 264, 736, 32, 32),

new Wall(game, 264, 768, 32, 32),

new Wall(game, 264, 800, 32, 32),

new Wall(game, 264, 832, 32, 32),

new Wall(game, 264, 864, 32, 32),

new Wall(game, 264, 896, 32, 32),

new Wall(game, -344, 800, 32, 32),

new Wall(game, -312, 800, 32, 32),

new Wall(game, -280, 800, 32, 32),

new Wall(game, -248, 800, 32, 32),

new Wall(game, -216, 800, 32, 32),

new Wall(game, -184, 800, 32, 32),

new Wall(game, -152, 800, 32, 32),

new Wall(game, -120, 800, 32, 32),

new Wall(game, -88, 800, 32, 32),

new Wall(game, -56, 800, 32, 32),

new Wall(game, -24, 800, 32, 32),

new Wall(game, 8, 800, 32, 32),

new Wall(game, 40, 800, 32, 32),

new Wall(game, 72, 800, 32, 32),

new Wall(game, 104, 800, 32, 32),

new Wall(game, 136, 800, 32, 32),

new Wall(game, -24, 832, 32, 32),

new Wall(game, 8, 832, 32, 32),

new Wall(game, 40, 832, 32, 32),

new Wall(game, 72, 832, 32, 32),

new Wall(game, 104, 832, 32, 32),

new Wall(game, 136, 832, 32, 32),

new Wall(game, -344, 768, 32, 32),

new Wall(game, -312, 768, 32, 32),

new Wall(game, -280, 768, 32, 32),

new Wall(game, -248, 768, 32, 32),

new Wall(game, -216, 768, 32, 32),

new Wall(game, -184, 768, 32, 32),

new Wall(game, -152, 768, 32, 32),

new Wall(game, -120, 768, 32, 32),

new Wall(game, -88, 768, 32, 32),

new Wall(game, -56, 768, 32, 32),

new Wall(game, -24, 768, 32, 32),

new Wall(game, 8, 768, 32, 32),

new Wall(game, 40, 768, 32, 32),

new Wall(game, 72, 768, 32, 32),

new Wall(game, 104, 768, 32, 32),

new Wall(game, 136, 768, 32, 32),

new Wall(game, -344, 736, 32, 32),

new Wall(game, -312, 736, 32, 32),

new Wall(game, 104, 736, 32, 32),

new Wall(game, 136, 736, 32, 32),

new Wall(game, -248, 448, 32, 32),

new Wall(game, -280, 448, 32, 32),

new Wall(game, -344, 672, 32, 32),

new Wall(game, -312, 672, 32, 32),

new Wall(game, -312, 704, 32, 32),

new Wall(game, -344, 704, 32, 32),

new Wall(game, 296, 480, 32, 32),

new Wall(game, 328, 480, 32, 32),

new Wall(game, -344, 352, 32, 32),

new Wall(game, -344, 320, 32, 32),

new Wall(game, -312, 320, 32, 32),

new Wall(game, -280, 320, 32, 32),

new Wall(game, -248, 320, 32, 32),

new Wall(game, -216, 320, 32, 32),

new Wall(game, -184, 320, 32, 32),

new Wall(game, -152, 320, 32, 32),

new Wall(game, -120, 320, 32, 32),

new Wall(game, -88, 320, 32, 32),

new Wall(game, -56, 320, 32, 32),

new Wall(game, -24, 320, 32, 32),

new Wall(game, 8, 320, 32, 32),

new Wall(game, 40, 320, 32, 32),

new Wall(game, 72, 320, 32, 32),

new Wall(game, 104, 320, 32, 32),

new Wall(game, 136, 320, 32, 32),

new Wall(game, 168, 320, 32, 32),

new Wall(game, 200, 320, 32, 32),

new Wall(game, -312, 352, 32, 32),

new Wall(game, -280, 352, 32, 32),

new Wall(game, -248, 352, 32, 32),

new Wall(game, -216, 352, 32, 32),

new Wall(game, -184, 352, 32, 32),

new Wall(game, -152, 352, 32, 32),

new Wall(game, -120, 352, 32, 32),

new Wall(game, -88, 352, 32, 32),

new Wall(game, -56, 352, 32, 32),

new Wall(game, -24, 352, 32, 32),

new Wall(game, 8, 352, 32, 32),

new Wall(game, 40, 352, 32, 32),

new Wall(game, 72, 352, 32, 32),

new Wall(game, 104, 352, 32, 32),

new Wall(game, 136, 352, 32, 32),

new Wall(game, 168, 352, 32, 32),

new Wall(game, 200, 352, 32, 32),

new Wall(game, 232, 320, 32, 32),

new Wall(game, 264, 320, 32, 32),

new Wall(game, 296, 320, 32, 32),

new Wall(game, 328, 320, 32, 32),

new Wall(game, 360, 320, 32, 32),

new Wall(game, 392, 320, 32, 32),

new Wall(game, 424, 320, 32, 32),

new Wall(game, 232, 352, 32, 32),

new Wall(game, 264, 352, 32, 32),

new Wall(game, 296, 352, 32, 32),

new Wall(game, 328, 352, 32, 32),

new Wall(game, 360, 352, 32, 32),

new Wall(game, 392, 352, 32, 32),

new Wall(game, 424, 352, 32, 32),

new Wall(game, 424, 384, 32, 32),

new Wall(game, 424, 416, 32, 32),

new Wall(game, 424, 448, 32, 32),

new Wall(game, 424, 480, 32, 32),

new Wall(game, 424, 512, 32, 32),

new Wall(game, 424, 544, 32, 32),

new Wall(game, 424, 576, 32, 32),

new Wall(game, 424, 608, 32, 32),

new Wall(game, 424, 640, 32, 32),

new Wall(game, 424, 672, 32, 32),

new Wall(game, 424, 704, 32, 32),

new Wall(game, 424, 736, 32, 32),

new Wall(game, 424, 768, 32, 32),

new Wall(game, 424, 800, 32, 32),

new Wall(game, 424, 832, 32, 32),

new Wall(game, 424, 864, 32, 32),

new Wall(game, 424, 896, 32, 32),

new Wall(game, 424, 928, 32, 32),

new Wall(game, 424, 960, 32, 32),

new Wall(game, 360, 704, 32, 32),

new Wall(game, 392, 704, 32, 32),

new Wall(game, 296, 928, 32, 32),

new Wall(game, 328, 928, 32, 32),

new Wall(game, 328, 960, 32, 32),

new Wall(game, 296, 960, 32, 32),

new Wall(game, 424, 992, 32, 32),

new Wall(game, 424, 1024, 32, 32),

new Wall(game, 424, 1056, 32, 32),

new Wall(game, 424, 1088, 32, 32),

new Wall(game, 424, 1120, 32, 32),

new Wall(game, 424, 1152, 32, 32),

new Wall(game, 424, 1184, 32, 32),

new Wall(game, -216, 1408, 32, 32),

new Wall(game, -216, 1440, 32, 32),

new Wall(game, -216, 1472, 32, 32),

new Wall(game, -216, 1504, 32, 32),

new Wall(game, -216, 1536, 32, 32),

new Wall(game, -216, 1568, 32, 32),

new Wall(game, -216, 1600, 32, 32),

new Wall(game, -216, 1632, 32, 32),

new Wall(game, -216, 1664, 32, 32),

new Wall(game, -216, 1696, 32, 32),

new Wall(game, -184, 1712, 32, 32),

new Wall(game, -152, 1712, 32, 32),

new Wall(game, -120, 1712, 32, 32),

new Wall(game, -88, 1712, 32, 32),

new Wall(game, -56, 1712, 32, 32),

new Wall(game, -24, 1712, 32, 32),

new Wall(game, 8, 1712, 32, 32),

new Wall(game, 40, 1712, 32, 32),

new Wall(game, 72, 1712, 32, 32),

new Wall(game, 104, 1712, 32, 32),

new Wall(game, 136, 1712, 32, 32),

new Wall(game, 168, 1712, 32, 32),

new Wall(game, 200, 1712, 32, 32),

new Wall(game, 232, 1712, 32, 32),

new Wall(game, 264, 1712, 32, 32),

new Wall(game, 296, 1712, 32, 32),

new Wall(game, 328, 1712, 32, 32),

new Wall(game, 360, 1712, 32, 32),

new Wall(game, 392, 1712, 32, 32),

new Wall(game, 424, 1712, 32, 32),

new Wall(game, 456, 1712, 32, 32),

new Wall(game, 488, 1712, 32, 32),

new Wall(game, 520, 1712, 32, 32),

new Wall(game, 552, 1712, 32, 32),

new Wall(game, 584, 1712, 32, 32),

new Wall(game, -216, 1728, 32, 32),

new Wall(game, -184, 1744, 32, 32),

new Wall(game, -152, 1744, 32, 32),

new Wall(game, -120, 1744, 32, 32),

new Wall(game, -88, 1744, 32, 32),

new Wall(game, -56, 1744, 32, 32),

new Wall(game, -24, 1744, 32, 32),

new Wall(game, 8, 1744, 32, 32),

new Wall(game, 40, 1744, 32, 32),

new Wall(game, 72, 1744, 32, 32),

new Wall(game, 104, 1744, 32, 32),

new Wall(game, 136, 1744, 32, 32),

new Wall(game, 168, 1744, 32, 32),

new Wall(game, 200, 1744, 32, 32),

new Wall(game, 232, 1744, 32, 32),

new Wall(game, 264, 1744, 32, 32),

new Wall(game, 296, 1744, 32, 32),

new Wall(game, 328, 1744, 32, 32),

new Wall(game, 360, 1744, 32, 32),

new Wall(game, 392, 1744, 32, 32),

new Wall(game, 424, 1744, 32, 32),

new Wall(game, 456, 1744, 32, 32),

new Wall(game, 488, 1744, 32, 32),

new Wall(game, 520, 1744, 32, 32),

new Wall(game, 552, 1744, 32, 32),

new Wall(game, 584, 1744, 32, 32),

new Wall(game, -248, 1408, 32, 32),

new Wall(game, -248, 1440, 32, 32),

new Wall(game, -248, 1472, 32, 32),

new Wall(game, -248, 1504, 32, 32),

new Wall(game, -248, 1536, 32, 32),

new Wall(game, -248, 1568, 32, 32),

new Wall(game, -248, 1600, 32, 32),

new Wall(game, -248, 1632, 32, 32),

new Wall(game, -248, 1664, 32, 32),

new Wall(game, -248, 1696, 32, 32),

new Wall(game, -248, 1728, 32, 32),

new Wall(game, 616, 1680, 32, 32),

new Wall(game, 616, 1712, 32, 32),

new Wall(game, 616, 1744, 32, 32),

new Wall(game, 648, 1648, 32, 32),

new Wall(game, 648, 1680, 32, 32),

new Wall(game, 648, 1712, 32, 32),

new Wall(game, 648, 1744, 32, 32),

new Wall(game, 680, 1616, 32, 32),

new Wall(game, 680, 1648, 32, 32),

new Wall(game, 680, 1680, 32, 32),

new Wall(game, 680, 1712, 32, 32),

new Wall(game, 680, 1744, 32, 32),

new Wall(game, 712, 1584, 32, 32),

new Wall(game, 712, 1616, 32, 32),

new Wall(game, 712, 1648, 32, 32),

new Wall(game, 712, 1680, 32, 32),

new Wall(game, 712, 1712, 32, 32),

new Wall(game, 712, 1744, 32, 32),

new Wall(game, 744, 1552, 32, 32),

new Wall(game, 744, 1584, 32, 32),

new Wall(game, 744, 1616, 32, 32),

new Wall(game, 744, 1648, 32, 32),

new Wall(game, 744, 1680, 32, 32),

new Wall(game, 744, 1712, 32, 32),

new Wall(game, 744, 1744, 32, 32),

new Wall(game, 456, 1184, 32, 32),

new Wall(game, 488, 1184, 32, 32),

new Wall(game, 520, 1184, 32, 32),

new Wall(game, 552, 1184, 32, 32),

new Wall(game, 584, 1184, 32, 32),

new Wall(game, 616, 1184, 32, 32),

new Wall(game, 648, 1184, 32, 32),

new Wall(game, 680, 1184, 32, 32),

new Wall(game, 712, 1184, 32, 32),

new Wall(game, 744, 1184, 32, 32),

new Wall(game, 488, 1216, 32, 32),

new Wall(game, 520, 1216, 32, 32),

new Wall(game, 552, 1216, 32, 32),

new Wall(game, 584, 1216, 32, 32),

new Wall(game, 616, 1216, 32, 32),

new Wall(game, 648, 1216, 32, 32),

new Wall(game, 680, 1216, 32, 32),

new Wall(game, 712, 1216, 32, 32),

new Wall(game, 744, 1216, 32, 32),

new Wall(game, 552, 1248, 32, 32),

new Wall(game, 584, 1248, 32, 32),

new Wall(game, 616, 1248, 32, 32),

new Wall(game, 648, 1248, 32, 32),

new Wall(game, 680, 1248, 32, 32),

new Wall(game, 712, 1248, 32, 32),

new Wall(game, 744, 1248, 32, 32),

new Wall(game, 616, 1280, 32, 32),

new Wall(game, 648, 1280, 32, 32),

new Wall(game, 680, 1280, 32, 32),

new Wall(game, 712, 1280, 32, 32),

new Wall(game, 744, 1280, 32, 32),

new Wall(game, 680, 1312, 32, 32),

new Wall(game, 712, 1312, 32, 32),

new Wall(game, 744, 1312, 32, 32),

new Wall(game, 776, 1520, 32, 32),

new Wall(game, 808, 1520, 32, 32),

new Wall(game, 840, 1520, 32, 32),

new Wall(game, 872, 1520, 32, 32),

new Wall(game, 904, 1520, 32, 32),

new Wall(game, 936, 1520, 32, 32),

new Wall(game, 968, 1520, 32, 32),

new Wall(game, 1000, 1520, 32, 32),

new Wall(game, 1032, 1520, 32, 32),

new Wall(game, 1064, 1520, 32, 32),

new Wall(game, 1096, 1520, 32, 32),

new Wall(game, 1128, 1520, 32, 32),

new Wall(game, 1160, 1520, 32, 32),

new Wall(game, 1192, 1520, 32, 32),

new Wall(game, 1224, 1520, 32, 32),

new Wall(game, 1256, 1520, 32, 32),

new Wall(game, 1288, 1520, 32, 32),

new Wall(game, 1320, 1520, 32, 32),

new Wall(game, 1352, 1520, 32, 32),

new Wall(game, 776, 1552, 32, 32),

new Wall(game, 808, 1552, 32, 32),

new Wall(game, 840, 1552, 32, 32),

new Wall(game, 872, 1552, 32, 32),

new Wall(game, 904, 1552, 32, 32),

new Wall(game, 936, 1552, 32, 32),

new Wall(game, 968, 1552, 32, 32),

new Wall(game, 1064, 1552, 32, 32),

new Wall(game, 1096, 1552, 32, 32),

new Wall(game, 1128, 1552, 32, 32),

new Wall(game, 1160, 1552, 32, 32),

new Wall(game, 1192, 1552, 32, 32),

new Wall(game, 1224, 1552, 32, 32),

new Wall(game, 1256, 1552, 32, 32),

new Wall(game, 1288, 1552, 32, 32),

new Wall(game, 1320, 1552, 32, 32),

new Wall(game, 1352, 1552, 32, 32),

new Wall(game, 1000, 1552, 32, 32),

new Wall(game, 1032, 1552, 32, 32),

new Wall(game, 1128, 1584, 32, 32),

new Wall(game, 1160, 1584, 32, 32),

new Wall(game, 1192, 1584, 32, 32),

new Wall(game, 1224, 1584, 32, 32),

new Wall(game, 1256, 1584, 32, 32),

new Wall(game, 1288, 1584, 32, 32),

new Wall(game, 1320, 1584, 32, 32),

new Wall(game, 1352, 1584, 32, 32),

new Wall(game, 776, 1584, 32, 32),

new Wall(game, 808, 1584, 32, 32),

new Wall(game, 840, 1584, 32, 32),

new Wall(game, 872, 1584, 32, 32),

new Wall(game, 904, 1584, 32, 32),

new Wall(game, 936, 1584, 32, 32),

new Wall(game, 968, 1584, 32, 32),

new Wall(game, 1000, 1584, 32, 32),

new Wall(game, 1032, 1584, 32, 32),

new Wall(game, 1064, 1584, 32, 32),

new Wall(game, 1096, 1584, 32, 32),

new Wall(game, 776, 1616, 32, 32),

new Wall(game, 808, 1616, 32, 32),

new Wall(game, 840, 1616, 32, 32),

new Wall(game, 872, 1616, 32, 32),

new Wall(game, 904, 1616, 32, 32),

new Wall(game, 936, 1616, 32, 32),

new Wall(game, 968, 1616, 32, 32),

new Wall(game, 1000, 1616, 32, 32),

new Wall(game, 1032, 1616, 32, 32),

new Wall(game, 1064, 1616, 32, 32),

new Wall(game, 1096, 1616, 32, 32),

new Wall(game, 1128, 1616, 32, 32),

new Wall(game, 1160, 1616, 32, 32),

new Wall(game, 1192, 1616, 32, 32),

new Wall(game, 1224, 1616, 32, 32),

new Wall(game, 1256, 1616, 32, 32),

new Wall(game, 1288, 1616, 32, 32),

new Wall(game, 1320, 1616, 32, 32),

new Wall(game, 1352, 1616, 32, 32),

new Wall(game, 776, 1648, 32, 32),

new Wall(game, 808, 1648, 32, 32),

new Wall(game, 840, 1648, 32, 32),

new Wall(game, 872, 1648, 32, 32),

new Wall(game, 904, 1648, 32, 32),

new Wall(game, 936, 1648, 32, 32),

new Wall(game, 968, 1648, 32, 32),

new Wall(game, 1000, 1648, 32, 32),

new Wall(game, 1032, 1648, 32, 32),

new Wall(game, 1064, 1648, 32, 32),

new Wall(game, 1096, 1648, 32, 32),

new Wall(game, 1128, 1648, 32, 32),

new Wall(game, 1160, 1648, 32, 32),

new Wall(game, 1192, 1648, 32, 32),

new Wall(game, 1224, 1648, 32, 32),

new Wall(game, 1256, 1648, 32, 32),

new Wall(game, 1288, 1648, 32, 32),

new Wall(game, 1320, 1648, 32, 32),

new Wall(game, 1352, 1648, 32, 32),

new Wall(game, 776, 1680, 32, 32),

new Wall(game, 808, 1680, 32, 32),

new Wall(game, 840, 1680, 32, 32),

new Wall(game, 872, 1680, 32, 32),

new Wall(game, 904, 1680, 32, 32),

new Wall(game, 936, 1680, 32, 32),

new Wall(game, 968, 1680, 32, 32),

new Wall(game, 1000, 1680, 32, 32),

new Wall(game, 1032, 1680, 32, 32),

new Wall(game, 1064, 1680, 32, 32),

new Wall(game, 1096, 1680, 32, 32),

new Wall(game, 1128, 1680, 32, 32),

new Wall(game, 1160, 1680, 32, 32),

new Wall(game, 1192, 1680, 32, 32),

new Wall(game, 1224, 1680, 32, 32),

new Wall(game, 1256, 1680, 32, 32),

new Wall(game, 1288, 1680, 32, 32),

new Wall(game, 1320, 1680, 32, 32),

new Wall(game, 1352, 1680, 32, 32),

new Wall(game, 776, 1712, 32, 32),

new Wall(game, 808, 1712, 32, 32),

new Wall(game, 840, 1712, 32, 32),

new Wall(game, 872, 1712, 32, 32),

new Wall(game, 904, 1712, 32, 32),

new Wall(game, 936, 1712, 32, 32),

new Wall(game, 968, 1712, 32, 32),

new Wall(game, 1000, 1712, 32, 32),

new Wall(game, 1032, 1712, 32, 32),

new Wall(game, 1064, 1712, 32, 32),

new Wall(game, 1096, 1712, 32, 32),

new Wall(game, 1128, 1712, 32, 32),

new Wall(game, 1160, 1712, 32, 32),

new Wall(game, 1192, 1712, 32, 32),

new Wall(game, 1224, 1712, 32, 32),

new Wall(game, 1256, 1712, 32, 32),

new Wall(game, 1288, 1712, 32, 32),

new Wall(game, 1320, 1712, 32, 32),

new Wall(game, 1352, 1712, 32, 32),

new Wall(game, 776, 1744, 32, 32),

new Wall(game, 808, 1744, 32, 32),

new Wall(game, 840, 1744, 32, 32),

new Wall(game, 872, 1744, 32, 32),

new Wall(game, 904, 1744, 32, 32),

new Wall(game, 936, 1744, 32, 32),

new Wall(game, 968, 1744, 32, 32),

new Wall(game, 1000, 1744, 32, 32),

new Wall(game, 1032, 1744, 32, 32),

new Wall(game, 1064, 1744, 32, 32),

new Wall(game, 1096, 1744, 32, 32),

new Wall(game, 1128, 1744, 32, 32),

new Wall(game, 1160, 1744, 32, 32),

new Wall(game, 1192, 1744, 32, 32),

new Wall(game, 1224, 1744, 32, 32),

new Wall(game, 1256, 1744, 32, 32),

new Wall(game, 1288, 1744, 32, 32),

new Wall(game, 1320, 1744, 32, 32),

new Wall(game, 1352, 1744, 32, 32),

new Wall(game, 744, 1344, 32, 32),

new Wall(game, 776, 1344, 32, 32),

new Wall(game, 808, 1344, 32, 32),

new Wall(game, 840, 1344, 32, 32),

new Wall(game, 872, 1344, 32, 32),

new Wall(game, 904, 1344, 32, 32),

new Wall(game, 936, 1344, 32, 32),

new Wall(game, 968, 1344, 32, 32),

new Wall(game, 1000, 1344, 32, 32),

new Wall(game, 1032, 1344, 32, 32),

new Wall(game, 1064, 1344, 32, 32),

new Wall(game, 1096, 1344, 32, 32),

new Wall(game, 1128, 1344, 32, 32),

new Wall(game, 1160, 1344, 32, 32),

new Wall(game, 1192, 1344, 32, 32),

new Wall(game, 1224, 1344, 32, 32),

new Wall(game, 1256, 1344, 32, 32),

new Wall(game, 1288, 1344, 32, 32),

new Wall(game, 1320, 1344, 32, 32),

new Wall(game, 1352, 1344, 32, 32),

new Wall(game, 776, 1312, 32, 32),

new Wall(game, 808, 1312, 32, 32),

new Wall(game, 840, 1312, 32, 32),

new Wall(game, 872, 1312, 32, 32),

new Wall(game, 904, 1312, 32, 32),

new Wall(game, 936, 1312, 32, 32),

new Wall(game, 968, 1312, 32, 32),

new Wall(game, 1000, 1312, 32, 32),

new Wall(game, 1032, 1312, 32, 32),

new Wall(game, 1064, 1312, 32, 32),

new Wall(game, 1096, 1312, 32, 32),

new Wall(game, 1128, 1312, 32, 32),

new Wall(game, 1160, 1312, 32, 32),

new Wall(game, 1192, 1312, 32, 32),

new Wall(game, 1224, 1312, 32, 32),

new Wall(game, 1256, 1312, 32, 32),

new Wall(game, 1288, 1312, 32, 32),

new Wall(game, 1320, 1312, 32, 32),

new Wall(game, 1352, 1312, 32, 32),

new Wall(game, 776, 1280, 32, 32),

new Wall(game, 808, 1280, 32, 32),

new Wall(game, 840, 1280, 32, 32),

new Wall(game, 872, 1280, 32, 32),

new Wall(game, 904, 1280, 32, 32),

new Wall(game, 936, 1280, 32, 32),

new Wall(game, 968, 1280, 32, 32),

new Wall(game, 1000, 1280, 32, 32),

new Wall(game, 1032, 1280, 32, 32),

new Wall(game, 1064, 1280, 32, 32),

new Wall(game, 1096, 1280, 32, 32),

new Wall(game, 1128, 1280, 32, 32),

new Wall(game, 1160, 1280, 32, 32),

new Wall(game, 1192, 1280, 32, 32),

new Wall(game, 1224, 1280, 32, 32),

new Wall(game, 1256, 1280, 32, 32),

new Wall(game, 1288, 1280, 32, 32),

new Wall(game, 1320, 1280, 32, 32),

new Wall(game, 1352, 1280, 32, 32),

new Wall(game, 776, 1248, 32, 32),

new Wall(game, 808, 1248, 32, 32),

new Wall(game, 840, 1248, 32, 32),

new Wall(game, 872, 1248, 32, 32),

new Wall(game, 904, 1248, 32, 32),

new Wall(game, 936, 1248, 32, 32),

new Wall(game, 968, 1248, 32, 32),

new Wall(game, 1000, 1248, 32, 32),

new Wall(game, 1032, 1248, 32, 32),

new Wall(game, 1064, 1248, 32, 32),

new Wall(game, 1096, 1248, 32, 32),

new Wall(game, 1128, 1248, 32, 32),

new Wall(game, 1160, 1248, 32, 32),

new Wall(game, 1192, 1248, 32, 32),

new Wall(game, 1224, 1248, 32, 32),

new Wall(game, 1256, 1248, 32, 32),

new Wall(game, 1288, 1248, 32, 32),

new Wall(game, 1320, 1248, 32, 32),

new Wall(game, 1352, 1248, 32, 32),

new Wall(game, 776, 1216, 32, 32),

new Wall(game, 808, 1216, 32, 32),

new Wall(game, 840, 1216, 32, 32),

new Wall(game, 872, 1216, 32, 32),

new Wall(game, 904, 1216, 32, 32),

new Wall(game, 936, 1216, 32, 32),

new Wall(game, 968, 1216, 32, 32),

new Wall(game, 1000, 1216, 32, 32),

new Wall(game, 1032, 1216, 32, 32),

new Wall(game, 1064, 1216, 32, 32),

new Wall(game, 1096, 1216, 32, 32),

new Wall(game, 1128, 1216, 32, 32),

new Wall(game, 1160, 1216, 32, 32),

new Wall(game, 1192, 1216, 32, 32),

new Wall(game, 1224, 1216, 32, 32),

new Wall(game, 1256, 1216, 32, 32),

new Wall(game, 1288, 1216, 32, 32),

new Wall(game, 1320, 1216, 32, 32),

new Wall(game, 1352, 1216, 32, 32),

new Wall(game, 776, 1184, 32, 32),

new Wall(game, 808, 1184, 32, 32),

new Wall(game, 840, 1184, 32, 32),

new Wall(game, 872, 1184, 32, 32),

new Wall(game, 904, 1184, 32, 32),

new Wall(game, 936, 1184, 32, 32),

new Wall(game, 968, 1184, 32, 32),

new Wall(game, 1000, 1184, 32, 32),

new Wall(game, 1032, 1184, 32, 32),

new Wall(game, 1064, 1184, 32, 32),

new Wall(game, 1096, 1184, 32, 32),

new Wall(game, 1128, 1184, 32, 32),

new Wall(game, 1160, 1184, 32, 32),

new Wall(game, 1192, 1184, 32, 32),

new Wall(game, 1224, 1184, 32, 32),

new Wall(game, 1256, 1184, 32, 32),

new Wall(game, 1288, 1184, 32, 32),

new Wall(game, 1320, 1184, 32, 32),

new Wall(game, 1352, 1184, 32, 32),

new Wall(game, 1384, 1184, 32, 32),

new Wall(game, 1416, 1184, 32, 32),

new Wall(game, 1448, 1184, 32, 32),

new Wall(game, 1480, 1184, 32, 32),

new Wall(game, 1512, 1184, 32, 32),

new Wall(game, 1544, 1184, 32, 32),

new Wall(game, 1576, 1184, 32, 32),

new Wall(game, 1608, 1184, 32, 32),

new Wall(game, 1736, 1184, 32, 32),

new Wall(game, 1768, 1184, 32, 32),

new Wall(game, 1800, 1184, 32, 32),

new Wall(game, 1832, 1184, 32, 32),

new Wall(game, 1864, 1184, 32, 32),

new Wall(game, 1896, 1184, 32, 32),

new Wall(game, 1928, 1184, 32, 32),

new Wall(game, 1960, 1184, 32, 32),

new Wall(game, 1992, 1184, 32, 32),

new Wall(game, 2024, 1184, 32, 32),

new Wall(game, 2056, 1184, 32, 32),

new Wall(game, 1384, 1216, 32, 32),

new Wall(game, 1416, 1216, 32, 32),

new Wall(game, 1448, 1216, 32, 32),

new Wall(game, 1480, 1216, 32, 32),

new Wall(game, 1512, 1216, 32, 32),

new Wall(game, 1544, 1216, 32, 32),

new Wall(game, 1576, 1216, 32, 32),

new Wall(game, 1608, 1216, 32, 32),

new Wall(game, 1640, 1184, 32, 32),

new Wall(game, 1672, 1184, 32, 32),

new Wall(game, 1704, 1184, 32, 32),

new Wall(game, 1800, 1216, 32, 32),

new Wall(game, 1832, 1216, 32, 32),

new Wall(game, 1864, 1216, 32, 32),

new Wall(game, 1896, 1216, 32, 32),

new Wall(game, 1928, 1216, 32, 32),

new Wall(game, 1960, 1216, 32, 32),

new Wall(game, 1992, 1216, 32, 32),

new Wall(game, 2024, 1216, 32, 32),

new Wall(game, 2056, 1216, 32, 32),

new Wall(game, 1384, 1248, 32, 32),

new Wall(game, 1416, 1248, 32, 32),

new Wall(game, 1448, 1248, 32, 32),

new Wall(game, 1480, 1248, 32, 32),

new Wall(game, 1512, 1248, 32, 32),

new Wall(game, 1544, 1248, 32, 32),

new Wall(game, 1576, 1248, 32, 32),

new Wall(game, 1608, 1248, 32, 32),

new Wall(game, 1640, 1248, 32, 32),

new Wall(game, 1640, 1216, 32, 32),

new Wall(game, 1672, 1216, 32, 32),

new Wall(game, 1704, 1216, 32, 32),

new Wall(game, 1736, 1216, 32, 32),

new Wall(game, 1768, 1216, 32, 32),

new Wall(game, 1672, 1248, 32, 32),

new Wall(game, 1704, 1248, 32, 32),

new Wall(game, 1736, 1248, 32, 32),

new Wall(game, 1768, 1248, 32, 32),

new Wall(game, 1800, 1248, 32, 32),

new Wall(game, 1832, 1248, 32, 32),

new Wall(game, 1864, 1248, 32, 32),

new Wall(game, 1896, 1248, 32, 32),

new Wall(game, 1928, 1248, 32, 32),

new Wall(game, 1960, 1248, 32, 32),

new Wall(game, 1992, 1248, 32, 32),

new Wall(game, 2024, 1248, 32, 32),

new Wall(game, 2056, 1248, 32, 32),

new Wall(game, 1384, 1280, 32, 32),

new Wall(game, 1416, 1280, 32, 32),

new Wall(game, 1448, 1280, 32, 32),

new Wall(game, 1480, 1280, 32, 32),

new Wall(game, 1512, 1280, 32, 32),

new Wall(game, 1544, 1280, 32, 32),

new Wall(game, 1576, 1280, 32, 32),

new Wall(game, 1608, 1280, 32, 32),

new Wall(game, 1640, 1280, 32, 32),

new Wall(game, 1672, 1280, 32, 32),

new Wall(game, 1704, 1280, 32, 32),

new Wall(game, 1736, 1280, 32, 32),

new Wall(game, 1768, 1280, 32, 32),

new Wall(game, 1800, 1280, 32, 32),

new Wall(game, 1832, 1280, 32, 32),

new Wall(game, 1864, 1280, 32, 32),

new Wall(game, 1896, 1280, 32, 32),

new Wall(game, 1928, 1280, 32, 32),

new Wall(game, 1960, 1280, 32, 32),

new Wall(game, 1992, 1280, 32, 32),

new Wall(game, 2024, 1280, 32, 32),

new Wall(game, 2056, 1280, 32, 32),

new Wall(game, 1384, 1312, 32, 32),

new Wall(game, 1416, 1312, 32, 32),

new Wall(game, 1448, 1312, 32, 32),

new Wall(game, 1480, 1312, 32, 32),

new Wall(game, 1512, 1312, 32, 32),

new Wall(game, 1544, 1312, 32, 32),

new Wall(game, 1576, 1312, 32, 32),

new Wall(game, 1608, 1312, 32, 32),

new Wall(game, 1640, 1312, 32, 32),

new Wall(game, 1672, 1312, 32, 32),

new Wall(game, 1704, 1312, 32, 32),

new Wall(game, 1736, 1312, 32, 32),

new Wall(game, 1768, 1312, 32, 32),

new Wall(game, 1800, 1312, 32, 32),

new Wall(game, 1832, 1312, 32, 32),

new Wall(game, 1864, 1312, 32, 32),

new Wall(game, 1896, 1312, 32, 32),

new Wall(game, 2056, 1312, 32, 32),

new Wall(game, 1384, 1344, 32, 32),

new Wall(game, 1416, 1344, 32, 32),

new Wall(game, 1448, 1344, 32, 32),

new Wall(game, 1480, 1344, 32, 32),

new Wall(game, 1512, 1344, 32, 32),

new Wall(game, 1544, 1344, 32, 32),

new Wall(game, 1576, 1344, 32, 32),

new Wall(game, 1608, 1344, 32, 32),

new Wall(game, 1640, 1344, 32, 32),

new Wall(game, 1672, 1344, 32, 32),

new Wall(game, 1704, 1344, 32, 32),

new Wall(game, 1736, 1344, 32, 32),

new Wall(game, 1768, 1344, 32, 32),

new Wall(game, 1800, 1344, 32, 32),

new Wall(game, 1832, 1344, 32, 32),

new Wall(game, 1864, 1344, 32, 32),

new Wall(game, 1896, 1344, 32, 32),

new Wall(game, 1928, 1312, 32, 32),

new Wall(game, 1960, 1312, 32, 32),

new Wall(game, 1992, 1312, 32, 32),

new Wall(game, 2024, 1312, 32, 32),

new Wall(game, 1928, 1344, 32, 32),

new Wall(game, 1960, 1344, 32, 32),

new Wall(game, 1992, 1344, 32, 32),

new Wall(game, 2024, 1344, 32, 32),

new Wall(game, 2056, 1344, 32, 32),

new Wall(game, 1384, 1520, 32, 32),

new Wall(game, 1416, 1520, 32, 32),

new Wall(game, 1448, 1520, 32, 32),

new Wall(game, 1480, 1520, 32, 32),

new Wall(game, 1512, 1520, 32, 32),

new Wall(game, 1544, 1520, 32, 32),

new Wall(game, 1576, 1520, 32, 32),

new Wall(game, 1608, 1520, 32, 32),

new Wall(game, 1640, 1520, 32, 32),

new Wall(game, 1672, 1520, 32, 32),

new Wall(game, 1704, 1520, 32, 32),

new Wall(game, 1736, 1520, 32, 32),

new Wall(game, 1768, 1520, 32, 32),

new Wall(game, 1800, 1520, 32, 32),

new Wall(game, 1832, 1520, 32, 32),

new Wall(game, 1864, 1520, 32, 32),

new Wall(game, 1896, 1520, 32, 32),

new Wall(game, 1928, 1520, 32, 32),

new Wall(game, 1960, 1520, 32, 32),

new Wall(game, 1992, 1520, 32, 32),

new Wall(game, 2024, 1520, 32, 32),

new Wall(game, 2056, 1520, 32, 32),

new Wall(game, 1384, 1552, 32, 32),

new Wall(game, 1416, 1552, 32, 32),

new Wall(game, 1448, 1552, 32, 32),

new Wall(game, 1480, 1552, 32, 32),

new Wall(game, 1512, 1552, 32, 32),

new Wall(game, 1544, 1552, 32, 32),

new Wall(game, 1576, 1552, 32, 32),

new Wall(game, 1608, 1552, 32, 32),

new Wall(game, 1640, 1552, 32, 32),

new Wall(game, 1800, 1552, 32, 32),

new Wall(game, 1832, 1552, 32, 32),

new Wall(game, 1864, 1552, 32, 32),

new Wall(game, 1896, 1552, 32, 32),

new Wall(game, 1928, 1552, 32, 32),

new Wall(game, 1960, 1552, 32, 32),

new Wall(game, 1992, 1552, 32, 32),

new Wall(game, 2024, 1552, 32, 32),

new Wall(game, 2056, 1552, 32, 32),

new Wall(game, 1384, 1584, 32, 32),

new Wall(game, 1416, 1584, 32, 32),

new Wall(game, 1448, 1584, 32, 32),

new Wall(game, 1480, 1584, 32, 32),

new Wall(game, 1512, 1584, 32, 32),

new Wall(game, 1544, 1584, 32, 32),

new Wall(game, 1576, 1584, 32, 32),

new Wall(game, 1608, 1584, 32, 32),

new Wall(game, 1640, 1584, 32, 32),

new Wall(game, 1672, 1584, 32, 32),

new Wall(game, 1672, 1552, 32, 32),

new Wall(game, 1704, 1552, 32, 32),

new Wall(game, 1736, 1552, 32, 32),

new Wall(game, 1768, 1552, 32, 32),

new Wall(game, 1704, 1584, 32, 32),

new Wall(game, 1736, 1584, 32, 32),

new Wall(game, 1768, 1584, 32, 32),

new Wall(game, 1800, 1584, 32, 32),

new Wall(game, 1832, 1584, 32, 32),

new Wall(game, 1864, 1584, 32, 32),

new Wall(game, 1896, 1584, 32, 32),

new Wall(game, 1928, 1584, 32, 32),

new Wall(game, 1960, 1584, 32, 32),

new Wall(game, 1992, 1584, 32, 32),

new Wall(game, 2024, 1584, 32, 32),

new Wall(game, 2056, 1584, 32, 32),

new Wall(game, 1384, 1616, 32, 32),

new Wall(game, 1416, 1616, 32, 32),

new Wall(game, 1448, 1616, 32, 32),

new Wall(game, 1480, 1616, 32, 32),

new Wall(game, 1512, 1616, 32, 32),

new Wall(game, 1544, 1616, 32, 32),

new Wall(game, 1576, 1616, 32, 32),

new Wall(game, 1608, 1616, 32, 32),

new Wall(game, 1640, 1616, 32, 32),

new Wall(game, 1672, 1616, 32, 32),

new Wall(game, 1704, 1616, 32, 32),

new Wall(game, 1736, 1616, 32, 32),

new Wall(game, 1768, 1616, 32, 32),

new Wall(game, 1800, 1616, 32, 32),

new Wall(game, 1832, 1616, 32, 32),

new Wall(game, 1864, 1616, 32, 32),

new Wall(game, 1896, 1616, 32, 32),

new Wall(game, 1928, 1616, 32, 32),

new Wall(game, 1960, 1616, 32, 32),

new Wall(game, 1992, 1616, 32, 32),

new Wall(game, 2024, 1616, 32, 32),

new Wall(game, 2056, 1616, 32, 32),

new Wall(game, 1384, 1648, 32, 32),

new Wall(game, 1416, 1648, 32, 32),

new Wall(game, 1448, 1648, 32, 32),

new Wall(game, 1480, 1648, 32, 32),

new Wall(game, 1512, 1648, 32, 32),

new Wall(game, 1544, 1648, 32, 32),

new Wall(game, 1576, 1648, 32, 32),

new Wall(game, 1608, 1648, 32, 32),

new Wall(game, 1640, 1648, 32, 32),

new Wall(game, 1672, 1648, 32, 32),

new Wall(game, 1704, 1648, 32, 32),

new Wall(game, 1736, 1648, 32, 32),

new Wall(game, 1768, 1648, 32, 32),

new Wall(game, 1800, 1648, 32, 32),

new Wall(game, 1832, 1648, 32, 32),

new Wall(game, 1864, 1648, 32, 32),

new Wall(game, 1896, 1648, 32, 32),

new Wall(game, 1928, 1648, 32, 32),

new Wall(game, 1960, 1648, 32, 32),

new Wall(game, 1992, 1648, 32, 32),

new Wall(game, 2024, 1648, 32, 32),

new Wall(game, 2056, 1648, 32, 32),

new Wall(game, 1384, 1680, 32, 32),

new Wall(game, 1416, 1680, 32, 32),

new Wall(game, 1448, 1680, 32, 32),

new Wall(game, 1480, 1680, 32, 32),

new Wall(game, 1512, 1680, 32, 32),

new Wall(game, 1544, 1680, 32, 32),

new Wall(game, 1576, 1680, 32, 32),

new Wall(game, 1608, 1680, 32, 32),

new Wall(game, 1640, 1680, 32, 32),

new Wall(game, 1672, 1680, 32, 32),

new Wall(game, 1704, 1680, 32, 32),

new Wall(game, 1736, 1680, 32, 32),

new Wall(game, 1768, 1680, 32, 32),

new Wall(game, 1800, 1680, 32, 32),

new Wall(game, 1832, 1680, 32, 32),

new Wall(game, 1864, 1680, 32, 32),

new Wall(game, 1896, 1680, 32, 32),

new Wall(game, 1928, 1680, 32, 32),

new Wall(game, 1960, 1680, 32, 32),

new Wall(game, 1992, 1680, 32, 32),

new Wall(game, 2024, 1680, 32, 32),

new Wall(game, 2056, 1680, 32, 32),

new Wall(game, 1384, 1712, 32, 32),

new Wall(game, 1416, 1712, 32, 32),

new Wall(game, 1448, 1712, 32, 32),

new Wall(game, 1480, 1712, 32, 32),

new Wall(game, 1512, 1712, 32, 32),

new Wall(game, 1544, 1712, 32, 32),

new Wall(game, 1576, 1712, 32, 32),

new Wall(game, 1608, 1712, 32, 32),

new Wall(game, 1640, 1712, 32, 32),

new Wall(game, 1672, 1712, 32, 32),

new Wall(game, 1704, 1712, 32, 32),

new Wall(game, 1736, 1712, 32, 32),

new Wall(game, 1768, 1712, 32, 32),

new Wall(game, 1800, 1712, 32, 32),

new Wall(game, 1832, 1712, 32, 32),

new Wall(game, 1864, 1712, 32, 32),

new Wall(game, 1896, 1712, 32, 32),

new Wall(game, 1928, 1712, 32, 32),

new Wall(game, 1960, 1712, 32, 32),

new Wall(game, 1992, 1712, 32, 32),

new Wall(game, 2024, 1712, 32, 32),

new Wall(game, 2056, 1712, 32, 32),

new Wall(game, 1384, 1744, 32, 32),

new Wall(game, 1416, 1744, 32, 32),

new Wall(game, 1448, 1744, 32, 32),

new Wall(game, 1480, 1744, 32, 32),

new Wall(game, 1512, 1744, 32, 32),

new Wall(game, 1544, 1744, 32, 32),

new Wall(game, 1576, 1744, 32, 32),

new Wall(game, 1608, 1744, 32, 32),

new Wall(game, 1640, 1744, 32, 32),

new Wall(game, 1672, 1744, 32, 32),

new Wall(game, 1704, 1744, 32, 32),

new Wall(game, 1736, 1744, 32, 32),

new Wall(game, 1768, 1744, 32, 32),

new Wall(game, 1800, 1744, 32, 32),

new Wall(game, 1832, 1744, 32, 32),

new Wall(game, 1864, 1744, 32, 32),

new Wall(game, 1896, 1744, 32, 32),

new Wall(game, 1928, 1744, 32, 32),

new Wall(game, 1960, 1744, 32, 32),

new Wall(game, 1992, 1744, 32, 32),

new Wall(game, 2024, 1744, 32, 32),

new Wall(game, 2056, 1744, 32, 32),

new Wall(game, -1608, 1248, 32, 32),

new Wall(game, -1640, 1312, 32, 32),

new Wall(game, -1608, 1280, 32, 32),

new Wall(game, 2088, 1344, 32, 32),

new Wall(game, 2120, 1344, 32, 32),

new Wall(game, 2152, 1344, 32, 32),

new Wall(game, 2184, 1344, 32, 32),

new Wall(game, 2216, 1344, 32, 32),

new Wall(game, 2248, 1344, 32, 32),

new Wall(game, 2280, 1344, 32, 32),

new Wall(game, 2312, 1344, 32, 32),

new Wall(game, 2344, 1344, 32, 32),

new Wall(game, 2376, 1344, 32, 32),

new Wall(game, 2408, 1344, 32, 32),

new Wall(game, 2440, 1344, 32, 32),

new Wall(game, 2472, 1344, 32, 32),

new Wall(game, 2504, 1344, 32, 32),

new Wall(game, 2536, 1344, 32, 32),

new Wall(game, 2568, 1344, 32, 32),

new Wall(game, 2600, 1344, 32, 32),

new Wall(game, 2632, 1344, 32, 32),

new Wall(game, 2664, 1344, 32, 32),

new Wall(game, 2696, 1344, 32, 32),

new Wall(game, 2088, 1520, 32, 32),

new Wall(game, 2120, 1520, 32, 32),

new Wall(game, 2152, 1520, 32, 32),

new Wall(game, 2184, 1520, 32, 32),

new Wall(game, 2216, 1520, 32, 32),

new Wall(game, 2248, 1520, 32, 32),

new Wall(game, 2280, 1520, 32, 32),

new Wall(game, 2312, 1520, 32, 32),

new Wall(game, 2344, 1520, 32, 32),

new Wall(game, 2376, 1520, 32, 32),

new Wall(game, 2408, 1520, 32, 32),

new Wall(game, 2440, 1520, 32, 32),

new Wall(game, 2472, 1520, 32, 32),

new Wall(game, 2504, 1520, 32, 32),

new Wall(game, 2536, 1520, 32, 32),

new Wall(game, 2568, 1520, 32, 32),

new Wall(game, 2600, 1520, 32, 32),

new Wall(game, 2632, 1520, 32, 32),

new Wall(game, 2664, 1520, 32, 32),

new Wall(game, 2696, 1520, 32, 32),

new Wall(game, 2088, 1312, 32, 32),

new Wall(game, 2120, 1312, 32, 32),

new Wall(game, 2152, 1312, 32, 32),

new Wall(game, 2184, 1312, 32, 32),

new Wall(game, 2216, 1312, 32, 32),

new Wall(game, 2248, 1312, 32, 32),

new Wall(game, 2280, 1312, 32, 32),

new Wall(game, 2312, 1312, 32, 32),

new Wall(game, 2344, 1312, 32, 32),

new Wall(game, 2376, 1312, 32, 32),

new Wall(game, 2408, 1312, 32, 32),

new Wall(game, 2440, 1312, 32, 32),

new Wall(game, 2472, 1312, 32, 32),

new Wall(game, 2504, 1312, 32, 32),

new Wall(game, 2536, 1312, 32, 32),

new Wall(game, 2568, 1312, 32, 32),

new Wall(game, 2600, 1312, 32, 32),

new Wall(game, 2632, 1312, 32, 32),

new Wall(game, 2664, 1312, 32, 32),

new Wall(game, 2696, 1312, 32, 32),

new Wall(game, 2088, 1552, 32, 32),

new Wall(game, 2120, 1552, 32, 32),

new Wall(game, 2152, 1552, 32, 32),

new Wall(game, 2184, 1552, 32, 32),

new Wall(game, 2216, 1552, 32, 32),

new Wall(game, 2248, 1552, 32, 32),

new Wall(game, 2280, 1552, 32, 32),

new Wall(game, 2312, 1552, 32, 32),

new Wall(game, 2344, 1552, 32, 32),

new Wall(game, 2376, 1552, 32, 32),

new Wall(game, 2408, 1552, 32, 32),

new Wall(game, 2440, 1552, 32, 32),

new Wall(game, 2472, 1552, 32, 32),

new Wall(game, 2504, 1552, 32, 32),

new Wall(game, 2536, 1552, 32, 32),

new Wall(game, 2568, 1552, 32, 32),

new Wall(game, 2600, 1552, 32, 32),

new Wall(game, 2632, 1552, 32, 32),

new Wall(game, 2664, 1552, 32, 32),

new Wall(game, 2696, 1552, 32, 32),

new Wall(game, 296, 448, 32, 32),

new Wall(game, 328, 448, 32, 32),

new Wall(game, -776, 432, 32, 32),

new Wall(game, -744, 432, 32, 32),

new Wall(game, -808, 432, 32, 32),

new Wall(game, -840, 432, 32, 32),

new Platform(game, -824, 1328, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, -344, 1344, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, -344, 1120, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, -1176, 880, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -1336, 752, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -1336, 592, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -1192, 432, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 168, 832, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 168, 736, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -184, 1184, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -40, 1648, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 24, 1600, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 104, 1552, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 232, 1552, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 296, 1600, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 360, 1648, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -104, 1600, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -184, 1552, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -712, 560, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -568, 672, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -504, 672, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -808, 768, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -680, 768, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -744, 768, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -920, 912, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -856, 912, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -616, 848, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -552, 848, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -520, 960, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -840, 1008, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -776, 1008, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, -1512, 1152, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, -1400, 1136, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, -1272, 1056, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, -1256, 816, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, -1400, 672, 0, 0, 0, PLATFORM_FADE, 60),

new Platform(game, -1256, 512, 0, 0, 0, PLATFORM_FADE, 0),

new Wall(game, -2200, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -2168, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -2136, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -2104, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -2072, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -2040, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -2008, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1976, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1944, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1912, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1880, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1848, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1816, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1784, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1560, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1528, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1496, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1464, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1432, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1400, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1368, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1336, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1304, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1272, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1240, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1208, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1176, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1144, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -184, 1008, 32, 32, WALL_SPIKE_UP),

new Wall(game, -152, 1008, 32, 32, WALL_SPIKE_UP),

new Wall(game, -120, 1008, 32, 32, WALL_SPIKE_UP),

new Wall(game, -88, 1008, 32, 32, WALL_SPIKE_UP),

new Wall(game, -56, 1008, 32, 32, WALL_SPIKE_UP),

new Wall(game, -24, 1008, 32, 32, WALL_SPIKE_UP),

new Wall(game, 8, 1008, 32, 32, WALL_SPIKE_UP),

new Wall(game, 40, 1008, 32, 32, WALL_SPIKE_UP),

new Wall(game, 72, 1008, 32, 32, WALL_SPIKE_UP),

new Wall(game, 104, 1008, 32, 32, WALL_SPIKE_UP),

new Wall(game, 136, 1008, 32, 32, WALL_SPIKE_UP),

new Wall(game, 104, 688, 32, 32, WALL_SPIKE_UP),

new Wall(game, 8, 688, 32, 32, WALL_SPIKE_UP),

new Wall(game, -24, 688, 32, 32, WALL_SPIKE_UP),

new Wall(game, -136, 688, 32, 32, WALL_SPIKE_UP),

new Wall(game, -168, 688, 32, 32, WALL_SPIKE_UP),

new Wall(game, -280, 688, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1752, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1720, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -1592, 1312, 32, 32, WALL_SPIKE_UP),

new Wall(game, -952, 496, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 528, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 560, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 592, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 624, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 656, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 688, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 720, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 752, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 784, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 816, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 848, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 880, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 912, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -952, 944, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -1016, 1248, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -1016, 1280, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, 296, 512, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, 296, 544, 32, 32, WALL_SPIKE_RIGHT),

new Wall(game, -456, 496, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 528, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 560, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 592, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 624, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 656, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 688, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 720, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 752, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 784, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 816, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 848, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 880, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 912, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -456, 944, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, 376, 736, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, 376, 768, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, -1016, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -984, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -952, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -920, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -888, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -856, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -824, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -792, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -760, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -728, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -696, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -664, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -632, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -600, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -536, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -280, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -248, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -216, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -184, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -152, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -120, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -88, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -56, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -24, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 8, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 40, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 72, 736, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -568, 1344, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1944, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1912, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1880, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1848, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1816, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1784, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1752, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1720, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1688, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1656, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1624, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1592, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1560, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1528, 800, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1672, 1216, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1640, 1216, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1608, 1216, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 360, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 392, 672, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 328, 896, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 296, 896, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -120, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -88, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -56, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -24, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 8, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 40, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 72, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 104, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 136, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 168, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 200, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 232, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 264, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 296, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 328, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 360, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 392, 1184, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -216, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -184, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -152, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -120, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -88, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -56, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -24, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 8, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 40, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 72, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 104, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 136, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 168, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 200, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 232, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, 264, 448, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1064, 432, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1032, 432, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -1000, 432, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -968, 432, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -936, 432, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -904, 432, 32, 32, WALL_NOCHECKPOINT),

new Wall(game, -872, 432, 32, 32, WALL_NOCHECKPOINT),



		];
		break;
	}
	for (i = 0; i < instances.length; i++ ) {
		var e = instances[i];
		if (e instanceof Platform || e instanceof Wall) {
			game.currentMap.platforms.push(e);
		} else {
			game.addEntity(e);
		}
		e.mapFlag = true;
	}
	for (i = 0; i < enemies.length; i++) {
		var v = enemies[i];
		game.addEntity(v);
		v.mapFlag = true;
	}
	for (i = 0; i < powerups.length; i++) {
		var v = powerups[i];
		game.addEntity(v);
		v.mapFlag = true;
	}
	for (i = 0; i < platforms.length; i++) {
		var p = platforms[i];
		game.currentMap.platforms.push(p);
		p.mapFlag = true;
	}
	for (i = 0; i < objects.length; i++) {
		var o = objects[i];
		game.addEntity(o);
		o.mapFlag = true;
	}
}