# wp-masonry-gallery

Based on [this](https://wordpress.org/plugins/simple-masonry-gallery/) plugin.

Adds a gallery type to the gutenberg editor that lets you create masonry galleries. Set up with my settings (380px column width, 10px padding and links to media files to use with a lightbox plugin).

Uses ````srcset```` with the thumbnail, medium, large and full image sizes in order to server images that are better for your screen resolution. For some reason wordpress kept inputting the incorrect large image width so that is hardcoded.
