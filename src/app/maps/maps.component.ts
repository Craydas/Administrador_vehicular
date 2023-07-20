import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Maps, Zoom } from '@syncfusion/ej2-angular-maps';
Maps.Inject(Zoom);

declare var ol: any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
  template: `<ejs-maps id='rn-container' [layers]='layers' [zoomSettings]='zoomSettings'>
  <e-layers>
 <e-layer [layerType] = 'layerType'></e-layer>
 </e-layers>
 </ejs-maps>`,
})
export class MapsComponent implements OnInit {
    latitude: number = -1.418898;
  longitude: number = -78.661349;

  map: any;
  constructor() { }
  ngOnInit(): void {
    var mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        // comment the following two lines to have the mouse position
        // be placed within the map.
        className: 'custom-mouse-position',
        target: document.getElementById('mouse-position'),
        undefinedHTML: '&nbsp;'
      });
      this.map = new ol.Map({
        target: 'map',
        controls: ol.control.defaults({
          attributionOptions: {
            collapsible: false
          }
        }).extend([mousePositionControl]),
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([-78.661349,-1.418898]),
          zoom: 18
        })
      });


  }
  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
  }

}
