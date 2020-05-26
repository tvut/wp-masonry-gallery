<?php
/**
 * Simple Masonry Gallery
 *
 * @package    Simple Masonry Gallery
 * @subpackage SimpleMasonry Main Functions
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

$simplemasonry = new SimpleMasonry();

/** ==================================================
 * Main Functions
 */
class SimpleMasonry {


	/** ==================================================
	 * Construct
	 *
	 * @since 6.06
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'simplemasonrygallery_block_init' ) );
	}

	/** ==================================================
	 * Attribute block
	 *
	 * @since 1.00
	 */
	public function simplemasonrygallery_block_init() {

		$asset_file = include( plugin_dir_path( __DIR__ ) . 'block/dist/simplemasonrygallery-block.asset.php' );

		wp_register_script(
			'simplemasonrygallery-block',
			plugins_url( 'block/dist/simplemasonrygallery-block.js', dirname( __FILE__ ) ),
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);

		wp_localize_script(
			'simplemasonrygallery-block',
			'simplemasonrygallery_text',
			array(
				'creategallery' => __( 'Create Gallery' ),
				'updategallery' => __( 'Update gallery' ),
				'space' => __( 'Space', 'simple-masonry-gallery' ),
				'r_images' => __( 'Rounded Images', 'simple-masonry-gallery' ),
				'link' => __( 'Link to Media File' ),
				'width' => __( 'Width' ),
			)
		);

		register_block_type(
			'simple-masonry-gallery/simplemasonrygallery-block',
			array(
				'editor_script'   => 'simplemasonrygallery-block',
				'attributes'      => array(
					'width'    => array(
						'type'    => 'range',
						'default' => 100,
					),
					'padding'  => array(
						'type'    => 'range',
						'default' => 1,
					),
					'r_images' => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'link'     => array(
						'type'    => 'boolean',
						'default' => false,
					),
				),
			)
		);
	}
}


