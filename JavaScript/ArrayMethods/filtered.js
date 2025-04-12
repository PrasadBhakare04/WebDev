const validUserNames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];
const filtered = validUserNames.filter(function (x) {
    return x.length < 10
})