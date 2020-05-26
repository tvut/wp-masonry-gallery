!function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }

    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function (t) {
            return e[t]
        }.bind(null, a));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 1)
}([function (e, t) {
    !function () {
        e.exports = this.wp.element
    }()
}, function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(0), a = wp.blocks.registerBlockType, l = wp.element, i = l.Fragment, u = l.RawHTML, o = wp.blockEditor,
        s = o.InspectorControls, c = (o.InnerBlocks, o.MediaUpload), m = o.MediaUploadCheck, b = wp.components,
        d = b.RangeControl, p = b.Button, g = (b.PanelBody, b.ToggleControl);
    a("simple-masonry-gallery/simplemasonrygallery-block", {
        title: "Simple Masonry Gallery",
        icon: "images-alt",
        category: "common",
        attributes: {
            list_images: {type: "string", source: "html"},
            image: {type: "array"},
            images_ids: {type: "array"},
            width: {type: "number", default: 380},
            padding: {type: "number", default: 10},
            r_images: {type: "number", default: 0},
            link: {type: "boolean", default: 1}
        },
        edit: function (e) {
            e.attributes.image;
            var t = e.setAttributes;

            function r(e, t) {
                var r = [];
                for (var n in e) r.push(e[n].id);
                return r
            }

            function a(e, t) {
                var r = '<div style="columns: auto ' + t.attributes.width + 'px; column-gap: 0; margin: 0 auto; padding: 0;">';
                for (var n in e) r += '<div style="display: inline-block; padding: ' + t.attributes.padding + 'px; width: 100%;">', t.attributes.link && (r += '<a href="' + e[n].url + '">'), r += '<img srcset="' + e[n].sizes.thumbnail.url + ' ' + e[n].sizes.thumbnail.width + 'w,' + e[n].sizes.medium.url + ' ' + e[n].sizes.medium.width + 'w, ' + e[n].sizes.large.url + ' 1250w, ' + e[n].sizes.full.url + ' ' + e[n].sizes.full.width + 'w" src="' + e[n].sizes.medium.url + '" sizes="(max-width: 28rem) 400px, (min-width: 68.75rem) 550px, 650px" style="border-radius: ' + t.attributes.r_images + 'px; vertical-align: bottom;">', t.attributes.link && (r += "</a>"), r += "</div>";
                return r += "</div>"
            }

            e.attributes.list_images = a(e.attributes.image, e);
            return [Object(n.createElement)(i, null, Object(n.createElement)(u, null, e.attributes.list_images), Object(n.createElement)(m, null, Object(n.createElement)(c, {
                title: "Simple Masonry Gallery Block",
                onSelect: function (n) {
                    t({image: n, images_ids: r(n, e), list_images: a(n, e)})
                },
                allowedTypes: ["image"],
                gallery: !0,
                multiple: !0,
                value: e.attributes.images_ids,
                render: function (t) {
                    var r = t.open;
                    return Object(n.createElement)(p, {
                        className: "button button-large",
                        onClick: r
                    }, e.attributes.images_ids ? simplemasonrygallery_text.updategallery : simplemasonrygallery_text.creategallery)
                }
            })), Object(n.createElement)(s, null, Object(n.createElement)(d, {
                label: simplemasonrygallery_text.width,
                max: 1e3,
                min: 10,
                value: e.attributes.width,
                onChange: function (t) {
                    return e.setAttributes({width: t})
                }
            }), Object(n.createElement)(d, {
                label: simplemasonrygallery_text.space,
                max: 20,
                min: 0,
                value: e.attributes.padding,
                onChange: function (t) {
                    return e.setAttributes({padding: t})
                }
            }), Object(n.createElement)(d, {
                label: simplemasonrygallery_text.r_images,
                max: 20,
                min: 0,
                value: e.attributes.r_images,
                onChange: function (t) {
                    return e.setAttributes({r_images: t})
                }
            }), Object(n.createElement)(g, {
                label: simplemasonrygallery_text.link,
                checked: e.attributes.link,
                onChange: function (t) {
                    return e.setAttributes({link: t})
                }
            })))]
        },
        save: function (e) {
            return Object(n.createElement)(i, null, e.attributes.list_images && Object(n.createElement)(u, null, e.attributes.list_images))
        }
    })
}]);