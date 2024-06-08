'use strict';

const LOUVER_CACHE = 'louver-pwa'

const ASSETS = [
    '/',
    '/index.html',
    '/bezier-easing.js',
    '/color.js',
    '/document.css',
    '/document.js',
    '/icon.jpg',
    '/images/asuka-11.jpg',
    '/images/asuka-8.jpg',
    '/images/asuka.jpg',
    '/logo-loading.svg',
    '/louvre.js',
    '/lyric.js',
    '/manifest.json',
    '/one-last-image-logo2.png',
    '/one-last-image-sans.svg',
    '/one-last-kiss.lrc',
    '/pencil-texture.jpg',
    '/ui-switch.vue.js',
    '/ui-tabs.vue.js',
    '/vue.2.6.11.min.js'
]

self.addEventListener('install', (installEvent /** @type {ExtendableEvent} */) => {
    installEvent.waitUntil(
        caches.open(LOUVER_CACHE).then(cache => {
            cache.addAll(ASSETS)
        })
    )
})

self.addEventListener('fetch', (fetchEvent /** @type {FetchEvent} */) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})