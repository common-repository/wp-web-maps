=== WP Web Maps ===
Plugin Name: WP Web Maps
Text Domain: wp-web-maps 
Description: A plugin for creating a interactive Leaflet JS map with a shortcode.
Author: pjhooker
Author URI: https://www.cityplanner.biz/
Plugin URI: https://wordpress.org/plugins/wp-web-maps/
Contributors: pjhooker
Donate link: https://www.paypal.me/pjhooker
Tags: leafletjs, gis, qgis, map, mobile, javascript, openstreetmap, interactive
Requires at least: 4.6
Tested up to: 5.4.2
Stable tag: 0.2.2
Requires PHP: 5.6
License: GPLv2
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A plugin for creating a interactive Leaflet JS map with a shortcode.

== Description ==

Leaflet Map is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Leaflet Map is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Leaflet Map.

Add a map generated with [LeafletJS](http://leafletjs.com/): an open-source JavaScript library for mobile-friendly interactive maps. Map tiles are provided by default through [GoogleMaps](https://www.google.com/maps).

= Maps =

Simply create a **map** with:

`[webmap]` or `[webmap  wpwebmapsID="9482"]`

= Developers and curious =

* [Nightly version of plugin](https://github.com/pjhooker/wp-web-maps)

= Links =

* [GitHub repositories](https://github.com/pjhooker/wp-web-maps)
* [Documentation](https://www.notion.so/cityplanner/WP-Web-Maps-7903b5e4997f4423a0dd288731cca266)
* [Video tutorial](https://www.youtube.com/playlist?list=PLc5INoe6kboZPWlcfJ2DCCkLvHI3YvqW5)
* [Direct free support](https://t.me/pjhooker)
* [History](https://github.com/pjhooker/wp-web-maps/commits/master)
* [Test examples](https://codepen.io/collection/DaQGVe)

= More =
In the sidebar of Admin dashboard you can see a new posts type menu called Web Maps.

Here you can add all maps that you want.

In this Web Maps post type, there is a custom field, where you can place a custom JS code like these examples [WpWebMaps example code](https://github.com/pjhooker/wp-web-maps/tree/master/example).

For insert any Web Maps in your post, you can add shortcode like this `[webmap  wpwebmapsID="9482"]`, where the number 9482 is the id of custom post.

== Installation ==

1. Choose to add a new plugin, then click upload
2. Upload the wp-web-maps zip
3. Activate the plugin through the 'Plugins' menu in WordPress
4. Use the shortcodes in your pages or posts: e.g. `[webmap]`

-or. 

Download and install the .zip file in the Wordpress plugin page of your website

-or-

1. Unzip and upload the `mobile-blocks` directory into the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Done!

== Frequently Asked Questions == 

= Whoa, what's with all these plugins? =
The principle behind this plugin is to insert map in your posts and learn how code works.

= Can I customize the map? =
The map is almost completely customizable; with the examples I post in [GitHub](https://github.com/pjhooker/wp-web-maps/tree/master/example), 
it will be easy to understand how the code works and how to quickly change the code.

== Screenshots ==

1. Simple example.
2. Settings page.
3. Custom post type for code.
4. Custom post type example Javascript.
5. Custom post type example GeoJSON.
6. Put the shortcode into the post.
7. Simple example version 0.2.2
8. Mobile ready!

== Changelog ==

= 0.2.2 =
* fix function name;

= 0.2.1 =
* add JS and CSS vendors with version in file name;
* Add CPType and Custom Field;
* Insert jQuery if don't exist;
* Add library JS and CSS with version; add base_leaflet JS for codepen;add readme for example;
* Add Geojson category; add template for geojson category;
* Fix Error :Request header field Content-Type is not allowed by Access-Control-Allow-Headers;
* Create example003.js - Simple load Geojson from WP (003);

= 0.2.0 =
* add CPType Web Maps;
* add custom field for insert JS code;
* add attributes to shortcode for get custom JS code form single Web Map;
* update readme;

= 0.1.4 =
* initial Version;
* basic map creation and marker creation;

== Upgrade Notice ==
Not available at the moment.

== Do you want a customized plugin? Contact me ==
Here's a link [Telegram DM](https://t.me/pjhooker).
If you want a customized plugin, just contact me.
