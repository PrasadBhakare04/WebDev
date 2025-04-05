function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
};
Color.prototype.rgb = function () {
    const { r, g, b } = this;
    // console.log(`rgb(${r}, ${g}, ${b})`);
    return `rgb(${r}, ${g}, ${b})`
};
Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const c = new Color(222, 222, 222);