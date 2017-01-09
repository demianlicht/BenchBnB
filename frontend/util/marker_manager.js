export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this._benchesToAdd = this._benchesToAdd.bind(this);
    this._createMarkerFromBench = this._createMarkerFromBench.bind(this);
    this.updateMarkers = this.updateMarkers.bind(this);
  }

  updateMarkers(benches) {
    const benchArray = Object.keys(benches).map(key => benches[key]);
    this._benchesToAdd(benchArray).forEach(bench => {
      this._createMarkerFromBench(bench);
    });
  }

  _benchesToAdd(benches) {
    return benches.filter(bench => (
      !this.markers.includes(bench)
    ));
  }

  _createMarkerFromBench(bench) {
    var myLatLng = new google.maps.LatLng(bench.lat, bench.lng);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: bench.description
    });
    this.markers.push(bench);
  }
}
