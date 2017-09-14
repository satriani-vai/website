odoo.define('website_version_ce.tour', function (require) {
'use strict';

var core = require('web.core');
var Tour = require('web_tour.tour');
var base = require('web_editor.base');

var _t = core._t;

Tour.register(
        'versioning',
        {
            url: '/',
            wait_for: base.ready(),
        },[
        //1.

        {
            content: _t("Click on <b>Version</b> to manage versions of your website."),
            position: "bottom",
            trigger:   'a#version-menu-button',
        },
        {
            content: _t("Click on <b>New version</b> to create a new version for a page of your website."),
            position: "bottom",
            trigger:   'a[data-action="duplicate_version"]:first',
        },
        {
            content:   _t("Give a clever name to retrieve it easily."),
            position: "bottom",
            trigger:   'input.o_version_name[type="text"]',
        },
        {
            content:     _t("Validate the version name"),
            position: 'right',
            trigger:   'button.btn-primary.o_create',
        },
        {
            content:     _t("Confirm"),
            position: 'right',
            trigger:   'button.o_confirm',
        },
//        {
//            title:     _t("You are on your new version"),
//            content:   _t("All the modifications you will do, will be saved in this version."),
//            waitNot:   '.modal button.o_confirm',
//        },
//        {
//            snippet:   '#snippet_structure .oe_snippet:first',
//            placement: 'bottom',
//            title:     _t("Drag & Drop a Banner"),
//            content:   _t("Drag the Banner block and drop it in your page."),
//            popover:   { fixed: true },
//        },
//        {
//            waitFor:   '.oe_overlay_options .oe_options:visible',
//            element:   '#wrapwrap .carousel:first div.carousel-content',
//            placement: 'top',
//            title:     _t("Customize banner's text"),
//            content:   _t("Click in the text and start editing it."),
//            sampleText: 'Here, a customized text',
//        },
//        {
//            waitNot:   '#wrap .carousel:first div.carousel-content:has(h2:'+
//                'containsExact('+_t('Your Banner Title')+')):has(h3:'+
//                'containsExact('+_t('Click to customize this text')+'))',
//            element:   '.oe_snippet_parent:visible',
//            placement: 'bottom',
//            title:     _t("Get banner properties"),
//            content:   _t("Select the parent container to get the global options of the banner."),
//            popover:   { fixed: true },
//        },
//        {
//            element:   '.oe_overlay_options .oe_options:visible',
//            placement: 'left',
//            title:     _t("Customize the banner"),
//            content:   _t("Customize any block through this menu. Try to change the background of the banner."),
//            popover:   { next: _t("Continue") },
//        },
//        {
//            snippet:   '#snippet_structure .oe_snippet:eq(7)',
//            placement: 'bottom',
//            title:     _t("Drag & Drop This Block"),
//            content:   _t("Drag the <em>'Features'</em> block and drop it below the banner."),
//            popover:   { fixed: true },
//        },
//        {
//            waitFor:   '.oe_overlay_options .oe_options:visible',
//            element:   'button[data-action=save]',
//            placement: 'right',
//            title:     _t("Save your modifications"),
//            content:   _t("Publish your page by clicking on the <em>'Save'</em> button."),
//            popover:   { fixed: true },
//        },
//        {
//            waitNot:   'button[data-action=save]:visible',
//            title:     _t("Good Job!"),
//            content:   _t("Well done, you created a version of your homepage."),
//            popover:   { next: _t("Continue") },
//        },
//
//        //2.
//
//        {
//            title:     _t("Publish the version"),
//            content:   _t("Now we will publish your version in production."),
//            popover:   { next: _t("Start Tutorial"), end: _t("Skip It") },
//        },
//
//        {
//            title:     _t("Click on Version"),
//            element:   'a#version-menu-button',
//            popover:   { fixed: true },
//        },
//
//        {
//            title:     _t("Click on Publish Version"),
//            placement: 'left',
//            element:   'a[data-action="publish_version"]:first',
//            popover:   { fixed: true },
//        },
//
//        {
//            title:     _t("Click on Publish button"),
//            element:   '.modal button.o_confirm',
//            placement: 'right',
//        },
//
//        {
//            title:     _t("Confirm"),
//            placement: 'right',
//            element:   '.modal button.o_confirm[data-dismiss]',
//            popover:   { fixed: true },
//        },
//
//
//        //3.
//        {
//            title:     _t("Delete the version"),
//            content:   _t("Now we will delete the version you have just published."),
//            waitNot:   '.modal button.o_confirm[data-dismiss]',
//            popover:   { next: _t("Start Tutorial"), end: _t("Skip It") },
//        },
//
//        {
//            title:     _t("Click on Version"),
//            element:   'a#version-menu-button',
//            popover:   { fixed: true },
//        },
//
//        {
//            title:     _t("Delete Version Test"),
//            element:   'li > a[data-action="delete_version"]:last',
//            popover:   { fixed: true },
//        },
//
//        {
//            title:     _t("Click on delete version button"),
//            placement: 'right',
//            element:   '.modal:has(.cancel) button.o_confirm',
//            popover:   { fixed: true },
//        },
//
//        {
//            title:     _t("Confirm"),
//            placement: 'right',
//            element:   '.modal:not(:has(.cancel)) button.o_confirm[data-dismiss]',
//            popover:   { fixed: true },
//        },
//
//        {
//            title:     _t("Finish"),
//            content:   _t("Felicitation, now you are able to edit and manage your versions."),
//            waitNot:   '.modal button.o_confirm[data-dismiss]',
//        },

    ]
);

});
