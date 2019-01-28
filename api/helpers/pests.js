// the following will get the bounding box for a shapefile
// ogrinfo --config SHAPE_RESTORE_SHX TRUE -al -so states.shp

// the following will get the shapefile from geoserver
// https://geoserver-dev.usanpn.org:443/geoserver/gdd/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=gdd:states&CQL_FILTER=NAME%20IN%20(%27Ohio%27,%27Pennsylvania%27,%27New%20York%27,%27Connecticut%27,%27Rhode%20Island%27,%27Massachusetts%27)&outputFormat=SHAPE-ZIP
// https://geoserver.usanpn.org:443/geoserver/gdd/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=gdd:states&CQL_FILTER=NAME IN ('Maine','Vermont','Colorado','North Dakota','South Dakota','Nebraska','Kansas','Oklahoma','Texas','Minnesota','Iowa','Missouri','Arkansas','Louisiana','Wisconsin','Illinois','Kentucky','Tennessee','Mississippi','Michigan','Indiana','Alabama','Ohio','Alabama','Georgia','South Carolina','North Carolina','Virginia','West Virginia','District of Columbia','Maryland','Delaware','New Jersey','Pennsylvania','New York','Connecticut','Rhode Island','Massachusetts','New Hampshire','Florida')&outputFormat=SHAPE-ZIP
// https://geoserver.usanpn.org:443/geoserver/gdd/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=gdd:states&CQL_FILTER=NAME IN ('Maine','Vermont','New Hampshire','New York','Rhode Island','Massachusetts','Connecticut','New Jersey','Pennsylvania','Delaware','Maryland','Virginia','West Virginia','North Carolina','Tennessee','Kentucky','Ohio','Indiana','Illinois','Iowa','Minnesota','Wisconsin','Michigan')&outputFormat=SHAPE-ZIP

const pests = [
    {
        species: 'Apple Maggot',
        base: 50,
        layerName: 'gdd:agdd_50f',
        bounds: [ //done
            -124.763068,
            24.523096,
            -66.949895,
            49.384358
        ],
        stateNames: [],
        rangeShpFilePath: '/var/www/data-site/files/npn-geo-services/shape_files/conus_range/states.shp',
        sldName: 'apple_maggot.sld'
    },
    {
        species: 'Asian Longhorned Beetle',
        lowerThreshold: 50,
        upperThreshold: 86,
        layerName: 'custom',
        startMonthDay: '01-01',
        agddMethod: 'double-sine',
        bounds: [ //done
            -84.820159,
            38.403202,
            -69.928393,
            45.015850
        ],
        stateNames: ['Ohio','Pennsylvania','New York','Connecticut','Rhode Island','Massachusetts'],
        rangeShpFilePath: '/var/www/data-site/files/npn-geo-services/shape_files/asian_longhorned_beetle_range/states.shp',
        sldName: 'asian_longhorned_beetle.sld'
    },
    {
        species: 'Bagworm',
        lowerThreshold: 50,
        layerName: 'custom',
        startMonthDay: '03-01',
        agddMethod: 'simple',
        bounds: [ //done
            -109.050173,
            30.173943,
            -69.928393,
            47.080621
        ],
        stateNames: ['Alabama', 'Arkansas', 'Connecticut', 'Delaware', 'Georgia', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Maryland', 'Massachusetts', 'Missouri', 'Nebraska', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'Ohio', 'Oklahoma', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'Tennessee', 'Virginia', 'Wisconsin', 'Mississippi', 'West Virginia'],
        rangeShpFilePath: '/var/www/data-site/files/npn-geo-services/shape_files/bagworm_range/states.shp',
        sldName: 'bagworm.sld'
    },
    {
        species: 'Bronze Birch Borer',
        base: 50,
        layerName: 'gdd:agdd_50f',
        bounds: [ //done
            -125.0208333,
            24.0625,
            -66.4791667000001,
            49.9375
        ],
        stateNames: [],
        rangeShpFilePath: '/var/www/data-site/files/npn-geo-services/shape_files/conus_range/states.shp',
        sldName: 'bronze_birch_borer.sld'
    },
    {
        species: 'Eastern Tent Caterpillar',
        lowerThreshold: 50,
        layerName: 'custom',
        startMonthDay: '03-01',
        agddMethod: 'simple',
        bounds: [ //done
            -109.060253,
            30.173943,
            -66.949895,
            49.384358
        ],
        stateNames: ['Maine','Vermont','Colorado','North Dakota','South Dakota','Nebraska','Kansas','Oklahoma','Minnesota','Iowa','Missouri','Arkansas','Wisconsin','Illinois','Kentucky','Tennessee','Mississippi','Michigan','Indiana','Alabama','Ohio','Alabama','Georgia','South Carolina','North Carolina','Virginia','West Virginia','District of Columbia','Maryland','Delaware','New Jersey','Pennsylvania','New York','Connecticut','Rhode Island','Massachusetts','New Hampshire'],
        rangeShpFilePath: '/var/www/data-site/files/npn-geo-services/shape_files/eastern_tent_caterpillar_range/states.shp',
        sldName: 'eastern_tent_caterpillar.sld'
    },
    {
        species: 'Emerald Ash Borer',
        base: 50,
        layerName: 'gdd:agdd_50f',
        bounds: [ //done
            -109.060253,
            24.523096,
            -66.949895,
            49.384358
        ],
        stateNames: ['Maine','Vermont','Colorado','Nebraska','Kansas','Oklahoma','Texas','Minnesota','Iowa','Missouri','Arkansas','Louisiana','Wisconsin','Illinois','Kentucky','Tennessee','Mississippi','Michigan','Indiana','Alabama','Ohio','Alabama','Georgia','South Carolina','North Carolina','Virginia','West Virginia','District of Columbia','Maryland','Delaware','New Jersey','Pennsylvania','New York','Connecticut','Rhode Island','Massachusetts','New Hampshire','Florida'],
        rangeShpFilePath: '/var/www/data-site/files/npn-geo-services/shape_files/emerald_ash_borer_range/states.shp',
        sldName: 'emerald_ash_borer.sld'
    },
    {
        species: 'Gypsy Moth',
        lowerThreshold: 37.4,
        upperThreshold: 104,
        layerName: 'custom',
        startMonthDay: '01-01',
        agddMethod: 'double-sine',
        bounds: [ //done
            -97.239209,
            33.842316,
            -66.949895,
            49.384358
        ],
        stateNames: ['Maine','Vermont','New Hampshire','New York','Rhode Island','Massachusetts',
        'Connecticut','New Jersey','Pennsylvania','Delaware','Maryland','Virginia','West Virginia',
        'North Carolina','Tennessee','Kentucky','Ohio','Indiana','Illinois','Iowa','Minnesota','Wisconsin','Michigan'],
        rangeShpFilePath: '/var/www/data-site/files/npn-geo-services/shape_files/gypsy_moth_range/states.shp',
        sldName: 'gypsy_moth.sld'
    },
    {
        species: 'Hemlock Woolly Adelgid',
        base: 32,
        layerName: 'gdd:agdd',
        bounds: [ //done
            -124.763068,
            30.223334,
            -66.949895,
            49.384358
        ],
        stateNames: ['Maine','Vermont','New Hampshire','New York','Connecticut','Massachusetts','Rhode Island','New Jersey','Pennsylvania','Delaware','Maryland','Virginia','West Virginia','Ohio','Kentucky','Michigan','Tennessee','North Carolina','South Carolina','Alabama','Georgia','Wisconsin','Minnesota','Indiana','Washington','Oregon','California','Idaho','Montana'],
        rangeShpFilePath: '/var/www/data-site/files/npn-geo-services/shape_files/hemlock_woolly_adelgid_range/states.shp',
        sldName: 'hemlock_woolly_adelgid.sld'
    },
    {
        species: 'Magnolia Scale',
        base: 50,
        layerName: 'gdd:agdd_50f',
        bounds: [ //done
            -106.645646,
            24.523096,
            -66.949895,
            48.238800
        ],
        stateNames: ['Alabama', 'Connecticut', 'Florida', 'Georgia', 'Illinois', 'Indiana', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Mississippi', 'New York', 'North Carolina', 'Ohio', 'Pennsylvania', 'South Carolina', 'Tennessee', 'Texas', 'Virginia', 'West Virginia', 'Wisconsin', 'Vermont', 'New Hampshire', 'Rhode Island', 'New Jersey', 'Delaware'],
        rangeShpFilePath: '/var/www/data-site/files/npn-geo-services/shape_files/magnolia_scale_range/states.shp',
        sldName: 'magnolia_scale.sld'
    },
    {
        species: 'Lilac Borer',
        base: 50,
        layerName: 'gdd:agdd_50f',
        bounds: [ //done
            -124.763068,
            24.523096,
            -66.949895,
            49.384358
        ],
        stateNames: [],
        rangeShpFilePath: '/var/www/data-site/files/npn-geo-services/shape_files/conus_range/states.shp',
        sldName: 'lilac_borer.sld'
    },
    {
        species: 'Pine Needle Scale',
        lowerThreshold: 50,
        layerName: 'custom',
        startMonthDay: '03-01',
        agddMethod: 'simple',
        bounds: [ //done
            -124.763068,
            28.928609,
            -66.949895,
            49.384358
        ],
        stateNames: ['not', 'Florida','Lousiana','Texas', 'American Samoa','Alaska','Hawaii','Puerto Rico','United States Virgin Islands', 'Commonwealth of the Northern Mariana Islands', 'Guam'],
        rangeShpFilePath: '/var/www/data-site/files/npn-geo-services/shape_files/pine_needle_scale_range/states.shp',
        sldName: 'pine_needle_scale.sld'
    },
    {
        species: 'Winter Moth',
        base: 50,
        layerName: 'gdd:agdd_50f',
        bounds: [ //done
            -79.762152,
            40.496103,
            -66.949895,
            47.459686
        ],
        stateNames: ['New York','Connecticut','New Hampshire','Vermont','Maine','Massachusetts'],
        rangeShpFilePath: '/var/www/data-site/files/npn-geo-services/shape_files/winter_moth_range/states.shp',
        sldName: 'winter_moth.sld'
    }
];

module.exports.pests = pests;