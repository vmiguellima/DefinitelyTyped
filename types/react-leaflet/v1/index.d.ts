// Type definitions for react-leaflet 1.9
// Project: https://github.com/PaulLeCam/react-leaflet
// Definitions by: Dave Leaver <https://github.com/danzel>
//                 David Schneider <https://github.com/davschne>
//                 Yui T. <https://github.com/yuit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as Leaflet from 'leaflet';
import * as React from 'react';

// All events need to be lowercase so they don't collide with React.DOMAttributes<T>
// which already declares things with some of the same names

export type Children = React.ReactNode | React.ReactNode[];

export interface Viewport {
    center: [number, number] | null | undefined;
    zoom: number | null | undefined;
}

export interface MapEvents {
    onclick?(event: Leaflet.LeafletMouseEvent): void;
    ondblclick?(event: Leaflet.LeafletMouseEvent): void;
    onmousedown?(event: Leaflet.LeafletMouseEvent): void;
    onmouseup?(event: Leaflet.LeafletMouseEvent): void;
    onmouseover?(event: Leaflet.LeafletMouseEvent): void;
    onmouseout?(event: Leaflet.LeafletMouseEvent): void;
    onmousemove?(event: Leaflet.LeafletMouseEvent): void;
    oncontextmenu?(event: Leaflet.LeafletMouseEvent): void;
    onfocus?(event: Leaflet.LeafletEvent): void;
    onblur?(event: Leaflet.LeafletEvent): void;
    onpreclick?(event: Leaflet.LeafletMouseEvent): void;
    onload?(event: Leaflet.LeafletEvent): void;
    onunload?(event: Leaflet.LeafletEvent): void;
    onviewreset?(event: Leaflet.LeafletEvent): void;
    onmove?(event: Leaflet.LeafletEvent): void;
    onmovestart?(event: Leaflet.LeafletEvent): void;
    onmoveend?(event: Leaflet.LeafletEvent): void;
    ondragstart?(event: Leaflet.LeafletEvent): void;
    ondrag?(event: Leaflet.LeafletEvent): void;
    ondragend?(event: Leaflet.DragEndEvent): void;
    onzoomstart?(event: Leaflet.LeafletEvent): void;
    onzoom?(event: Leaflet.LeafletEvent): void;
    onzoomend?(event: Leaflet.LeafletEvent): void;
    onzoomlevelschange?(event: Leaflet.LeafletEvent): void;
    onresize?(event: Leaflet.ResizeEvent): void;
    onautopanstart?(event: Leaflet.LeafletEvent): void;
    onlayeradd?(event: Leaflet.LayerEvent): void;
    onlayerremove?(event: Leaflet.LayerEvent): void;
    onbaselayerchange?(event: Leaflet.LayersControlEvent): void;
    onoverlayadd?(event: Leaflet.LayersControlEvent): void;
    onoverlayremove?(event: Leaflet.LayersControlEvent): void;
    onlocationfound?(event: Leaflet.LocationEvent): void;
    onlocationerror?(event: Leaflet.ErrorEvent): void;
    onpopupopen?(event: Leaflet.PopupEvent): void;
    onpopupclose?(event: Leaflet.PopupEvent): void;
}

export interface MarkerEvents {
    onclick?(event: Leaflet.LeafletMouseEvent): void;
    ondblclick?(event: Leaflet.LeafletMouseEvent): void;
    onmousedown?(event: Leaflet.LeafletMouseEvent): void;
    onmouseover?(event: Leaflet.LeafletMouseEvent): void;
    onmouseout?(event: Leaflet.LeafletMouseEvent): void;
    oncontextmenu?(event: Leaflet.LeafletMouseEvent): void;
    ondragstart?(event: Leaflet.LeafletEvent): void;
    ondrag?(event: Leaflet.LeafletEvent): void;
    ondragend?(event: Leaflet.DragEndEvent): void;
    onmove?(event: Leaflet.LeafletEvent): void;
    onadd?(event: Leaflet.LeafletEvent): void;
    onremove?(event: Leaflet.LeafletEvent): void;
    onpopupopen?(event: Leaflet.PopupEvent): void;
    onpopupclose?(event: Leaflet.PopupEvent): void;
}

export interface TileLayerEvents {
    onloading?(event: Leaflet.LeafletEvent): void;
    onload?(event: Leaflet.LeafletEvent): void;
    ontileloadstart?(event: Leaflet.TileEvent): void;
    ontileload?(event: Leaflet.TileEvent): void;
    ontileunload?(event: Leaflet.TileEvent): void;
    ontileerror?(event: Leaflet.TileEvent): void;
}

export interface PathEvents {
    onclick?(event: Leaflet.LeafletMouseEvent): void;
    ondblclick?(event: Leaflet.LeafletMouseEvent): void;
    onmousedown?(event: Leaflet.LeafletMouseEvent): void;
    onmouseover?(event: Leaflet.LeafletMouseEvent): void;
    onmouseout?(event: Leaflet.LeafletMouseEvent): void;
    oncontextmenu?(event: Leaflet.LeafletMouseEvent): void;
    onadd?(event: Leaflet.LeafletEvent): void;
    onremove?(event: Leaflet.LeafletEvent): void;
    onpopupopen?(event: Leaflet.PopupEvent): void;
    onpopupclose?(event: Leaflet.PopupEvent): void;
}

export interface FeatureGroupEvents {
    onclick?(event: Leaflet.LeafletMouseEvent): void;
    ondblclick?(event: Leaflet.LeafletMouseEvent): void;
    onmouseover?(event: Leaflet.LeafletMouseEvent): void;
    onmouseout?(event: Leaflet.LeafletMouseEvent): void;
    oncontextmenu?(event: Leaflet.LeafletMouseEvent): void;
    onlayeradd?(event: Leaflet.LayerEvent): void;
    onlayerremove?(event: Leaflet.LayerEvent): void;
}

export interface LayersControlEvents {
    onbaselayerchange?(event: Leaflet.LayersControlEvent): void;
    onoverlayadd?(event: Leaflet.LayersControlEvent): void;
    onoverlayremove?(event: Leaflet.LayersControlEvent): void;
}

export type LeafletEvents = MapEvents
    & MarkerEvents
    & TileLayerEvents
    & PathEvents
    & FeatureGroupEvents
    & LayersControlEvents;

// Most react-leaflet components take two type parameters:
// - P : the component's props object
// - E : the corresponding Leaflet element

// These type parameters aren't needed for instantiating a component, but they are useful for
// extending react-leaflet classes.

export class MapComponent<P, E extends Leaflet.Class> extends React.Component<P> {
    _leafletEvents: LeafletEvents;
    leafletElement: E;
    extractLeafletEvents(props: P): LeafletEvents;
    bindLeafletEvents(next: LeafletEvents, prev: LeafletEvents): LeafletEvents;
    fireLeafletEvent(type: string, data: any): void;
    getOptions(props: P): P;
}

export interface MapProps extends MapEvents, Leaflet.MapOptions, Leaflet.LocateOptions, Leaflet.FitBoundsOptions {
    animate?: boolean | undefined;
    bounds?: Leaflet.LatLngBoundsExpression | undefined;
    boundsOptions?: Leaflet.FitBoundsOptions | undefined;
    center?: Leaflet.LatLngExpression | undefined;
    children?: Children | undefined;
    className?: string | undefined;
    id?: string | undefined;
    maxBounds?: Leaflet.LatLngBoundsExpression | undefined;
    maxZoom?: number | undefined;
    minZoom?: number | undefined;
    style?: React.CSSProperties | undefined;
    useFlyTo?: boolean | undefined;
    viewport?: Viewport | undefined;
    whenReady?: (() => void) | undefined;
    zoom?: number | undefined;
    onViewportChange?: ((viewport: Viewport) => void) | undefined;
    onViewportChanged?: ((viewport: Viewport) => void) | undefined;
}

export class Map<P extends MapProps = MapProps, E extends Leaflet.Map = Leaflet.Map> extends MapComponent<P, E> {
    className?: string | undefined;
    container: HTMLDivElement;
    viewport: Viewport;
    getChildContext(): { layerContainer: E, map: E };
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    bindContainer(container: HTMLDivElement): void;
    shouldUpdateCenter(next: Leaflet.LatLngExpression, prev: Leaflet.LatLngExpression): boolean;
    shouldUpdateBounds(next: Leaflet.LatLngBoundsExpression, prev: Leaflet.LatLngBoundsExpression): boolean;
    onViewportChange: () => void;
    onViewportChanged: () => void;
}

export interface DivOverlayProps extends Leaflet.DivOverlayOptions {
    children: Children;
    onClose?: (() => void) | undefined;
    onOpen?: (() => void) | undefined;
}

export interface DivOverlayTypes extends Leaflet.Evented {
    isOpen: () => boolean;
    update: () => void;
}

export class DivOverlay<P extends DivOverlayProps, E extends DivOverlayTypes> extends MapComponent<P, E> {
    onClose: () => void;
    onOpen: () => void;
    onRender: () => void;
}

export interface PaneProps {
    name?: string | undefined;
    children?: Children | undefined;
    map?: Leaflet.Map | undefined;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    pane?: string | undefined;
}
export interface PaneState {
    name?: string | undefined;
}
export class Pane<P extends PaneProps = PaneProps, S extends PaneState = PaneState> extends React.Component<P, S> {
    getChildContext(): { pane: string };
    createPane(props: P): void;
    removePane(): void;
    setStyle(arg: { style?: string | undefined, className?: string | undefined }): void;
    getParentPane(): HTMLElement | undefined;
    getPane(name: string): HTMLElement | undefined;
}

export interface MapLayerProps {
    children?: Children | undefined;
}
export interface LayerContainer {
    addLayer(layer: Leaflet.Layer): this;
    removeLayer(layer: number | Leaflet.Layer): this;
}
export class MapLayer<P extends MapLayerProps = MapLayerProps, E extends Leaflet.Class = Leaflet.Class> extends MapComponent<P, E> {
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
    readonly layerContainer: LayerContainer | Leaflet.Map;
}

export interface GridLayerProps extends Leaflet.GridLayerOptions {
    children?: Children | undefined;
}
export class GridLayer<P extends GridLayerProps = GridLayerProps, E extends Leaflet.GridLayer = Leaflet.GridLayer> extends MapLayer<P, E> {}

export interface TileLayerProps extends TileLayerEvents, Leaflet.TileLayerOptions {
    children?: Children | undefined;
    url: string;
}
export class TileLayer<P extends TileLayerProps = TileLayerProps, E extends Leaflet.TileLayer = Leaflet.TileLayer> extends GridLayer<P, E> { }

export interface WMSTileLayerProps extends TileLayerEvents, Leaflet.WMSOptions {
    children?: Children | undefined;
    url: string;
}
export class WMSTileLayer<P extends WMSTileLayerProps = WMSTileLayerProps,  E extends Leaflet.TileLayer.WMS = Leaflet.TileLayer.WMS> extends GridLayer<P, E> { }

export interface ImageOverlayProps extends Leaflet.ImageOverlayOptions {
    bounds: Leaflet.LatLngBoundsExpression;
    children?: Children | undefined;
    url: string;
}
export class ImageOverlay<P extends ImageOverlayProps = ImageOverlayProps, E extends Leaflet.ImageOverlay = Leaflet.ImageOverlay> extends MapLayer<P, E> {
    getChildContext(): { popupContainer: E };
}

export interface VideoOverlayProps extends Leaflet.VideoOverlayOptions {
    attribution?: string | undefined;
    children?: Children | undefined;
    bounds: Leaflet.LatLngBoundsExpression;
    opacity?: number | undefined;
    play?: boolean | undefined;
    url: string | string[] | HTMLVideoElement;
    zIndex?: number | undefined;
}
export class VideoOverlay<P extends VideoOverlayProps = VideoOverlayProps, E extends Leaflet.VideoOverlay = Leaflet.VideoOverlay> extends MapLayer<P, E> {
    getChildContext(): { popupContainer: E };
}

export interface LayerGroupProps {
    children?: Children | undefined;
}
export class LayerGroup<P extends LayerGroupProps = LayerGroupProps, E extends Leaflet.LayerGroup = Leaflet.LayerGroup> extends MapLayer<P, E> {
    getChildContext(): { layerContainer: E };
}

export interface MarkerProps extends MarkerEvents, Leaflet.MarkerOptions {
    children?: Children | undefined;
    position: Leaflet.LatLngExpression;
}
export class Marker<P extends MarkerProps = MarkerProps, E extends Leaflet.Marker = Leaflet.Marker> extends MapLayer<P, E> {
    getChildContext(): { popupContainer: E };
}

export interface PathProps extends PathEvents, Leaflet.PathOptions, MapLayerProps { }
export abstract class Path<P extends PathProps, E extends Leaflet.Class = Leaflet.Class> extends MapLayer<P, E> {
    getChildContext(): { popupContainer: E };
    getPathOptions(props: P): Leaflet.PathOptions;
    setStyle(options: Leaflet.PathOptions): void;
    setStyleIfChanged(fromProps: P, toProps: P): void;
}

export interface CircleProps extends PathEvents, Leaflet.CircleMarkerOptions {
    center: Leaflet.LatLngExpression;
    children?: Children | undefined;
    radius: number;
}
export class Circle<P extends CircleProps = CircleProps, E extends Leaflet.Circle = Leaflet.Circle> extends Path<P, E> { }

export interface CircleMarkerProps extends PathEvents, Leaflet.CircleMarkerOptions {
    center: Leaflet.LatLngExpression;
    children?: Children | undefined;
    radius: number;
}
export class CircleMarker<P extends CircleMarkerProps = CircleMarkerProps, E extends Leaflet.CircleMarker = Leaflet.CircleMarker> extends Path<P, E> { }

export interface FeatureGroupProps extends FeatureGroupEvents, Leaflet.PathOptions {
    children?: Children | undefined;
}
export class FeatureGroup<P extends FeatureGroupProps = FeatureGroupProps, E extends Leaflet.FeatureGroup = Leaflet.FeatureGroup> extends Path<P, E> {
    getChildContext(): { layerContainer: E, popupContainer: E };
}

export interface GeoJSONProps extends FeatureGroupEvents, Leaflet.GeoJSONOptions {
    children?: Children | undefined;
    data: GeoJSON.GeoJsonObject;
    style?: Leaflet.StyleFunction | undefined;
}
export class GeoJSON<P extends GeoJSONProps = GeoJSONProps, E extends Leaflet.GeoJSON = Leaflet.GeoJSON> extends Path<P, E> { }

export interface PolylineProps extends PathEvents, Leaflet.PolylineOptions {
    children?: Children | undefined;
    positions: Leaflet.LatLngExpression[] | Leaflet.LatLngExpression[][];
}
export class Polyline<P extends PolylineProps = PolylineProps, E extends Leaflet.Polyline = Leaflet.Polyline> extends Path<P, E> { }

export interface PolygonProps extends PathEvents, Leaflet.PolylineOptions {
    children?: Children | undefined;
    popupContainer?: Leaflet.FeatureGroup | undefined;
    positions: Leaflet.LatLngExpression[] | Leaflet.LatLngExpression[][] | Leaflet.LatLngExpression[][][];
}
export class Polygon<P extends PolygonProps = PolygonProps, E extends Leaflet.Polygon = Leaflet.Polygon> extends Path<P, E> { }

export interface RectangleProps extends PathEvents, Leaflet.PolylineOptions {
    children?: Children | undefined;
    bounds: Leaflet.LatLngBoundsExpression;
    popupContainer?: Leaflet.FeatureGroup | undefined;
}
export class Rectangle<P extends RectangleProps = RectangleProps, E extends Leaflet.Rectangle = Leaflet.Rectangle> extends Path<P, E> { }

export interface PopupProps extends DivOverlayProps, Leaflet.PopupOptions {
    position?: Leaflet.LatLngExpression | undefined;
}

export class Popup<P extends PopupProps = PopupProps, E extends Leaflet.Popup = Leaflet.Popup> extends MapComponent<P, E> {
    onPopupOpen(arg: { popup: E }): void;
    onPopupClose(arg: { popup: E }): void;
    renderPopupContent(): void;
    removePopupContent(): void;
}

export interface TooltipProps extends DivOverlayProps, Leaflet.TooltipOptions {
}

export class Tooltip<P extends TooltipProps = TooltipProps, E extends Leaflet.Tooltip = Leaflet.Tooltip> extends MapComponent<P, E> {
    onTooltipOpen(arg: { tooltip: E }): void;
    onTooltipClose(arg: { tooltip: E }): void;
    renderTooltipContent(): void;
    removeTooltipContent(): void;
}

export type MapControlProps = Leaflet.ControlOptions;
export class MapControl<P extends MapControlProps = MapControlProps, E extends Leaflet.Control = Leaflet.Control> extends React.Component<P> {
    leafletElement: E;
    createLeafletElement(props: P): E;
    updateLeafletElement(fromProps: P, toProps: P): void;
}

export type AttributionControlProps = Leaflet.Control.AttributionOptions;
export class AttributionControl<P extends AttributionControlProps = AttributionControlProps, E extends Leaflet.Control.Attribution = Leaflet.Control.Attribution> extends MapControl<P, E> { }

export interface LayersControlProps extends LayersControlEvents, Leaflet.Control.LayersOptions {
    baseLayers?: Leaflet.Control.LayersObject | undefined;
    children?: Children | undefined;
    overlays?: Leaflet.Control.LayersObject | undefined;
}
export class LayersControl<P extends LayersControlProps = LayersControlProps, E extends Leaflet.Control.Layers = Leaflet.Control.Layers> extends MapControl<P, E> { }

export namespace LayersControl {
    interface BaseControlledLayerProps {
        checked?: boolean | undefined;
        children?: Children | undefined;
        removeLayer?(layer: Leaflet.Layer): void;
        removeLayerControl?(layer: Leaflet.Layer): void;
    }
    interface ControlledLayerProps extends BaseControlledLayerProps {
        addBaseLayer?(layer: Leaflet.Layer, name: string, checked: boolean): void;
        addOverlay?(layer: Leaflet.Layer, name: string, checked: boolean): void;
        name: string;
    }
    class ControlledLayer<P extends BaseControlledLayerProps = BaseControlledLayerProps> extends React.Component<P> {
        layer?: Leaflet.Layer | undefined;
        getChildContext(): { layerContainer: LayerContainer };
        addLayer(): void;
        removeLayer(layer: Leaflet.Layer): void;
    }
    class BaseLayer<P extends ControlledLayerProps = ControlledLayerProps> extends ControlledLayer<P> { }
    class Overlay<P extends ControlledLayerProps = ControlledLayerProps> extends ControlledLayer<P> { }
}

export type ScaleControlProps = Leaflet.Control.ScaleOptions;
export class ScaleControl<P extends ScaleControlProps = ScaleControlProps, E extends Leaflet.Control.Scale = Leaflet.Control.Scale> extends MapControl<P, E> { }

export type ZoomControlProps = Leaflet.Control.ZoomOptions;
export class ZoomControl<P extends ZoomControlProps = ZoomControlProps, E extends Leaflet.Control.Zoom = Leaflet.Control.Zoom> extends MapControl<P, E> { }
