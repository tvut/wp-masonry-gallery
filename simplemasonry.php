<?php
/**
 * Plugin Name: Simple Masonry Gallery
 * Plugin URI:  https://wordpress.org/plugins/simple-masonry-gallery/
 * Description: Creates a masonry gallery. Outputs static html. Uses medium size thumbnails. Defaults to 380px width, 10px padding and links enabled (to work with lightbox).
 * Version:     0.01
 * Author:      Modified by Tristan
 * Author URI:  https://riverforest-wp.info/
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: simple-masonry-gallery
 *
 * @package Simple Masonry Gallery
 */

/*
	Copyright (c) 2014- Katsushi Kawamori (email : dodesyoswift312@gmail.com)
	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation; version 2 of the License.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */

add_action( 'plugins_loaded', 'simple_masonry_gallery_load_textdomain' );
/** ==================================================
 * i18n
 *
 * @since 1.00
 */
function simple_masonry_gallery_load_textdomain() {
	load_plugin_textdomain( 'simple-masonry-gallery' );
}
if ( ! class_exists( 'SimpleMasonry' ) ) {
	require_once( dirname( __FILE__ ) . '/lib/class-simplemasonry.php' );
}


